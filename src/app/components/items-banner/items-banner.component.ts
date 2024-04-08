import { Component, OnInit } from '@angular/core';
import { MovieItemComponent } from "../movie-item/movie-item.component";

@Component({
    selector: 'items-banner',
    standalone: true,
    templateUrl: './items-banner.component.html',
    styleUrl: './items-banner.component.scss',
    imports: [MovieItemComponent]
})
export class ItemsBannerComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
