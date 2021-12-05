import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { AccueilComponent } from './accueil/accueil.component';
import { ProduitDetailComponent } from './produit-detail/produit-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule}  from'@angular/common/http';
import { FormControlComponent } from './form-control/form-control.component';
import { AlterProductComponent } from './alter-product/alter-product.component';

  
@NgModule({
  declarations: [
    AppComponent,
    ListeProduitComponent,
    AccueilComponent,
    ProduitDetailComponent,
    PageNotFoundComponent,
    FormControlComponent,
    AlterProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
