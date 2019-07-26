import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  reactiveform: FormGroup;
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.reactiveform = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      tel: new FormControl('', Validators.required),
    })

    // this.reactiveform = this.fb.group({
    //   name: ['', Validators.required],
    //   email: ['', Validators.required],
    //   tel: ['', Validators.required]
    // })
  }

  onSubmit() {
    console.log(this.reactiveform);
  }
}
