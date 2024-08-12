import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent {
  projectContent: string | null = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    const projectId = this.route.snapshot.paramMap.get('projectId');
    if (projectId) {
      this.loadProjectContent(projectId);
    }
  }

  loadProjectContent(projectId: string) {
    const filePath = `./${projectId}.html`;
    this.http.get(filePath, { responseType: 'text' })
      .subscribe(
        (data) => this.projectContent = data,
        (error) => console.error('Could not load project content:', error)
      );
  }

}
