import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/movies';

@Component({
  selector: 'slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent implements OnInit {
  @Input() items: Movie;
  constructor() {}
  ngOnInit(): void {}
}
