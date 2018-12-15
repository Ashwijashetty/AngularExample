import { Component } from '@angular/core';
import {Employee} from './employee';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 empData:Employee[];
 currentEmployee:Employee;
message:string='';
 constructor(){
 this.empData=  [  {empId:1001,empName:"Rahul",empSal:9000,empDep:"Java"},
                   {empId:1002,empName:"Sachin",empSal:19000,empDep:"OraApps"},
                   {empId:1003,empName:"Vikash",empSal:29000,empDep:"BI"},
                   ];
}
 addEmployee(emp:Employee){
  this.empData.push(emp);
 alert(`${emp.empId} ${emp.empName} ${emp.empSal} ${emp.empDep}`)
 this.message='Data added';
 }
 deleteEmployee(id:number){
 this.empData=_.filter(this.empData,(emp)=>emp.empId !== id);
 this.message='Data deleted';
 }
 findEmployee(id:number){
this.currentEmployee=_.filter(this.empData,(emp)=>emp.empId == id)[0];
console.log(this.currentEmployee);

 }
  editEmployee(emp:Employee){
 this.deleteEmployee(emp.empId);
 this.addEmployee(emp);
this.message='Data Updated';
 }
}
