import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map'; // npm i rxjs-compat
import { AuthService } from './auth.service';

const baseUrl = 'http://localhost:3000/questionbanks';
@Injectable({
  providedIn: 'root'
})
export class QuestionbankService  {

  pageNum: number = 1;
  questionbankIdentifier: string;

  constructor(private http: HttpClient, private authService: AuthService) { }

  addNewQuestionbank(questionbank: any): Observable<any> {
    const options = {
      headers: {
        'authorization': 'Bearer ' + this.authService.token
      }
    };
    return this.http.post('http://localhost:3000/questionbanks/' + 'a' , questionbank, options);
  }

  deleteQuestionbank(questionbank: any): Observable<any> {
    console.log('in service', questionbank);
    const options = {
      headers: {
        'authorization': 'Bearer ' + this.authService.token
      }
    };
    return this.http.delete('http://localhost:3000/questionbanks/' + questionbank.question, options);
  }

  editQuestionbank(questionbank: any): Observable<any> {
    const options = {
      headers: {
        'authorization': 'Bearer ' + this.authService.token
      }
    };
    return this.http.delete('http://localhost:3000/questionbanks/' + questionbank.question, options);
  }

  addNewQuestion(questionbank: any): Observable<any> {
    const options = {
      headers: {
        'authorization': 'Bearer ' + this.authService.token
      }
    };
    console.log('Question bank', questionbank);
    return this.http.post(`http://localhost:3000/questionbanks/questionb/${questionbank.questionbankIdentifier}` + 'a' , questionbank, options);
  }

  getAllQuestionbanks(pageNum: number = 1): Observable<any> {
    const options = {
      headers: {
        'authorization': 'Bearer ' + this.authService.token
      }
    };
    return this.http
      .get(baseUrl + '?page=' + pageNum, options);
  }

  getQuestionbank(questionbankId: string): Observable<any> {
    questionbankId = questionbankId.toLowerCase();
    const options = {
      headers: {
        'authorization': 'Bearer ' + this.authService.token
      }
    };
    return this.http.get(baseUrl + '/' + questionbankId, options);
    
  }
}