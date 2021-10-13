/**
 * Capitalize first character
 * @param {string} str
 * @returns {string}
 */
export const capitalizeFirstLetter = (str: string) => {
  if (!str || str.length === 0) {
    return str;
  }

  return str[0].toUpperCase() + str.substring(1);
};
