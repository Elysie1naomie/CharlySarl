import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero';
import { StatsComponent } from './components/stats/stats';
import { AboutComponent } from './components/about/about';
import { FormationComponent } from './components/formation/formation';
import { RealisationsPreviewComponent } from './components/realisations-preview/realisations-preview';
import { ServicesPreviewComponent } from './components/services-preview/services-preview';
import { TestimonialsPreviewComponent } from './components/testimonials-preview/testimonials-preview';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    StatsComponent,
    AboutComponent,
    FormationComponent,
    RealisationsPreviewComponent,
    ServicesPreviewComponent,
    TestimonialsPreviewComponent,
  ],
  template: `
    <app-hero />
    <app-stats />
    <app-about />
    <app-formation />
    <app-realisations-preview />
    <app-services-preview />
    <app-testimonials-preview />
  `,
})
export class HomeComponent {}
