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
import { SearchInputService } from '@app/core/services/search-input.service';
import { Search } from '@app/core/models/search.models';
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

  public searchObserver$: Observable<Search>;

  constructor(
    private http: PrivateApiService,
    public dialogService: DialogService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private Store: Store<{ userState: userState }>,
    public searchServices: SearchInputService
  ) {}

  ngOnInit(): void {
    this.Store.dispatch(userActions.getUsers());
    this.user$ = this.Store.select(userSelector.SelectStateAllData);
    this.getAllUsers();
    this.searchSubscribe();

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

  private getUsers() {
    this.Store.dispatch(userActions.getUsers());

  }
  
  private searchSubscribe() {
    this.searchObserver$ = this.searchServices.SearchObservable;
    this.subscribeSearchUsers = this.searchObserver$.subscribe({
      next: (resp) => { this.search(resp.load, resp.search); }
    })
  }

  private search(load?: boolean, search?: string){
    if(load === true) { 
      this.searchUsers(search || '');
    }else{
      this.getUsers();
    }
  }

  private searchUsers(search: string){
    this.Store.dispatch(userActions.searchUsers({value: search}));
  }
}
