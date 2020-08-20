import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

import { Test } from '../tests/test.model';
import { TestService } from '../tests/test.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private testService: TestService) {}

  storeTests() {
    const tests = this.testService.getTests();
    this.http
      .put(
        'https://education-city-907b4.firebaseio.com/tests.json',
        tests
      )
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchTests() {
    return this.http
      .get<Test[]>(
        'https://education-city-907b4.firebaseio.com/tests.json'
      )
      .pipe(
        map(tests => {
          return tests.map(test => {
            return {
              ...test,
            };
          });
        }),
        tap(tests => {
          this.testService.setTests(tests);
        })
      );
  }
}
