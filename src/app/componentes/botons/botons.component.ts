import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botons',
  templateUrl: './botons.component.html',
  styleUrls: ['./botons.component.scss'],
})
export class BotonsComponent implements OnInit {
  @Input() icono:string
  @Input() nombre:string
  @Input() clase:string


  constructor() { }

  ngOnInit() {}

}
