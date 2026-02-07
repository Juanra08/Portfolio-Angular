import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProfileService, Profile } from '../../../core/services/profile.service';

@Component({
  selector: 'app-portfolio-layout',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  template: `
    <nav class="bg-secondary text-white shadow-lg sticky top-0 z-50">
      <div class="max-w-6xl mx-auto px-6 py-4">
        <div class="flex justify-between items-center">
          <a routerLink="/" class="text-2xl font-bold">{{ profile?.name || 'Portfolio' }}</a>
          <ul class="flex gap-6">
            <li><a routerLink="/home" class="hover:text-accent transition">Inicio</a></li>
            <li><a routerLink="/projects" class="hover:text-accent transition">Proyectos</a></li>
            <li><a routerLink="/experience" class="hover:text-accent transition">Experiencia</a></li>
            <li><a routerLink="/contact" class="hover:text-accent transition">Contacto</a></li>
            <li><a routerLink="/admin" class="hover:text-accent transition">Admin</a></li>
          </ul>
        </div>
      </div>
    </nav>

    <main class="min-h-screen">
      <router-outlet></router-outlet>
    </main>

    <footer class="bg-secondary text-white py-8 text-center">
      <div class="max-w-6xl mx-auto">
        <p>&copy; 2024 {{ profile?.name }}. Todos los derechos reservados.</p>
      </div>
    </footer>
  `,
  styles: [`
    :host ::ng-deep {
      .text-secondary { @apply text-gray-900; }
      .bg-secondary { @apply bg-gray-900; }
      .text-accent { @apply text-green-500; }
    }
  `]
})
export class PortfolioLayoutComponent implements OnInit {
  profile: Profile | null = null;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.profileService.getProfile().subscribe({
      next: (profile) => this.profile = profile,
      error: () => this.profile = null
    });
  }
}
