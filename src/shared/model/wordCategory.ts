import { TranslatedWord } from '../../shared/data/TranslatedWord';
import { Language } from '../../shared/model/language';


export class Category {
  [x: string]: any;
  lastModificationDate!: Date;
  Words: TranslatedWord[]=[];
  wordPairs: any;

  constructor( public id: number,
    public categoryName: string,
    public currentDate: Date,
    public sourceLanguage: Language,
    public targetLanguage: Language,
    words: TranslatedWord[] = [] 

   
  ) {
    this.Words = words;

   
  }


  fullName() : string{
    return this.categoryName

  }

  public calculateNumberOfWords(category: Category): number {
    return category.Words.length;
  }

  getDateAsString() : string {
    const today = new Date();
    return today.toLocaleDateString();
  }
}


export { Language };
    