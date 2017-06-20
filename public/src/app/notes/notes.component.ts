import { Component, OnInit } from '@angular/core';
import { Note } from "app/note";
import { HttpService } from "app/http.service";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes= []

  constructor(private _httpService: HttpService) {
    _httpService.observedNotes.subscribe(
        (updatedNotes)=> { this.notes=updatedNotes },
        (err)=> { console.log("errors:", err) },
        () => {}

      )
   }

  ngOnInit() {

  }
  
}
