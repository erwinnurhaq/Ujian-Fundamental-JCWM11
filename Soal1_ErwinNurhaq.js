const lelang = a => {
    let price = 10000;                                  //? Initial Price
    let minutes = 0;                                    //? Initial Minutes
    for (let i = 1; i <= a; i++) {
        if (i % 4 !== 0) {                              //? every minutes except 4,8,12,... 
            price += Math.ceil(0.2 * price);
            minutes++
        } else {                                        //? every minutes 4,8,12,...
            price += Math.ceil(0.1 * price);
            minutes++
        }
    }
    return price > 30e6 ? `menit ke ${minutes} barang sudah terjual` : `menit ke ${minutes} hasilnya ${price}`;
}

console.log(lelang(2))  //menit ke 2 hasilnya 14400
console.log(lelang(50)) //menit ke 50 barang sudah terjual
console.log(lelang(49)) //menit ke 49 hasilnya 26697248