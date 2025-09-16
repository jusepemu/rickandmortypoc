import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-team-member-card',
  imports: [],
  template: `
    <div>
      <h3>Team Member</h3>
      <p>Member details go here</p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamMemberCard {

}