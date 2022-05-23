export class Contato {

  public nome;
  public ru;
  public curso;
  public dnNascimento;

  constructor(nome: string, ru: number, curso: string, dnNascimento: string){
    this.nome = nome;
    this.ru = ru;
    this.curso = curso;
    this.dnNascimento = dnNascimento;
  }
}
