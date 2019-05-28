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

  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone,
    private dataBase: AngularFirestore,
  ) {  }

  

  ngOnInit() { }

  askQuestion(userId) {
    let date = new Date();

    let value = this.model;
    
    let questionData = { userId:userId, message:value, date:date}
console.log("newQuestion " + questionData.message);

 this.dataBase.collection("question").add(questionData);
}

  getAllQuestions() {
  this.dataBase.collection("question").get().subscribe(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        console.log(doc.id, " => ", doc.data().user);
    });
});
  }


      
  getOnlyMy(userId) { 
    
    let you = this.dataBase.collection('users', ref => ref.where('uid', '==', userId))
        
        console.log(you.get().subscribe(function(querySnapshot) {
          
          querySnapshot.forEach(function(doc) {
            console.log(doc.id, " => ", doc.data().loginTime);
        });
          })
        )
        console.log(you);
    
  }
  
  // function writeUserData(userId, name, email, imageUrl) {
  //   firebase.database().ref('users/' + userId).set({
  //     username: name,
  //     email: email,
  //     profile_picture : imageUrl
  //   });
  // }
}
