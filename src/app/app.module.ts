import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppMaterialModule } from './app.material.module';
import { ListComponent } from './list/list.component';
import { AddNewComponent } from './add-new/add-new.component';

const appRoutes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'add-new', component: AddNewComponent },
];



@NgModule({
  //what belongs to this module
  declarations: [
    AppComponent,
    ListComponent,
    AddNewComponent,
  ],
  //other modules we want to use inside this component
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppMaterialModule,
    BrowserAnimationsModule
  ],
  exports: [
    AppMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
