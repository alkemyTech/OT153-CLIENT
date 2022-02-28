import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '@app/core/models/users.interfaces';
import { ConfirmationService } from 'primeng/api';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [ConfirmationService],
})
export class UsersCrudComponent implements OnInit {
  users: User[] = [];
  user: User;
  usersSelected: User[] = [];
  statuses: any[];
  submitted: boolean = false;
  userDialog: boolean;
  value1: any;
  @ViewChild('dt') dt: Table | undefined;

  constructor(private confirmationService: ConfirmationService) {}

  ngOnInit(): void {
    this.users = [
      { data: { name: 'John', email: 'john@test.com', role_id: 1 } },
      { data: { name: 'Mary', email: 'mary@test.com', role_id: 1 } },
      { data: { name: 'Elton', email: 'elton@test.com', role_id: 1 } },
      { data: { name: 'Dany', email: 'dany@test.com', role_id: 1 } },
      { data: { name: 'Elsa', email: 'elsa@test.com', role_id: 1 } },
      { data: { name: 'Rick', email: 'rick@test.com', role_id: 1 } },
      { data: { name: 'Python', email: 'python@test.com', role_id: 1 } },
      { data: { name: 'Mely', email: 'mely@test.com', role_id: 1 } },
      { data: { name: 'Susan', email: 'susan@test.com', role_id: 1 } },
    ];
  }

  editUser(user: User) {
    this.user = { ...user };
    this.userDialog = true;
  }
  saveProduct() {}
  hideDialog() {}
  deleteUser() {}
  deleteSelectedUsers() {}
  openNew() {}

  handleInput(event: Event) {
    console.log((event.target as HTMLInputElement).value);
    return (event.target as HTMLInputElement).value;
  }

  applyFilterGlobal($event, stringVal) {
    console.log(($event.target as HTMLInputElement).value);
    this.dt?.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
  }
}
