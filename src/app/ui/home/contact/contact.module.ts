import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { IconModule } from '../../shared/icon/icon.module';



@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    IconModule,
  ],
  exports: [
    ContactComponent,
  ],
})
export class ContactModule { }
