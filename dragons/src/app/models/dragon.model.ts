export interface DragonModel{
  createdAt: Date;
  headers?: any;
  histories: any[];
  id: number;
  name: string;
  type: string;
}

export interface RequestCreate {
  name: string;
  type: string;
}

export interface ResponseCreate {
  name: string;
  type: string;
  createdAt: Date;
  id: number;
}

export interface responseDragon{
  
}

export interface RequestUpdate {
  name: string;
  type: string;
}

export interface ResponseUpdate {
  name: string;
  type: string;
  createdAt: Date;
}