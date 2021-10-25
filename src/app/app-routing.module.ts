import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'characters', loadChildren: () => import('./pages/characters/character.module').then(m => m.CharacterModule) },
  { path: 'creators', loadChildren: () => import('./pages/creators/creators.module').then(m => m.CreatorsModule) },

  { path: '', redirectTo: '/characters', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
