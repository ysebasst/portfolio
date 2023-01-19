import { Component, OnInit } from '@angular/core';
import { Type } from 'src/app/ui/shared/icon/icon.component'

interface Item {
  name: string;
  icon: Type;
  url: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  items: Item[] = [
    {
      name: 'github.com/ysebasst',
      icon: 'github',
      url: 'https://github.com/ysebasst',
    },
    {
      name: 'ysebasst@gmail.com',
      icon: 'email',
      url: 'mailto:ysebasst@gmail.com',
    },
    {
      name: '573057114856',
      icon: 'phone',
      url: 'tel:+573057114856',
    },
    {
      name: 'Sebastian Sierra',
      icon: 'linkedin',
      url: 'https://www.linkedin.com/in/sebastian-sierra-382858208/',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
