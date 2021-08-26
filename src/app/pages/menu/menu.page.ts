import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  alimentos:any;
  tipoProducto:any;
  textoBuscar:string= '';


  constructor(private menu:MenuService) { }

  ngOnInit() {
    this.alimentos = this.menu.getMenu();
    this.tipoProducto = this.menu.getTipoProducto();
  }

  buscar(event){
    this.textoBuscar = event.detail.value;
  }

  segmentChanged(event){
    console.log(event)
  }

  mostrarData(id) {
    console.log(id)
    this.menu.getProductoById(id).subscribe(res => console.log(res), err => console.error(err));
  }
}
