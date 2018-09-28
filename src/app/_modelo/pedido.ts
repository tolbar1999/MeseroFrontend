import { Detalle } from './detalle';
import { Cliente } from './cliente';
export class Pedido{

    public id: number;
    public fecha: Date;
    public total: number;
    public cliente: Cliente;
    public listaDetalle: Detalle[];

}