import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService, Profile } from '../../../../core/services/profile.service';
import { ProjectService, Project } from '../../../../core/services/project.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  providers: [ProfileService, ProjectService],
  template: `
    <section class="min-h-screen bg-gradient-to-r from-primary to-secondary text-white flex items-center">
      <div class="max-w-6xl mx-auto px-6 py-20 w-full">
        <div class="grid grid-cols-2 gap-12 items-center">
          <div>
            <h1 class="text-5xl font-bold mb-6">{{ profile?.name }}</h1>
            <p class="text-2xl text-accent mb-6">{{ profile?.title }}</p>
            <p class="text-lg mb-8 text-gray-200">{{ profile?.bio }}</p>
            <div class="flex gap-4">
              <a href="mailto:{{ profile?.email }}" class="bg-accent text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition">
                Contactarme
              </a>
              <a href="{{ profile?.socialLinks?.github }}" target="_blank" class="border-2 border-accent text-accent px-8 py-3 rounded-lg hover:bg-accent hover:text-white transition">
                GitHub
              </a>
            </div>
          </div>
          <div *ngIf="profile && profile.profileImage" class="flex justify-center">
            <img [src]="profile.profileImage" alt="{{ profile.name }}" class="w-64 h-64 rounded-full border-4 border-accent">
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-4xl font-bold mb-12 text-center text-secondary">Habilidades</h2>
        <div class="grid grid-cols-4 gap-4">
          <span *ngFor="let skill of profile?.skills" class="bg-primary text-white px-6 py-3 rounded-lg text-center">
            {{ skill }}
          </span>
        </div>
      </div>
    </section>

    <section class="py-20">
      <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-4xl font-bold mb-12 text-center text-secondary">Proyectos Destacados</h2>
        <div class="grid grid-cols-3 gap-8">
          <div *ngFor="let project of featuredProjects" class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <img [src]="project.imageUrl" [alt]="project.title" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold text-secondary mb-2">{{ project.title }}</h3>
              <p class="text-gray-600 mb-4">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span *ngFor="let tech of project.technologies" class="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
                  {{ tech }}
                </span>
              </div>
              <div class="flex gap-4">
                <a *ngIf="project.demoUrl" [href]="project.demoUrl" target="_blank" class="text-primary hover:underline">Demo</a>
                <a *ngIf="project.githubUrl" [href]="project.githubUrl" target="_blank" class="text-primary hover:underline">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HomeComponent implements OnInit {
  profile: Profile | null = null;
  featuredProjects: Project[] = [];

  constructor(
    private profileService: ProfileService,
    private projectService: ProjectService
  ) {}

  ngOnInit() {
    this.profileService.getProfile().subscribe({
      next: (profile: Profile) => this.profile = profile,
      error: () => this.profile = null
    });

    this.projectService.getAll().subscribe({
      next: (projects: Project[]) => this.featuredProjects = projects.filter((p: Project) => p.featured).slice(0, 3),
      error: () => this.featuredProjects = []
    });
  }
}
