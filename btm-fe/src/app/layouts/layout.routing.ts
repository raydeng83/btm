import { Routes } from '@angular/router';

import { LayoutOneComponent } from './layout-one/layout-one.component';
import { LayoutTwoComponent } from './layout-two/layout-two.component';

export const LayoutRoutes: Routes = [
  { path: 'one', component: LayoutOneComponent },
  { path: 'two', component: LayoutTwoComponent }
];