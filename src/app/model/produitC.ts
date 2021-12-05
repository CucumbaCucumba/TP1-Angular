import { Produit } from "./produit";

export class ProduitC implements Produit{
    constructor() {
        
    }
    getProductById(id: number) {
        throw new Error("Method not implemented.");
    }
    getProducts() {
        throw new Error("Method not implemented.");
    }
    id: number;
    nom: string;
    prix: number;
    quantite: number;
    urlImg: string;
}