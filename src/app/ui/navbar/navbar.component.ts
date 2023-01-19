import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Route {
  path: string;
  name: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  host: {'(document:click)': 'onClick($event)'},
})
export class NavbarComponent implements OnInit {

  routes: Route[] = [
    {path: '#home', name: 'Home'},
    {path: '#about', name: 'About me'},
    {path: '#skills', name: 'My skills'},
    {path: '#repositories', name: 'Github repositories'},
    {path: '#experience', name: 'Experience'},
    {path: '#education', name: 'Education'},
    {path: '#contact', name: 'Contact'},
  ];
  showNav: boolean = false;
  scroll: number = 0;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  changeShowNav(event: MouseEvent): void {
    event.stopPropagation();
    this.showNav = !this.showNav;
  }

  onClick(event: MouseEvent): void {
    this.showNav = false;
  }

  goToHome(): void {
    this.router.navigate(['/']);
  }
}
