import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-testimonials-preview',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  templateUrl: './testimonials-preview.html',
})
export class TestimonialsPreviewComponent {
  testimonials = [
    {
      name: 'Marie Dupont',
      role: 'Architecte d\'intérieur',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
      text: 'Un travail d\'une précision et d\'une beauté remarquables. CharlySarl a transformé notre vision en une réalité qui dépasse toutes nos attentes.',
      rating: 5,
    },
    {
      name: 'Pierre Martin',
      role: 'Propriétaire',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
      text: 'La cuisine sur mesure réalisée par CharlySarl est tout simplement parfaite. Chaque détail a été soigné avec une attention extraordinaire.',
      rating: 5,
    },
    {
      name: 'Sophie Bernard',
      role: 'Décoratrice',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
      text: 'Je recommande CharlySarl sans hésitation. Leur savoir-faire artisanal et leur sens du détail sont incomparables dans le secteur.',
      rating: 5,
    },
  ];
}
