import { Component } from '@angular/core';
import { HeroSection } from './hero-section/hero-section';
import { ChallengeSection } from "./challenge-section/challenge-section";
import { TeamSection } from "./team-section/team-section";

@Component({
  selector: 'app-home',
  imports: [HeroSection, ChallengeSection, TeamSection],
  templateUrl: './home.html',
})

export class HomePage {
}
