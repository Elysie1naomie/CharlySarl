import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-realisations-preview',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  templateUrl: './realisations-preview.html',
})
export class RealisationsPreviewComponent {
  projects = [
    {
      image: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653432/WhatsApp_Image_2026-05-24_at_8.49.42_PM_lcgjje.jpg',
      category: 'Menuiserie sur mesure',
      title: 'Mobilier Premium',
      count: 76,
    },
    {
      image: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653413/WhatsApp_Image_2026-05-24_at_8.50.23_PM_matoki.jpg',
      category: 'Aménagement intérieur',
      title: 'Dressing & Rangements',
      count: 45,
    },
    {
      image: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653412/WhatsApp_Image_2026-05-24_at_8.50.41_PM_bwed14.jpg',
      category: 'Cuisine',
      title: 'Cuisines équipées',
      count: 34,
    },
    {
      image: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653414/WhatsApp_Image_2026-05-24_at_8.51.04_PM_phdzc3.jpg',
      category: 'Portes & Fenêtres',
      title: 'Menuiserie bois',
      count: 56,
    },
    {
      image: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653412/WhatsApp_Image_2026-05-24_at_8.51.28_PM_k7yafc.jpg',
      category: 'Finitions',
      title: 'Travaux de finition',
      count: 98,
    },
  ];
}
