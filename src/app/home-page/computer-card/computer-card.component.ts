import { Component, Input } from '@angular/core';

import { Computer } from 'interfaces/server.interface';

@Component({
  selector: 'sq-computer-card',
  templateUrl: './computer-card.component.html',
  styleUrls: ['./computer-card.component.scss']
})
export class ComputerCardComponent {
  @Input() computer: Computer;
}
