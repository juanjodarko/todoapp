export class Todo {
  id: number;
  texto: string;
  completed: boolean;

  constructor( texto: string ) {
    this.texto = texto.charAt(0).toUpperCase() + texto.slice(1);
    this.completed = false;
    this.id = Math.random();
  }
}
