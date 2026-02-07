import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExperienceService, WorkExperience } from '../../../../core/services/experience.service';

@Component({
  selector: 'app-admin-experience',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="space-y-8">
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-bold text-secondary">Gestionar Experiencia Laboral</h1>
        <button
          (click)="showForm = !showForm"
          class="bg-primary text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition"
        >
          {{ showForm ? 'Cancelar' : '+ Añadir Experiencia' }}
        </button>
      </div>

      <!-- Formulario -->
      <form
        *ngIf="showForm"
        (ngSubmit)="onSubmit()"
        #expForm="ngForm"
        class="bg-white rounded-lg shadow-lg p-8 space-y-6"
      >
        <div class="grid grid-cols-2 gap-6">
          <div>
            <label class="block font-semibold text-secondary mb-2">Empresa</label>
            <input
              type="text"
              name="company"
              [(ngModel)]="currentExperience.company"
              required
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
          </div>

          <div>
            <label class="block font-semibold text-secondary mb-2">Posición</label>
            <input
              type="text"
              name="position"
              [(ngModel)]="currentExperience.position"
              required
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
          </div>
        </div>

        <div>
          <label class="block font-semibold text-secondary mb-2">Descripción</label>
          <textarea
            name="description"
            [(ngModel)]="currentExperience.description"
            rows="4"
            required
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>
        </div>

        <div class="grid grid-cols-2 gap-6">
          <div>
            <label class="block font-semibold text-secondary mb-2">Ubicación</label>
            <input
              type="text"
              name="location"
              [(ngModel)]="currentExperience.location"
              required
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
          </div>

          <div>
            <label class="block font-semibold text-secondary mb-2">Fecha de Inicio</label>
            <input
              type="date"
              name="startDate"
              [(ngModel)]="currentExperience.startDate"
              required
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
          </div>
        </div>

        <div class="grid grid-cols-2 gap-6">
          <div>
            <label class="block font-semibold text-secondary mb-2">Fecha de Fin</label>
            <input
              type="date"
              name="endDate"
              [(ngModel)]="currentExperience.endDate"
              [attr.disabled]="currentExperience.isCurrent ? true : null"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
            >
          </div>

          <div class="flex items-center gap-4 pt-6">
            <input
              type="checkbox"
              name="isCurrent"
              [(ngModel)]="currentExperience.isCurrent"
              id="isCurrent"
              class="w-5 h-5"
            >
            <label for="isCurrent" class="font-semibold text-secondary">Actualmente trabajando aquí</label>
          </div>
        </div>

        <button
          type="submit"
          [disabled]="!expForm.valid"
          class="w-full bg-accent text-white py-3 rounded-lg font-bold hover:bg-opacity-90 transition disabled:opacity-50"
        >
          {{ editingId ? 'Actualizar Experiencia' : 'Crear Experiencia' }}
        </button>
      </form>

      <!-- Listado -->
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <table class="w-full">
          <thead class="bg-secondary text-white">
            <tr>
              <th class="px-6 py-4 text-left">Empresa</th>
              <th class="px-6 py-4 text-left">Posición</th>
              <th class="px-6 py-4 text-left">Ubicación</th>
              <th class="px-6 py-4 text-left">Período</th>
              <th class="px-6 py-4 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let exp of experience" class="border-b hover:bg-gray-50">
              <td class="px-6 py-4 font-semibold">{{ exp.company }}</td>
              <td class="px-6 py-4">{{ exp.position }}</td>
              <td class="px-6 py-4">{{ exp.location }}</td>
              <td class="px-6 py-4 text-sm">
                {{ getDateRange(exp) }}
              </td>
              <td class="px-6 py-4 space-x-2">
                <button
                  (click)="onEdit(exp)"
                  class="text-primary hover:underline"
                >
                  Editar
                </button>
                <button
                  (click)="onDelete(exp.id)"
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
export class AdminExperienceComponent implements OnInit {
  experience: WorkExperience[] = [];
  showForm = false;
  editingId: number | null = null;
  currentExperience: Partial<WorkExperience> = this.getEmptyExperience();

  constructor(private experienceService: ExperienceService) {}

  ngOnInit() {
    this.loadExperience();
  }

  loadExperience() {
    this.experienceService.getAll().subscribe({
      next: (exp: WorkExperience[]) => {
        this.experience = exp;
      }
    });
  }

  getEmptyExperience(): Partial<WorkExperience> {
    return {
      company: '',
      position: '',
      description: '',
      location: '',
      startDate: new Date(),
      endDate: undefined,
      isCurrent: false,
      createdAt: new Date()
    };
  }

  onSubmit() {
    if (this.editingId) {
      this.experienceService.update(this.editingId, this.currentExperience).subscribe({
        next: () => {
          this.loadExperience();
          this.resetForm();
        }
      });
    } else {
      this.experienceService.create(this.currentExperience as Omit<WorkExperience, 'id'>).subscribe({
        next: () => {
          this.loadExperience();
          this.resetForm();
        }
      });
    }
  }

  onEdit(exp: WorkExperience) {
    this.editingId = exp.id;
    this.currentExperience = { ...exp };
    this.showForm = true;
  }

  onDelete(id: number) {
    if (confirm('¿Estás seguro de que quieres eliminar esta experiencia?')) {
      this.experienceService.delete(id).subscribe({
        next: () => this.loadExperience()
      });
    }
  }

  resetForm() {
    this.currentExperience = this.getEmptyExperience();
    this.editingId = null;
    this.showForm = false;
  }

  getDateRange(exp: WorkExperience): string {
    const start = new Date(exp.startDate).toLocaleDateString('es-ES', { year: 'numeric', month: 'short' });
    const end = exp.endDate ? new Date(exp.endDate).toLocaleDateString('es-ES', { year: 'numeric', month: 'short' }) : 'Actualidad';
    return `${start} - ${end}`;
  }
}
