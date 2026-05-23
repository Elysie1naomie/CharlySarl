import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-temoignages',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './temoignages.html',
})
export class TemoignagesComponent {
  testimonials = [
    { name: 'Marie Dupont', role: 'Architecte d\'intérieur', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80', text: 'Un travail d\'une précision et d\'une beauté remarquables. CharlySarl a transformé notre vision en une réalité qui dépasse toutes nos attentes. Je recommande vivement leurs services à tous mes clients.', rating: 5, project: 'Bibliothèque sur mesure' },
    { name: 'Pierre Martin', role: 'Propriétaire', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80', text: 'La cuisine sur mesure réalisée par CharlySarl est tout simplement parfaite. Chaque détail a été soigné avec une attention extraordinaire. Le résultat est au-delà de mes espérances.', rating: 5, project: 'Cuisine contemporaine' },
    { name: 'Sophie Bernard', role: 'Décoratrice', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80', text: 'Je recommande CharlySarl sans hésitation. Leur savoir-faire artisanal et leur sens du détail sont incomparables dans le secteur. Une équipe passionnée et professionnelle.', rating: 5, project: 'Dressing walk-in' },
    { name: 'Jean-Luc Moreau', role: 'Chef d\'entreprise', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80', text: 'CharlySarl a réalisé l\'agencement complet de nos bureaux. Le résultat est impressionnant : un espace de travail élégant et fonctionnel qui reflète parfaitement notre image de marque.', rating: 5, project: 'Agencement bureaux' },
    { name: 'Isabelle Leroy', role: 'Particulier', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80', text: 'Après avoir fait restaurer une armoire de famille par CharlySarl, je suis époustouflée par le résultat. Ils ont su préserver l\'âme du meuble tout en lui redonnant une beauté éclatante.', rating: 5, project: 'Restauration armoire ancienne' },
    { name: 'Thomas Petit', role: 'Architecte', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80', text: 'En tant qu\'architecte, je travaille régulièrement avec CharlySarl pour mes projets haut de gamme. Leur capacité à interpréter mes plans et à les réaliser avec excellence est remarquable.', rating: 5, project: 'Mobilier sur mesure' },
  ];
}
