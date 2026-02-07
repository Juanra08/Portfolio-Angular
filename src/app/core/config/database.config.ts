/**
 * Servicio de Configuración de Base de Datos
 * Permite cambiar entre JSON Server, Firebase, Supabase, etc.
 */

export type DatabaseType = 'json-server' | 'firebase' | 'supabase' | 'mongodb' | 'custom';

export interface DatabaseConfig {
  type: DatabaseType;
  firebaseConfig?: any;
  supabaseUrl?: string;
  supabaseKey?: string;
  mongodbUri?: string;
  customApiUrl?: string;
}

export class DatabaseService {
  private static config: DatabaseConfig = {
    type: 'json-server', // ← Cambiar aquí para seleccionar BD
    customApiUrl: 'http://localhost:3001'
  };

  static getConfig(): DatabaseConfig {
    return this.config;
  }

  static setConfig(config: DatabaseConfig): void {
    this.config = config;
  }

  static isDatabaseActive(type: DatabaseType): boolean {
    return this.config.type === type;
  }

  static getApiUrl(): string {
    return this.config.customApiUrl || 'http://localhost:3001';
  }

  // Configuración preestablecidas
  static useJsonServer(): void {
    this.setConfig({
      type: 'json-server',
      customApiUrl: 'http://localhost:3001'
    });
  }

  static useFirebase(firebaseConfig: any): void {
    this.setConfig({
      type: 'firebase',
      firebaseConfig
    });
  }

  static useSupabase(url: string, key: string): void {
    this.setConfig({
      type: 'supabase',
      supabaseUrl: url,
      supabaseKey: key
    });
  }

  static useCustomApi(apiUrl: string): void {
    this.setConfig({
      type: 'custom',
      customApiUrl: apiUrl
    });
  }
}
