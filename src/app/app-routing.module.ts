import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProduitDetailComponent } from './produit-detail/produit-detail.component';
import { AlterProductComponent } from './alter-product/alter-product.component';


const routes: Routes = [
{path:"products",component:ListeProduitComponent},
{path:"accueil",component:AccueilComponent},
{path:"products/alter/:id",component:AlterProductComponent}, 
{path:"products/:id",component:ProduitDetailComponent}, 
{path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
