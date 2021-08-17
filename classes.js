// class Data {
//     mes: number;
//     ano: number;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
            var novaVelocidade = this.velocidadeAtual + delta;

            return this.velocidadeAtual = novaVelocidade;
            
        }
        else {
            return this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
    };
    Carro.prototype.acelerar = function () {
        
        console.log(this.alterarVelocidade(5))
    };
    Carro.prototype.frear = function () {
        this.alterarVelocidade(-5);
    };
    return Carro;
}());
var carro = new Carro('Chevrolet', "Prisma");

carro.acelerar()
carro.acelerar()
carro.acelerar()