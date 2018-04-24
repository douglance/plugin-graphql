import Model from './model';

export type DispatchFunction = (action: string, data: Data) => Promise<any>;

export interface ActionParams {
  commit: any;
  dispatch: DispatchFunction;
  getters: any;
  rootGetters: any;
  rootState: any;
  state: any;
  filter?: Filter;
  id?: number;
  data?: Data;
  args?: Arguments;
  bypassCache?: boolean;
}

export interface Data {
  [index: string]: any;
}

export interface Filter extends Object {
  [index: string]: any;
}

export interface Arguments extends Object {
  [index: string]: any;
}

export interface ORMModel {
  name: string;
  entity: string;
  eagerLoad: undefined | Array<string>;

  fields (): any;
  dispatch (name: string, ...params: Array<any>): any;
  getters (name: string, ...params: Array<any>): any;
  attr (defaultValue: any): Field;
  boolean (defaultValue: boolean): Field;
  number (defaultValue: number): Field;
  string (defaultValue: string): Field;
}

export interface Field {
  related?: ORMModel;
  parent?: ORMModel;
  localKey?: string;
  foreignKey?: string;
}
