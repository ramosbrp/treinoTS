// class Data {
//     mes: number;
//     ano: number;
//     // Vai utilizar o valor 1970 como valor padrão
//     // Posso definir o public aqui e posso tirar lá de cima e o his também
//     constructor (public dia: number, mes: number, ano: number = 1970) {
//         this.mes = mes;
//         this.ano = ano;
//     }
// }
// const data = new Data(1, 1, 20201);
// console.log(data.dia);
// // Não funciona pois mês está como privado
// console.log(data.mes);
// const data2 = new Data(1,1);
var Carro = /** @class */ (function () {
    function Carro(marca, modelo, velocidadeMaxima) {
        if (velocidadeMaxima === void 0) { velocidadeMaxima = 220; }
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    Carro.prototype.alterarVelocidade = function (delta) {
        // FAÇO AS VALIDAÇÕES DE ACELERAÇÃO E FRENAGEM
        // this.velocidadeAtual = xxx
        if (this.velocidadeAtual + delta <= this.velocidadeMaxima) {
            return this.velocidadeAtual + delta;
         }
    };
    Carro.prototype.acelerar = function () {
        this.alterarVelocidade(5);
    };
    Carro.prototype.frear = function () {
        this.alterarVelocidade(-5);
    };
    return Carro;
}());
var carro = new Carro('Chevrolet', "Prisma");
var resultado = carro.acelerar();

console.log (resultado);