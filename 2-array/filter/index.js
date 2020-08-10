function chooseMultiplesOfThree(collection) {
  // TODO 1: 在这里写实现代码
  return collection.filter(itm => itm % 3 === 0);
}

function chooseNoRepeatNumber(collection) {
  // TODO 2: 在这里写实现代码
  return collection.filter((itm, index) => collection.lastIndexOf(itm) === index);
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
