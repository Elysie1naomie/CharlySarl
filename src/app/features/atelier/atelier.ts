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
    { number: '01', title: 'On discute de votre projet', description: 'Vous nous expliquez ce que vous voulez. On écoute, on pose des questions et on comprend bien vos besoins avant de commencer quoi que ce soit.' },
    { number: '02', title: 'On fait les plans', description: 'Nos menuisiers dessinent votre projet et choisissent les bois adaptés. On vous montre le résultat avant de lancer la fabrication.' },
    { number: '03', title: 'On fabrique dans notre atelier', description: 'Chaque pièce est fabriquée à la main dans notre atelier à Bafoussam, avec des outils adaptés et un soin particulier apporté à chaque étape.' },
    { number: '04', title: 'On soigne les finitions', description: 'Ponçage, teinture, vernis — on ne livre rien qui ne soit pas bien fini. Le rendu doit être propre et durable.' },
    { number: '05', title: 'On livre et on installe', description: 'On pose vos meubles chez vous et on s\'assure que tout est bien en place. On reste disponibles après la livraison si vous avez des questions.' },
  ];

  gallery = [
    'https://res.cloudinary.com/drknixj4y/image/upload/v1779653398/WhatsApp_Image_2026-05-24_at_8.49.18_PM_qqmire.jpg',
    'https://res.cloudinary.com/drknixj4y/image/upload/v1779653400/WhatsApp_Image_2026-05-24_at_8.49.17_PM_cg1zha.jpg',
    'https://res.cloudinary.com/drknixj4y/image/upload/v1779653387/WhatsApp_Image_2026-05-24_at_8.49.12_PM_hnhudl.jpg',
    'https://res.cloudinary.com/drknixj4y/image/upload/v1779653382/WhatsApp_Image_2026-05-24_at_8.49.17_PM_1_h9xjsw.jpg',
  ];
}
