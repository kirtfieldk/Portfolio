import { Component, OnInit } from '@angular/core';
import {Project, projects, proProjects} from "../LocalData"
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public proj: Project[];
  public proProj: Project[];
  constructor() { }

  ngOnInit(): void {
    this.proj = projects
    this.proProj = proProjects
  }

}
