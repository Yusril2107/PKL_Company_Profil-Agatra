import { Component, OnInit } from '@angular/core';
import { DetailclientService } from '../../service/detailclient.service';
import { environment } from '../../../environments/environment';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'detailclient',
  templateUrl: './detailclient.component.html',
  styleUrls: ['./detailclient.component.css'],
  providers:[ DetailclientService ],
})
export class DetailclientComponent implements OnInit {

  posts: any;
  data: any;
  id: any;
  detailclient:any;
  Url = environment.apiUrl +"client"


  constructor(
    public routes:ActivatedRoute,
   private api: DetailclientService
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
    this.api.getDetailclientById(this.id).subscribe(res=> {
      this.data=res;
      console.log(res);
      this.detailclient = this.data;
    })
  }



}
