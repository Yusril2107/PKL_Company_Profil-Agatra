import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { NewsapiservicesService } from '../../service/newsapiservices.service';



@Component({
  selector: 'app-detailblog',
  templateUrl: './detailblog.component.html',
  styleUrls: ['./detailblog.component.css'],
  providers:[ NewsapiservicesService ],
})
export class DetailblogComponent implements OnInit {
  //load-spinner
  posts: any;
  data: any;
  id: any;
  detailclient:any;
  Url = environment.apiUrl +"blog"
  detailblog: any;


  constructor(
    public routes:ActivatedRoute,
   private api: NewsapiservicesService
  ){ }


  ngOnInit(){
    this.id=this.routes.snapshot.paramMap.get('id');
    this.getData();
    this.getPosts();

  }

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

  getData() {
    this.api.getDetailblogById(this.id).subscribe(res=> {
      this.data=res;
      console.log(res);
      this.detailblog = this.data;
    })
  }


}
