import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'



@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  //Quiz Component Properties

  seconds;
  questionProgress: number; //number of questions answered
  timer;


  constructor(private router: Router) {
    let user = this.router.getCurrentNavigation().extras.state
    console.log('STATE Object:', user)
    let questions = []
    let correctAnswer = []
    let answerOption = []
    let allOptions: string[];
    let allOptionAnswers = []

    //get user questions into an array
    for (let i = 0; i < user.response.results.length; i++) {
      let eachQuestion = user.response.results[i].question
      let eachCorrectAnswer = user.response.results[i].correct_answer
      let eachAnswerSelection = user.response.results[i].incorrect_answers

      questions.push(eachQuestion)
      correctAnswer.push(eachCorrectAnswer)
      allOptions = [...eachAnswerSelection, eachCorrectAnswer]
      allOptionAnswers.push(allOptions)

    }
    console.log(questions)// questions
    console.log(questions[0]);
    console.log(allOptionAnswers) // all possible answer selection
    console.log(correctAnswer)// correct answers
  }


//timer function
  startTimer() { 
    this.timer = setInterval(()=> {
      this.seconds++
    }, 1000)
  }


  ngOnInit() { }




}
