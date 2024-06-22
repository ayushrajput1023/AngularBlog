
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadersComponent } from './headers/headers.component';
import { SearchComponent } from './home/search/search.component';
import { AllPostsComponent } from './home/all-posts/all-posts.component';
import { FormsModule } from '@angular/forms';
import { CreatePostComponent } from './create-post/create-post.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeadersComponent, FormsModule]
})
export class AppComponent {
  title = 'BlogAngular';
}
