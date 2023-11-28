export const validate = (tagsList, etiqueta) => {
  return tagsList.some((e) => e.name == etiqueta);
};


