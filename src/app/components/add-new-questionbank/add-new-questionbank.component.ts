import { Component, OnInit } from '@angular/core';
import { QuestionbankService } from 'src/app/services/questionbank.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-questionbank',
  templateUrl: './add-new-questionbank.component.html',
  styleUrls: ['./add-new-questionbank.component.css']
})
export class AddNewQuestionbankComponent implements OnInit {

  // this variable gets automatically updated as an when the user
  // enters details in the textboxes (due to [(ngModel)] two-way data binding)
  quest: any = {};

  constructor(public service: QuestionbankService,
    private authService: AuthService,
    private router: Router) { }


  ngOnInit(): void {
    if (!this.authService.isUserLoggedIn) {
      this.router.navigate(['/login']);
    }
  }

  save(): void {
    this.service.addNewQuestionbank( this.quest)
      .subscribe(
        () => this.router.navigate(['/view-details', this.quest.question.toLowerCase()]), // success callback
        () => window.alert('There was an error! Please check the console logs.') // error callback
      );
  }

}