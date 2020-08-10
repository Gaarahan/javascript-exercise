export default function collectCarNumberCount(collection) {
  return collection.filter(itm => itm.startsWith('粤A')).length;
}
