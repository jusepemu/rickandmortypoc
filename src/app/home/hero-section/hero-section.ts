import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroSection {
  protected readonly buttonMoreInfo = input({
    label: 'More Info',
    link: 'https://rickandmortyapi.com/',
  });
  readonly title = input('The Ricky and Morty API');

}