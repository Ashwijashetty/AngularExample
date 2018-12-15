import { Component, OnInit,Output,EventEmitter,Input,OnChanges } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit ,OnChanges{

@Output()
empSubmit=new EventEmitter();
@Input()
edit;

userForm:FormGroup=new FormGroup({
empId:new FormControl(null,[Validators.required]),
empName:new FormControl(null,[Validators.required]),  
empSal:new FormControl(null,[Validators.required]),
empDep:new FormControl(null,[Validators.required])

});

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes){
  console.log(changes);
  if(changes['edit'].currentValue){
  this.userForm.setValue(changes['edit'].currentValue);
  }
  }
saveData(){
if(this.userForm.valid){
 this.empSubmit.emit({data:this.userForm.value});
}else{
alert('Please enter all the fields');
}
}}