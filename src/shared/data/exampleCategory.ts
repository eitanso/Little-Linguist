
import { Language } from "../../shared/model/language";
import { Category } from "../../shared/model/wordCategory";
import { TranslatedWord } from "./TranslatedWord";


export const WORD_CATEGORIES: Category[] = [
  new Category(0, 'Colors', Language.English, Language.Hebrew, [
    new TranslatedWord('blue', 'כחול'),
    new TranslatedWord('red', 'אדום'),
    new TranslatedWord('green', 'ירוק'),
  ]),
  new Category(1, 'Animals', Language.English, Language.Hebrew, [
    new TranslatedWord('cat', 'חתול'),
    new TranslatedWord('dog', 'כלב'),
    new TranslatedWord('fish', 'דג'),
  ]),
  new Category(2, 'Numbers', Language.English, Language.Hebrew, [
    new TranslatedWord('one', 'אחד'),
    new TranslatedWord('two', 'שתיים'),
    new TranslatedWord('three', 'שלוש'),
  ]), 
  new Category(3, 'Numbers', Language.English, Language.Hebrew, [
    new TranslatedWord('one', 'אחד'),
    new TranslatedWord('two', 'שתיים'),
    new TranslatedWord('three', 'שלוש'),
  ]),
];