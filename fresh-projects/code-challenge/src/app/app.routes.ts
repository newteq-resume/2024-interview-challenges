import { Routes } from '@angular/router';
import { ContentLayoutComponent } from "./components/content-layout/content-layout.component";
import { HomeComponent } from "./components/home/home.component";

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
      },
      {
        path: '',
        component: ContentLayoutComponent,
        children: [
          {
            path: '',
            component: HomeComponent
          }
        ]
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
