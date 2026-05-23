import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Slide {
  image: string;
  tag: string;
  title: string;
  subtitle: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.html',
})
export class HeroComponent implements OnInit, OnDestroy {
  currentSlide = signal(0);
  private interval?: ReturnType<typeof setInterval>;

  slides: Slide[] = [
    {
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80',
      tag: 'Savoir-faire artisanal',
      title: "L'art du bois, élevé au rang de chef-d'œuvre.",
      subtitle: "Chaque création naît d'une passion profonde pour la matière et d'une exigence absolue de perfection.",
    },
    {
      image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=1920&q=80',
      tag: 'Mobilier sur mesure',
      title: 'Votre espace, notre vision, une œuvre unique.',
      subtitle: 'Des pièces conçues pour durer, pensées pour vous, façonnées à la main avec soin.',
    },
    {
      image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=1920&q=80',
      tag: "Atelier d'excellence",
      title: 'La précision comme signature, le bois comme âme.',
      subtitle: 'Depuis notre atelier, nous donnons vie à vos projets les plus ambitieux.',
    },
  ];

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.currentSlide.update(s => (s + 1) % this.slides.length);
    }, 6000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  goToSlide(index: number): void {
    this.currentSlide.set(index);
  }
}
