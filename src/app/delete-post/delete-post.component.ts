import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DeletePostService } from './delete-post.service';

@Component({
  selector: 'app-delete-post',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './delete-post.component.html',
  styleUrl: './delete-post.component.css'
})
export class DeletePostComponent implements OnInit{

  constructor(private route: ActivatedRoute) {}

  private deletePostService = inject(DeletePostService);
  deleteId !: number;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.deleteId = params['id'];
    });
  }

  onDeletePostById()
  {
    this.deletePostService.deletePost(this.deleteId).subscribe();
    this.deletePostService.navigateToHomePage();
  }

}


