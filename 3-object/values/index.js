export default function countTypesNumber(source) {
  // TODO 6: 在这里写实现代码
  return Object.values(source)
    .map(itm => Number(itm))
    .reduce((a, b) => a + b, 0);
}
