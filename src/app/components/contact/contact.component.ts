import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

 contacts = [
    {
      icon: 'fas fa-envelope text-primary',
      link: 'mailto:jefffj10@gmail.com',
      text: 'jefffj10@gmail.com',
    },
    {
      icon: 'fab fa-linkedin text-primary',
      link: 'https://linkedin.com/in/jeffrey-jones-s-b2a84524b/',
      text: 'LinkedIn',
    },
    {
      icon: 'fab fa-github text-dark',
      link: 'https://github.com/JeffreyJones2003',
      text: 'GitHub',
    },
  ];

}
