import { Component, OnInit } from '@angular/core';

import { ImageService } from '../../services/image.service';
import { Observable } from 'rxjs/internal/Observable';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  uploadPercent: Observable<number>;
  urlImage: Observable<string>;
  statusUpload: number;
  
  constructor(private img: ImageService) {  }

  ngOnInit(): void {
  }
  textdemo:String;

  uploadImage(e){
    const task = this.img.upload(e);
    this.uploadPercent = this.img.uploadPercent;
    this.urlImage = this.img.urlImage;

    this.uploadPercent.subscribe({
      next: val => this.statusUpload = Math.ceil(val),
      error: err => console.log('error: ' + err),
      complete: () => this.urlImage = this.img.urlImage
    });
  }

}
