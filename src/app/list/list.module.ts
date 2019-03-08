import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../app.material.module';
import { ListComponent } from './list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    ListComponent,
    AppMaterialModule
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    BrowserAnimationsModule
  ],
  exports: [
    AppMaterialModule,
    BrowserAnimationsModule
  ]
})
export class ListModule { }
