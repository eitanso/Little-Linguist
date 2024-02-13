import { TranslatedWord } from '../../shared/data/TranslatedWord';
import { Language } from '../../shared/model/language';


export class Category {
  lastModificationDate!: Date;
  Words: TranslatedWord[]=[];

  constructor( public id: number,
    public categoryName: string,
    public sourceLanguage: Language,
    public targetLanguage: Language,
    words: TranslatedWord[] = [] 

   
  ) {
    this.Words = words;
    this.lastModificationDate =new Date();
   
  }


  fullName() : string{
    return this.categoryName

  }

  public calculateNumberOfWords(category: Category): number {
    return category.Words.length;
  }

  getDateAsString() : string {
    
    return this.lastModificationDate.toLocaleDateString();
  }
  
}


export { Language };
    