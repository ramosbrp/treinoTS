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

class Carro {

    private velocidadeAtual: number = 0;

    constructor (
        public marca: string,
        public modelo: string,
        private velocidadeMaxima: number = 220

        ) {}   
    
    private alterarVelocidade(delta: number) {
        const novaVelocidade = this.velocidadeAtual + delta
        
        // FAÇO AS VALIDAÇÕES DE ACELERAÇÃO E FRENAGEM
        // this.velocidadeAtual = xxx
        if (this.velocidadeAtual + delta <= this.velocidadeMaxima) {
           this.velocidadeAtual = novaVelocidade;
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
    }

    acelerar() {
        this.alterarVelocidade(5);
    }

    frear() {
        this.alterarVelocidade(-5);
    }
}
const carro = new Carro('Chevrolet', "Prisma");

carro.acelerar();

// Herança
class Camaro extends Carro {

    private turbo = false;

    constructor() {
        super("Chevrolet", "Camaro", 500);
    }
    
    ligarTurbo() {
        this.turbo = true;
    }

}

const camaro = new Camaro();
camaro.acelerar();
camaro.frear();
camaro.ligarTurbo();