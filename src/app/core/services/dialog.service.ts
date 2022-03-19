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
            header: 'Error',
            content: 'Se produjo un error ',
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
    
    set DialogSelection(selection){
        let bool = (selection===DialogType.CANCEL || selection === undefined)? false: true;
        this.toastByType(selection)
        this.SelectionObservable.next(bool);        
    }

    toastByType(selection){
        switch (selection) {
            case DialogType.CONFIRM:
                this.messageService.add(ToasterComplete)
                break;
            case DialogType.CANCEL:
                this.messageService.add(ToasterCancel)
                break;
            default:
                break
        }
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
