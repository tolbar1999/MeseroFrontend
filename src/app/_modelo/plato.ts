export class Plato{

    public id : number;
    public nombre : string;
    public urlImagen : string;
    public precio : number;


    constructor(id: number, nombre: string, urlImagen: string, precio: number){

        this.id = id;  
        this.nombre = nombre;
        this.urlImagen = urlImagen;
        this.precio = precio;
    }
}