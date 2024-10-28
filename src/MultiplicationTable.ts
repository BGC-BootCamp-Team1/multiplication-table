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
  public genMultiplicationRow(start:number,rowNumber:number):string[]{
    let row:string[] = [];
    for(let i = start;i<rowNumber;i++){
      row.push(start+'*'+i+'='+start*i);
    }
    return row;
  }
  public genMultiplicationTable(start:number,end:number):string[][]{
    let multiplicationTable:string[][]=[];
    for(let i=start;i<end;i++){
      multiplicationTable[i]=this.genMultiplicationRow(start,i);
    }
    return multiplicationTable
  }

}
