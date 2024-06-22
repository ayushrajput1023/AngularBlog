import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Router } from "@angular/router";
import { postInterface } from "../app.model";

@Injectable({ providedIn : 'root'})
export class UpdatePostService
{
    constructor(private router : Router){}

    private httpClient = inject(HttpClient);

    updatePost(id : number, title : string)
    {
        // UpdatePostTitlleById
        return this.httpClient.patch<postInterface>('https://localhost:44392/api/Posts/UpdatePostTitleById/' + id +'/'+ title, {
        observe: null
      })
    }

    navigateToHomePage()
    {
        this.router.navigateByUrl('');
    }
}