import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {
  public greeating:boolean = false;
  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
    document.querySelector(".displayTable").setAttribute('id',"bg");
    
   }

   ngOnDestoy() {
    document.querySelector(".displayTable").setAttribute('id',"");
   }



}