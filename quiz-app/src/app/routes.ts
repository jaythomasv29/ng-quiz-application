//configure routing in application
import { Routes } from '@angular/router'
import { RegisterComponent } from './register/register.component';
import { QuizComponent } from './quiz/quiz.component'
import { ResultComponent } from './result/result.component';

//constant for routing as an array of objects
export const appRoutes: Routes = [
    //routes to different components
    { path: 'register', component: RegisterComponent},
    { path: 'quiz', component: QuizComponent },
    { path: 'result', component: ResultComponent },
    //route for default routing
    { path: '', redirectTo: '/register', pathMatch:'full' }

]