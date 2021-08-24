import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  getMenu(){
    return this.http.get('http://127.0.0.1:8000/pro/productos/?format=json')
    .pipe(tap(console.log)); 
  }
  
  getTipoProducto(){
    return this.http.get('http://127.0.0.1:8000/tipro/tipoproductos/?format=json')
    .pipe(tap(console.log)); 
  }
}
