import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProjectService, Project } from '../../../../core/services/project.service';

@Component({
  selector: 'app-admin-projects',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="space-y-8">
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-bold text-secondary">Gestionar Proyectos</h1>
        <button
          (click)="showForm = !showForm"
          class="bg-primary text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition"
        >
          {{ showForm ? 'Cancelar' : '+ Nuevo Proyecto' }}
        </button>
      </div>

      <!-- Formulario -->
      <form
        *ngIf="showForm"
        (ngSubmit)="onSubmit()"
        #projectForm="ngForm"
        class="bg-white rounded-lg shadow-lg p-8 space-y-6"
      >
        <div class="grid grid-cols-2 gap-6">
          <div>
            <label class="block font-semibold text-secondary mb-2">Título</label>
            <input
              type="text"
              name="title"
              [(ngModel)]="currentProject.title"
              required
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
          </div>

          <div>
            <label class="block font-semibold text-secondary mb-2">URL Imagen</label>
            <input
              type="url"
              name="imageUrl"
              [(ngModel)]="currentProject.imageUrl"
              required
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
          </div>
        </div>

        <div>
          <label class="block font-semibold text-secondary mb-2">Descripción</label>
          <textarea
            name="description"
            [(ngModel)]="currentProject.description"
            rows="4"
            required
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>
        </div>

        <div>
          <label class="block font-semibold text-secondary mb-2">Tecnologías (separadas por comas)</label>
          <input
            type="text"
            name="technologies"
            [value]="currentProject.technologies?.join(', ')"
            (change)="onTechChange(\$event)"
            required
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
        </div>

        <div class="grid grid-cols-2 gap-6">
          <div>
            <label class="block font-semibold text-secondary mb-2">URL Demo</label>
            <input
              type="url"
              name="demoUrl"
              [(ngModel)]="currentProject.demoUrl"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
          </div>

          <div>
            <label class="block font-semibold text-secondary mb-2">URL GitHub</label>
            <input
              type="url"
              name="githubUrl"
              [(ngModel)]="currentProject.githubUrl"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
          </div>
        </div>

        <div class="flex items-center gap-4">
          <input
            type="checkbox"
            name="featured"
            [(ngModel)]="currentProject.featured"
            id="featured"
            class="w-5 h-5"
          >
          <label for="featured" class="font-semibold text-secondary">Destacado</label>
        </div>

        <button
          type="submit"
          [disabled]="!projectForm.valid"
          class="w-full bg-accent text-white py-3 rounded-lg font-bold hover:bg-opacity-90 transition disabled:opacity-50"
        >
          {{ editingId ? 'Actualizar Proyecto' : 'Crear Proyecto' }}
        </button>
      </form>

      <!-- Listado -->
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <table class="w-full">
          <thead class="bg-secondary text-white">
            <tr>
              <th class="px-6 py-4 text-left">Título</th>
              <th class="px-6 py-4 text-left">Tecnologías</th>
              <th class="px-6 py-4 text-left">Destacado</th>
              <th class="px-6 py-4 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let project of projects" class="border-b hover:bg-gray-50">
              <td class="px-6 py-4 font-semibold">{{ project.title }}</td>
              <td class="px-6 py-4 text-sm">
                <span *ngFor="let tech of project.technologies" class="inline-block bg-primary text-white px-2 py-1 rounded mr-2 text-xs">
                  {{ tech }}
                </span>
              </td>
              <td class="px-6 py-4">
                <span *ngIf="project.featured" class="bg-accent text-white px-3 py-1 rounded text-sm">Sí</span>
                <span *ngIf="!project.featured" class="text-gray-500">No</span>
              </td>
              <td class="px-6 py-4 space-x-2">
                <button
                  (click)="onEdit(project)"
                  class="text-primary hover:underline"
                >
                  Editar
                </button>
                <button
                  (click)="onDelete(project.id)"
                  class="text-red-500 hover:underline"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `
})
export class AdminProjectsComponent implements OnInit {
  projects: Project[] = [];
  showForm = false;
  editingId: string | number | null = null;
  currentProject: Partial<Project> = this.getEmptyProject();

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.projectService.getAll().subscribe({
      next: (projects: Project[]) => {
        this.projects = projects;
      }
    });
  }

  getEmptyProject(): Partial<Project> {
    return {
      title: '',
      description: '',
      technologies: [],
      imageUrl: '',
      featured: false,
      createdAt: new Date()
    };
  }

  onTechChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.currentProject.technologies = target.value.split(',').map((t: string) => t.trim());
  }

  onSubmit() {
    if (this.editingId) {
      this.projectService.update(this.editingId, this.currentProject).subscribe({
        next: () => {
          this.loadProjects();
          this.resetForm();
        }
      });
    } else {
      this.projectService.create(this.currentProject as Omit<Project, 'id'>).subscribe({
        next: () => {
          this.loadProjects();
          this.resetForm();
        }
      });
    }
  }

  onEdit(project: Project) {
    this.editingId = project.id || null;
    this.currentProject = { ...project };
    this.showForm = true;
  }

  onDelete(id: string | number | undefined) {
    if (id && confirm('¿Estás seguro de que quieres eliminar este proyecto?')) {
      this.projectService.delete(id).subscribe({
        next: () => this.loadProjects()
      });
    }
  }

  resetForm() {
    this.currentProject = this.getEmptyProject();
    this.editingId = null;
    this.showForm = false;
  }
}
