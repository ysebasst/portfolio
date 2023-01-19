import { Component, OnInit } from '@angular/core';

interface Job {
  name: string;
  info: string;
  place: string;
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  jobs: Job[] = [
    {
      name: 'Frontend Developer Junior',
      info: 'ago. 2022 - now · 6 months',
      place: 'Bogotá, Distrito Capital, Colombia',
    },
    {
      name: 'QA Analyst',
      info: 'abr. 2022 - ago. 2022 · 5 months',
      place: 'Bogotá, Distrito Capital, Colombia',
    },
    {
      name: 'QA Analyst - Internship contract',
      info: 'oct. 2021 - abr. 2022 · 7 months',
      place: 'Bogotá, Distrito Capital, Colombia',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
