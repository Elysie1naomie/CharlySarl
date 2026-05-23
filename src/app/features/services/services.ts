import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  templateUrl: './services.html',
})
export class ServicesComponent {
  services = [
    {
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
      title: 'Mobilier sur mesure',
      description: 'Tables, chaises, buffets, commodes — chaque meuble est conçu selon vos dimensions exactes et vos préférences esthétiques. Nous travaillons avec les essences les plus nobles : chêne, noyer, frêne, cerisier.',
      features: ['Conception 3D incluse', 'Essences nobles', 'Garantie 10 ans', 'Livraison & pose'],
    },
    {
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
      title: 'Cuisines',
      description: 'Cuisines entièrement personnalisées, alliant fonctionnalité et esthétique haut de gamme. Du plan de travail aux façades, chaque élément est pensé pour durer et sublimer votre quotidien.',
      features: ['Plan de travail sur mesure', 'Façades bois massif', 'Quincaillerie premium', 'Installation complète'],
    },
    {
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      title: 'Dressings',
      description: 'Optimisez chaque centimètre de votre espace avec nos dressings sur mesure. Tiroirs, penderies, étagères — tout est pensé pour votre confort et votre organisation.',
      features: ['Optimisation de l\'espace', 'Éclairage intégré', 'Miroirs sur mesure', 'Finitions premium'],
    },
    {
      image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80',
      title: 'Bibliothèques',
      description: 'Du sol au plafond, nos bibliothèques sur mesure transforment vos murs en œuvres d\'art fonctionnelles. Chaque étagère est calculée pour accueillir vos livres et objets avec élégance.',
      features: ['Du sol au plafond', 'Éclairage LED intégré', 'Portes vitrées optionnelles', 'Échelle bibliothèque'],
    },
    {
      image: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=800&q=80',
      title: 'Restauration',
      description: 'Redonnez vie à vos meubles anciens avec notre service de restauration. Nous respectons les techniques traditionnelles tout en apportant une finition contemporaine.',
      features: ['Diagnostic gratuit', 'Techniques traditionnelles', 'Teintes sur mesure', 'Respect du style original'],
    },
    {
      image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80',
      title: 'Agencement intérieur',
      description: 'Conception et réalisation complète de l\'agencement de vos espaces. Bureaux, commerces, hôtels — nous créons des environnements uniques qui reflètent votre identité.',
      features: ['Étude d\'espace', 'Conception 3D', 'Coordination travaux', 'Suivi de chantier'],
    },
  ];
}
