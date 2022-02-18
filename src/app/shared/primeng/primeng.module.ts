import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RippleModule } from "primeng/ripple";

import { ButtonModule } from "primeng/button";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [ButtonModule, RippleModule, CommonModule],
})
export class PrimengModule {}
