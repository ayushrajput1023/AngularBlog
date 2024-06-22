import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CreatePostService } from './create-post.service';
import { addPostInterface } from '../app.model';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css'
})
export class CreatePostComponent {

  private createPostService = inject(CreatePostService);
  addNewPost ?: addPostInterface;

  onAddingPost(form : NgForm)
  {
    this.createPostService.addPost(form).subscribe({
      next : (addPosts) => {
        this.addNewPost = addPosts;}
    });
    this.createPostService.navigateToHomePage();
  }

  onBack()
  {
    this.createPostService.navigateToHomePage();
  }
}

