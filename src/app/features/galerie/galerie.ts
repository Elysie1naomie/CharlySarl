import { Component, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-galerie',
  standalone: true,
  imports: [NgClass, RevealDirective],
  templateUrl: './galerie.html',
})
export class GalerieComponent {
  lightboxOpen = signal(false);
  lightboxIndex = signal(0);

  images = [
    { src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80', alt: 'Canapé sur mesure', span: 'col-span-2 row-span-2' },
    { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80', alt: 'Cuisine', span: '' },
    { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', alt: 'Dressing', span: '' },
    { src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80', alt: 'Bibliothèque', span: '' },
    { src: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80', alt: 'Table', span: '' },
    { src: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=1200&q=80', alt: 'Artisan', span: 'col-span-2' },
    { src: 'https://images.unsplash.com/photo-1565372195458-9de0b320ef04?w=800&q=80', alt: 'Outils', span: '' },
    { src: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=800&q=80', alt: 'Bureau', span: '' },
    { src: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=80', alt: 'Atelier', span: '' },
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

  prevImage() {
    this.lightboxIndex.update(i => (i - 1 + this.images.length) % this.images.length);
  }

  nextImage() {
    this.lightboxIndex.update(i => (i + 1) % this.images.length);
  }
}
