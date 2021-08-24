import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-menu-search',
  templateUrl: './header-menu-search.component.html',
  styleUrls: ['./header-menu-search.component.scss'],
})
export class HeaderMenuSearchComponent implements OnInit {
  @Input() titulo:string
  constructor() { }

  ngOnInit() {}
  buscar(event){
    console.log(event)
  }

}
