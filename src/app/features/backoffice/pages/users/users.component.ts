import { Component , OnInit, ViewChild } from '@angular/core';
import { User, UserData, Users } from '@app/core/models/users.interfaces';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { DialogService } from '@core/services/dialog.service';
import { EditUserComponent } from './edit-user/edit-user.component';
import { PrivateApiService } from '@app/core/services/privateApi.service';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { userState } from '@app/core/models/user-state.interface';
import * as userActions from '@app/core/redux/users/user.actions'
import * as userSelector from '@app/core/redux/users/user.selector'
import { SearchInputService } from '@app/core/services/search-input.service';
import { Search } from '@app/core/models/search.models';
import { DialogType } from '@app/core/enums/dialog.enum';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [ConfirmationService],
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
  public dialogSelection$: Observable<boolean>;
  private _idDelete: number;
  private subscribeUser: Subscription;
  private subscribeDialogSelection: Subscription;
  private subscribeSearchUsers: Subscription;

  constructor(
    private http: PrivateApiService,
    public dialog: DialogService,
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
    this.setDialogObservables()
  }

  editUser(user: UserData) {
 /*    const ref = this.dialog.open(EditUserComponent, {
      data: user,
      header: 'Editar usuario: ',
      width: '400px',
      dismissableMask: true,
    });

    ref.onClose.subscribe((response) => {
      // console.log(response); -> receives response status from edit-user.component.ts
    }); */
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

  edit(_id: number){
    this.Store.dispatch(userActions.getUser( {id: _id} )); 
  }

  filterList(_id: number){
    this.users = this.users.filter(val => val.id != _id);
  }

  private setDialogObservables() {
    this.dialogSelection$ = this.dialog.DialogSelectionObservable;
  }

  deleteDialog(_id: number){
    this.delete_dialogSubscribe();
    this._idDelete = _id;
    this.dialog.show({
      type: DialogType.CONFIRM, 
      header: 'Eliminar Usuario '+_id, content:'Seguro que quiere eliminar este usuario?', 
      btnOk:'Eliminar', btnCancel:'Cancelar'
    })
  }

  private delete_dialogSubscribe(){
    const subscribeDialogSelection = this.dialogSelection$.subscribe(
      resp => {
        if (resp && this._idDelete && this._idDelete != -1) {
           this.Store.dispatch(userActions.deleteUser( {id: this._idDelete} ));
          this.filterList(this._idDelete);
        }
        this._idDelete=-1
      }
    );
    
  }

}
