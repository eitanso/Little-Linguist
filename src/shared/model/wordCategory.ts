import { TranslatedWord } from '../../data/TranslatedWord';
import { Language } from '../../shared/model/wordCategory';


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

    