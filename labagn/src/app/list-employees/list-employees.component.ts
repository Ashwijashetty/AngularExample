import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import {Employee} from '../employee';
@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
@Input()
empList:Employee[];
@Output()
delEmployee=new EventEmitter();
@Output()
modifyEmployee=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
removeEmployee(id:number){

this.delEmployee.emit({data:id});

}
updateEmployee(id:number){
this.modifyEmployee.emit({data:id});
}
}
