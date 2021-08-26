import { Component, OnInit } from '@angular/core';
import {MenuService} from '../../../services/menu.service'
import { Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-menuinfo',
  templateUrl: './menuinfo.page.html',
  styleUrls: ['./menuinfo.page.scss'],
})
export class MenuinfoPage implements OnInit {

  product: any = {
    nombre: '',
    descripcion: '',
    precio: '',
    imagen: ''    
  }

  constructor( private menuService: MenuService, private activatedRoute: ActivatedRoute) {

    
   }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.menuService.getProductoById(paramMap.get('productId')).subscribe((res) =>{
        this.product = res;
        console.log(this.product)
      })
    })
  }

}
