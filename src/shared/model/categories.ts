import { Language } from "./language";

export class Category {
  static id: number;
  static lastModifiedDate(lastModifiedDate: any, lastModifiedDate1: Category) {
    throw new Error('Method not implemented.');
  }
    constructor(
      public id: number,
      public name: string,
      public LastModifiedDate: Date, 
      public sourceLanguage: Language,
      public targetLanguage: Language){
  
      }
    
}