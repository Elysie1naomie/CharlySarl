import { Component } from '@angular/core';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './stats.html',
})
export class StatsComponent {
  stats = [
    { value: 678, label: 'Projets réalisés', suffix: '+' },
    { value: 145, label: 'Clients satisfaits', suffix: '+' },
    { value: 278, label: 'Pièces uniques', suffix: '+' },
    { value: 15, label: 'Années d\'expérience', suffix: '' },
  ];
}
