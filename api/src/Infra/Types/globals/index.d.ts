declare function env(key?: string, defaultValue?: any): any;
declare namespace Express {
  export interface Response {
    error(message: string, name: string, status?: number): any;
    ok(data?: any, status?: number): any;
  }
}

