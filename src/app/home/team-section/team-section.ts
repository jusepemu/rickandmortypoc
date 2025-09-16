import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-team-section',
  imports: [NgOptimizedImage],
  templateUrl: './team-section.html',
  styleUrl: './team-section.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamSection {

}