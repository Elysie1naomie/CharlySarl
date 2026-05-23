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
      title: 'Wooden Elegance',
      subtitle: 'Qualité by us',
      description: 'Notre équipe livre des solutions sur mesure adaptées à vos besoins. Nous garantissons qualité et attention dans chaque projet.',
    },
    {
      number: '02',
      title: 'Timber Network',
      subtitle: 'Craftsmen at work',
      description: 'Passionnés d\'excellence, nous travaillons uniquement avec des bois sélectionnés pour obtenir des résultats exceptionnels.',
    },
    {
      number: '03',
      title: 'Craftsman Studio',
      subtitle: 'Created by artisans',
      description: 'Avec plus de 15 ans d\'expérience, nous offrons des services qui dépassent les attentes. La finesse et le professionnalisme sont notre signature.',
    },
  ];
}
