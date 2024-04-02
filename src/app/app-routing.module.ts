import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component';
import { ListMarqueComponent } from './list-marque/list-marque.component';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { ListCategorieComponent } from './list-categorie/list-categorie.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';
import { AddMarqueComponent } from './add-marque/add-marque.component';

const routes: Routes = [
  {path:"user",component:ListUserComponent},
  {path:"marque",component:ListMarqueComponent},
  {path:"produit",component:ListProduitComponent},
  {path:"categorie",component:ListCategorieComponent},
  {path:"updateUser/:id",component:AddUserComponent},
  { path:"addUser", component:AddUserComponent},
  {path:"updateCategorie/:id",component:AddCategorieComponent},
  { path:"addCategorie", component:AddCategorieComponent},
  {path:"updateMarque/:id",component:AddMarqueComponent},
  { path:"addMarque", component:AddMarqueComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
