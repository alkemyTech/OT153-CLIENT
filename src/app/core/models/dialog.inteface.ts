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
}


export let DialogConfirm: DialogData = {
    btnOk: "Aceptar",
    btnCancel: "Cancelar",
    header: "Confirmación",
    content: '¿Estás seguro de que quieres continuar?',
    type: DialogType.CONFIRM
} 

export let DialogError: DialogData = {
    btnOk: "Ok",
    header: 'Error',
    content: "Se ha producido un error!",
    type: DialogType.ERROR
} 

export let DialogInfo: DialogData = {
    btnOk: "Ok",
    header: "Información",
    type: DialogType.INFO,

} 