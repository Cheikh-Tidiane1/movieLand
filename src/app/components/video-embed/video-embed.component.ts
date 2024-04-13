import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'video-embed',
  standalone: true,
  imports: [],
  templateUrl: './video-embed.component.html',
  styleUrl: './video-embed.component.scss'
})
export class VideoEmbedComponent implements OnInit {

  @Input() site: string = "Youtube";
  @Input() key: string ;
  constructor(){

  }
  ngOnInit(): void {
  }

}
