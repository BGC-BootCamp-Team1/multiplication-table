export class MultiplicationTable {
  public render(start: number, end: number): string{
    return '1*1=1'
  }

  private isValid(start: number, end: number):boolean{
    return start<=end;
  }

  private isInRange(number:number):boolean{
    return number>=1 && number<=10;
  }

  private generateTable(start: number, end: number):number[][]{
    let martix:number[][] = [];
    for (let i = start; i <= end; i++) {
      for (let j = start; j <= i; j++) {
          martix.push([j,i]);
      }
    }
    return martix;
  }

  private contactMultiplicationFrom(start: number, end: number,martix:number[][]):string{
    let res:string = '';
    for (let index = start; index < end; index++) {
      res=res+`${martix[index][0]}*${martix[index][1]}=${martix[index][0]*martix[index][1]}`
      for (let j = 0; j < index; j++) {
        if (j=index-1) {
          res=res+'\n'
        }else{
          res=res+'\t'
        }
      }
    }
    return res;
  }

}
