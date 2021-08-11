// Boolean
const contaPaga: boolean = false;

// Number
const idade: number = 30;
const avaliacao: number = 4.5;

// String
const nome: string = "Bruno Ramos";

// Array
const idades: number[] = [23, 28, 45, 32, 45];
const idades2: Array<number> = [10, 13, 18];

// Tuple
let jogadores: [string, string, string, number ];
jogadores = ["Bruno", "Fulano", "Ciclano", 5];

// Enum
enum StatusAprovacao {
    Aprovado = "001",
    Pendente = "002",
    Rejeitado = "003"
}

const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;
console.log(StatusAprovacao);

// Any
const retornoDaAPI: any[] = [123, "Bruno", false];

