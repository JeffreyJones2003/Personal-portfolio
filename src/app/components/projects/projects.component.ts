import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap'; 


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, NgbCarouselModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

 projects = [
    {
      title: 'Face Attendance System',
      description: 'Biometric attendance using Angular, FastAPI, face recognition, and fingerprint login.',
      image: 'assets/images/undraw_developer_activity.svg',
      github: 'https://github.com/JeffreyJones2003/angular-face-attendance-app',
      live: 'https://angular-attendance-app.netlify.app/login',
    },
    {
      title: 'Live Cricket Score App',
      description: 'Live scores, fixtures, stats via CricketData API, with responsive UI and charts.',
      image: 'assets/images/undraw_developer_activity.svg',
      github: 'https://github.com/JeffreyJones2003/live-cricket-score-app',
      live: 'https://live-cric-score-app.netlify.app/',
    },
    {
      title: 'Personal Portfolio',
      description: 'Angular-based responsive portfolio with sections for projects, skills, contact.',
      image: 'assets/images/undraw_developer_activity.svg',
      github: 'https://github.com/JeffreyJones2003/jeffrey-portfolio',
      live: 'https://jeffreyportfolio.netlify.app/',
    },
  ];

}
