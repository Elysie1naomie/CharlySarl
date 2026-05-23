import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-atelier',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './atelier.html',
})
export class AtelierComponent {
  steps = [
    { number: '01', title: 'Consultation', description: 'Nous écoutons vos besoins et vos envies pour comprendre votre projet dans ses moindres détails.' },
    { number: '02', title: 'Conception', description: 'Nos artisans dessinent et modélisent votre projet, en sélectionnant les essences de bois les plus adaptées.' },
    { number: '03', title: 'Fabrication', description: 'Chaque pièce est façonnée à la main dans notre atelier, avec des outils traditionnels et modernes.' },
    { number: '04', title: 'Finition', description: 'Ponçage, teinture, vernissage — chaque détail est soigné pour un rendu parfait et durable.' },
    { number: '05', title: 'Livraison', description: 'Installation soignée chez vous, avec un suivi après-vente pour votre entière satisfaction.' },
  ];

  gallery = [
    'https://images.unsplash.com/photo-1565372195458-9de0b320ef04?w=800&q=80',
    'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=80',
    'https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=800&q=80',
    'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80',
  ];
}
