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
      name: 'Nguemo Christelle',
      role: 'Propriétaire, Bafoussam',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
      text: 'CharlySarl a fabriqué tous les meubles de mon salon. Le travail est vraiment bien fait, les délais ont été respectés et le prix était correct. Je recommande à tout le monde.',
      rating: 5,
    },
    {
      name: 'Kamdem Rodrigue',
      role: 'Commerçant, Bafoussam',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
      text: 'J\'ai commandé une cuisine complète pour ma maison. Le résultat dépasse ce que j\'attendais. Les artisans sont sérieux et professionnels. Je suis très satisfait.',
      rating: 5,
    },
    {
      name: 'Fomekong Nadège',
      role: 'Architecte, Yaoundé',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
      text: 'Je travaille régulièrement avec CharlySarl pour mes chantiers dans la région de l\'Ouest. Leur sérieux et la qualité de leur travail m\'ont toujours impressionnée.',
      rating: 5,
    },
  ];
}
