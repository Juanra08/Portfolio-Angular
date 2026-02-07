import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService, Project } from '../../../../core/services/project.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="min-h-screen bg-gray-50 py-20">
      <div class="max-w-6xl mx-auto px-6">
        <h1 class="text-5xl font-bold mb-12 text-center text-secondary">Mis Proyectos</h1>

        <div class="grid grid-cols-3 gap-8">
          <div *ngFor="let project of projects" class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105">
            <img [src]="project.imageUrl" [alt]="project.title" class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-2xl font-bold text-secondary mb-2">{{ project.title }}</h3>
              <p class="text-gray-600 mb-4">{{ project.description }}</p>
              
              <div class="mb-4">
                <h4 class="font-semibold text-secondary mb-2">Tecnologías:</h4>
                <div class="flex flex-wrap gap-2">
                  <span *ngFor="let tech of project.technologies" class="bg-primary text-white text-xs px-3 py-1 rounded-full">
                    {{ tech }}
                  </span>
                </div>
              </div>

              <div class="flex gap-4">
                <a *ngIf="project.demoUrl" [href]="project.demoUrl" target="_blank" class="bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition">
                  Ver Demo
                </a>
                <a *ngIf="project.githubUrl" [href]="project.githubUrl" target="_blank" class="border-2 border-primary text-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        <div *ngIf="projects.length === 0" class="text-center py-12">
          <p class="text-xl text-gray-500">No hay proyectos disponibles</p>
        </div>
      </div>
    </section>
  `
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projectService.getAll().subscribe({
      next: (projects) => this.projects = projects,
      error: () => this.projects = []
    });
  }
}
