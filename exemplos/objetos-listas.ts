interface Pessoa{
    nome: string,
    idade: number,
    profissao?: Profissao
}

enum Profissao{
    Professora,
    Atriz,
    Desenvolvedora,
    Jogadora
}

interface Estudante extends Pessoa{
    materias: string[]
}


const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 27,
    profissao: Profissao.Desenvolvedora
}



const maria: Estudante = {
    nome: 'Maria',
    idade: 29,
    materias: ['Matematica', 'Programacao']    
}

function listar(lista: string[]){
    for (const item of lista){
        console.log('- ',item)
    }
}


listar(maria.materias)