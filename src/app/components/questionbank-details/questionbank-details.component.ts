import { Component, OnInit } from '@angular/core';
import { QuestionbankService } from 'src/app/services/questionbank.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-questionbank-details',
  templateUrl: './questionbank-details.component.html',
  styleUrls: ['./questionbank-details.component.css']
})
export class QuestionbankDetailsComponent implements OnInit {

  public quest;
 public quetionbankId;

  constructor(private service: QuestionbankService,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.authService.isUserLoggedIn) {
      this.router.navigate(['/login']);
    }
    else {

      this.activatedRoute.params.subscribe(p => {
        this.service.questionbankIdentifier = p.questionbankId.toLowerCase();
        this.service.getQuestionbank(p['questionbankId'].toLowerCase())
          .subscribe(data => {
            this.quest = data;          });
      });
    }


  } 

}
