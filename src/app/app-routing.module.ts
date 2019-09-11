import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./flights/flights.module').then(mod => mod.FlightsModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./hotels/hotels.module').then(mod => mod.HotelsModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
