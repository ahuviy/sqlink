import { Component } from '@angular/core';
import { map } from 'rxjs/operators';

import { ComputersService } from 'app/computers.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  computers$ = this.computersService.computers$;
  isFetching$ = this.computersService.computers$.pipe(map(c => !c));

  constructor(private computersService: ComputersService) { }

  ngOnInit() {
    this.computersService.fetchData();
  }
}
