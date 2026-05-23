import { Component, signal } from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-realisations',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './realisations.html',
})
export class RealisationsComponent {
  activeFilter = signal('Tous');

  filters = ['Tous', 'Mobilier', 'Cuisine', 'Dressing', 'Bibliothèque', 'Restauration'];

  allProjects = [
    { image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80', title: 'Canapé sur mesure', category: 'Mobilier', year: '2024' },
    { image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80', title: 'Cuisine contemporaine', category: 'Cuisine', year: '2024' },
    { image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', title: 'Dressing walk-in', category: 'Dressing', year: '2023' },
    { image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80', title: 'Bibliothèque murale', category: 'Bibliothèque', year: '2024' },
    { image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80', title: 'Table de salle à manger', category: 'Mobilier', year: '2023' },
    { image: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=800&q=80', title: 'Restauration armoire ancienne', category: 'Restauration', year: '2023' },
    { image: 'https://images.unsplash.com/photo-1565372195458-9de0b320ef04?w=800&q=80', title: 'Cuisine rustique', category: 'Cuisine', year: '2022' },
    { image: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=800&q=80', title: 'Bureau sur mesure', category: 'Mobilier', year: '2024' },
    { image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=80', title: 'Dressing chambre', category: 'Dressing', year: '2022' },
  ];

  get filteredProjects() {
    if (this.activeFilter() === 'Tous') return this.allProjects;
    return this.allProjects.filter(p => p.category === this.activeFilter());
  }

  setFilter(filter: string) {
    this.activeFilter.set(filter);
  }
}
