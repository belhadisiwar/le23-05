import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  // constructor() { }

  
 tabb=[];

person:FormGroup;
constructor(){
this.person=new FormGroup({
  nom : new FormControl(),
  age : new FormControl(),
  ville : new FormControl()
  })
}
registrer(Form){
  this.tabb.push(Form.value);
  console.log(this.person);
}
ngOnInit() {
}

}
