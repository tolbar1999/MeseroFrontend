import { Plato } from './plato';
import { Pedido } from './pedido';

export class Detalle{

    public id: number;
    public pedido: Pedido;
    public plato: Plato;
    public cantidad: number;

    public index: number;
}