import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  templateUrl: './services.html',
})
export class ServicesComponent {
  services = [
    {
      image: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653371/WhatsApp_Image_2026-05-24_at_8.49.20_PM_flfjo4.jpg',
      title: 'Mobilier sur commande',
      description: 'Tables, chaises, buffets, commodes — on fabrique vos meubles selon vos dimensions et vos goûts. On travaille avec des bois solides adaptés au climat camerounais.',
      features: ['Plans sur mesure inclus', 'Bois de qualité', 'Garantie sur le travail', 'Livraison et pose'],
    },
    {
      image: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653371/WhatsApp_Image_2026-05-24_at_8.49.19_PM_by6fam.jpg',
      title: 'Cuisines équipées',
      description: 'On conçoit votre cuisine de A à Z selon l\'espace disponible et votre budget. Placards, plan de travail, étagères — tout est fait pour durer et faciliter votre quotidien.',
      features: ['Plan de travail sur mesure', 'Façades bois massif', 'Quincaillerie solide', 'Installation complète'],
    },
    {
      image: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653371/WhatsApp_Image_2026-05-24_at_8.49.13_PM_1_bprfor.jpg',
      title: 'Dressings et placards',
      description: 'On optimise chaque coin de votre chambre ou couloir avec des dressings bien pensés. Tiroirs, penderies, étagères — tout à votre mesure.',
      features: ['Optimisation de l\'espace', 'Éclairage intégré possible', 'Miroirs sur mesure', 'Finitions soignées'],
    },
    {
      image: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653369/WhatsApp_Image_2026-05-24_at_8.49.19_PM_1_xgrtsu.jpg',
      title: 'Bibliothèques et étagères',
      description: 'Du sol au plafond, on installe des bibliothèques et étagères sur mesure qui s\'intègrent parfaitement dans votre espace et mettent en valeur vos affaires.',
      features: ['Du sol au plafond', 'Éclairage LED possible', 'Portes vitrées en option', 'Finitions au choix'],
    },
    {
      image: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653368/WhatsApp_Image_2026-05-24_at_8.49.20_PM_1_a7bl3g.jpg',
      title: 'Restauration de meubles',
      description: 'Vous avez un vieux meuble abîmé ou une pièce de famille à remettre en état ? On s\'en occupe avec soin, en respectant le style d\'origine.',
      features: ['Diagnostic gratuit', 'Respect du style original', 'Teintes sur mesure', 'Résultat garanti'],
    },
    {
      image: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653355/WhatsApp_Image_2026-05-24_at_8.49.13_PM_resver.jpg',
      title: 'Aménagement intérieur',
      description: 'Maison, bureau, boutique ou hôtel — on prend en charge l\'aménagement complet de votre espace. On étudie votre projet et on vous propose une solution qui vous ressemble.',
      features: ['Étude de l\'espace', 'Plans 3D disponibles', 'Suivi de chantier', 'Coordination des travaux'],
    },
  ];
}
