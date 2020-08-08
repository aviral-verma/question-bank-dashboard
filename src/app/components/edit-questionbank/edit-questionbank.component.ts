import { Component, OnInit } from '@angular/core';
import { QuestionbankService } from 'src/app/services/questionbank.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-questionbank',
  templateUrl: './edit-questionbank.component.html',
  styleUrls: ['./edit-questionbank.component.css']
})
export class EditQuestionbankComponent implements OnInit {

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
    console.log('edit-comp.ts ', this.quest);
    this.service.editQuestionbank( this.quest)
      .subscribe(
        () => this.router.navigate(['/view-all']), // success callback
        () => window.alert('There was an error! Please check the console logs.') // error callback
      ); 
  }

}