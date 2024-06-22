import { Component, inject } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { HomeService } from './home.service';
import { postInterface } from '../app.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent, AllPostsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  private homeService = inject(HomeService);
  postById?: postInterface;
  postsByName?: postInterface[]; 

  onSearchById(id : string)
  {
    if(id.length <= 2)
      {
        this.homeService.onSearchId(id).subscribe({
        next : (postById) => {
        this.postById = postById;}
    }) } else
      {
        this.homeService.onSearchName(id).subscribe({
        next : (postsByName) => {
        this.postsByName = postsByName;}
    }) }
  }


}
