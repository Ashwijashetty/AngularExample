import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { SortedEmployeesComponent } from './sorted-employees/sorted-employees.component';
import { SortByPipe } from './sort-by.pipe';
import { HttpClientModule } from '@angular/common/http';
import { BookListComponent } from './book-list/book-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    SortedEmployeesComponent,
    SortByPipe,
    BookListComponent,
    AddEmployeeComponent,
    ListEmployeesComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    BrowserModule,
		ReactiveFormsModule,
		HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
