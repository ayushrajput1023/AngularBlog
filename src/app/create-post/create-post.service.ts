import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { addPostInterface } from "../app.model";

@Injectable({ providedIn: 'root' })
export class CreatePostService
{
    constructor(private router: Router) {}
    private httpClient = inject(HttpClient);

    addPost(form : NgForm)
    {
        // AddPost
    return this.httpClient.post<addPostInterface>('https://localhost:44392/api/Posts/AddPost', {
        title : form.value.postTitle,
        content : form.value.postContent,
        page : form.value.postPage
      });
    }

    navigateToHomePage()
    {
        this.router.navigateByUrl('');
    }
  
}