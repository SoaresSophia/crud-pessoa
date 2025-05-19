import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ListarPessoaComponent } from './pages/listar-pessoa/listar-pessoa.component';

export const routes: Routes = [
  { path: '', redirectTo: 'pessoas/listar', pathMatch: 'full'},
  { path: 'pessoas', redirectTo: 'pessoas/listar'},
  { path: 'pessoas/listar', component: ListarPessoaComponent},
  
  { path: 'login', component: LoginComponent},
];
