import { DialogType } from '@core/enums/dialog.enum';

export const ToasterComplete = { key:'toastMessage', severity:'success', summary:'Completado' }
export const ToasterCancel = { key:'toastMessage', severity:'warn', summary:'Cancelado' }
export interface Dialog {
    show: boolean,
    data: DialogData,
    selection: boolean,
}

export interface DialogData {
    type: DialogType,
    btnOk?: string,
    btnCancel?: string,
    header: string,
    content?: string,
    filePDF?: string,
}
