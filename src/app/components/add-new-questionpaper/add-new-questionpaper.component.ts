import { Component, OnInit } from '@angular/core';
import { QuestionbankService } from 'src/app/services/questionbank.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-questionpaper',
  templateUrl: './add-new-questionpaper.component.html',
  styleUrls: ['./add-new-questionpaper.component.css']
})
export class AddNewQuestionpaperComponent implements OnInit {

  public quest;
//  public quetionbankId;

  constructor(private service: QuestionbankService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.authService.isUserLoggedIn) {
      this.router.navigate(['/login']);
    }
    else {

      this.service.getAllQuestions()
      .subscribe(data => {
        console.log('data is ', data);
        this.quest = data;
        console.log('question paper data ', this.quest);
      });
    }

  } 

}
