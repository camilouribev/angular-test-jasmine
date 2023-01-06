
export class MetodosCondicionales {

  public var1:number = 1;
  

  constructor() {
  }

  public testingConditionals():string {
    if(this.var1 > 0){
      return 'Var 1 is possitive'
    }else if (this.var1 === 0){
      return 'Var 1 is 0'
    }
    return 'Var 1 is negative'
   }


   public testingStrings(arg: string):string{
    if((/[aeiou]/gi).test(arg)){
      return 'Your word contains vowels'
    }
    return 'That´s not a word!!!'
   }


   public testingEven(arg:number):string{
    if(arg%2==0){
      return 'Number is even'
    } 

    return 'Number is odd';

   }


}
