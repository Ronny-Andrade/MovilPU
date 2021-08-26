import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  usuarios:any;

  constructor(private perfil:UsuarioService) { }

  ngOnInit() {
    this.usuarios = this.perfil.getUsuarios();
  }
  
}
