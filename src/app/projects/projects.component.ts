import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../shared/data-access/seo.service';
import { ProjectCardComponent } from '../shared/ui/project-card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  ss = inject(SeoService);

  constructor() {
    this.ss.generateTags({
      title: 'Federico Ghedini - Projects',
      description: 'Check out some of the projects I have been working on.',
      slug: 'projects',
    });
  }
}
