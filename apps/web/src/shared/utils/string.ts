export const toPascalCase = (str): string => {
  return str.replace(/(\w)(\w*)/g, function (g0, g1, g2) {
    return g1.toUpperCase() + g2.toLowerCase();
  });
};

export const sentenceToParscalCase = (sentence): string => {
  return sentence
    .split(" ")
    .map((word) => toPascalCase(word))
    .join(" ");
};

export const camelCaseToPascalCase = (camelCaseString): string => {
  return camelCaseString.charAt(0).toUpperCase() + camelCaseString.slice(1);
};

export const camelCaseToSentence = (camelCaseString): string => {
  return camelCaseString
    .replace(/([A-Z])/g, " $1")
    .toLowerCase()
    .trim();
};

export const snakeCaseToCamelCase = (snakeCaseString): string => {
  return snakeCaseString.replace(/([-_][a-z])/g, (group) =>
    group.toUpperCase().replace("-", "").replace("_", ""),
  );
};

export const camelCaseToSnakeCase = (camelCaseString): string => {
  return camelCaseString.replace(/([A-Z])/g, "_$1").toLowerCase();
};

export const snakeToSentence = (str: string): string => {
  if (str === null || str === undefined) return str;

  return str
    .replace(/_/g, " ")
    .toLowerCase()
    .replace(/^\w/, (c) => c.toUpperCase());
};
