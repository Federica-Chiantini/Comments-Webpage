import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCommentComponent } from './components/new-comment/new-comment.component';
import { CommentsListComponent } from './components/comments-list/comments-list.component';
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SingleCommentComponent } from './components/single-comment/single-comment.component';

import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    NewCommentComponent,
    CommentsListComponent,
    HeaderComponent,
    HomepageComponent,
    SingleCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
