import { Component, } from '@angular/core';

interface Planes {
  name: string,
  price: number,
  features: string[]
}

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

  planes: Planes[] = [
    {
      name: "Gratis",
      price: 0,
      features: ["1 Álbum", "1 Playlist", "Compartir", "Anuncios interados"]
    },
    {
      name: "Básico",
      price: 14,
      features: ["10 Álbum", "10 Playlist", "Compartir", "Sin Anuncios"]
    },
    {
      name: "Premium",
      price: 35,
      features: ["Álbumes ilimitadas", "Playlist ilimitadas", "Compartir", "Sin Anuncios"]
    }
  ]

}
