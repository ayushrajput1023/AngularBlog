import { HttpClient } from "@angular/common/http";
import { Injectable, inject, signal } from "@angular/core";
import { Router } from "@angular/router";
import { postInterface } from "../app.model";

@Injectable({providedIn : "root" })
export class HomeService
{
    constructor(private route: Router) {}
    private httpClient = inject(HttpClient);

    refresh = signal<boolean>(false);

    onSearchId(id : string)
    {
        // GetPostById
        return this.httpClient.get<postInterface>('https://localhost:44392/api/Posts/GetPostById/' + id);
    }

    onSearchName(id : string)
    {
        // GetPostByName
        return this.httpClient.get<postInterface[]>('https://localhost:44392/api/Posts/GetPostByTitle/' + id);
    }

    onRefresh()
    {
        if(this.refresh() == true)
            {
              this.route.navigateByUrl('');
              this.refresh.set(false);
            }
          else if(this.refresh() == false){
            this.route.navigateByUrl('/refresh');
            this.refresh.set(true);
          }
    }

}