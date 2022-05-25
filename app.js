/// ÖDEV1:
// fiyatlar dizisinde her bir fiyata %10 zam yapalım. NOT: FOREACH kullanılmalı ve orjinal dizi değiştirilmeli.

// Solution1
// const fiyatlar = [100, 250, 50, 89];
// fiyatlar.forEach((v,i,arr) => 
//      arr[i] = v*1.1
// );
// function muaz(v,i,arr) {
//    return arr[i] = v*1.1

// console.log(fiyatlar)

// fiyatlar.forEach((v) => console.log(v*1.1))
// console.log(x)

// ÖDEV2:
// fiyatlar dizisindeki fiyatı 90'dan büyük olan değerleri konsola tek tek bastırınız.

// let y =fiyatlar.filter((v) => v > 90).forEach((v) => v)
// console.log(y)

// fiyatlar.forEach((a) => {
//     if (a > 90) {
//         console.log(a)
//     }
// })

// fiyatlar.forEach((v) => v>90 && console.log(v));

// ÖDEV3:
// fiyatlar dizisindeki fiyatı 110'dan küçük olan değerlere %10 artış yapın ve bu değerleri konsola tek tek bastırınız.

// const fiyatlar = [100, 250, 50, 89];

// let x = fiyatlar.filter((number) => (number < 110));
// let y = x.map((value) => (value + (value * 0.1)));

// const artis = fiyatlar
//   .filter((f) => f < 110)
//   .map((f) => f * 1.1)
//   .forEach((f) => console.log(f.toFixed()));

// console.log(y)

// ÖDEV4:
// maaslar dizisinde 4000'den düsük olan maaslara %50 zam yapmak istiyoruz ve bunu ayri dizi olarak saklamak istiyoruz.

// const maaslar = [3000, 5000, 4000, 6000, 6500];

// const newar = maaslar.filter((deger) => deger <= 4000).map((deger) => (deger + deger*0.5));

// console.log(newar);


// ÖDEV5:
// Maasi 4000 'den büyük olanlara %25 zam yaparak sonuçlari konsolda yazdiralim.

// const newlist = maaslar.filter((maas) => maas>4000).map((maas) => maas*1.25);
// console.log(newlist);

// ÖDEV6:
// Maaslarin toplamini hem forEach ile hem de reduce methodu ile çözünüz.
    
// let sum = maaslar.reduce((total, value) => total + value);
// console.log(sum);

// let toplammaas = 0;
// maaslar.forEach((maas) => toplammaas += maas);
// console.log(`Toplam maas: ${toplammaas}`);