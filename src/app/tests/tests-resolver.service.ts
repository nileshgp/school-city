import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { Test } from './test.model';
import { DataStorageService } from '../shared/data-storage.service';
import { TestService } from './test.service';

@Injectable({ providedIn: 'root' })
export class TestsResolverService implements Resolve<Test[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private testsService: TestService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const tests = this.testsService.getTests();

    if (tests.length === 0) {
      return this.dataStorageService.fetchTests();
    } else {
      return tests;
    }
  }
}
