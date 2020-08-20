import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test-edit',
  templateUrl: './test-edit.component.html',
  styleUrls: ['./test-edit.component.css']
})
export class TestEditComponent implements OnInit {
  id: number;
  editMode = false;
  testForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private testService: TestService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  onSubmit() {
    if (this.editMode) {
      this.testService.updateTest(this.id, this.testForm.value);
    } else {
      this.testService.addTest(this.testForm.value);
    }
    this.onCancel();
  }


  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private initForm() {
    let student = '';
    let englishTest1: number;
    let englishTest2: number;
    let englishTest3: number;
    let mathTest1: number;
    let mathTest2: number;
    let mathTest3: number;
    let scienceTest1: number;
    let scienceTest2: number;
    let scienceTest3: number;

    if (this.editMode) {
      const test = this.testService.getTest(this.id);
      student = test.student;
      englishTest1 = test.englishTest1;
      englishTest2 = test.englishTest2;
      englishTest3 = test.englishTest3;
      mathTest1 = test.mathTest1;
      mathTest2 = test.mathTest2;
      mathTest3 = test.mathTest3;
      scienceTest1 = test.scienceTest1;
      scienceTest2 = test.scienceTest1;
      scienceTest3 = test.scienceTest1;
    }



    this.testForm = new FormGroup({
      student: new FormControl(student),
      englishTest1: new FormControl(englishTest1),
      englishTest2: new FormControl(englishTest2),
      englishTest3: new FormControl(englishTest3),
      mathTest1: new FormControl(mathTest1),
      mathTest2: new FormControl(mathTest2),
      mathTest3: new FormControl(mathTest3),
      scienceTest1: new FormControl(scienceTest1),
      scienceTest2: new FormControl(scienceTest2),
      scienceTest3: new FormControl(scienceTest3)
    });
  }
}
