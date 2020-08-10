export default function numberMapToWord(collection) {
  // TODO 3: 在这里写实现代码
  return collection.map(itm => String.fromCharCode(itm - 1 + 'a'.charCodeAt(0)));
}
