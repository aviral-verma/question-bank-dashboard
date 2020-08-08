import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionbankService } from 'src/app/services/questionbank.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-questionbank-list',
  templateUrl: './questionbank-list.component.html',
  styleUrls: ['./questionbank-list.component.css']
})
export class QuestionbankListComponent implements OnInit {


  // pageNum: number = 1;
  questionbanks: Array<any> = [];
  lastPage: number;

  constructor(public service: QuestionbankService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.authService.isUserLoggedIn) {
      this.router.navigate(['/login']);
    }
    else {
      this.loadData();
    }
  }

  loadData() {
    this.service.getAllQuestionbanks(this.service.pageNum)
      .subscribe(resp => {
        this.questionbanks = resp.data;
        // this.totalCustomers = resp.count;
        this.lastPage = resp.count % 10 === 0 ? resp.count / 10 : Math.trunc(resp.count / 10) + 1;
      })
  }

  gotoPage(where: string = 'first') {
    switch (where) {
      case 'last':
        this.service.pageNum = this.lastPage;
        break;
      case 'prev':
        if (this.service.pageNum > 1) this.service.pageNum--;
        break;
      case 'next':
        if (this.service.pageNum < this.lastPage) this.service.pageNum++;
        break;
      default:
        this.service.pageNum = 1;
    }

    this.loadData();
  }

  getBtnClass(btn: string = 'first') {
    switch (btn) {
      case 'first':
      case 'prev':
        return this.service.pageNum === 1 ? 'btn-danger' : '';
      default:
        return this.service.pageNum === this.lastPage ? 'btn-danger' : '';
    }
  }

}
