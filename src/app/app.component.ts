import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { User } from './models/user';
import { Post } from './models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: Array<User>;
  posts: Array<Post>;

  constructor(private service: HttpService){
  this.users = new Array<User>();
  this.posts = new Array<Post>();
  this.service.GetUsers().subscribe(result => {
    this.users = result; 
  });
  

  }

  GetPostForUser(user: User){
    this.service.GetPostsForUser(user.id).subscribe(result =>{
       this.posts = result;
       console.log(this.posts);
    })
  }
  PostPosts(){
    var postes = new Array<Post>();
    var post = new Post();
    post.body = "hbhjbbj";
    post.title = "gbhnjkml";
    post.id = 5;
    post.userId = 7;
    postes.push(post);

    this.service.PostPosts(postes).subscribe(result =>{
      console.log(result);
    },
    (e)=>{console.log(`i caught error: ${e}`)},
    ()=>{console.log("complete")})
  }

  
}

