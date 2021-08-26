import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getUsuarios(){
    return this.http.get('http://localhost:8000/usr/usuarios/?format=json')
    .pipe(tap(console.log)); 
  }
  
}
