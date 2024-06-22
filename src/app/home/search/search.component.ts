import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HomeService } from '../home.service';
import { postInterface } from '../../app.model';

@Component({
    selector: 'app-search',
    standalone: true,
    templateUrl: './search.component.html',
    styleUrl: './search.component.css',
    imports: [FormsModule, RouterLink]
})
export class SearchComponent {

  private homeService = inject(HomeService);

  search = 'Search';
  @Output() postId = new EventEmitter();
  @Input() postById ?: postInterface;
  @Input() postsByName?: postInterface[];
  
  onSearchById(form : NgForm)
  {
    this.postId.emit(form.value.postId);
  }

  onRefresh()
  {
    this.homeService.onRefresh();
  }

}
