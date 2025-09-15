import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-characters',
  imports: [],
  templateUrl: './characters.html',
  styleUrl: './characters.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Characters {

}
