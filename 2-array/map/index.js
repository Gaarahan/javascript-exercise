export default function numberMapToWord(collection) {
  return collection.map(itm => String.fromCharCode(itm - 1 + 'a'.charCodeAt(0)));
}
