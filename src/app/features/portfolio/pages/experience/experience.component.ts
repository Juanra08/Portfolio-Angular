import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceService, WorkExperience } from '../../../../core/services/experience.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="min-h-screen bg-gray-50 py-20">
      <div class="max-w-4xl mx-auto px-6">
        <h1 class="text-5xl font-bold mb-12 text-center text-secondary">Experiencia Laboral</h1>

        <div class="space-y-8">
          <div *ngFor="let exp of experience" class="bg-white rounded-lg shadow-lg p-8 border-l-4 border-primary hover:shadow-xl transition">
            <div class="flex justify-between items-start mb-4">
              <div>
                <h3 class="text-2xl font-bold text-secondary">{{ exp.position }}</h3>
                <p class="text-lg text-primary font-semibold">{{ exp.company }}</p>
              </div>
              <span class="bg-accent text-white px-4 py-2 rounded-lg text-sm">
                {{ exp.isCurrent ? 'Actualmente' : getDateRange(exp) }}
              </span>
            </div>

            <p class="text-gray-600 mb-2">📍 {{ exp.location }}</p>
            <p class="text-gray-700 mt-4">{{ exp.description }}</p>
          </div>
        </div>

        <div *ngIf="experience.length === 0" class="text-center py-12">
          <p class="text-xl text-gray-500">No hay experiencia disponible</p>
        </div>
      </div>
    </section>
  `
})
export class ExperienceComponent implements OnInit {
  experience: WorkExperience[] = [];

  constructor(private experienceService: ExperienceService) {}

  ngOnInit() {
    this.experienceService.getAll().subscribe({
      next: (exp) => this.experience = exp.sort((a, b) => {
        const dateA = new Date(a.startDate);
        const dateB = new Date(b.startDate);
        return dateB.getTime() - dateA.getTime();
      }),
      error: () => this.experience = []
    });
  }

  getDateRange(exp: WorkExperience): string {
    const start = new Date(exp.startDate).toLocaleDateString('es-ES', { year: 'numeric', month: 'short' });
    const end = exp.endDate ? new Date(exp.endDate).toLocaleDateString('es-ES', { year: 'numeric', month: 'short' }) : 'Actualidad';
    return `${start} - ${end}`;
  }
}
