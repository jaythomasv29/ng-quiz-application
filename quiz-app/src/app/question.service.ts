import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})



@Injectable()
export class QuestionService {
    url;
    constructor(private http: HttpClient) {

        this.url='https://opentdb.com/api.php?'
        // amount=10&difficulty=easy&type=multiple'
    }
//getQuestion method
getQuestion(difficulty) {
    // tied to button(click) that runs method to get questions from API
    //is called by register component and is called a method in the component: _questionService.getQuestions()
    // console.log(this.http.get(`${this.url}amount=10&difficulty=${difficulty}&type=multiple`))
    // console.log(`${this.url}amount=10&difficulty=${difficulty}&type=multiple`)
    return this.http.get(`${this.url}amount=10&difficulty=${difficulty}&type=multiple`)
}

}