import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/movies';
import { DatePipe, CommonModule } from '@angular/common';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { IMAGES_SIZES } from '../../constants/images-sizes';
@Component({
  selector: 'slider',
  standalone: true,
  imports: [DatePipe, CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  animations: [
    trigger('slideFade', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [animate('1s')]),
    ]),
  ],
})
export class SliderComponent implements OnInit {
  @Input() items: Movie[];
  @Input() isBanner: boolean = false;
  currentSlideIndex: number = 0;
  readonly imagesSizes = IMAGES_SIZES;
  ngOnInit(): void {
    if (!this.isBanner) {
      setInterval(() => {
        this.currentSlideIndex = ++this.currentSlideIndex % this.items.length;
      }, 5000);
    }
  }
}
