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

    // Construire le message WhatsApp
    const lines: string[] = [];
    lines.push('Bonjour Noutchowo et frères, voici une demande de contact :');
    lines.push('');
    lines.push(`Nom : ${this.form.name}`);
    if (this.form.email) lines.push(`Email : ${this.form.email}`);
    if (this.form.phone) lines.push(`Téléphone : ${this.form.phone}`);
    if (this.form.service) lines.push(`Service souhaité : ${this.form.service}`);
    lines.push('');
    lines.push(`Message : ${this.form.message}`);

    const text = encodeURIComponent(lines.join('\n'));
    const url = `https://wa.me/237699604035?text=${text}`;

    setTimeout(() => {
      this.loading.set(false);
      this.submitted.set(true);
      this.form = { name: '', email: '', phone: '', service: '', message: '' };
      window.open(url, '_blank');
    }, 800);
  }
}
