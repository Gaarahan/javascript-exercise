function chooseMultiplesOfThree(collection) {
  return collection.filter(itm => itm % 3 === 0);
}

function chooseNoRepeatNumber(collection) {
  return collection.filter((itm, index) => collection.lastIndexOf(itm) === index);
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
