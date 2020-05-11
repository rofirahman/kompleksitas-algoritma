const smallArr = [5, 3, 2, 35, 2];
const bigArr = [5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2];
const arr2 = [10, 23, 33, 43, 53]

console.time("nested looping pada smallArr")
console.group("smallArr item loop")
smallArr.forEach(() => {
    arr2.forEach(item => console.log(item));
});
console.groupEnd()
console.timeEnd("nested looping pada smallArr")


console.time("nested looping pada bigArr")
console.group("bigArr item loop")
bigArr.forEach(() => {
    arr2.forEach(item => console.log(item));
});
console.groupEnd()
console.timeEnd("nested looping pada bigArr")