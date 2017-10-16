import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

import 'rxjs/Rx';

@Injectable()
export class HttpService {

    private baseUrl: string;

    constructor(private http: HttpClient, private router: Router) {
        this.baseUrl = environment.baseUrl;
    }

    private getHeaders(): HttpHeaders {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        let user = localStorage.getItem('user');

        if (user) {
            // HttpHeaders are immutable, set() method returns new instance of HttpHeaders
            headers = headers.set('Authorization', `Bearer ${JSON.parse(user).token}`);
        }

        return headers;
    }

    private onError(error: any): Promise<any> {
        if (error.status === 401 || error.status === 403) {
            this.router.navigate(['/login']);
        }
        return Promise.reject(error);
    }

    /**
     * Executes GET request for specified url.
     * @param url Url to execute.
     */
    get(url: string): Observable<any> {
        return this.http.get(`${this.baseUrl}${url}`, {
            headers: this.getHeaders()
        }).catch(error => this.onError(error));
    }

    /**
     * Executes POST request with specified url and data
     * @param url Request Url.
     * @param data Post data.
     */
    post(url: string, data: any): Observable<any> {
        return this.http.post(`${this.baseUrl}${url}`, data, {
            headers: this.getHeaders()
        }).catch(error => this.onError(error));
    }
}
