import { Component, OnInit } from '@angular/core';
import { Categorie } from '../model/categorie';
import { NgForm } from '@angular/forms';
import { CategorieService } from '../service/categorie.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { error } from 'console';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrl: './add-categorie.component.css'
})

export class AddCategorieComponent implements OnInit {
  libelle :string ="";
  id = null;
  categorie : Categorie = new Categorie();
  constructor(public categorieService:CategorieService,
              public router : Router,
              public param: ActivatedRoute) { }

  ngOnInit(): void {

    this.id =this.param.snapshot.params['id'];
    if(this.id){

      this.getById(this.id);

    }

  }

  save(values:NgForm){

    if(this.id){
      //Update
      this.categorie.libelle = this.libelle;
      this.categorie.id = this.id;
      this.categorieService.updatCategorie(this.id,this.categorie).subscribe(
        (data)=>{
          console.log(data)
          this.router.navigateByUrl('/categorie')
        },
        (error)=>{
          console.log(error)
        }
      )
    }else{
      Swal.fire({
        title: "Voulez vous ajouter une ligne ?",
        showDenyButton: true,
        confirmButtonText: "Oui",
        denyButtonText: `Non`
      }).then((result) => {

        if (result.isConfirmed) {
          this.categorie.libelle = this.libelle;

          this.categorieService.addCategorie(this.categorie).subscribe(
            (data)=>{
                this.router.navigateByUrl('/categorie');
                console.log("Merci")
            },
            (error)=>{
              console.log(error)
            }
          )

        }
      });
    }

  }
  getById(id:any){
    this.categorieService.getById(id).subscribe(
      (data : Categorie)=>{
        console.log(data)
      },
      (error) =>{

      }
    )
  }

}
