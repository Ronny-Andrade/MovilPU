import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  usuario = {
    nombre:'',
    correo:'',
    pass:'',
    dire:''
  }
  constructor() { }

  ngOnInit() {
  }
  enviar(){
    console.log(this.usuario)
  }
  facebook(){
    console.log('facebook')
  }

  google(){
    console.log('google')
  }

}
