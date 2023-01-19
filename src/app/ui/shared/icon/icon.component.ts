import { Component, Input, OnInit } from '@angular/core';

export type Type = 'menu' | 'close' | 'github' | 'email' | 'phone' | 'linkedin';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @Input() type: Type;

  constructor() { }

  ngOnInit(): void {
  }

}
