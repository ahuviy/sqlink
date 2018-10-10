import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Computer } from 'interfaces/server.interface';
import { Store, PublicStore } from 'utils/store';

export interface ComputersState {
    computers: Computer[];
}

@Injectable()
export class ComputersService {
    private store = Store<ComputersState>({ computers: null });
    state: PublicStore<ComputersState> = this.store.toPublic();

    constructor(private http: HttpClient) { }

    fetchData() {
        this.http.get<Computer[]>('https://boardapi-cb1c9.firebaseio.com/computers/.json')
            .subscribe(res => this.store.publish(s => s.computers = res));
    }
}
