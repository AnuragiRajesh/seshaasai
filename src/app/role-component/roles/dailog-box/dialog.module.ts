import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [DialogComponent],
  imports: [CommonModule,NgbModule],
  exports: [DialogComponent]
})
export class DialogModule { }