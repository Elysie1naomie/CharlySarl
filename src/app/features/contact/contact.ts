import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RevealDirective } from '../../shared/directives/reveal.directive';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, RevealDirective],
  templateUrl: './contact.html',
})
export class ContactComponent {
  submitted = signal(false);
  loading = signal(false);

  form: ContactForm = {
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  };

  services = [
    'Mobilier sur commande',
    'Cuisine équipée',
    'Dressing et placards',
    'Bibliothèque et étagères',
    'Restauration de meubles',
    'Aménagement intérieur',
    'Autre',
  ];

  onSubmit() {
    this.loading.set(true);
    // Simulate async submission
    setTimeout(() => {
      this.loading.set(false);
      this.submitted.set(true);
      this.form = { name: '', email: '', phone: '', service: '', message: '' };
    }, 1500);
  }
}
