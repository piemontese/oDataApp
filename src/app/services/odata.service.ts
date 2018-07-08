import { Injectable } from '@angular/core';

import { Http, RequestOptionsArgs, Response } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { IUrlOptions } from '../models/odata-model';
import { RequestTypes } from '../models/odata-model';

@Injectable()
export class OdataService {

    constructor(
        private host: string,
        private http: Http
    ) { }


    private constructUrl(urlOptions: IUrlOptions): string {
        return this.host + urlOptions.restOfUrl;
    }


    // T specifies a generic output of function
    public Request<T>(requestType: RequestTypes, urlOptions: IUrlOptions, body?: any, options?: RequestOptionsArgs): Observable<T> {
        let response: Observable<Response>;
        // True in case of post, put and patch
        if (body && options) {
            response = this.http[RequestTypes[requestType]](
                this.constructUrl(urlOptions),
                body,
                options);
        } else if (body) { // True in case of post, put and patch if options is empty
            response = this.http[RequestTypes[requestType]](
                this.constructUrl(urlOptions),
                body);
        } else if (options) { // True in case of get, delete, head and options
            response = this.http[RequestTypes[requestType]](
                this.constructUrl(urlOptions),
                options);
        } else { // True in case of get, delete, head and options, if options is empty
            response = this.http[RequestTypes[requestType]](
                this.constructUrl(urlOptions),
                options);
        }

        return response.map((res) => <T>res.json());
    }
}

