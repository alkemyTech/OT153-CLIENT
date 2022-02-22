import { NgModule } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { CalendarModule } from "primeng/calendar";
import { CardModule } from 'primeng/card';
import { CarouselModule } from "primeng/carousel";
import { ChipsModule } from "primeng/chips";
import { CommonModule } from "@angular/common";
import { DialogModule } from "primeng/dialog";
import { DividerModule } from "primeng/divider";
import { DropdownModule } from "primeng/dropdown";
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
import { TooltipModule } from "primeng/tooltip";

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
    CardModule,
    DialogModule,
    DividerModule,
    DropdownModule,
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
    TooltipModule,
    CardModule,
  ],
})
export class PrimengModule {}
