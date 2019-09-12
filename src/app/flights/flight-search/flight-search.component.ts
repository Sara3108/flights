import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';


@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {
  fType: string="one-way";
  form: FormGroup;
  multi:FormArray;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      a:'',
      multi: fb.array([this.createFlight()]),
    })
  }

  createFlight(): FormGroup {
    return this.fb.group({
      origin: '',
      dist: '',
      date: ''
    })
  }

  addFlight():void{
    this.multi= this.form.get('multi') as FormArray;
    this.multi.push(this.createFlight());

  }
  ngOnInit() {
  }

  flightType(e) {
    this.fType = e;
    
  }

  search(){
    console.log(this.form.controls)
  }

}
