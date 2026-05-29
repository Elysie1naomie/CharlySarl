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
      image: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653412/WhatsApp_Image_2026-05-24_at_8.50.41_PM_bwed14.jpg',
      tag: 'Menuiserie de qualité',
      title: 'Le bois travaillé avec soin, à Bafoussam.',
      subtitle: 'Chaque meuble qu\'on fabrique, c\'est du travail bien fait, avec des matériaux solides et une finition qui dure.',
    },
    {
      image: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653413/WhatsApp_Image_2026-05-24_at_8.50.23_PM_matoki.jpg',
      tag: 'Mobilier sur commande',
      title: 'Votre maison mérite le meilleur.',
      subtitle: 'On conçoit vos meubles selon vos goûts et votre budget. Du salon à la chambre, on s\'occupe de tout.',
    },
    {
      image: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653412/WhatsApp_Image_2026-05-24_at_8.50.41_PM_bwed14.jpg',
      tag: 'Atelier Noutchowo et frères',
      title: 'Un travail sérieux, des résultats qui parlent.',
      subtitle: 'Depuis notre atelier à Bafoussam, on réalise vos projets avec rigueur et passion du métier.',
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
