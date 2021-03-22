import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { DataUser } from '../../models/data-user';
import { User } from '../../models/user';
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
    private _router: Router,
    private _matSnackBar: MatSnackBar
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.getTitle();
    this.getUserInfo();
  }

  buildForm() {
    this.form = this._formBuilder.group({
      id: [0],
      userName: [''],
      password: [''],
      categoryId: [''],
      dataUser: this._formBuilder.group({
        name: [''],
        email: [''],
        phone: [''],
      })
    })
  }

  getTitle() {
    this.userId = this._route.snapshot.paramMap.get('id');
    if (this.userId) {
      this.title = "User Details";
    } else {
      this.title = "New User";
    }
  }

  getUserInfo(){
    if(this.userId){
      this._usersService.getUserById(this.userId)
        .subscribe(
          res => {
            this.setUserInfo(res);
          }
        )
    }
  }

  setUserInfo(user: User){
    this.form.patchValue({
      id: user.id,
      userName: user.username,
      password: user.password,
      categoryId: user.categoryId,
    })
    this.setDataUser(user.dataUser);
  }

  setDataUser(dataUser: DataUser){
    let formGroup = {
      name: dataUser.name,
      email: dataUser.email,
      phone: dataUser.phone
    }

    this.form.get('dataUser')?.patchValue(formGroup);
  }

  test() {
    console.log(this.form.value);
  }

  onSubmit() {
    const user: User = this.form.value;

    if(!this.userId){
      this.save(user);
    }else {
      this.edit(user);
    }
  }

  save(user: User) {
    this._usersService.createUser(user)
      .subscribe(
        () => {
          console.log("Se ha creado el usuario");
          this._matSnackBar.open('User has been created successfully', 'OK', {
            verticalPosition: 'top',
            duration: 6000
          });
          this._router.navigate(['/users']);
        },
        error => {
          console.log(error);
        }
      )
  }

  edit(user: User) {
    this._usersService.putUser(user)
      .subscribe(
        () => {
          this._matSnackBar.open('User has been modified successfully', 'OK', {
            verticalPosition: 'top',
            duration: 6000
          });
          this._router.navigate(['/users']);
        }
      )
  }

}
