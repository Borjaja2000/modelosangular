export class Producto {
    public nombre:String;
    public imagen:String;
    public precio:Number;

    constructor(nom,img,precio){
        this.nombre= nom;
        this.imagen= img;
        this.precio = precio;
    }
}