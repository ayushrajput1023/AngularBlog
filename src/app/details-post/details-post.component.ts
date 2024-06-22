import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { postInterface } from '../app.model';

@Component({
  selector: 'app-details-post',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './details-post.component.html',
  styleUrl: './details-post.component.css'
})
export class DetailsPostComponent implements OnInit{

constructor(private route: ActivatedRoute) { }

private httpClient = inject(HttpClient);

detailsId ?: number;
detailsPost ?: postInterface;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.detailsId = params['id'];
    });

    // GetPostById
    this.httpClient.get<postInterface>('https://localhost:44392/api/Posts/GetPostById/' + this.detailsId).subscribe({
      next : (postById) => {
        this.detailsPost = postById;
      }
    });
  }




}
