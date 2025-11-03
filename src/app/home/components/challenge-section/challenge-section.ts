import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-challenge-section',
  imports: [NgOptimizedImage],
  templateUrl: './challenge-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChallengeSection {

}