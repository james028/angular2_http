import { Component, OnInit } from '@angular/core';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  arti = [];
  errorMsg: string;

  constructor(private _aa: ArticleService) {

   }

  ngOnInit() {
    this._aa.getArt()
    .subscribe(resArtiData => this.arti = resArtiData,
                resArtiError => this.errorMsg = resArtiError);

  } 

Ge: number = 34;
}
