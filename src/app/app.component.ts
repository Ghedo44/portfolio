import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/ui/header.component';
import { FooterComponent } from './shared/ui/footer.component';
import { AppCheck } from '@angular/fire/app-check';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  host: {
    class: 'block flex flex-col justify-start h-full',
  },
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
    `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private appCheck = inject(AppCheck);

  title = 'portfolio';
}
