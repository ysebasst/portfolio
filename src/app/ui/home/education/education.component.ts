import { Component, OnInit } from '@angular/core';

interface Item {
  name: string;
  place: string;
  year: number;
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  items: Item[] = [
    {
      name: 'Habilidades comunicativas: mejora tu comunicación',
      place: 'Udemy',
      year: 2023,
    },
    {
      name: 'Angular: de cero a experto',
      place: 'Udemy',
      year: 2023,
    },
    {
      name: 'Angular universal in depth (angular 15)',
      place: 'Udemy',
      year: 2023,
    },
    {
      name: 'Técnico programación de software',
      place: 'Servicio Nacional de Aprendizaje SENA',
      year: 2022,
    },
    {
      name: 'Programación básica (javascript)',
      place: 'Platzi',
      year: 2020,
    },
    {
      name: 'Desarrollador de interfaces gráficas (python)',
      place: 'Capacítate para el empleo | Fundación Carlos Slim',
      year: 2020,
    },
    {
      name: 'Estructura del lenguaje de programación c++ (nivel i)',
      place: 'Servicio Nacional de Aprendizaje SENA',
      year: 2019,
    },
    {
      name: 'Variables y estructuras de control en la programación orientada a objetos: java',
      place: 'Servicio Nacional de Aprendizaje SENA',
      year: 2019,
    },
    {
      name: 'Bachiller académico',
      place: 'Instituto Educativo Distrital Gran Yomasa',
      year: 2012,
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
