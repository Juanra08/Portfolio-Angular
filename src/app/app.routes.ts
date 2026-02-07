import { Routes } from '@angular/router';
import { PortfolioLayoutComponent } from './features/portfolio/layout/portfolio-layout.component';
import { AdminLayoutComponent } from './features/admin/layout/admin-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: PortfolioLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadComponent: () => import('./features/portfolio/pages/home/home.component').then(m => m.HomeComponent)
      },
      {
        path: 'projects',
        loadComponent: () => import('./features/portfolio/pages/projects/projects.component').then(m => m.ProjectsComponent)
      },
      {
        path: 'experience',
        loadComponent: () => import('./features/portfolio/pages/experience/experience.component').then(m => m.ExperienceComponent)
      },
      {
        path: 'contact',
        loadComponent: () => import('./features/portfolio/pages/contact/contact.component').then(m => m.ContactComponent)
      }
    ]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () => import('./features/admin/pages/dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
      {
        path: 'projects',
        loadComponent: () => import('./features/admin/pages/projects/projects.component').then(m => m.AdminProjectsComponent)
      },
      {
        path: 'experience',
        loadComponent: () => import('./features/admin/pages/experience/experience.component').then(m => m.AdminExperienceComponent)
      },
      {
        path: 'profile',
        loadComponent: () => import('./features/admin/pages/profile/profile.component').then(m => m.AdminProfileComponent)
      }
    ]
  }
];
