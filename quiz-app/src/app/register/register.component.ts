import { Routes, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { QuizService } from "../shared/quiz.service"
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //email pattern to validate form
  // emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  //get difficulty value from form
  difficulty: any //works with [(ngModel on html select tag)]
  category: any;
  // password: any;
  // name: any;
  // email: string
  // questions: any;
  
  constructor(private _quizService: QuizService, private router: Router) {

  }
  ngOnInit() {
  }

  onSubmitForm() {
    this._quizService.getQuestion(this.difficulty, this.category).subscribe((response) => {
      
      // console.log(this.name)
      // console.log(this.email)
      // console.log(this.password)
      // console.log(this.category)
      // console.log(this.difficulty)
      // console.log(response)
      
      this.router.navigate(['/quiz'],
        {
          state:
          {
            category: this.category,
            difficulty: this.difficulty,
            response: response
          }
        });




    })

  }

}
