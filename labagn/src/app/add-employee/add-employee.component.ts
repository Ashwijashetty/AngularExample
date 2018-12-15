import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
@Output()
empSubmit=new EventEmitter();

userForm:FormGroup=new FormGroup({
empId:new FormControl(null,[Validators.required]);
empName:new FormControl(null,[Validators.required]);  
empSal:new FormControl(null,[Validators.required]),
empDep:new FormControl(null,[Validators.required])

});

  constructor() { }

  ngOnInit() {
  }
saveData(){
if(this.userForm.valid){
this.empSubmit.emit({data:this.userForm.value});
}else{
alert('Please enter all the fields');
}
}
}
