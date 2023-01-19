import { Component, OnInit } from '@angular/core';

interface Skill {
  title: string;
  imageUrl: string;
  content: string[];
  active: boolean;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills: Skill[];

  constructor() {
    this.skills = [
      {
        title: 'Frontend',
        imageUrl: 'assets/angular-logo-240.png',
        content: ['Angular', 'HTML', 'CSS', 'Javascript', 'SASS', 'React', 'Vue', 'pug', 'ejs', 'Jinja2'],
        active: false,
      },
      {
        title: 'Backend',
        imageUrl: 'assets/python-logo-240.png',
        content: ['Node.js', 'express', 'mongoose', 'Python', 'Django', 'Flask'],
        active: false,
      },
      {
        title: 'Other',
        imageUrl: 'assets/java-logo-240.png',
        content: ['Java', 'MongoDB', 'MySQL', 'SQLite3'],
        active: false,
      },
    ]
  }

  ngOnInit(): void {
  }

  changeShowSkills(index: number): void {
    this.skills = this.skills.map((skill, i) => {
      skill.active = i === index ? !skill.active : false;
      return skill;
    });
  }
}
