import { NgModule,Component } from '@angular/core';
// import { FormControlDirective } from '@angular/forms';
 import{FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'glam';
  a ="https://e-rse.net/wp-content/uploads/2018/03/hiver-froid-rechauffement-climatique-825x510.jpg"
  isactive =true;
  // login(){
  //   console.log("login");
  // }
    login(e){
      console.log(e.target.value);
    }
   

    num1=0;
    num2=0;
result:number;
add(){

  console.log(this.num1 + this.num2);
}
div(){

  console.log(this.num1 / this.num2);
}
mult(){

  console.log(this.num1 * this.num2);
}
mois(){

  console.log(this.num1 - this.num2);
}

name;
lastname;
email;
password


tab=[];

fun(e){
  let personne={
    name:this.name,
    lastname:this.lastname,
    password:this.password,
    email:this.email
  }
  this.tab.push(personne);
  console.log(this.tab);
}
public colors=["green","red","bleu"]

arr=[
  {name: "a" , age:"25"},
  {name: "belhadi" , age:"24"},
  {name: "hatem" , age:"28"},
  {name: "aymen" , age:"27"}
  ];
  num="5";
}
