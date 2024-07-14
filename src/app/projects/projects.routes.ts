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
                path: 'portfolio',
                loadComponent: () => import('./project-pages/introduction.component').then(m => m.IntroductionComponent),
                data: { breadcrumb: 'Portfolio Website' }
            },
            {
                path: 'space-missions',
                loadComponent: () => import('./project-pages/introduction.component').then(m => m.IntroductionComponent),
                data: { breadcrumb: 'Space Missions' }
            },
            {
                path: 'ai-therapist',
                loadComponent: () => import('./project-pages/introduction.component').then(m => m.IntroductionComponent),
                data: { breadcrumb: 'AI Therapist' }
            },
            {
                path: '**',
                redirectTo: 'portfolio',
            }
        ]
    },
    { path: '**', redirectTo: '/', pathMatch: 'full' }
]  as Route[];