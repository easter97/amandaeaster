import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  skills=['Angular', 'Javascript', 'HTML', 'CSS/SCSS', 'JQuery', 'C++', 'Java', 'Wordpress', 'Photoshop','SQL', 'PHP'];
  interests=['Graphic Design','Music and Composition', 'Travel', 'Human Computer Interaction' ]

  constructor() { }

  ngOnInit(): void {
  }

}
