import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ticket-list',
    pathMatch: 'full'
  },
  {
    path: 'tickets-list',
    loadChildren: () => import('./tickets/tickets-list/tickets-list.module').then( m => m.TicketsListPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
