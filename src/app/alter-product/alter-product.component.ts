import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProduitC } from '../model/produitC';
import { ProduitsService } from '../produits.service';

@Component({
  selector: 'app-alter-product',
  templateUrl: './alter-product.component.html',
  styleUrls: ['./alter-product.component.css']
})
export class AlterProductComponent implements OnInit {
  p = new ProduitC
  Prod = new FormGroup({
  name : new FormControl(''),
  price : new FormControl(''),
  quantity : new FormControl(''),
  
  })
 

  onSubmit(){
    this.p.nom = this.Prod.get('name').value
    this.p.prix = this.Prod.get('price').value
    this.p.quantite = this.Prod.get('quantity').value
     this.service.addProduct(this.p).subscribe(data=>{}); 
    }

  constructor(private service:ProduitsService) { }

  ngOnInit() {
  }

}
