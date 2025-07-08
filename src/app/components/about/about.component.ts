import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  skills = [
    { name: 'Angular', logo: 'assets/skills/angular.svg' },
    { name: 'TypeScript', logo: 'assets/skills/typescript.svg' },
    { name: 'Python', logo: 'assets/skills/python.svg' },
    { name: 'FastAPI', logo: 'assets/skills/fastapi.svg' },
    { name: 'MySQL', logo: 'assets/skills/mysql.svg' },
    { name: 'OpenCV', logo: 'assets/skills/opencv.svg' },
    { name: 'HTML5', logo: 'assets/skills/html5.svg' },
    { name: 'CSS3', logo: 'assets/skills/css3.svg' },
    { name: 'Bootstrap', logo: 'assets/skills/bootstrap.svg' },
    { name: 'GitHub', logo: 'assets/skills/github.svg' }
  ];
   

  internships = [
  {
    company: 'RK Techsoft',
    duration: 'Jan 2024 – Mar 2024',
    description: 'Developed an E-Commerce website using HTML, CSS, PHP and integrated MySQL for backend management.'
  },
  {
    company: 'Softrate Global',
    duration: 'May 2024 – Jul 2024',
    description: 'Created a leave management app for interns using PHP & MySQL with an admin approval dashboard.'
  },
  {
    company: 'L&T Constructions',
    duration: 'Jan 2025 – Apr 2025',
    description: 'Automated internal tasks using PowerShell and built an Angular-based assistant bot.'
  }
];


  certifications = [
  { title: 'Meta Front-End Developer', issuer: 'Coursera' },
  { title: 'HTML, CSS & JS for Web Devs', issuer: 'Johns Hopkins (Coursera)' },
  { title: 'Business English (B1)', issuer: 'Cambridge' }
];

}
