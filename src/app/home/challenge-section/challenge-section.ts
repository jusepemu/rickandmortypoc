import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-challenge-section',
  imports: [NgOptimizedImage],
  templateUrl: './challenge-section.html',
  styleUrl: './challenge-section.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChallengeSection {

}