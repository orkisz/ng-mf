import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '@ng-mf/data-access-user';
import { distinctUntilChanged } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SwUpdate } from '@angular/service-worker';

@Component({
  imports: [CommonModule, RouterModule],
  selector: 'kimf-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private router = inject(Router);
  private userService = inject(UserService);
  private swUpdate = inject(SwUpdate);
  isLoggedIn$ = this.userService.isUserLoggedIn$;

  ngOnInit() {
    this.isLoggedIn$
      .pipe(distinctUntilChanged())
      .subscribe(async (loggedIn) => {
        // Queue the navigation after initialNavigation blocking is completed
        setTimeout(() => {
          if (!loggedIn) {
            this.router.navigateByUrl('login');
          } else {
            this.router.navigateByUrl('');
          }
        });
      });

    this.swUpdate.versionUpdates.subscribe((event) => {
      console.log(event);
    });
  }
}
