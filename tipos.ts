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
};

const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;
console.log(StatusAprovacao);

// Any
const retornoDaAPI: any[] = [123, "Bruno", false];

// Void
function printarNaTela(msg: string): void {
    console.log(msg);
};

// Null e Undefined
const u: undefined = undefined;
const n: null = null;

// Object
function criar(objeto: object) {
    // ...
};

criar({
    propriedade: 1,
});
// criar("Bruno") --|-- Dá erro

// Never
function loopInfinito(): never {
    while(true) { };
};

function erro(mensagem: string): never {
    throw new Error(mensagem);
};

// O TS inferiru a função como never
function falha() {
    return erro("Algo falhou");
};

// Union types
function exibirNota(nota: number | string) {
    console.log(`A nota é ${nota}`);
};

exibirNota("10");

// Alias
type Funcionario = {
    nome: string;
    sobrenome: string;
    daNascimento: Date
};

// type Funcionarios = Array<Funcionario>;
const funcionarios: Array<Funcionario> = [{
    nome: "Bruno",
    sobrenome: "Ramos",
    daNascimento: new Date()
}, {
    nome: "Pedro",
    sobrenome: "Ramos",
    daNascimento: new Date()
}];

function tratarFuncionarios(funcionarios: Array<Funcionario>) {
    for(let funcionario of funcionarios) {
        console.log(`Nome do funcionário ${funcionario.nome}`)
    }
};

