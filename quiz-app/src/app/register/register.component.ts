import { Component, OnInit } from '@angular/core';
import { QuestionService} from "../question.service"
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
//email pattern to validate form
emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
//get difficulty value from form
difficulty: any //works with [(ngModel on html select tag)]
firstName: string
lastName: string
email: string
questions: any;

  constructor(private _questionService:QuestionService) { 
    
  }
  ngOnInit() {
  }
    
    onSubmitForm() {
      this._questionService.getQuestion(this.difficulty).subscribe((response) => {

        console.log(this.firstName)
        console.log(this.lastName)
        console.log(this.email)
        console.log(this.difficulty)
        console.log(response)

      })

    }
      
}
