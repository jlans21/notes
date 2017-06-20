import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import 'rxjs'


@Injectable()
export class HttpService {
  observedNotes = new BehaviorSubject(null)

  updateNotes(notes: Array<object>){
    this.observedNotes.next(notes)
  } 

  constructor(private _http: Http) { }

  create(note){
    return this._http.post('/newnote', note)
    .map(data=> data.json() )
    .toPromise()
  }

  getAll() {
    return this._http.get('/getall')
    .map(data=> data.json() )
    .toPromise()
  }
  
}
