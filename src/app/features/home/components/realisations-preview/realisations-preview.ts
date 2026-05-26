import { Component, signal, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-realisations-preview',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  templateUrl: './realisations-preview.html',
})
export class RealisationsPreviewComponent {
  lightboxOpen = signal(false);
  lightboxIndex = signal(0);

  projects = [
    { image: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653412/WhatsApp_Image_2026-05-24_at_8.50.41_PM_bwed14.jpg', category: 'Menuiserie sur mesure', title: 'Mobilier Premium', count: 76 },
    { image: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653413/WhatsApp_Image_2026-05-24_at_8.50.23_PM_matoki.jpg', category: 'Aménagement intérieur', title: 'Dressing & Rangements', count: 45 },
    { image: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653412/WhatsApp_Image_2026-05-24_at_8.50.41_PM_bwed14.jpg', category: 'Cuisine', title: 'Cuisines équipées', count: 34 },
    { image: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653414/WhatsApp_Image_2026-05-24_at_8.51.04_PM_phdzc3.jpg', category: 'Portes & Fenêtres', title: 'Menuiserie bois', count: 56 },
    { image: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653412/WhatsApp_Image_2026-05-24_at_8.51.28_PM_k7yafc.jpg', category: 'Finitions', title: 'Travaux de finition', count: 98 },
    { image: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653411/WhatsApp_Image_2026-05-24_at_8.51.47_PM_g339bw.jpg', category: 'Mobilier', title: 'Meubles sur commande', count: 62 },
    { image: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653405/WhatsApp_Image_2026-05-24_at_8.49.18_PM_1_hldxwh.jpg', category: 'Agencement', title: 'Aménagement complet', count: 41 },
    { image: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653403/WhatsApp_Image_2026-05-24_at_8.49.16_PM_rolfpp.jpg', category: 'Restauration', title: 'Rénovation meuble', count: 28 },
  ];

  openLightbox(index: number) {
    this.lightboxIndex.set(index);
    this.lightboxOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.lightboxOpen.set(false);
    document.body.style.overflow = '';
  }

  prev() {
    this.lightboxIndex.update(i => (i - 1 + this.projects.length) % this.projects.length);
  }

  next() {
    this.lightboxIndex.update(i => (i + 1) % this.projects.length);
  }

  @HostListener('document:keydown', ['$event'])
  onKey(e: KeyboardEvent) {
    if (!this.lightboxOpen()) return;
    if (e.key === 'ArrowLeft') this.prev();
    if (e.key === 'ArrowRight') this.next();
    if (e.key === 'Escape') this.closeLightbox();
  }
}
