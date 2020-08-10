export default function find00OldPerson(collection) {
  const CUR_YEAR = 2020;
  const MAX_AGE_OF_00_OLD = CUR_YEAR - 2000;
  const MIN_AGE_OF_00_OLD = CUR_YEAR - 2009;

  return collection.find(itm => itm.age < MAX_AGE_OF_00_OLD && itm.age > MIN_AGE_OF_00_OLD).name;
}
