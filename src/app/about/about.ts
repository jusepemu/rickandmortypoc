import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderAbout } from "./header-about/header-about";

@Component({
  selector: 'app-about',
  imports: [HeaderAbout],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutPage {

}
