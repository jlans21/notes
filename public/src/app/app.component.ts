import { Component } from '@angular/core';
import { Note } from "app/note";
import { HttpService } from "app/http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  note = new Note() 
  notes = []

  constructor(private _httpService: HttpService) {
      _httpService.getAll()
      .then(data=> { this.notes = data
      _httpService.updateNotes(this.notes) })
      .catch(err=>console.log(err))
     }
     submitNote(){
       this._httpService.create(this.note)
       .then((data)=> this.updateObservable(data) )
       .catch((err)=> console.log("error found",err))
       console.log("after create note")
     }

     updateObservable(data) {
       this.notes.push(data)
       this._httpService.updateNotes(this.notes)
       this.note = new Note()
     }
}
