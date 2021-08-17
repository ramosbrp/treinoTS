interface Usuario {
    nome: string;
    email: string;
    // ? Significa opcional
    address?: string;
}

function getUser(): Usuario {
    return {
        nome: "Bruno",
        email: "bruno.rp45@gmail.com"
    }
}

function setUser(usuario: Usuario) {
    // ...
}