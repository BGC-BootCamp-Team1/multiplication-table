export class MultiplicationTable {
  public render(start: number, end: number): string{
    return '1*1=1'
  }

  private isValid(start: number, end: number):boolean{
    return start<=end;
  }

}
