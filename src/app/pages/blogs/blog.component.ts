import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { NewsapiservicesService } from '../../service/newsapiservices.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers:[ NewsapiservicesService ],
})
export class BlogComponent implements OnInit {

  posts: any;
  data: any;
  Url = environment.apiUrl +"blog"
  constructor( private api: NewsapiservicesService) { }
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
