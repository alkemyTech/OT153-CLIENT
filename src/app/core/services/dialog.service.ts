import { MessageService } from 'primeng/api';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Dialog, DialogData, ToasterComplete, ToasterCancel } from '../models/dialog.inteface';
import { DialogType } from '@core/enums/dialog.enum';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
    private baseDialog: Dialog = {
        show: false,
        selection: false,
        data: {
            type: DialogType.INFO,
            btnOk: 'ok',
            btnCancel: '',
            header: '',
            content: '',
        },

    }
    private DataObservable: BehaviorSubject<DialogData> = new BehaviorSubject<DialogData>(this.baseDialog.data);
    private ShowObservable: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.baseDialog.show);
    private SelectionObservable: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.baseDialog.selection);
    
    constructor( public messageService:MessageService ) {}

    get DialogDataObservable(): Observable<DialogData> {
        return this.DataObservable.asObservable()
    }

    get DialogShowObservable(): Observable<boolean> {
        return this.ShowObservable.asObservable()
    }

    get DialogSelectionObservable(): Observable<boolean> {
        return this.SelectionObservable.asObservable()
    }
    
    set DialogSelection(selection: boolean){
        if (selection) {
            this.messageService.add(ToasterComplete)
        }else{
            this.messageService.add(ToasterCancel)
        }
        this.SelectionObservable.next(selection)
    }

    public show(data:DialogData){
        this.DialogData=data;
    }
    private set DialogData(data:DialogData) {
        this.DataObservable.next(data);
        this.DialogShow()
    }
    private DialogShow() {
        this.ShowObservable.next(true);
    }

}
