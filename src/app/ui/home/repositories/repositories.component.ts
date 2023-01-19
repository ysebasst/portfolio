import { Component, OnInit } from '@angular/core';
import { Repository } from './interfaces/repositories';
import { RepositoriesService } from './services/repositories.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit {
  repositories: Repository[];
  quantityRepositories: number = 3;
  offsetRepositories: number = 3;

  constructor(
    private repositoriesService: RepositoriesService,
  ) { }

  get repositoriesToShow(): Repository[] {
    return this.repositories?.slice(0, this.quantityRepositories);
  }

  ngOnInit(): void {
    this.getRepositories();
  }

  getRepositories(): void {
    this.repositoriesService.get().subscribe(res => {
      this.repositories = res;
      console.log('this.repositories', this.repositories);
    });
  }

  showMore(): void {
    this.quantityRepositories = this.quantityRepositories + this.offsetRepositories;
    if(this.quantityRepositories > this.repositories?.length) {
      this.quantityRepositories = this.repositories?.length;
    }
  }
}
