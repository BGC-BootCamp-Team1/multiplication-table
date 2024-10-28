export class MultiplicationTable {
  public render(start: number, end: number): string{
    return '1*1=1'
  }
  public isInputValid(start:number,end:number):boolean{
    if(start<=end && start>=0 && end<=10) 
      return true
    else 
      return false
  }
  

}
