import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AboutUsService } from '../services/about-us.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  showAbout:any

  constructor(private route:ActivatedRoute,private aboutService:AboutUsService) { }

  ngOnInit(): void {
    this.getAboutUsDetail()
  }

  getAboutUsDetail(){
    this.aboutService.getAboutUs()
    .subscribe((res)=>{
      console.log(res)
      this.showAbout=res
    })
    }

}
