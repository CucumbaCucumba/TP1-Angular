import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProduitsService } from '../produits.service';
import { Produit } from '../model/produit';
import { ProduitC } from '../model/produitC';


@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {


  ngOnInit() {
  }

}
