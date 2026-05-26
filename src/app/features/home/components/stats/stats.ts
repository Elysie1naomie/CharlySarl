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
    { value: 26, label: 'Commandes réalisées', suffix: '+' },
    { value: 20, label: 'Clients satisfaits', suffix: '+' },
    { value: 26, label: 'Pièces fabriquées', suffix: '+' },
  ];
}
