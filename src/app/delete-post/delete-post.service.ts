import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Router } from "@angular/router";
import { postInterface } from "../app.model";

@Injectable({ providedIn : 'root'})
export class DeletePostService
{
    constructor(private router : Router) {}

    private httpClient = inject(HttpClient);

    deletePost(id : number)
    {
     // DeletePostById
     return this.httpClient.delete<postInterface>('https://localhost:44392/api/Posts/DeletePostById/' + id);
    }

    navigateToHomePage()
    {
        this.router.navigateByUrl('');
    }
}