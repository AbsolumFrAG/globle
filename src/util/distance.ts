import * as geometry from "spherical-geometry-js";
import { Country } from "../lib/country";

function pointToCoordinates(point: Array<number>) {
    const [lng, lat] = point;
    const coord = new geometry.LatLng(lat, lng);
    return coord;
}

function polygonPoints(country: Country) {
    const { geometry } = country;
    switch (geometry.type) {
        case "Polygon":
            return geometry.coordinates[0];
        case "MultiPolygon":
            let points: number[][] = [];
            for (const polygon of geometry.coordinates) {
                points = [...points, ...polygon[0]];
            }
            return points;
        default:
            throw new Error("Country data error");
    }
}

function calcProximity(points1: number[][], points2: number[][]) {
    const EARTH_CIRCUMFERENCE = 40_075_000;
    let distance = EARTH_CIRCUMFERENCE / 2;
    for (let i = 0; i < points1.length; i++) {
        const point1 = points1[i];
        const coord1 = pointToCoordinates(point1);
        for (let j = 0; j < points2.length; j++) {
            const point2 = points2[j];
            const coord2 = pointToCoordinates(point2);
            const pointDistance = geometry.computeDistanceBetween(coord1, coord2);
            distance = Math.min(distance, pointDistance);
        }
    }
    return distance;
}

export function polygonDistance(country1: Country, country2: Country) {
    const name1 = country1.properties.NAME;
    const name2 = country2.properties.NAME;
    if (name1 === "South Africa" && name2 === "Lesotho") return 0;
    if (name1 === "Lesotho" && name2 === "South Africa") return 0;
    if (name1 === "Italy" && name2 === "Vatican") return 0;
    if (name1 === "Vatican" && name2 === "Italy") return 0;
    if (name1 === "Italy" && name2 === "San Marino") return 0;
    if (name1 === "San Marino" && name2 === "Italy") return 0;
    const points1 = polygonPoints(country1);
    const points2 = polygonPoints(country2);
    return calcProximity(points1, points2);
}