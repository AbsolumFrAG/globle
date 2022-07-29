import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { getPath } from "../util/svg";

import { FormattedMessage } from "react-intl";

export default function Footer() {
    const iconWidth = 14;
    const { nightMode } = useContext(ThemeContext).theme;

    return (
        <footer className="pt-8 pb-4 text-xs flex items-end justify-between w-full">
            <span className="max-w-[40%] space-x-1">
                <a href="https://lou-tigroudja.com">
                    <FormattedMessage id="Footer1" />
                </a>
                <a
                    href="https://twitter.com/Absolum_FrAGV2"
                    aria-label="Twitter"
                    className="inline"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={iconWidth}
                        viewBox="0 0 24 24"
                        fill={nightMode ? "rgb(209 213 219)" : "rgb(17 24 39)"}
                        className="inline"
                    >
                        <path d={getPath("twitter")} />
                    </svg>
                </a>
                <a
                    href="https://github.com/AbsolumFrAG"
                    aria-label="Github"
                    className="inline"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={iconWidth}
                        viewBox="0 0 24 24"
                        fill={nightMode ? "rgb(209 213 219)" : "rgb(17 24 39)"}
                        className="inline"
                    >
                        <path d={getPath("github")} />
                    </svg>
                </a>
            </span>
        </footer>
    );
}