import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Test } from './test.model';

@Injectable()
export class TestService {
  testsChanged = new Subject<Test[]>();

  private tests: Test[] = [];


  constructor() {}

  setTests(tests: Test[]) {
    this.tests = tests;
    this.testsChanged.next(this.tests.slice());
  }


  getTests() {
    return this.tests.slice();
  }

  getTest(index: number) {
    return this.tests[index];
  }

  addTest(test: Test) {
    this.tests.push(test);
    this.testsChanged.next(this.tests.slice());
  }


  updateTest(index: number, newTest: Test) {
    this.tests[index] = newTest;
    this.testsChanged.next(this.tests.slice());
  }

  deleteTest(index: number) {
    this.tests.splice(index, 1);
    this.testsChanged.next(this.tests.slice());
  }


}
