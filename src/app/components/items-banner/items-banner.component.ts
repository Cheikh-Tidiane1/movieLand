import { Component, Input } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { Movie } from '../../models/movies';

@Component({
  selector: 'items-banner',
  standalone: true,
  templateUrl: './items-banner.component.html',
  styleUrl: './items-banner.component.scss',
  imports: [ItemComponent],
})
export class ItemsBannerComponent {
  @Input() items: Movie[] = [];
  @Input() title: string = '';
}
