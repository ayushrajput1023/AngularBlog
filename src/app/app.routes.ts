import { Routes } from '@angular/router';
import { CreatePostComponent } from './create-post/create-post.component';
import { AppComponent } from './app.component';
import { SearchComponent } from './home/search/search.component';
import { AllPostsComponent } from './home/all-posts/all-posts.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { DeletePostComponent } from './delete-post/delete-post.component';
import { DetailsPostComponent } from './details-post/details-post.component';

export const routes: Routes = [

    { path:'', component: HomeComponent},
    { path:'refresh', component: HomeComponent},
    { path:'about', component: AboutComponent },
    { path:'create', component: CreatePostComponent},
    { path:'update/:id', component: UpdatePostComponent},
    { path:'delete/:id', component: DeletePostComponent},
    { path:'details/:id', component: DetailsPostComponent}

];
