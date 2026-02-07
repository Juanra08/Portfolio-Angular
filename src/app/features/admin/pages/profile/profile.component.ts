import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileService, Profile } from '../../../../core/services/profile.service';

@Component({
  selector: 'app-admin-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="space-y-8">
      <h1 class="text-3xl font-bold text-secondary">Editar Perfil</h1>

      <form (ngSubmit)="onSubmit()" #profileForm="ngForm" class="bg-white rounded-lg shadow-lg p-8 space-y-6">
        <div class="grid grid-cols-2 gap-6">
          <div>
            <label class="block font-semibold text-secondary mb-2">Nombre</label>
            <input
              type="text"
              name="name"
              [(ngModel)]="profile.name"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
          </div>

          <div>
            <label class="block font-semibold text-secondary mb-2">Título</label>
            <input
              type="text"
              name="title"
              [(ngModel)]="profile.title"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
          </div>
        </div>

        <div>
          <label class="block font-semibold text-secondary mb-2">Biografía</label>
          <textarea
            name="bio"
            [(ngModel)]="profile.bio"
            rows="4"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>
        </div>

        <div class="grid grid-cols-2 gap-6">
          <div>
            <label class="block font-semibold text-secondary mb-2">Email</label>
            <input
              type="email"
              name="email"
              [(ngModel)]="profile.email"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
          </div>

          <div>
            <label class="block font-semibold text-secondary mb-2">Teléfono</label>
            <input
              type="tel"
              name="phone"
              [(ngModel)]="profile.phone"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
          </div>
        </div>

        <div>
          <label class="block font-semibold text-secondary mb-2">Ubicación</label>
          <input
            type="text"
            name="location"
            [(ngModel)]="profile.location"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
        </div>

        <div>
          <label class="block font-semibold text-secondary mb-2">URL Imagen de Perfil</label>
          <input
            type="url"
            name="profileImage"
            [(ngModel)]="profile.profileImage"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
        </div>

        <div>
          <label class="block font-semibold text-secondary mb-2">Habilidades (separadas por comas)</label>
          <input
            type="text"
            name="skills"
            [value]="profile.skills.join(', ')"
            (change)="onSkillsChange($event)"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
        </div>

        <div>
          <h3 class="font-semibold text-secondary mb-4">Enlaces Sociales</h3>
          <div class="space-y-4">
            <div>
              <label class="block text-sm mb-1">GitHub</label>
              <input
                type="url"
                name="github"
                [(ngModel)]="profile.socialLinks.github"
                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
            </div>
            <div>
              <label class="block text-sm mb-1">LinkedIn</label>
              <input
                type="url"
                name="linkedin"
                [(ngModel)]="profile.socialLinks.linkedin"
                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
            </div>
            <div>
              <label class="block text-sm mb-1">Twitter</label>
              <input
                type="url"
                name="twitter"
                [(ngModel)]="profile.socialLinks.twitter"
                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
            </div>
          </div>
        </div>

        <button
          type="submit"
          class="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-opacity-90 transition"
        >
          Guardar Cambios
        </button>

        <p *ngIf="successMessage" class="text-green-600 text-center font-semibold">{{ successMessage }}</p>
      </form>
    </div>
  `
})
export class AdminProfileComponent implements OnInit {
  profile: Profile = {
    id: 1,
    name: '',
    title: '',
    bio: '',
    email: '',
    phone: '',
    location: '',
    profileImage: '',
    socialLinks: {},
    skills: []
  };

  successMessage = '';

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.profileService.getProfile().subscribe({
      next: (profile: Profile) => {
        this.profile = profile;
      }
    });
  }

  onSkillsChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.profile.skills = target.value.split(',').map((s: string) => s.trim());
  }

  onSubmit() {
    this.profileService.updateProfile(this.profile).subscribe({
      next: () => {
        this.successMessage = 'Perfil actualizado con éxito';
        setTimeout(() => this.successMessage = '', 3000);
      }
    });
  }
}
