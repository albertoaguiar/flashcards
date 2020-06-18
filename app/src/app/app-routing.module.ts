import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'about-app', loadChildren: () => import('./about-app/about-app.module').then( m => m.AboutAppPageModule) },
  { path: 'flashcards/new', loadChildren: () => import('./flashcard-form/flashcard-form.module').then( m => m.FlashcardFormPageModule) },
  { path: 'flashcards/edit/:id', loadChildren: () => import('./flashcard-form/flashcard-form.module').then( m => m.FlashcardFormPageModule) },
  { path: 'flashcards', loadChildren: () => import('./flashcard-list/flashcard-list.module').then( m => m.FlashcardListPageModule) },
  {path: 'flashcard-detail',loadChildren: () => import('./flashcard-detail/flashcard-detail.module').then( m => m.FlashcardDetailPageModule)},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
