import { Component, OnInit, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Test } from '../test.model';
import { TestService } from '../test.service';



@Component({
  selector: 'app-subjects-list',
  templateUrl: './subjects-list.component.html',
  styleUrls: ['./subjects-list.component.css'],
})


export class SubjectsListComponent implements OnInit, OnDestroy {
  tests: Test[];
  subscription: Subscription;

  constructor(private testService: TestService,
              private router: Router,
              private route: ActivatedRoute) {
}

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

        // let i = 0;
        // for (i = 0; i < (tests).length; i++) {

        //   const ETest1 = [({name: tests[i].student, score: Number(tests[i].englishTest1)})];
        //   const ETest2 = [({name: tests[i].student, score: Number(tests[i].englishTest2)})];
        //   const ETest3 = [({name: tests[i].student, score: Number(tests[i].englishTest3)})];
        // }

      }
    );
  this.tests = this.testService.getTests();
}


ngOnDestroy() {
  this.subscription.unsubscribe();
}
}







