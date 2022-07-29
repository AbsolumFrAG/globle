import { LanguageName } from "../lib/country";
import { Locale } from "../lib/locale";
import { English } from "./messages/en-CA";
import { French } from "./messages/fr-FR";

export const LOCALES = {
  English: English,
  French: French,
};

export const langNameMap: Record<Locale, LanguageName> = {
  "en-CA": "NAME_EN",
  "fr-FR": "NAME_FR",
};