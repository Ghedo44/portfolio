import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BreadcrumbsComponent } from '../shared/ui/breadcrumbs.component';


@Component({
	selector: 'app-page-layout',
	standalone: true,
	imports: [
		RouterOutlet,
		BreadcrumbsComponent,
	],
	template: `
		<main class="container mx-auto p-4 sm:px-8">
			<spartan-breadcrumbs />
			<router-outlet />
		</main>
	`,
})
export class ProjectPageLayoutComponent { }