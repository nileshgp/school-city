export class Test {
  public student: string;
  public englishTest1: number;
  public englishTest2: number;
  public englishTest3: number;
  public mathTest1: number;
  public mathTest2: number;
  public mathTest3: number;
  public scienceTest1: number;
  public scienceTest2: number;
  public scienceTest3: number;

  constructor(student: string,
              englishTest1: number, englishTest2: number, englishTest3: number,
              mathTest1: number, mathTest2: number, mathTest3: number,
              scienceTest1: number, scienceTest2: number, scienceTest3: number) {
    this.student = student;
    this.englishTest1 = englishTest1;
    this.englishTest2 = englishTest2;
    this.englishTest3 = englishTest3;
    this.mathTest1 = mathTest1;
    this.mathTest2 = mathTest2;
    this.mathTest3 = mathTest3;
    this.scienceTest1 = scienceTest1;
    this.scienceTest2 = scienceTest2;
    this.scienceTest3 = scienceTest3;
}
}
