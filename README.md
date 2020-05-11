# Kompleksitas Algoritma
Menganalisa Kompleksitas Algoritma menggunakan Big-O Notation yang diterapkan menggunakan bahasa pemrograman Javascript.

# Big-O Notation
Notasi O besar (big-O notation) atau notasi Landau adalah notasi matematika yang digunakan terutama pada bidang ilmu komputer (computer science). Notasi ini digunakan untuk menyatakan keefektifan sebuah algoritme. Notasi ini bekerja dengan cara memperhitungkan input yang diberikan oleh user.<sup><a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=2&cad=rja&uact=8&ved=2ahUKEwjOwZLc3arpAhWRaCsKHYkCDl0QFjABegQICxAD&url=https%3A%2F%2Fid.wikipedia.org%2Fwiki%2FNotasi_O_besar&usg=AOvVaw3A-nn02bTX04IGbEDKmywQ">[1]</a></sup><br>
Ada beberapa Notasi yang digunakan untuk menghitung Big O Notation Time dan Space Complexity yaitu:
<ol>
  <li>Constant, f(n)=1</li>
  <li>Linear, f(n)=n</li>
  <li>Quadratic, f(n)=n²</li>
  <li>Logarithmic, f(n)=log n</li>
  <li>Factorial, f(n)=n!</li>
</ol>

<img src="https://assets.digitalocean.com/articles/alligator/js/big-o-notation/o-complexity.png" width="500">

## O(1)
Berapapun data yang akan diproses, waktu eksekusi yang dibutuhkan selalu sama. Operasi O(1) biasa disebut <i>single operation</i>. Digunakan misalnya untuk menambah item kedalam array, mengambil data dalam array pada index tertentu, menambah <i>child element</i> baru dan lain - lain. Waktu yang dibutuhkan tetap sama terlepas dari panjang suatu array atau data.<br>
```javascript
console.time("add new array on smallArr")
smallArr.push(27)
console.timeEnd("add new array on smallArr")
```
<img src="https://i.ibb.co/C2VLjjP/Screen-Shot-2020-05-11-at-10-58-26.png" width="400">

```javascript
console.time("add new array on bigArr")
bigArr.push(27)
console.timeEnd("add new array on bigArr")
```
<img src="https://i.ibb.co/9YXQhbG/Screen-Shot-2020-05-11-at-10-58-08.png" width="400">

## O(n)
Jumlah data yang akan diproses akan berpengaruh dengan waktu eksekusi. Jadi jika dalam array terdapat 100 kali lebih banyak dari data maka waktu yang dibutuhkan 100 kali lebih lama.
```javascript
console.time("perulangan pada smallArr")
smallArr.forEach(item => console.log(item));
console.timeEnd("perulangan pada smallArr")
```
<img src="https://i.ibb.co/SPH1W0M/Screen-Shot-2020-05-11-at-11-10-10.png" width="400">

```javascript
console.time("perulangan pada bigArr")
console.group("Item loop")
bigArr.forEach(item => 
        console.log(item)
    );
console.groupEnd()
console.timeEnd("perulangan pada bigArr")
```
<img src="https://i.ibb.co/zZF31wg/Screen-Shot-2020-05-11-at-11-21-30.png" width="400">

## O(n<sup>2</sup>)
Waktu eksekusi yang dibutuhkan adalah kuadrat dari jumlah data. Sebagai contoh, jika ingin mencari item yang sama pada array maka dilakukan perulangan bersarang. Sehingga 100 item pada array akan melakukan perulang sebanyak 10.000 kali.
```javascript
console.time("nested looping pada smallArr")
console.group("smallArr item loop")
smallArr.forEach(() => {
    arr2.forEach(item => console.log(item));
});
console.groupEnd()
console.timeEnd("nested looping pada smallArr")
```
<img src="https://i.ibb.co/R90wDbS/Screen-Shot-2020-05-11-at-11-29-17.png" width="400">

```javascript
console.time("nested looping pada bigArr")
console.group("bigArr item loop")
bigArr.forEach(() => {
    arr2.forEach(item => console.log(item));
});
console.groupEnd()
console.timeEnd("nested looping pada bigArr")
```
<img src="https://i.ibb.co/cJSZ6zj/Screen-Shot-2020-05-11-at-11-29-53.png" width="400">

## O(log n)
Sejauh ini metode logaritma merupakan yang paling baik. Dengan menggunakan '<i>divide-and-conquer</i>', jumlah waktu yang dibutuhkan untuk menemukan sebuah data akan berubah secara progresif pada bagian tertentu dengan menghiraukan bagian yang lain. Sebagai contoh pada program quicksort.
```javascript
const sort = arr => {
  if (arr.length < 2) return arr;

  let pivot = arr[0];
  let left = [];
  let right = [];

  for (let i = 1, total = arr.length; i < total; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  };
  return [
    ...sort(left),
    pivot,
    ...sort(right)
  ];
};
```
```javascript
console.time("sort pada smallArr")
sort(smallArr);
console.timeEnd("sort pada smallArr")
```
<img src="https://i.ibb.co/fHW2zY8/Screen-Shot-2020-05-11-at-11-32-58.png" width="400">

```javascript
console.time("sort pada bigArr")
sort(bigArr);
console.timeEnd("sort pada bigArr")
```
<img src="https://i.ibb.co/jfrgX7b/Screen-Shot-2020-05-11-at-11-33-03.png" width="400">

## O(n!)
Metode terburuk adalah menggunakan faktorial. Sebagai contoh dengan membuat fungsi faktorial. Fungsi ini akan mengalikan angka dengan fungsinya sendiri dengan minus satu. Setiap digit di faktorial, akan menjalankan fungsinya sendiri hingga mencapai 0, dengan setiap lapisan rekursif menambahkan angka ke variable asli. Jadi 3 dikalikan dengan 2 yang menjalankan fungsi dikalikan dengan 1 yang menjalankannya lagi untuk dihentikan pada 0, kemudian return 6.
```javascript
const factorial = n => {
  let num = n;

  if (n === 0) return 1
  for (let i = 0; i < n; i++) {
    num = n * factorial(n - 1);
  };

  return num;
};
```
```javascript
console.time("factorial 5")
factorial(5);
console.timeEnd("factorial 5")
```
<img src="https://i.ibb.co/bWXhpqV/Screen-Shot-2020-05-11-at-11-37-04.png" width="400">

```javascript
console.time("factorial 10")
factorial(10);
console.timeEnd("factorial 10")
```
<img src="https://i.ibb.co/MhQyHbC/Screen-Shot-2020-05-11-at-11-37-09.png" width="400">

```javascript
console.time("factorial 12")
factorial(12);
console.timeEnd("factorial 12")
```
<img src="https://i.ibb.co/J22mtRW/Screen-Shot-2020-05-11-at-11-37-14.png" width="400">
