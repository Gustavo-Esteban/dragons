import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){
    if (usuario.nome === 'Dragon' && usuario.senha === '123456'){
      this.usuarioAutenticado = true
      this.router.navigate(['dragon-page'])
    } else {
      this.usuarioAutenticado = false;
      alert('Usuario incorreto!')
    }
  }

  userAutenticado(){
    return this.usuarioAutenticado;
  }
}
