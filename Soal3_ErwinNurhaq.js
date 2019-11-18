function cekkoin(koin) {
    const a = 25;                               //? koin 25 sen
    const b = 10;                               //? koin 10 sen
    const c = 5;                                //? koin 5 sen
    const d = 1;                                //? koin 1 sen
    let textA, textB, textC, textD;
    let sumKoin = 0;

    na = Math.floor(koin / a);                  //? Amount of 25
    nb = Math.floor((koin % a) / b);            //? Amount of 10
    nc = Math.floor(((koin % a) % b) / c);      //? Amount of 5
    nd = ((koin % a) % b) % c;                  //? Amount of 1

    na === 0 ? textA = "" : textA = `${na} koin 25 sen, `;
    nb === 0 ? textB = "" : textB = `${nb} koin 10 sen, `;
    nc === 0 ? textC = "" : textC = `${nc} koin 5 sen, `;
    nd === 0 ? textD = "" : textD = `${nd} koin 1 sen`;

    sumKoin = na + nb + nc + nd;                //? Sum koin

    return `Kamu butuh ${sumKoin} koin, yaitu ${textA}${textB}${textC}${textD}`;    //? Printout the converted
}

console.log(cekkoin(49));   //Kamu butuh 7 koin, yaitu 1 koin 25 sen, 2 koin 10 sen, 4 koin 1 sen
console.log(cekkoin(31));   //Kamu butuh 3 koin, yaitu 1 koin 25 sen, 1 koin 5 sen, 1 koin 1 sen
console.log(cekkoin(50));   //Kamu butuh 2 koin, yaitu 2 koin 25 sen,
console.log(cekkoin(11));   //Kamu butuh 2 koin, yaitu 1 koin 10 sen, 1 koin 1 sen