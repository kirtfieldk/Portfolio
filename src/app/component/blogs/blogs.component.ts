import { Component, OnInit } from '@angular/core';
import {articles, Article} from "../LocalData"
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  localArticles: Article[];
  constructor() { }

  ngOnInit(): void {
    this.localArticles = articles;
  }

}
