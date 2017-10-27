import { Component, OnInit } from '@angular/core';

import { OdataService } from '../../services/odata.service';
import { RequestTypes } from '../../models/odata-model';
import { IUrlOptions } from '../../models/odata-model';

@Component({
    selector: 'odata',
    templateUrl: 'odata.component.html'
})
export class OdataComponent { //implements OnInit {

    public requestResult: any;

    constructor( private odata?: OdataService ) { }

    ngOnInit() { }

    testGet() {
        let urlOptions: IUrlOptions = <IUrlOptions>{};
        urlOptions.restOfUrl = "Products?$format=json";
        this.odata.Request(RequestTypes.get, urlOptions).subscribe(
            data => this.requestResult = data,
            error => alert(error)
        );
    }

    testPost() {
        let urlOptions: IUrlOptions = <IUrlOptions>{};
        this.odata.Request(RequestTypes.post, urlOptions).subscribe(
            data => this.requestResult = data,
            error => alert(error)
        );
    }

    testPut() {
        let urlOptions: IUrlOptions = <IUrlOptions>{};
        this.odata.Request(RequestTypes.put, urlOptions).subscribe(
            data => this.requestResult = data,
            error => alert(error)
        );
    }

    testPatch() {
        let urlOptions: IUrlOptions = <IUrlOptions>{};
        this.odata.Request(RequestTypes.patch, urlOptions).subscribe(
            data => this.requestResult = data,
            error => alert(error)
        );
    }

    testDelete() {
        let urlOptions: IUrlOptions = <IUrlOptions>{};
        this.requestResult = this.odata.Request(RequestTypes.delete, urlOptions);
    }

}

