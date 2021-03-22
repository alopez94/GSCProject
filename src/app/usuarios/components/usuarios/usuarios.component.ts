import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})

export class UsuariosComponent implements OnInit {

  users: User[];
  displayedColumns: string[] = ['position', 'user', 'area', 'problem'];
  dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private _usersService: UsersService,
    private _router: Router
  ) {
    this.getUsers();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getUsers(){
    this._usersService.getUsers()
      .subscribe(
        res => {
          this.users = res
          console.log(this.users);
          this.dataSource = new MatTableDataSource(this.users);
        },
        error => {
          console.log(error);
        }
      )
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  newUser(){
    this._router.navigate(['/users/new/']);
  }

}
