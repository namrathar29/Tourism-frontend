import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AboutUsService } from '../services/about-us.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  showBooking:any
  constructor(private route:ActivatedRoute,private aboutService:AboutUsService) { }

  ngOnInit(): void {
    this.getBookingDetails()
  }

  getBookingDetails(){
    this.aboutService.getAboutUs()
    .subscribe((res)=>{
      console.log(res)
      this.showBooking=res
    })
    }
}
