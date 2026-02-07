import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  template: `
    <div class="flex h-screen">
      <!-- Sidebar -->
      <aside class="w-64 bg-secondary text-white shadow-lg">
        <div class="p-6">
          <h1 class="text-2xl font-bold text-accent">Admin Panel</h1>
        </div>
        
        <nav class="space-y-2 px-4">
          <a routerLink="dashboard" class="block px-4 py-2 rounded-lg hover:bg-opacity-10 hover:bg-white transition">
            📊 Dashboard
          </a>
          <a routerLink="profile" class="block px-4 py-2 rounded-lg hover:bg-opacity-10 hover:bg-white transition">
            👤 Perfil
          </a>
          <a routerLink="projects" class="block px-4 py-2 rounded-lg hover:bg-opacity-10 hover:bg-white transition">
            🚀 Proyectos
          </a>
          <a routerLink="experience" class="block px-4 py-2 rounded-lg hover:bg-opacity-10 hover:bg-white transition">
            💼 Experiencia
          </a>
          <a href="/" class="block px-4 py-2 rounded-lg hover:bg-opacity-10 hover:bg-white transition">
            👁️ Ver Portfolio
          </a>
        </nav>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 overflow-auto">
        <header class="bg-white shadow-sm px-8 py-4">
          <h2 class="text-xl font-bold text-secondary">Panel Administrativo</h2>
        </header>
        <div class="p-8">
          <router-outlet></router-outlet>
        </div>
      </main>
    </div>
  `
})
export class AdminLayoutComponent {}
