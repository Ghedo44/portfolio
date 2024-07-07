import { Route } from "@angular/router";
import { ProjectPageLayoutComponent } from "./project-page-layout.component";

export default  [
    {
        path: '',
        loadComponent: () => import('./projects.component').then(m => m.ProjectsComponent)
    },
    { 
        path: '', 
        component: ProjectPageLayoutComponent,
        data: { breadcrumb: 'Projects' },
        children: [
            {
                path: 'introduction',
                loadComponent: () => import('./project-pages/introduction.component').then(m => m.IntroductionComponent),
                data: { breadcrumb: 'Introduction' }
            },
            {
                path: '**',
                redirectTo: 'introduction',
            }
        ]
    },
    { path: '**', redirectTo: '/', pathMatch: 'full' }
]  as Route[];