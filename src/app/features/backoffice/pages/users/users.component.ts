import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '@app/core/models/users.interfaces';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { DialogService } from 'primeng/dynamicdialog';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HttpService } from '@app/core/services/http.service';
import { PrivateApiService } from '@app/core/services/privateApi.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [DialogService, ConfirmationService],
})
export class UsersCrudComponent implements OnInit {
  users: User[] = [];
  user: User;
  usersSelected: User[] = [];
  statuses: any[];
  submitted: boolean = false;
  userDialog: boolean;
  @ViewChild('dt') dt: Table | undefined;

  constructor(
    private http: PrivateApiService,
    public dialogService: DialogService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.users = [
      { data: { name: 'John', email: 'john@test.com', id: 1239 } },
      { data: { name: 'Mary', email: 'mary@test.com', id: 1244 } },
      { data: { name: 'Elton', email: 'elton@test.com', id: 1250 } },
      { data: { name: 'Dany', email: 'dany@test.com', id: 1244 } },
      { data: { name: 'Elsa', email: 'elsa@test.com', id: 1250 } },
      { data: { name: 'Rick', email: 'rick@test.com', id: 1239 } },
      { data: { name: 'Python', email: 'python@test.com', id: 1244 } },
      { data: { name: 'Mely', email: 'mely@test.com', id: 1239 } },
      { data: { name: 'Susan', email: 'susan@test.com', id: 1250 } },
      { data: { name: 'John', email: 'john@test.com', id: 1239 } },
      { data: { name: 'Mary', email: 'mary@test.com', id: 1244 } },
      { data: { name: 'Elton', email: 'elton@test.com', id: 1250 } },
      { data: { name: 'Dany', email: 'dany@test.com', id: 1244 } },
    ];
  }

  editUser(user: User) {
    const ref = this.dialogService.open(EditUserComponent, {
      data: user.data,
      header: 'Editar usuario: ',
      width: '400px',
      dismissableMask: true,
    });

    ref.onClose.subscribe((response) => {
      // console.log(response); -> receives response status from edit-user.component.ts
    });
  }

  deleteUser(user: User) {
    this.confirmationService.confirm({
      message: 'Esta seguro que desea eliminar el usuario? <br> Esta acción no se puede deshacer',
      accept: () => {
        // this.http.delete...
      },
    });
  }
}
