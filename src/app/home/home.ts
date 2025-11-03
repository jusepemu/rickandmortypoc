import { Component } from '@angular/core';
import { HeroSection } from './components/hero-section/hero-section';
import { ChallengeSection } from './components/challenge-section/challenge-section';
import { TeamSection } from './components/team-section/team-section';

@Component({
  selector: 'app-home',
  imports: [HeroSection, ChallengeSection, TeamSection],
  template: `
    <main class="w-full h-full">
      <app-hero-section />
      <app-challenge-section />
      <app-team-section />
    </main>
    <footer class="flex flex-col items-center py-10 gap-4 text-white bg-black">
      <div class="container mx-auto text-center">
        <span>🧑‍💻 by Jusepemu 2025</span>
      </div>
    </footer>
  `,
})
export class HomePage {}
