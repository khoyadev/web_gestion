import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css'
})

export class ListUserComponent implements OnInit {

  users :User[] = [];
  constructor(public userService:UserService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.userService.getAll().subscribe(
      (data)=>{
          this.users = data;
          console.log(this.users)
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  deleteUser(id:any){

    Swal.fire({
      title: "Voulez vous supprimer cette ligne ?",
      showDenyButton: true,
      confirmButtonText: "Oui",
      denyButtonText: `Non`
    }).then((result) => {

      if (result.isConfirmed) {
        this.userService.deleteUser(id).subscribe(
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
