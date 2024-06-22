import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UpdatePostService } from './update-post.service';

@Component({
  selector: 'app-update-post',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './update-post.component.html',
  styleUrl: './update-post.component.css'
})
export class UpdatePostComponent {

  constructor(private route : ActivatedRoute){}

  private updatePostService = inject(UpdatePostService);
  updateId !: number;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.updateId = params['id'];
    });
  }

  onUpdateTitleById(form : NgForm)
  {
    this.updatePostService.updatePost(this.updateId, form.value.postTitle).subscribe();
    this.updatePostService.navigateToHomePage();
  }

}
