# bima-function-js

### Function Improvements: Arrows dan Default Arguments

## Function 
Fungsi adalah salah satu bagian yang paling indah dari Javascript. Sebagai bahasa fungsional Javascript mengimplementasikan fungsi kelas pertama (first class function). Fungsi dapat disimpan dalam variabel, dikembalikan oleh fungsi lain, dan dikirimkan sebagai argumen untuk fungsi lainnya. Implementasi fungsi yang sangat fleksibel seperti ini membuka banyak kesempatan kepada pengembang untuk menuliskan kode yang bukan hanya berjalan dengan baik, tetapi juga sangat elegan dan indah.
dan sekarang sudah ada arrow function yang di dibawa oleh ES6

Perbedaan nya seperti di bawah ini :

```javascript
  //contoh 1
const func1 = function(a, b) {
  return a + b;
};
console.log(func1(3, 3)); //6

//contoh 2
const func2 = (a, b) => {
  return a + b;
};
console.log(func2(3, 3)); //6
```

 
