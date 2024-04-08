import { Component, OnInit } from '@angular/core';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'items-banner',
  standalone: true,
  templateUrl: './items-banner.component.html',
  styleUrl: './items-banner.component.scss',
  imports: [ItemComponent],
})
export class ItemsBannerComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
