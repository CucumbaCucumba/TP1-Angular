export interface Produit {
    getProductById(id: number);
    getProducts();
    id:number;
    nom:string;
    prix:number;
    quantite:number;
    urlImg:string;
}
