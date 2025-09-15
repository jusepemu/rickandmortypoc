import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-layout',
  imports: [RouterLink],
  template: `
  <header class="text-white bg-purple-900">
    <nav class="container mx-auto flex justify-between items-center p-4">
        <figure class="w-32 h-16">
            <a routerLink="home">
                <img src="https://res.cloudinary.com/dkfzj9tmk/image/upload/v1677166689/backend-project/Rick-And-Morty-Logo-Transparent-File_arpmel.png"
                    alt="logo" class="w-full h-full object-contain">
            </a>
        </figure>
        <ul class="flex gap-4">
            <li>Characters</li>
            <li>Episodes</li>
            <li>My favorites</li>
            <li>
                <a routerLink="/about" class="hover:underline">
                    About
                </a>
            </li>
        </ul>
    </nav>
</header>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderLayout {

}
