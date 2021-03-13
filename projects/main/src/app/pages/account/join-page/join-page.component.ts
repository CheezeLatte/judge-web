import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder} from '@angular/forms';
interface formObjects {
  id: string,
  name: string,
  password: string,
  confirmPassword: string,
  gradeNum: string,
  email: string,
  affiliation: string
}
@Component({
  selector: 'sw-join-page',
  templateUrl: './join-page.component.html',
  styleUrls: ['./join-page.component.scss']
})
export class JoinPageComponent implements OnInit {
  joinForm;
  formSelected = new EventEmitter();
  constructor(
    private formBuilder: FormBuilder,
    ){
      this.joinForm = this.formBuilder.group({
        id: '',
        name: '',
        password: '',
        gradeNum: '',
        email: '',
        affiliation: ''
      })
    }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  onSubmit(value:string ){

  }
}
