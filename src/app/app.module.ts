import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuestionbankListComponent } from './components/questionbank-list/questionbank-list.component';
import { QuestionbankDetailsComponent } from './components/questionbank-details/questionbank-details.component';
import { PnfComponent } from './components/pnf/pnf.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AddNewQuestionbankComponent } from './components/add-new-questionbank/add-new-questionbank.component';
import { AddNewQuestionComponent } from './components/add-new-question/add-new-question.component';
import { DeleteQuestionbankComponent } from './components/delete-questionbank/delete-questionbank.component';
import { EditQuestionbankComponent } from './components/edit-questionbank/edit-questionbank.component';
import { QuestionpaperListComponent } from './components/questionpaper-list/questionpaper-list.component';
import { QuestionpaperDetailsComponent } from './components/questionpaper-details/questionpaper-details.component';
import { AddNewQuestionpaperComponent } from './components/add-new-questionpaper/add-new-questionpaper.component';

const routeConfig: Array<Route> = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'view-all',
    component:  QuestionbankListComponent
  },
  {
    path: 'add-new-questionbank',
    component: AddNewQuestionbankComponent
  },
  {
    path: 'add-new-question',
    component: AddNewQuestionComponent
  },
  {
    path: 'delete-questionbank',
    component: DeleteQuestionbankComponent
  },
  {
    path: 'edit-questionbank',
    component: EditQuestionbankComponent
  },
  {
    path: 'view-details/:questionbankId',
    component:  QuestionbankDetailsComponent 
  },
  {
    path: 'questionpaper-list',
    component:  QuestionpaperListComponent 
  },  
  {
    path: 'questionpaper-details',
    component:  QuestionpaperDetailsComponent 
  },  
  {
    path: 'add-new-questionpaper',
    component: AddNewQuestionpaperComponent 
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    // this is the default route handler; must be the last one.
    path: '**',
    component: PnfComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    QuestionbankListComponent,
    QuestionbankDetailsComponent,
    PnfComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    AddNewQuestionbankComponent,
    AddNewQuestionComponent,
    DeleteQuestionbankComponent,
    EditQuestionbankComponent,
    QuestionpaperListComponent,
    QuestionpaperDetailsComponent,
    AddNewQuestionpaperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routeConfig),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
