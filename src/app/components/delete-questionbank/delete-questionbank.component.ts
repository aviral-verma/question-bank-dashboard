import { Component, OnInit } from '@angular/core';
import { QuestionbankService } from 'src/app/services/questionbank.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-questionbank',
  templateUrl: './delete-questionbank.component.html',
  styleUrls: ['./delete-questionbank.component.css']
})
export class DeleteQuestionbankComponent implements OnInit {

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
    console.log('deleting ', this.quest);
    this.service.deleteQuestionbank( this.quest)
      .subscribe(
        () => this.router.navigate(['/view-all']), // success callback
        () => window.alert('There was an error! Please check the console logs.') // error callback
      ); 
  }

}