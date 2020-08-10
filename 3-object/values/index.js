export default function countTypesNumber(source) {
  return Object.values(source)
    .map(itm => Number(itm))
    .reduce((a, b) => a + b, 0);
}
