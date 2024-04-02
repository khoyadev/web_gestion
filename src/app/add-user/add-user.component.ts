import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { NgForm } from '@angular/forms';
import { UserService } from '../service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { error } from 'console';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})

export class AddUserComponent implements OnInit {
  nom :string ="";
  prenom :string ="";
  age :number = 0;
  id = null;
  user : User = new User();
  constructor(public userService:UserService,
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
      this.user.nom = this.nom;
      this.user.prenom = this.prenom;
      this.user.age = this.age;
      this.user.id = this.id;
      this.userService.updatUser(this.id,this.user).subscribe(
        (data)=>{
          console.log(data)
          this.router.navigateByUrl('/user')
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
          this.user.nom = this.nom;
          this.user.prenom = this.prenom;
          this.user.age = this.age;

          this.userService.addUser(this.user).subscribe(
            (data)=>{
                this.router.navigateByUrl('/user');
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
    this.userService.getById(id).subscribe(
      (data : User)=>{
        console.log(data)
        this.nom = data.nom ?? "";
        this.prenom = data.prenom ?? "";
        this.age = data.age ?? 0;
      },
      (error) =>{

      }
    )
  }

}
