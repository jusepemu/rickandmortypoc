import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TeamSectionCard } from "./team-section-card/team-section-card";

@Component({
  selector: 'app-team-section',
  imports: [TeamSectionCard],
  templateUrl: './team-section.html',
  styleUrl: './team-section.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamSection {

}