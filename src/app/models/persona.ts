import { Provincia } from "./provincia";

export class Persona {
    id!: number;
    nombre!: string;
    apellido!: string;
    dni!: number;
    telefono!: string;
    idProvincia!: number;
    provincia?: Provincia;
}
