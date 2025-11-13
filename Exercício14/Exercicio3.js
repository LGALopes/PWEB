let soma = 0;

for(let i = 2; i <= process.argv.lenght - 1; i++){
    soma = soma + Number(process.argv[i]);
}
console.log("soma = " + soma);
