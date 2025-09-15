import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayout } from './header-layout/header-layout';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, HeaderLayout],
  template: `
  <app-header-layout></app-header-layout>
  <router-outlet></router-outlet>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainLayout {

}
