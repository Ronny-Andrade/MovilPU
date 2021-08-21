import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  variables =[
    {
      nombre:'Nombre',
      pass:'Contrasena',
      email:'Correo',
      direccion:'Direccion'
    }
  ]

  usuario =[
    {
      nombre:'Usuario',
      pass:'usuario123',
      email:'usuario@gmail.com',
      direccion:'Alborada'
    }
  ]


}
