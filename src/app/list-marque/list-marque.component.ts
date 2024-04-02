import { Component, OnInit } from '@angular/core';
import { MarqueService } from '../service/marque.service';
import { Marque } from '../model/marque';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-marque',
  templateUrl: './list-marque.component.html',
  styleUrl: './list-marque.component.css'
})

export class ListMarqueComponent implements OnInit {

  marques :Marque[] = [];
  constructor(public marqueService:MarqueService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.marqueService.getAll().subscribe(
      (data)=>{
          this.marques = data;
          console.log(this.marques)
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  deleteMarque(id:any){

    Swal.fire({
      title: "Voulez vous supprimer cette ligne ?",
      showDenyButton: true,
      confirmButtonText: "Oui",
      denyButtonText: `Non`
    }).then((result) => {

      if (result.isConfirmed) {
        this.marqueService.deleteMarque(id).subscribe(
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
