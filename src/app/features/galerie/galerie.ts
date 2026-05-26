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
    { src: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653412/WhatsApp_Image_2026-05-24_at_8.50.41_PM_bwed14.jpg', alt: 'Réalisation CharlySarl', span: 'col-span-2 row-span-2' },
    { src: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653412/WhatsApp_Image_2026-05-24_at_8.51.28_PM_k7yafc.jpg', alt: 'Réalisation CharlySarl', span: '' },
    { src: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653369/WhatsApp_Image_2026-05-24_at_8.49.19_PM_1_xgrtsu.jpg', alt: 'Réalisation CharlySarl', span: '' },
    { src: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653387/WhatsApp_Image_2026-05-24_at_8.49.12_PM_hnhudl.jpg', alt: 'Réalisation CharlySarl', span: '' },
    { src: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653355/WhatsApp_Image_2026-05-24_at_8.49.13_PM_resver.jpg', alt: 'Réalisation CharlySarl', span: '' },
    { src: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653413/WhatsApp_Image_2026-05-24_at_8.50.23_PM_matoki.jpg', alt: 'Réalisation CharlySarl', span: 'col-span-2' },
    { src: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653414/WhatsApp_Image_2026-05-24_at_8.51.04_PM_phdzc3.jpg', alt: 'Réalisation CharlySarl', span: '' },
    { src: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653411/WhatsApp_Image_2026-05-24_at_8.51.47_PM_g339bw.jpg', alt: 'Réalisation CharlySarl', span: '' },
    { src: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653405/WhatsApp_Image_2026-05-24_at_8.49.18_PM_1_hldxwh.jpg', alt: 'Réalisation CharlySarl', span: '' },
    { src: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653403/WhatsApp_Image_2026-05-24_at_8.49.16_PM_rolfpp.jpg', alt: 'Réalisation CharlySarl', span: '' },
    { src: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653401/WhatsApp_Image_2026-05-24_at_8.49.16_PM_1_vf2wrg.jpg', alt: 'Réalisation CharlySarl', span: '' },
    { src: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653398/WhatsApp_Image_2026-05-24_at_8.49.18_PM_qqmire.jpg', alt: 'Réalisation CharlySarl', span: 'col-span-2' },
    { src: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653400/WhatsApp_Image_2026-05-24_at_8.49.17_PM_cg1zha.jpg', alt: 'Réalisation CharlySarl', span: '' },
    { src: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653400/WhatsApp_Image_2026-05-24_at_8.49.14_PM_1_tvabar.jpg', alt: 'Réalisation CharlySarl', span: '' },
    { src: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653432/WhatsApp_Image_2026-05-24_at_8.49.42_PM_lcgjje.jpg', alt: 'Réalisation CharlySarl', span: '' },
    { src: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653371/WhatsApp_Image_2026-05-24_at_8.49.20_PM_flfjo4.jpg', alt: 'Réalisation CharlySarl', span: '' },
    { src: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653371/WhatsApp_Image_2026-05-24_at_8.49.19_PM_by6fam.jpg', alt: 'Réalisation CharlySarl', span: 'col-span-2' },
    { src: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653371/WhatsApp_Image_2026-05-24_at_8.49.13_PM_1_bprfor.jpg', alt: 'Réalisation CharlySarl', span: '' },
    { src: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653368/WhatsApp_Image_2026-05-24_at_8.49.20_PM_1_a7bl3g.jpg', alt: 'Réalisation CharlySarl', span: '' },
    { src: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653358/WhatsApp_Image_2026-05-24_at_8.49.23_PM_p9julx.jpg', alt: 'Réalisation CharlySarl', span: '' },
    { src: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653341/WhatsApp_Image_2026-05-24_at_8.49.14_PM_ndpbwa.jpg', alt: 'Réalisation CharlySarl', span: '' },
    { src: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653341/WhatsApp_Image_2026-05-24_at_8.49.24_PM_1_ggqnft.jpg', alt: 'Réalisation CharlySarl', span: 'col-span-2' },
    { src: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653335/WhatsApp_Image_2026-05-24_at_8.49.15_PM_kqev9o.jpg', alt: 'Réalisation CharlySarl', span: '' },
    { src: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653336/WhatsApp_Image_2026-05-24_at_8.49.23_PM_2_qwebbg.jpg', alt: 'Réalisation CharlySarl', span: '' },
    { src: 'https://res.cloudinary.com/drknixj4y/image/upload/v1779653333/WhatsApp_Image_2026-05-24_at_8.49.24_PM_jjd86z.jpg', alt: 'Réalisation CharlySarl', span: '' },
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
