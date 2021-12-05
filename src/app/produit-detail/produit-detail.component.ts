import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../model/produit';
import { ProduitsService } from '../produits.service';
@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.component.html',
  styleUrls: ['./produit-detail.component.css']
})
export class ProduitDetailComponent implements OnInit {
  id: number;
  produit:Produit; 

  //constructor(private ar:ActivatedRoute,private router:Router) { }
  constructor(private service:ProduitsService, private ar: ActivatedRoute,private router:Router){}
  ngOnInit() {
    //this.id=this.ar.snapshot.params.id; 
    //console.log(this.id); 
   //this.produit=this.products.find(x=>x.id==this.id); 

   let id:number
   this.ar.paramMap.subscribe((params)=>{
   id=+params.get('id')
   console.log(id+"enhrbehybry");

  this.service.getProductById(id).subscribe(data=>{
  this.produit=data; console.log(this.produit.nom+"enhrbehybry");
})
}); 
  }
  retour()
  {
    this.router.navigate(['/products']); 
  }

}
