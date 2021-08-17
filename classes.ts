class Data {
    mes: number;
    ano: number;

    // Vai utilizar o valor 1970 como valor padrão
    // Posso definir o public aqui e posso tirar lá de cima e o his também
    constructor (public dia: number, mes: number, ano: number = 1970) {
        this.mes = mes;
        this.ano = ano;
    }
}

const data = new Data(1, 1, 20201);
console.log(data.dia);

// Não funciona pois mês está como privado
console.log(data.mes);

const data2 = new Data(1,1);