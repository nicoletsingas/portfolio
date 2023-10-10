import { Component } from '@angular/core';
import { projectsData } from 'src/app/projects-data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = projectsData;
}
