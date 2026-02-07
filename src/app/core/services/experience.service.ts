import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface WorkExperience {
  id: number;
  company: string;
  position: string;
  description: string;
  startDate: Date;
  endDate?: Date;
  isCurrent: boolean;
  location: string;
  createdAt: Date;
}

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private apiUrl = 'http://localhost:3000/experience';

  constructor(private http: HttpClient) {}

  getAll(): Observable<WorkExperience[]> {
    return this.http.get<WorkExperience[]>(this.apiUrl);
  }

  getById(id: number): Observable<WorkExperience> {
    return this.http.get<WorkExperience>(`${this.apiUrl}/${id}`);
  }

  create(experience: Omit<WorkExperience, 'id'>): Observable<WorkExperience> {
    return this.http.post<WorkExperience>(this.apiUrl, experience);
  }

  update(id: number, experience: Partial<WorkExperience>): Observable<WorkExperience> {
    return this.http.put<WorkExperience>(`${this.apiUrl}/${id}`, experience);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
