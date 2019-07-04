import { Component, OnInit, NgZone, Input } from '@angular/core';
import { AuthService } from "../shared/services/auth.service";
import { Router } from "@angular/router";
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-allquestion',
  templateUrl: './allquestion.component.html',
  styleUrls: ['./allquestion.component.css']
})
export class AllquestionComponent implements OnInit {

    model = '';
    public question_list = [];

    constructor(
        public authService: AuthService,
        public router: Router,
        public ngZone: NgZone,
        private dataBase: AngularFirestore,
    ) {  }

  ngOnInit() {
      this.getAllQuestions();
  }

    getAllQuestions() {

        this.question_list = [];



        this.dataBase.collection("question").get().subscribe(querySnapshot =>{
            querySnapshot.forEach(doc => {

                this.question_list.push(doc.id);
                console.log(doc.id, " => ", doc.data().user);
                console.log(this.question_list);
            });
        });
    }

}
