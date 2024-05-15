import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';  

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ AppService ]
})
export class AppComponent {
  title = 'project-jiraosp-fase1';
  constructor(private jiraService: AppService) { 
    this.jiraService.getJiraProject()
      .subscribe({
        next: (issues) => {
          console.log('Issues retrieved:', issues); // Process or display data
        },
        error: (error) => {
          console.error('Error retrieving issues:', error); // Handle error
        }
        });
   }
    
  

}
