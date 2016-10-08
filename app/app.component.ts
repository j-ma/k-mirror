import { Component } from '@angular/core';

@Component({
	selector: "my-app",
	template: `
    	<h1>{{title}}</h1>
    	<nav>
    		<a routerLink="/recent">Recent</a>
     		<a routerLink="/artists">Artists</a>
   		</nav>
   		<router-outlet></router-outlet>
  	`
  	,
  	styleUrls: ['app/app.component.css']
})

export class AppComponent {
  title = 'k-mirror';
}