import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectService, Project } from '../../../../core/services/project.service';
import { ExperienceService, WorkExperience } from '../../../../core/services/experience.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="space-y-8">
      <h1 class="text-3xl font-bold text-secondary">Dashboard</h1>

      <div class="grid grid-cols-3 gap-6">
        <div class="bg-white rounded-lg shadow-lg p-6 border-l-4 border-primary">
          <h3 class="text-gray-500 text-sm font-semibold uppercase">Total Proyectos</h3>
          <p class="text-4xl font-bold text-secondary mt-2">{{ totalProjects }}</p>
        </div>

        <div class="bg-white rounded-lg shadow-lg p-6 border-l-4 border-accent">
          <h3 class="text-gray-500 text-sm font-semibold uppercase">Experiencias</h3>
          <p class="text-4xl font-bold text-secondary mt-2">{{ totalExperience }}</p>
        </div>

        <div class="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
          <h3 class="text-gray-500 text-sm font-semibold uppercase">Proyectos Destacados</h3>
          <p class="text-4xl font-bold text-secondary mt-2">{{ featuredProjects }}</p>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-lg p-6">
        <h2 class="text-2xl font-bold text-secondary mb-4">Acciones Rápidas</h2>
        <div class="grid grid-cols-2 gap-4">
          <a routerLink="/admin/profile" class="bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition text-center cursor-pointer">
            Editar Perfil
          </a>
          <a routerLink="/admin/projects" class="bg-accent text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition text-center cursor-pointer">
            Gestionar Proyectos
          </a>
          <a routerLink="/admin/experience" class="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition text-center cursor-pointer">
            Gestionar Experiencia
          </a>
          <a routerLink="/" class="border-2 border-secondary text-secondary px-6 py-3 rounded-lg hover:bg-secondary hover:text-white transition text-center cursor-pointer">
            Ver Portfolio
          </a>
        </div>
      </div>
    </div>
  `
})
export class DashboardComponent implements OnInit {
  totalProjects = 0;
  totalExperience = 0;
  featuredProjects = 0;

  constructor(
    private projectService: ProjectService,
    private experienceService: ExperienceService
  ) {}

  ngOnInit() {
    this.projectService.getAll().subscribe({
      next: (projects: Project[]) => {
        this.totalProjects = projects.length;
        this.featuredProjects = projects.filter((p: Project) => p.featured).length;
      }
    });

    this.experienceService.getAll().subscribe({
      next: (exp: WorkExperience[]) => {
        this.totalExperience = exp.length;
      }
    });
  }
}
