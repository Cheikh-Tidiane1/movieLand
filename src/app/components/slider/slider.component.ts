import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/movies';
import { DatePipe } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'slider',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  animations: [
    trigger('slideFade' , [
      state('void', style({opacity: 0})),
      transition('void <=> *', [animate('1s')]),
    ])
  ]
})
export class SliderComponent implements OnInit {
  @Input() items: Movie[];
  constructor() {}
  ngOnInit(): void {}
}
