import { Component, OnInit } from '@angular/core';
import { AppDetailportofolioService } from '../../service/appdetailportofolio.service';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'appdetailportofolio',
  templateUrl: './detailportofolio.component.html',
  styleUrls: ['./detailportofolio.component.css'],
  providers:[ AppDetailportofolioService ],
})
export class DetailportofolioComponent implements OnInit {
  posts: any;
  data: any;
  Url = environment.apiUrl +"portfolio "


  constructor(
  private srv: AppDetailportofolioService
  ){ }

  getPosts() : void {
    this.srv.getData(this.Url)
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
