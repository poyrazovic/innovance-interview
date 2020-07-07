export const hexToRgb = hex => {
  let HEX = hex;
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  HEX = HEX.replace(shorthandRegex, (m, r, g, b) => {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(HEX);
  return result
    ? `${parseInt(result[1], 16)},
      ${parseInt(result[2], 16)},
      ${parseInt(result[3], 16)}`
    : null;
};