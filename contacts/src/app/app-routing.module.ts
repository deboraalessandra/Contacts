import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListagemComponent } from './contact/listagem/listagem.component';
import { ModalComponent } from './shared/components/modal/create/modal.component';

const routes: Routes = [
  { path: '', component: ListagemComponent },
  { path: 'modal', component: ModalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
