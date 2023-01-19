import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositoriesComponent } from './repositories.component';



@NgModule({
  declarations: [RepositoriesComponent],
  imports: [
    CommonModule
  ],
  exports: [
    RepositoriesComponent,
  ],
})
export class RepositoriesModule { }
