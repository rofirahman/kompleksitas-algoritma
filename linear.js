const smallArr = [5, 3, 2, 35, 2];
const bigArr = [5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2, 5, 3, 2, 35, 2];


console.time("perulangan pada smallArr")
smallArr.forEach(item => console.log(item));
console.timeEnd("perulangan pada smallArr")


console.time("perulangan pada bigArr")
console.group("Item loop")
bigArr.forEach(item =>
        console.log(item)
    );
console.groupEnd()
console.timeEnd("perulangan pada bigArr")