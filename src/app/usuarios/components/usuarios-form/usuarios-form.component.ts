import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.scss']
})
export class UsuariosFormComponent implements OnInit {

  form: FormGroup;

  title: string;
  userId: any;

  showCredentials = false;
  hidePass = true;
  hideConf = true;

  constructor(
    private _usersService: UsersService,
    private _route: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private _router: Router
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
    this.getTitle();
  }

  buildForm(){
    this.form = this._formBuilder.group({
      id: [0],
      userName: [''],
      password: [''],
      name: [''],
      email: [''],
      phone: [''],
      categoryId: ['']
    })
  }

  getTitle(){
    this.userId = this._route.snapshot.paramMap.get('id');
    if(this.userId){
      this.title = "User Details";
    } else {
      this.title = "New User";
    }
  }

  save(){
    let user = this.form.value;
    this._usersService.createUser(user)
      .subscribe(
        () => {
          console.log("se ha creado el usuario");
          this._router.navigate(['/users']);
        },
        error => {
          console.log(error);
        }
      )
  }

}
