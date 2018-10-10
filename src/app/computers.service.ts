import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { Computer } from 'interfaces/server.interface';

@Injectable()
export class ComputersService {
    computers$ = new BehaviorSubject<Computer[]>(null);

    private readonly apiUrl = 'https://boardapi-cb1c9.firebaseio.com/computers/.json';

    constructor(private http: HttpClient) { }

    fetchData() {
        this.http.get<Computer[]>(this.apiUrl).subscribe(res => {
            this.computers$.next(res);
        });
    }
}
