import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/movies';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'slider',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent implements OnInit {
  @Input() items: Movie[];
  constructor() {}
  ngOnInit(): void {}
}
