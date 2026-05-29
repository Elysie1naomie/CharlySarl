import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-formation',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  templateUrl: './formation.html',
})
export class FormationComponent {
  points = [
    'Apprentissage pratique directement en atelier',
    'Encadrement par des artisans expérimentés',
    'Maîtrise des techniques de menuiserie traditionnelle et moderne',
    'Formation adaptée au marché local camerounais',
  ];
}
