import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Portfolio } from './portfolio/portfolio';
import { NotFound } from './not-found/not-found';
import { Converter } from './converter/converter';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'portfolio', component: Portfolio },
  { path: 'converter', component: Converter },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'not-found', component: NotFound },
  { path: '**', component: NotFound },
];
