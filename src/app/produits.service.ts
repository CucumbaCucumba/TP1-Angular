import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from './model/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

host="http://localhost:8282/produits/"  
  constructor(private http:HttpClient) { }

  public getProducts():Observable<Produit[]>{
    return this.http.get<Produit[]>(this.host);
    }

    public getProductById(id:number):Observable<Produit>
    {
    return this.http.get<Produit>(this.host+id);
    }

    public addProduct(produit:Produit):Observable<void>
    {
     return this.http.post<void>(this.host,produit);
    }

    public alterProduct(produit:Produit):Observable<void>
    {
     return this.http.put<void>(this.host,produit);
    }

    public delProductById(id:number):Observable<void>
    {
     return this.http.delete<void>(this.host+id);
    }

}
