import { Component, Pipe, PipeTransform, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { DomSanitizer } from '@angular/platform-browser'

@Pipe({ name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform  {
  constructor(private sanitized: DomSanitizer) {}
  transform(value) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}
@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss',
  animations: [
    trigger('pageLoaderAnimation', [
      state('visible', style({
        'height': '0px',
        'margin-bottom': '90vh',
      })),
      state('hidden', style({
        height: '90vh', // Move the div off the top of the page
        'margin-bottom': '0vh',
      })),
      transition('visible => hidden', [
        animate('.5s ease-out') // 1 second duration with ease-out effect
      ])
    ])
  ]
})
export class ProjectDetailsComponent {
  projectContent: string | null = null;
  showLoader = true;
  project;
  isMobile: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.checkIfMobile();
  }

  checkIfMobile() {
    this.isMobile = window.innerWidth <= 768;
  }


  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    const projectId = this.route.snapshot.paramMap.get('projectId');
    if (projectId) {
      this.loadProjectContent(projectId);
    }
    setTimeout(() => {
      this.showLoader = false; // Trigger the animation after the timeout
    }, 500); // 1 second delay before starting the animation
    this.checkIfMobile();
  }

  loadProjectContent(projectId: string) {
    const filePath = `./assets/${projectId}/${projectId}.html`;
    this.http.get(filePath, { responseType: 'text' })
      .subscribe(
        (data) => {
          this.projectContent = data;
          this.project = projectId;
        },
        (error) => console.error('Could not load project content:', error)
      );
  }

}
