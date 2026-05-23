import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.html',
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  links = [
    { label: 'Accueil', path: '/' },
    { label: 'Réalisations', path: '/realisations' },
    { label: 'Atelier', path: '/atelier' },
    { label: 'Services', path: '/services' },
    { label: 'Galerie', path: '/galerie' },
    { label: 'Témoignages', path: '/temoignages' },
    { label: 'Contact', path: '/contact' },
  ];

  services = [
    'Mobilier sur mesure',
    'Cuisines',
    'Dressings',
    'Bibliothèques',
    'Restauration',
    'Agencement intérieur',
  ];
}
