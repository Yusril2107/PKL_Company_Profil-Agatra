import { Component, OnInit } from '@angular/core';
import { DetailclientService } from '../../service/detailclient.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[ DetailclientService ],
})
export class HomeComponent implements OnInit {

  posts: any;
  data: any;
  Url = environment.apiUrl +"client"
  constructor( private api: DetailclientService) { }
  getPosts() : void {
    this.api.getData(this.Url)
      .subscribe(
        data => {
          console.log(data);
          this.posts = data;

        },
        error=> console.log(error)
      )
  }

  ngOnInit(){
    this.getPosts()
  }

}
