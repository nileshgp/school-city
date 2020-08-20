import { Component, OnInit, Input } from '@angular/core';
import { Test } from '../../test.model';
import { TestsComponent } from '../../tests.component';

@Component({
  selector: 'app-test-item',
  templateUrl: './test-item.component.html',
  styleUrls: ['./test-item.component.css'],
})


export class TestItemComponent implements OnInit {
  @Input() test: Test;
  @Input() index: number;

  average = 0;

  ngOnInit() {
    // turn all tests to an array


    const stringOfNumbers = ([this.test.englishTest1, this.test.englishTest2, this.test.englishTest3,
      this.test.mathTest1, this.test.mathTest2, this.test.mathTest3,
      this.test.scienceTest1, this.test.scienceTest2, this.test.scienceTest3]);
      // turn string of numbers in an array to array numbers in an array
    const arrayOfScores = stringOfNumbers.map(Number);
    // console.log(arrayOfScores);

    // remove empty numbers from array from array
    function filter_array(testArray: string | any[]) {
      let index = -1;
      const arrLength = testArray ? testArray.length : 0;
      let resIndex = -1;
      const result = [];
      while (++index < arrLength) {
          const value = testArray[index];
          if (value) {
              result[++resIndex] = value;
          }
      }
      return result;
  }
    const cleanArray = filter_array(arrayOfScores);
    // console.log(cleanArray);

    // get average of array
    const arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length - 1;
    const averageOfArray = (arrAvg(cleanArray));
    const roundNumberOfArray = Math.round(averageOfArray);
    // console.log(roundNumberOfArray);
    this.average = roundNumberOfArray;
  }

}

