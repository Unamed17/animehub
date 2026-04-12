import { Routes } from '@angular/router';
import { Landing } from './pages/landing/landing';
import { Aot } from './pages/aot/aot';
import { Blackclover } from './pages/blackclover/blackclover';
import { Bleach } from './pages/bleach/bleach';
import { DeathNote } from './pages/death-note/death-note';
import { TermsComponent } from './pages/terms/terms';
import { DemonSlayer } from './pages/demon-slayer/demon-slayer';
import { Haikyu } from './pages/haikyu/haikyu';
import { HunterXHunter } from './pages/hunter-x-hunter/hunter-x-hunter';
import { Jjk } from './pages/jjk/jjk';



export const routes: Routes = [
  // 1. When they visit the blank URL, show the new Landing page
    {path: '', component: Landing }, 
    {path: 'home', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
    {path: 'login', loadComponent: () => import('./pages/login/login').then(m => m.Login)},
    {path: 'register', loadComponent: () => import('./pages/register/register').then(m => m.Register)},
    {path: 'terms', component: TermsComponent }, // Add this line
    {path: 'about', loadComponent: () => import('./pages/about/about').then(m => m.About)},
    {path: 'contact', loadComponent: () => import('./pages/contact/contact').then(m => m.Contact)},
    {path: 'gallery', loadComponent: () => import('./pages/gallery/gallery').then(m => m.Gallery)},
    {path: 'seasonal', loadComponent: () => import('./pages/seasonal/seasonal').then(m => m.Seasonal)},
    {path: 'aot', component: Aot },
    {path: 'blackclover', component: Blackclover },
    {path: 'bleach', component: Bleach },
    {path: 'death-note', component: DeathNote },
    {path: 'demon-slayer', component: DemonSlayer},
    {path: 'haikyu', component: Haikyu },
    {path: 'hunter-x-hunter', component: HunterXHunter },
    {path: 'jjk', component: Jjk },
 
];
