import { Component, OnInit, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Test } from '../../test.model';
import { TestService } from '../../test.service';

@Component({
  selector: 'app-englishtest1',
  templateUrl: './englishtest1.component.html',
  styleUrls: ['./englishtest1.component.css']
})


export class Englishtest1Component implements OnInit, OnDestroy {
  tests: Test[];
  subscription: Subscription;

  showData = false;
  constructor(private testService: TestService,
              private router: Router,
              private route: ActivatedRoute) { }

testAverage = 0;
highestScore = [];
lowestScore = [];
testsCompleted = 0;
scoresByScore = [];

ngOnInit() {
  this.subscription = this.testService.testsChanged
    .subscribe(
      (tests: Test[]) => {
        this.tests = tests;

        const eTests = [];
        const studentScoresArray = [];
        let i = 0;

        for (i = 0; i < (tests).length; i++) {
          eTests.push([tests[i].englishTest1]);
          studentScoresArray.push({name: tests[i].student, score: Number(tests[i].englishTest1)});
        }

        const sortbyscore = Object.assign({}, (studentScoresArray.sort((a, b) => (a.score < b.score) ? 1 : -1)));

        this.scoresByScore = sortbyscore;
        this.highestScore = (sortbyscore[0]);

        const lastEl = Object.keys(sortbyscore).length;
        this.lowestScore = (sortbyscore[lastEl - 1 ]);

        const eTestArray = (eTests).map(Number);


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

        const cleanTestArray = filter_array(eTestArray);
        const testsCompleted = eTestArray.length;
        const arrAvg = arr => arr.reduce((a,b) => a + b, 0) / testsCompleted;
        const averageOfArray = (arrAvg(cleanTestArray));

        this.testsCompleted = testsCompleted;
        this.testAverage = Math.round(averageOfArray);

      }
    );
  this.tests = this.testService.getTests();
}


ngOnDestroy() {
  this.subscription.unsubscribe();
}

  OnShowData() {
    this.showData = !this.showData;
  }

}
