import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, NgbCarouselModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
projects = [
  {
    title: 'Face Attendance System',
    description: 'Biometric attendance using Angular, FastAPI, face recognition, and fingerprint login.',
    image: 'assets/thumbnail/face-attendance.png',
    github: 'https://github.com/JeffreyJones2003/angular-face-attendance-app',
    live: 'https://angular-attendance-app.netlify.app/login',
    tech: ['Angular', 'FastAPI', 'OpenCV', 'MySQL']
  },
  {
    title: 'Live Cricket Score App',
    description: 'Live scores, fixtures, stats via CricketData API, with responsive UI and charts.',
    image: 'assets/thumbnail/cricket-dashboard.png',
    github: 'https://github.com/JeffreyJones2003/live-cricket-score-app',
    live: 'https://live-cric-score-app.netlify.app/',
    tech: ['Angular', 'Chart.js', 'CricketData API']
  },
  {
    title: 'Personal Portfolio',
    description: 'Angular-based responsive portfolio with sections for projects, skills, contact.',
    image: 'assets/thumbnail/portfolio.png',
    github: 'https://github.com/JeffreyJones2003/jeffrey-portfolio',
    live: 'https://jeffreyportfolio.netlify.app/',
    tech: ['Angular', 'Bootstrap', 'CSS']
  },
];
}