import { Component , OnInit, ViewChild } from '@angular/core';
import { User, UserData, Users } from '@app/core/models/users.interfaces';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { DialogService } from 'primeng/dynamicdialog';
import { EditUserComponent } from './edit-user/edit-user.component';
import { PrivateApiService } from '@app/core/services/privateApi.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { userState } from '@app/core/models/user-state.interface';
import * as userActions from '@app/core/redux/users/user.actions'
import * as userSelector from '@app/core/redux/users/user.selector'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [DialogService, ConfirmationService],
})
export class UsersCrudComponent implements OnInit {
  users: UserData[] = [];
  user: User;
  user$: Observable<Users>;
  usersSelected: User[] = [];
  statuses: any[];
  submitted: boolean = false;
  userDialog: boolean;
  @ViewChild('dt') dt: Table | undefined;

  constructor(
    private http: PrivateApiService,
    public dialogService: DialogService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private Store: Store<{ userState: userState }>
  ) {}

  ngOnInit(): void {
    this.Store.dispatch(userActions.getUsers());
    this.user$ = this.Store.select(userSelector.SelectStateAllData);
    this.getAllUsers();
    // this.users = [
    //   { data: { name: 'John', email: 'john@test.com', id: 1239 } },
    //   { data: { name: 'Mary', email: 'mary@test.com', id: 1244 } },
    //   { data: { name: 'Elton', email: 'elton@test.com', id: 1250 } },
    //   { data: { name: 'Dany', email: 'dany@test.com', id: 1244 } },
    //   { data: { name: 'Elsa', email: 'elsa@test.com', id: 1250 } },
    //   { data: { name: 'Rick', email: 'rick@test.com', id: 1239 } },
    //   { data: { name: 'Python', email: 'python@test.com', id: 1244 } },
    //   { data: { name: 'Mely', email: 'mely@test.com', id: 1239 } },
    //   { data: { name: 'Susan', email: 'susan@test.com', id: 1250 } },
    //   { data: { name: 'John', email: 'john@test.com', id: 1239 } },
    //   { data: { name: 'Mary', email: 'mary@test.com', id: 1244 } },
    //   { data: { name: 'Elton', email: 'elton@test.com', id: 1250 } },
    //   { data: { name: 'Dany', email: 'dany@test.com', id: 1244 } },
    // ];
  }

  editUser(user: UserData) {
    const ref = this.dialogService.open(EditUserComponent, {
      data: user,
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

  getAllUsers(): void {
    this.user$.subscribe((users) => {
      this.users = users.data;
    });
  }
}
