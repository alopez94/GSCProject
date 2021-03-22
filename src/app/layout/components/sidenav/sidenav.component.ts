import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/core/shared/services/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnDestroy {

  mobileQuery: MediaQueryList;

  fillerNav = [
    { route: 'dashboard', title: 'Home',  icon: 'home', class: '' },
    { route: 'users', title: 'Users',  icon:'person', class: '' },
    { route: 'mantenimientos', title: 'Mantenimientos',  icon:'build', class: '' },
    { route: 'tickets', title: 'Tickets',  icon:'receipt', class: '' }
  ];

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public auth: AuthService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
