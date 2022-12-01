import { Component, OnInit,ViewChild } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';



@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.css']
})
export class CalendrierComponent implements OnInit {

  
  presentDays:number =0;
  absentDays:number =0;

  events:any =[
    { title: 'Present', date: '2022-11-01', color: '#0000FF'},
    { title: 'Absent', date: '2022-11-02', color: '#0000FF'},
    { title: 'Present', date: '2022-11-03', color: '#FF0000'},
  ];
  

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    events:this.events,
    
  };
  config = {
    animated:true
  }
  //ajouter queleques evenements
  @ViewChild('template')template!: string;

  constructor() { }

  ngOnInit(): void {
    this.events.forEach((e: {[x: string]: string;}) =>{

    if(e["title"]=='Present'){
      this.presentDays++;
  }else{
    this.absentDays++;
  }
    });
    console.log("Present"+this.presentDays);
    console.log("Absent"+this.absentDays);
  }
  

}
