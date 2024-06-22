import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { postInterface } from '../../app.model';

@Component({
  selector: 'app-all-posts',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './all-posts.component.html',
  styleUrl: './all-posts.component.css'
})
export class AllPostsComponent implements OnInit{

  allPosts: postInterface[] = [];
  private httpClient = inject(HttpClient);
  @Input() postById ?: postInterface;
  @Input() postsByName ?: postInterface[];
  @Output() postDetailsId = new EventEmitter();



  ngOnInit(): void {
    //GetAllPosts
    this.httpClient.get<postInterface[]>('https://localhost:44392/api/Posts/GetAllPost').subscribe({
      next : (response) => {
        this.allPosts = response;
      }
    });
  }

  onDetail(id : number)
  {
    this.postDetailsId.emit(id);
  }


}
