import { Injectable } from '@angular/core';
import { HttpService } from '../../../services';

@Injectable()
export class UserService {

    constructor(private http: HttpService) {
    }

    getUsers() {
        return this.http.get('/users');
    }
}
