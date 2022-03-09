import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


const componentToExport = [];
const modulesToExport = [MatDialogModule, MatButtonModule];

@NgModule({
  declarations: [...componentToExport],
  imports: [CommonModule, ...modulesToExport],
  exports: [...modulesToExport, ...componentToExport],
})
export class MaterialModule {}
