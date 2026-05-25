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
    'https://res.cloudinary.com/drknixj4y/image/upload/v1779653398/WhatsApp_Image_2026-05-24_at_8.49.18_PM_qqmire.jpg',
    'https://res.cloudinary.com/drknixj4y/image/upload/v1779653400/WhatsApp_Image_2026-05-24_at_8.49.17_PM_cg1zha.jpg',
    'https://res.cloudinary.com/drknixj4y/image/upload/v1779653387/WhatsApp_Image_2026-05-24_at_8.49.12_PM_hnhudl.jpg',
    'https://res.cloudinary.com/drknixj4y/image/upload/v1779653382/WhatsApp_Image_2026-05-24_at_8.49.17_PM_1_h9xjsw.jpg',
  ];
}
