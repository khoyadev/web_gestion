import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUserComponent } from './list-user/list-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddMarqueComponent } from './add-marque/add-marque.component';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { ListCategorieComponent } from './list-categorie/list-categorie.component';
import { ListMarqueComponent } from './list-marque/list-marque.component';
import { MarquePipe } from './pipe/marque.pipe';
import { CategoriePipe } from './pipe/categorie.pipe';
import { ProduitPipe } from './pipe/produit.pipe';
import { UserPipe } from './pipe/user.pipe';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    AddUserComponent,
    AddMarqueComponent,
    AddCategorieComponent,
    AddProduitComponent,
    ListProduitComponent,
    ListCategorieComponent,
    ListMarqueComponent,
    MarquePipe,
    CategoriePipe,
    ProduitPipe,
    UserPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
