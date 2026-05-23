import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
})
export class NavbarComponent {
  isScrolled = signal(false);
  isMenuOpen = signal(false);

  navLinks = [
    { label: 'Accueil', path: '/' },
    { label: 'Réalisations', path: '/realisations' },
    { label: 'Atelier', path: '/atelier' },
    { label: 'Services', path: '/services' },
    { label: 'Galerie', path: '/galerie' },
    { label: 'Témoignages', path: '/temoignages' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
}
