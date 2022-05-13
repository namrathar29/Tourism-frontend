import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AboutUsService } from '../services/about-us.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm:FormGroup;
  
  constructor(private fb:FormBuilder, private aboutService:AboutUsService) {
    this.registrationForm= this.fb.group({
      travellerName:[",Validators.required"],
      travellerEmail:[",Validators.required"],
      travellerMobileNo:[",Validators.required"],
      travellerAge:[",Validators.required"],
      travellerAdults:[",Validators.required"],
      travellerChildren:[",Validators.required"],
    })
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.aboutService.register(this.registrationForm.value)
    .subscribe((res)=>{
      console.log(res)
    })
  }

}
