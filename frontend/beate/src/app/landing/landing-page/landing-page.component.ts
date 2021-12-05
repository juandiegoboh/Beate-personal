import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from 'src/app/services/login.service';

interface Planes {
  name: string;
  price: number;
  features: string[];
}

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
  planes: Planes[] = [
    {
      name: 'Gratis',
      price: 0,
      features: ['1 Álbum', '1 Playlist', 'Compartir', 'Anuncios interados'],
    },
    {
      name: 'Básico',
      price: 14,
      features: ['10 Álbum', '10 Playlist', 'Compartir', 'Sin Anuncios'],
    },
    {
      name: 'Premium',
      price: 35,
      features: [
        'Álbumes ilimitadas',
        'Playlist ilimitadas',
        'Compartir',
        'Sin Anuncios',
      ],
    },
  ];

  constructor(public dialog: MatDialog) {}

  openLogin() {
    RegisterComponent.prototype.hasAccount = true;
    const dialogRef = this.dialog.open(RegisterComponent, {
      width: 'auto',
      height: 'auto',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }

  openRegister() {
    RegisterComponent.prototype.hasAccount = false;
    const dialogRef = this.dialog.open(RegisterComponent, {
      width: 'auto',
      height: 'auto',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }
}

// Componente que contiene los formularios de registro y login
@Component({
  selector: 'app-register',
  templateUrl: '../register/register.component.html',
  styleUrls: ['../register/register.component.scss'],
})
export class RegisterComponent {
  hasAccount: unknown;

  username: any;
  password: any;
  password2: any;
  email: any;

  // constructor(public dialog: MatDialog, private _login: LoginService) {
  //   super(dialog);
  // }

  constructor(private _login: LoginService) { }

  changeLogin() {
    this.username = "";
    this.password = "";
    this.hasAccount = true;
  }

  login() {
    let infoUsuario = {
      username: this.username,
      password: this.password,
    };
    this._login.login(infoUsuario).subscribe((data) => {
      console.log(data);
    });
  }

  register() {

    if(this.password != this.password2){
      alert("Las contraseñas no coinciden");

      this.password = "";
      this.password2 = "";
      return;
    }

    let infoUsuario = {
      username: this.username,
      password: this.password,
      email: this.email,
    };
    this._login.register(infoUsuario).subscribe((data) => {
      console.log(data);
      this.username = "";
      this.email = "";
      this.password = "";
      this.password2 = "";
    });
  }
}
