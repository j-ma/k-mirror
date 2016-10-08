import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { AppComponent }   from './app.component';
import { RecentComponent }   from './recent.component';
import { ArtistsComponent }   from './artists.component';

@NgModule({
  imports: [
  	BrowserModule,
  	RouterModule.forRoot([
	  {
	    path: 'artists',
	    component: ArtistsComponent
	  },
	  {
	    path: 'recent',
	    component: RecentComponent
	  }
	])
  ],
  declarations: [
  	AppComponent,
  	RecentComponent,
  	ArtistsComponent
  ],
  bootstrap: [
  	AppComponent
  ]
})

export class AppModule { }