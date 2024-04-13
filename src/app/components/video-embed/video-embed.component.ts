import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

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
  constructor(private sanitizer: DomSanitizer){

  }
  ngOnInit(): void {
  }

  getSafeUrl(url: string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
