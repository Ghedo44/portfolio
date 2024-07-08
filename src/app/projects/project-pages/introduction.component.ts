import { Component, inject } from '@angular/core';
import { SeoService } from '../../shared/data-access/seo.service';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [],
  template: `
    <h1 class="text-3xl font-semibold mb-4">Introduction</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio hic, aperiam laudantium, nobis saepe, voluptates illum est odit nam numquam esse ut. Dolorem enim id obcaecati voluptas, nam odio.
    </p>

  `,
  styles: ``
})
export class IntroductionComponent {
  ss = inject(SeoService);

	constructor() {
		this.ss.generateTags({
			title: `Federico Ghedini - Introduction`,
			description: 'Get to know me a little bit better.',
			slug: 'introduction',
		});
	}
}
