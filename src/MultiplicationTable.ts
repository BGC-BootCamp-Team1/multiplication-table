export class MultiplicationTable {
  public generateMultiplicationTable(start: number, end: number): string{
    if(!this.secondInputLargerThanFirst(start, end)){
      return "";
    }else if(!this.inRange1to10(start, end)){
      return "";
    }else{
      return this.render(start, end);
    }
  }

  public secondInputLargerThanFirst(start: number, end: number): boolean{
    return false;
  }
  
  public inRange1to10(start: number, end: number): boolean
  {
    return false;
  }
  
  public generateTable(start: number, end: number): string
  {
    var result = "";
    
    return result;
  }
  

  public render(start: number, end: number): string{
    return '1*1=1'
  }
}
