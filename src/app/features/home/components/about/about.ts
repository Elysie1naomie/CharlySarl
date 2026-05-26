import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  templateUrl: './about.html',
})
export class AboutComponent {
  features = [
    {
      number: '01',
      title: 'Du bois de qualité',
      subtitle: 'Matériaux bien choisis',
      description: 'On sélectionne les meilleurs bois disponibles pour garantir des meubles solides qui résistent dans le temps. Votre satisfaction, c\'est notre priorité.',
    },
    {
      number: '02',
      title: 'Fait à la main',
      subtitle: 'Travail d\'artisan',
      description: 'Chaque pièce est fabriquée avec soin dans notre atelier à Bafoussam. On ne bâcle pas le travail — chaque détail compte.',
    },
    {
      number: '03',
      title: 'Plus de 15 ans de métier',
      subtitle: 'Expérience et sérieux',
      description: 'Depuis plus de 15 ans, on accompagne les familles et entreprises de la région dans leurs projets d\'aménagement. Notre réputation, c\'est notre meilleure carte de visite.',
    },
  ];
}
