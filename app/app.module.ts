import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { AppComponent }   from './app.component';
import { RecentComponent }   from './recent.component';
import { ArtistsComponent }   from './artists.component';
import { VideoService } from './video.service';

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
	  },
	  {
  		path: '',
  		redirectTo: '/recent',
  		pathMatch: 'full'
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
  ],
  providers: [
  	VideoService
  ]
})

export class AppModule { }