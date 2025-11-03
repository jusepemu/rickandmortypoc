import { Component } from '@angular/core';
import { HeaderAbout } from './components/header-about/header-about';

@Component({
  selector: 'app-about',
  imports: [HeaderAbout],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutPage {}
