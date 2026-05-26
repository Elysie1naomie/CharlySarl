import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-services-preview',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  templateUrl: './services-preview.html',
})
export class ServicesPreviewComponent {
  services = [
    {
      image: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653371/WhatsApp_Image_2026-05-24_at_8.49.20_PM_flfjo4.jpg',
      title: 'Mobilier sur commande',
      description: 'Tables, chaises, buffets fabriqués selon vos goûts.',
      large: true,
    },
    {
      image: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653371/WhatsApp_Image_2026-05-24_at_8.49.19_PM_by6fam.jpg',
      title: 'Cuisines équipées',
      description: 'Cuisines sur mesure adaptées à votre espace.',
      large: false,
    },
    {
      image: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653371/WhatsApp_Image_2026-05-24_at_8.49.13_PM_1_bprfor.jpg',
      title: 'Dressings et placards',
      description: 'Rangements optimisés pour chaque pièce.',
      large: false,
    },
    {
      image: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653369/WhatsApp_Image_2026-05-24_at_8.49.19_PM_1_xgrtsu.jpg',
      title: 'Bibliothèques et étagères',
      description: 'Du sol au plafond, pour ranger avec style.',
      large: false,
    },
    {
      image: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653368/WhatsApp_Image_2026-05-24_at_8.49.20_PM_1_a7bl3g.jpg',
      title: 'Restauration de meubles',
      description: 'On remet vos vieux meubles à neuf.',
      large: false,
    },
    {
      image: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653355/WhatsApp_Image_2026-05-24_at_8.49.13_PM_resver.jpg',
      title: 'Aménagement intérieur',
      description: 'Maison, bureau ou commerce — on s\'occupe de tout.',
      large: true,
    },
  ];
}
