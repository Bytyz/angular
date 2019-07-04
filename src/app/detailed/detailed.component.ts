import {Component, NgZone, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';
import {AuthService} from "../shared/services/auth.service";
import {AngularFirestore} from "@angular/fire/firestore";

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.css']
})
export class DetailedComponent implements OnInit {


  constructor(
      private route: ActivatedRoute,
      public authService: AuthService,
      public router: Router,
      public ngZone: NgZone,
      private dataBase: AngularFirestore,
  ) { }

    ngOnInit(): void {
        this.getId();
        };


    getId() {
        this.route.params.subscribe((params) => {
            const id: string =  params.id;
            alert (id);
        })
    }



}
