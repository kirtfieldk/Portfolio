import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  skills: string[] =["Docker", "Python", "Java", "Javascript", "React", "Postgres"]
  constructor() { }

  ngOnInit(): void {
  }

}
