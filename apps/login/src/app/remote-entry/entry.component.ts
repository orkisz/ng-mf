import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'kimf-login-entry',
  template: `<kimf-nx-welcome></kimf-nx-welcome>`,
})
export class RemoteEntryComponent {}
