import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})

export class AboutUsService{
    baseUrl = "http://localhost:8081"
    constructor(private Http: HttpClient){
    }

    getAboutUs(){
        const url= `${this.baseUrl}/about-us/`
        return this.Http.get(url)
    }

    getBookingDetails(){
        const url= `${this.baseUrl}/about-us/`
        return this.Http.get(url)
    }

    register(registerBody:any){
        const url= `${this.baseUrl}/register-traveller`
        return this.Http.post(url,registerBody);
    }
}