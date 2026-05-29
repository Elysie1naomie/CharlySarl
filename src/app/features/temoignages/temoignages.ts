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
    { name: 'Nguemo Christelle', role: 'Propriétaire, Bafoussam', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80', text: 'Noutchowo et frères a fabriqué tous les meubles de mon salon. Le travail est vraiment bien fait, les délais ont été respectés et le prix était correct. Je recommande à tout le monde.', rating: 5, project: 'Salon complet sur mesure' },
    { name: 'Kamdem Rodrigue', role: 'Commerçant, Bafoussam', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80', text: 'J\'ai commandé une cuisine complète pour ma maison. Le résultat dépasse ce que j\'attendais. Les artisans sont sérieux et professionnels. Je suis très satisfait.', rating: 5, project: 'Cuisine équipée' },
    { name: 'Fomekong Nadège', role: 'Architecte, Yaoundé', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80', text: 'Je travaille régulièrement avec Noutchowo et frères pour mes chantiers dans la région de l\'Ouest. Leur sérieux et la qualité de leur travail m\'ont toujours impressionnée.', rating: 5, project: 'Agencement bureaux' },
    { name: 'Talla Jean-Pierre', role: 'Chef d\'entreprise, Bafoussam', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80', text: 'On a fait appel à Noutchowo et frères pour aménager nos bureaux. Le travail a été livré dans les délais et la qualité est au rendez-vous. Notre équipe est très contente du résultat.', rating: 5, project: 'Aménagement bureaux' },
    { name: 'Mbianda Solange', role: 'Particulière, Bafoussam', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80', text: 'J\'ai fait restaurer une vieille armoire de famille. Noutchowo et frères a fait un travail remarquable — on dirait qu\'elle est neuve. Je suis vraiment contente et je reviendrai.', rating: 5, project: 'Restauration armoire' },
    { name: 'Nkouatchet Boris', role: 'Promoteur immobilier, Douala', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80', text: 'Je fais régulièrement appel à Noutchowo et frères pour mes projets immobiliers dans l\'Ouest. Ils comprennent vite ce qu\'on veut et livrent un travail propre. Un partenaire de confiance.', rating: 5, project: 'Mobilier sur mesure' },
  ];
}
