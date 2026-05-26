import { Component, signal, HostListener } from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-realisations',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './realisations.html',
})
export class RealisationsComponent {
  activeFilter = signal('Tous');
  lightboxOpen = signal(false);
  lightboxIndex = signal(0);

  filters = ['Tous', 'Mobilier', 'Cuisine', 'Dressing', 'Bibliothèque', 'Restauration'];

  allProjects = [
    { image: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653412/WhatsApp_Image_2026-05-24_at_8.50.41_PM_bwed14.jpg', title: 'Mobilier sur mesure', category: 'Mobilier', year: '2025' },
    { image: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653413/WhatsApp_Image_2026-05-24_at_8.50.23_PM_matoki.jpg', title: 'Cuisine contemporaine', category: 'Cuisine', year: '2025' },
    { image: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653412/WhatsApp_Image_2026-05-24_at_8.50.41_PM_bwed14.jpg', title: 'Dressing walk-in', category: 'Dressing', year: '2025' },
    { image: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653414/WhatsApp_Image_2026-05-24_at_8.51.04_PM_phdzc3.jpg', title: 'Bibliothèque murale', category: 'Bibliothèque', year: '2025' },
    { image: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653412/WhatsApp_Image_2026-05-24_at_8.51.28_PM_k7yafc.jpg', title: 'Agencement intérieur', category: 'Mobilier', year: '2024' },
    { image: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653411/WhatsApp_Image_2026-05-24_at_8.51.47_PM_g339bw.jpg', title: 'Restauration meuble', category: 'Restauration', year: '2024' },
    { image: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653405/WhatsApp_Image_2026-05-24_at_8.49.18_PM_1_hldxwh.jpg', title: 'Cuisine équipée', category: 'Cuisine', year: '2024' },
    { image: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653403/WhatsApp_Image_2026-05-24_at_8.49.16_PM_rolfpp.jpg', title: 'Bureau sur mesure', category: 'Mobilier', year: '2024' },
    { image: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653401/WhatsApp_Image_2026-05-24_at_8.49.16_PM_1_vf2wrg.jpg', title: 'Dressing chambre', category: 'Dressing', year: '2024' },
  ];

  get filteredProjects() {
    if (this.activeFilter() === 'Tous') return this.allProjects;
    return this.allProjects.filter(p => p.category === this.activeFilter());
  }

  setFilter(filter: string) {
    this.activeFilter.set(filter);
  }

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
    const list = this.filteredProjects;
    this.lightboxIndex.update(i => (i - 1 + list.length) % list.length);
  }

  next() {
    const list = this.filteredProjects;
    this.lightboxIndex.update(i => (i + 1) % list.length);
  }

  @HostListener('document:keydown', ['$event'])
  onKey(e: KeyboardEvent) {
    if (!this.lightboxOpen()) return;
    if (e.key === 'ArrowLeft') this.prev();
    if (e.key === 'ArrowRight') this.next();
    if (e.key === 'Escape') this.closeLightbox();
  }
}
