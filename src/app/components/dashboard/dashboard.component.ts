import { Component, OnInit, NgZone, Input } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { Router } from "@angular/router";
import { AngularFirestore } from '@angular/fire/firestore';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';





@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

    model = '';
    public question_list = [];

  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone,
    private dataBase: AngularFirestore,
  ) {  }

  

  ngOnInit() {}

  askQuestion(userId) {  //сделать валидацию пустого вопроса
    let date = new Date();

    let value = this.model;
    
    let questionData = { userId:userId, message:value, date:date}
    console.log("newQuestion " + questionData.message);

    this.dataBase.collection("question").add(questionData);
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


      
  getOnlyMy(userId) { 
    this.question_list = [];
    let you = this.dataBase.collection('question', ref => ref.where('userId', '==', userId))
        console.log(userId);
        you.get().subscribe(querySnapshot => {
          
          querySnapshot.forEach(doc => {

            this.question_list.push(doc.id);
                    console.log(doc.id, " => ", doc.data().user);
                    console.log(this.question_list);
                });
          })
        
        //console.log(you);
    
  }
  
  // function writeUserData(userId, name, email, imageUrl) {
  //   firebase.database().ref('users/' + userId).set({
  //     username: name,
  //     email: email,
  //     profile_picture : imageUrl
  //   });
  // }
}
