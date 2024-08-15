console.log('oi');

// Tipando variáveis
let nome: string
let idade: number
let maiorIdade: boolean

// Atribuindo valores
nome = 'Ryan'
idade = 18
maiorIdade = true

// Tipando ARRAY
let lista: string[]
lista = ['Ryan']

let pessoa: [string, number, boolean]
pessoa = [nome, idade, maiorIdade]

// Tipando Objetos
let objeto: object

objeto = {
    nome: 'Ryan',
    idade: 18
}

let objeto2: Record<string, boolean>
let objeto3: {nome:string, idade:number}

// Tipando funções

const voidFun = () => {} // retorna void

const soma = (a:number, b:number): number => a + b

soma(1, 1)

// Union

let id: number | string // Ou número ou texto

// Type Alias

type Id = number | string

let id1: Id
let id2: Id
let id3: Id
let id4: Id

type Usuario = {nome: string; idade: number}
let user: Usuario

// Modo alternativo para tipagem de objetos

interface Pessoa {nome: string; idade: number}
let person: Pessoa

// Extendendo objeto

interface Aluno extends Pessoa {curso: string}
type Professor = Pessoa & {curso: string}

let aluno: Aluno

// Propriedades Opicionais

interface Cachorro {
    nome: string,
    dono?: string
}

let cachorro1: Cachorro
cachorro1 = {nome: 'Totó'}

let cachorro2: Cachorro
cachorro2 = {nome: 'Totózinho', dono: 'Zézinho'}

// Generics

type Profissional<T = Professor> = {
    nome: string,
    idade: number,
    profissao: T
}

interface Engenheiro {
    crea: string
}

interface Medico {
    crm: string
}

let medico: Profissional<Medico>
let engenheiro: Profissional<Engenheiro>
let professor: Profissional

type Lista2<T = string> = T[]
let lista2: Lista2<number>

