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
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
      category: 'Commandes sur mesure',
      title: 'Custom Orders',
      count: 76,
    },
    {
      image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80',
      category: 'Aménagement',
      title: 'Planning',
      count: 45,
    },
    {
      image: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=800&q=80',
      category: 'Coordination',
      title: 'Repairs',
      count: 34,
    },
    {
      image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80',
      category: 'Finition',
      title: 'Sanding',
      count: 56,
    },
    {
      image: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=800&q=80',
      category: 'Traitement',
      title: 'Staining',
      count: 98,
    },
  ];
}
