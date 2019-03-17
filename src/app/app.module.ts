import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppMaterialModule } from './app.material.module';
import { ListComponent } from './list/list.component';
import { AddNewComponent } from './add-new/add-new.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpModule, JsonpModule } from '@angular/http';

const appRoutes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'add-new', component: AddNewComponent },
  { path: '',   redirectTo: '/list', pathMatch: 'full' },
  { path: '**', redirectTo: '/list'}
];



@NgModule({
  // what belongs to this module
  declarations: [
    AppComponent,
    ListComponent,
    AddNewComponent,
  ],
  // other modules we want to use inside this component
  imports: [
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AppMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
