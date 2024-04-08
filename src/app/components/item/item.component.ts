import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/movies';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent implements OnInit {
  @Input() itemData: Movie ;
  ngOnInit(): void {
  }

}
