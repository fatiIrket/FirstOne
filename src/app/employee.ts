export class Employee {
  id: number;
  name: string;
  status: string;

  constructor(id: number, nom: string, status: string) {
    this.id = id;
    this.name = nom;
    this.status = status;
  }
}
