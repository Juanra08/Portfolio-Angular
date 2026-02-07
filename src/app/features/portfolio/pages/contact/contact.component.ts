import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="min-h-screen bg-gradient-to-r from-primary to-secondary text-white py-20">
      <div class="max-w-2xl mx-auto px-6">
        <h1 class="text-5xl font-bold mb-12 text-center">Contacto</h1>

        <form (ngSubmit)="onSubmit()" #contactForm="ngForm" class="bg-secondary bg-opacity-50 rounded-lg p-8 space-y-6">
          <div>
            <label class="block text-lg font-semibold mb-2">Nombre</label>
            <input
              type="text"
              name="name"
              [(ngModel)]="formData.name"
              required
              class="w-full px-4 py-3 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent"
            >
          </div>

          <div>
            <label class="block text-lg font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              [(ngModel)]="formData.email"
              required
              class="w-full px-4 py-3 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent"
            >
          </div>

          <div>
            <label class="block text-lg font-semibold mb-2">Asunto</label>
            <input
              type="text"
              name="subject"
              [(ngModel)]="formData.subject"
              required
              class="w-full px-4 py-3 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent"
            >
          </div>

          <div>
            <label class="block text-lg font-semibold mb-2">Mensaje</label>
            <textarea
              name="message"
              [(ngModel)]="formData.message"
              rows="6"
              required
              class="w-full px-4 py-3 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent"
            ></textarea>
          </div>

          <button
            type="submit"
            [disabled]="!contactForm.valid"
            class="w-full bg-accent text-white py-3 rounded-lg font-bold text-lg hover:bg-opacity-90 transition disabled:opacity-50"
          >
            Enviar Mensaje
          </button>

          <p *ngIf="successMessage" class="text-green-300 text-center">{{ successMessage }}</p>
        </form>
      </div>
    </section>
  `
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  successMessage = '';

  onSubmit() {
    console.log('Mensaje:', this.formData);
    this.successMessage = '¡Mensaje enviado con éxito!';
    this.formData = { name: '', email: '', subject: '', message: '' };
    setTimeout(() => this.successMessage = '', 5000);
  }
}
