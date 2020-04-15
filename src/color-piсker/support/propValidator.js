import dictionary from "./colorDictionary.js";

export const propValidatorByDictionary = elem => {
  return dictionary[elem] ? true : false;
};
