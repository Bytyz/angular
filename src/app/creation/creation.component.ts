import { Component, OnInit, NgZone, Input } from '@angular/core';
import { AuthService } from "../shared/services/auth.service";
import { Router } from "@angular/router";
import { AngularFirestore } from '@angular/fire/firestore';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent implements OnInit {

    model = '';
    constructor(
        public authService: AuthService,
        public router: Router,
        public ngZone: NgZone,
        private dataBase: AngularFirestore,
    ) {  }

  ngOnInit() {
  }


    askQuestion(userId) {  //сделать валидацию пустого вопроса
        let date = new Date();

        let value = this.model;

        let questionData = { userId:userId, message:value, date:date}
        console.log("newQuestion " + questionData.message);

        this.dataBase.collection("question").add(questionData);
    }
}
