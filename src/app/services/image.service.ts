import { Injectable } from '@angular/core';

import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs/internal/Observable';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  file: File;
  uploadPercent: Observable<number>;
  urlImage: Observable<string>;
  filePath;

  constructor(private storage: AngularFireStorage) { }
  
  upload(e){
    const id = Math.random().toString(36).substring(2);
    this.file = e.target.files[0];
    this.filePath = `avatar/${id}-${this.file.size}-${this.file.name}`;
    this.filePath = this.clarify(this.filePath);
    const ref = this.storage.ref(this.filePath);
    const task = this.storage.upload(this.filePath, this.file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe( finalize(() => this.urlImage = ref.getDownloadURL())).subscribe();
  }

  delete(name: string) {
    this.storage.ref(name).delete().toPromise().then( () => {
      console.log('ok');
  }).catch( err => {
      console.log(err);
  })
    
  }

  clarify(str){
    var finalStr = '';
    str.split('').forEach(element => {
      if(element != ' '){
        finalStr += element;
      }
    });
    return finalStr;
  }
  
}
