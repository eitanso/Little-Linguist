export class Category {
  static lastModifiedDate(lastModifiedDate: any, lastModifiedDate1: Category) {
    throw new Error('Method not implemented.');
  }
    constructor( public name: string,
      public id: number,
      public LastModifiedDate: Date, 
      public sourceLanguage: Language,
      public targetLanguage: Language){
  
      }
    
}