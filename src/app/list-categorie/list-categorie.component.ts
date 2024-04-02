import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../service/categorie.service';
import { Categorie } from '../model/categorie';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-categorie',
  templateUrl: './list-categorie.component.html',
  styleUrl: './list-categorie.component.css'
})

export class ListCategorieComponent implements OnInit {

  categories :Categorie[] = [];
  constructor(public categorieService:CategorieService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.categorieService.getAll().subscribe(
      (data)=>{
          this.categories = data;
          console.log(this.categories)
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  deleteCategorie(id:any){

    Swal.fire({
      title: "Voulez vous supprimer cette ligne ?",
      showDenyButton: true,
      confirmButtonText: "Oui",
      denyButtonText: `Non`
    }).then((result) => {

      if (result.isConfirmed) {
        this.categorieService.deleteCategorie(id).subscribe(
          (data)=>{
              this.getAll();
              Swal.fire("Suppresion avec succes", "", "success");
              console.log(data)
          },
          (error)=>{
            console.log(error);
          }
        )

      }
    });


  }

}
