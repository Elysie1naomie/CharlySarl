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
      image: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653432/WhatsApp_Image_2026-05-24_at_8.49.42_PM_lcgjje.jpg',
      tag: 'Savoir-faire artisanal',
      title: "L'art du bois, élevé au rang de chef-d'œuvre.",
      subtitle: "Chaque création naît d'une passion profonde pour la matière et d'une exigence absolue de perfection.",
    },
    {
      image: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653413/WhatsApp_Image_2026-05-24_at_8.50.23_PM_matoki.jpg',
      tag: 'Mobilier sur mesure',
      title: 'Votre espace, notre vision, une œuvre unique.',
      subtitle: 'Des pièces conçues pour durer, pensées pour vous, façonnées à la main avec soin.',
    },
    {
      image: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653412/WhatsApp_Image_2026-05-24_at_8.50.41_PM_bwed14.jpg',
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
