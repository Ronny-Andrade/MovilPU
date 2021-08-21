import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario={
    email:'',
    pass:''
  }

  constructor() { }

  ngOnInit() {
  }

  enviar(){
    console.log(this.usuario.email)
    console.log(this.usuario.pass)
  }
  
  facebook(){
    console.log('facebook')
  }

  google(){
    console.log('google')
  }
}
