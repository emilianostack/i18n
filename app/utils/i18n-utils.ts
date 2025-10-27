export type Locale =
  | "pt"
  | "en"
  | "es"
  | "ru"
  | "it"
  | "fr"
  | "ja"
  | "ko"
  | "de"
  | "zh";

export const ingredients = [
  { nameKey: "farinha", amountKey: "duasXicaras" },
  { nameKey: "acucar", amountKey: "umaXicara" },
  { nameKey: "cenouras", amountKey: "tres" },
  { nameKey: "ovos", amountKey: "tres" },
  { nameKey: "oleo", amountKey: "meiaXicara" },
  { nameKey: "fermentoEmPo", amountKey: "umaColher" },
  { nameKey: "chocolateEmPo", amountKey: "quatroColheres" },
  { nameKey: "manteiga", amountKey: "umaColher" },
  { nameKey: "leiteCondesado", amountKey: "umaLata" },
  { nameKey: "leite", amountKey: "umQuartoXicara" },
];

export const instructions = [
  { titleKey: "prepareMassa", descriptionKey: "instrucao1" },
  { titleKey: "asseBolo", descriptionKey: "instrucao2" },
  { titleKey: "facaCobertura", descriptionKey: "instrucao3" },
  { titleKey: "finalize", descriptionKey: "instrucao4" },
];
