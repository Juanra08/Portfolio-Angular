import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { collection, getDocs, doc, getDoc, addDoc, updateDoc, deleteDoc, Firestore } from 'firebase/firestore';
import { db } from '../config/firebase.config';

export interface Project {
  id?: string | number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  createdAt?: Date;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = 'http://localhost:3001/projects';
  private useFirebase = true; // ⚠️ Cambiar a true para usar Firebase en lugar de JSON Server

  constructor(private http: HttpClient) {}

  getAll(): Observable<Project[]> {
    if (this.useFirebase) {
      return new Observable(observer => {
        this.getAllFirebase().then(projects => {
          observer.next(projects);
          observer.complete();
        }).catch(error => {
          observer.error(error);
        });
      });
    }
    return this.http.get<Project[]>(this.apiUrl);
  }

  getById(id: string | number): Observable<Project> {
    if (this.useFirebase) {
      return new Observable(observer => {
        this.getByIdFirebase(String(id)).then(project => {
          observer.next(project);
          observer.complete();
        }).catch(error => {
          observer.error(error);
        });
      });
    }
    return this.http.get<Project>(`${this.apiUrl}/${id}`);
  }

  create(project: Omit<Project, 'id'>): Observable<Project> {
    if (this.useFirebase) {
      return new Observable(observer => {
        this.createFirebase(project).then(newProject => {
          observer.next(newProject);
          observer.complete();
        }).catch(error => {
          observer.error(error);
        });
      });
    }
    return this.http.post<Project>(this.apiUrl, project);
  }

  update(id: string | number, project: Partial<Project>): Observable<Project> {
    if (this.useFirebase) {
      return new Observable(observer => {
        this.updateFirebase(String(id), project).then(updatedProject => {
          observer.next(updatedProject);
          observer.complete();
        }).catch(error => {
          observer.error(error);
        });
      });
    }
    return this.http.put<Project>(`${this.apiUrl}/${id}`, project);
  }

  delete(id: string | number): Observable<void> {
    if (this.useFirebase) {
      return new Observable(observer => {
        this.deleteFirebase(String(id)).then(() => {
          observer.next();
          observer.complete();
        }).catch(error => {
          observer.error(error);
        });
      });
    }
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // ===== MÉTODOS FIREBASE =====

  private async getAllFirebase(): Promise<Project[]> {
    const querySnapshot = await getDocs(collection(db, 'projects'));
    return querySnapshot.docs.map(document => ({
      id: document.id,
      ...document.data()
    } as Project));
  }

  private async getByIdFirebase(id: string): Promise<Project> {
    const docSnap = await getDoc(doc(db, 'projects', id));
    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data()
      } as Project;
    }
    throw new Error('Proyecto no encontrado');
  }

  private async createFirebase(project: Omit<Project, 'id'>): Promise<Project> {
    const docRef = await addDoc(collection(db, 'projects'), {
      ...project,
      createdAt: new Date()
    });
    return {
      id: docRef.id,
      ...project,
      createdAt: new Date()
    };
  }

  private async updateFirebase(id: string, project: Partial<Project>): Promise<Project> {
    await updateDoc(doc(db, 'projects', id), project);
    return this.getByIdFirebase(id);
  }

  private async deleteFirebase(id: string): Promise<void> {
    await deleteDoc(doc(db, 'projects', id));
  }
}
