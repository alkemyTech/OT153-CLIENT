import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ButtonModule } from "primeng/button";
import { CalendarModule } from "primeng/calendar";
import { CardModule } from "primeng/card";
import { CarouselModule } from "primeng/carousel";
import { ChipsModule } from "primeng/chips";
import { DialogModule } from "primeng/dialog";
import { DividerModule } from "primeng/divider";
import { DropdownModule } from "primeng/dropdown";
import { FileUploadModule } from 'primeng/fileupload';
import { ImageModule } from "primeng/image";
import { InputNumberModule } from "primeng/inputnumber";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputTextModule } from "primeng/inputtext";
import { PaginatorModule } from "primeng/paginator";
import { PasswordModule } from "primeng/password";
import { RadioButtonModule } from "primeng/radiobutton";
import { RippleModule } from "primeng/ripple";
import { SelectButtonModule } from "primeng/selectbutton";
import { SidebarModule } from "primeng/sidebar";
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from "primeng/tooltip";
import { FileUploadModule } from "primeng/fileupload";
import { MessageModule } from "primeng/message";
import { MessagesModule } from "primeng/messages";
import { ProgressSpinnerModule } from "primeng/progressspinner";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    ButtonModule,
    CalendarModule,
    CardModule,
    CarouselModule,
    CommonModule,
    ChipsModule,
    DialogModule,
    DividerModule,
    DropdownModule,
    FileUploadModule,
    ImageModule,
    InputNumberModule,
    InputTextareaModule,
    InputTextModule,
    PaginatorModule,
    PasswordModule,
    RadioButtonModule,
    RippleModule,
    SelectButtonModule,
    SidebarModule,
    ToastModule,
    TooltipModule,
    FileUploadModule,
    MessageModule,
    MessagesModule,
    ProgressSpinnerModule,
  ],
})
export class PrimengModule {}
