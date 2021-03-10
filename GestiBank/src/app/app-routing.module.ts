import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'exchange',
    loadChildren: () => import('./exchange/exchange.module').then( m => m.ExchangePageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'client',
    loadChildren: () => import('./client/client.module').then( m => m.ClientPageModule)
  },
  {
    path: 'agent',
    loadChildren: () => import('./agent/agent.module').then( m => m.AgentPageModule)
  },
  {
    path: 'agent-list',
    loadChildren: () => import('./agent-list/agent-list.module').then( m => m.AgentListPageModule)
  },
  {
    path: 'edit-agent-page',
    loadChildren: () => import('./edit-agent-page/edit-agent-page.module').then( m => m.EditAgentPagePageModule)
  },
  {
    path: 'edit-agent-page',
    loadChildren: () => import('./edit-agent-page/edit-agent-page.module').then( m => m.EditAgentPagePageModule)
  },
  {
    path: 'agent-list/edit/:mail/:matricule',
    loadChildren: () => import('./edit-agent-page/edit-agent-page.module').then( m => m.EditAgentPagePageModule)
  },
  {
    path: 'demande-list',
    loadChildren: () => import('./demande-list/demande-list.module').then( m => m.DemandeListPageModule)
  },
  {
    path: 'agent-affected-demande-list',
    loadChildren: () => import('./agent-affected-demande-list/agent-affected-demande-list.module').then( m => m.AgentAffectedDemandeListPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
