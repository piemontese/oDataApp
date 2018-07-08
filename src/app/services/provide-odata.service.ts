import { Http } from '@angular/http';

import { OdataService } from './odata.service';

export function ProvideOdataService(url: string) {
    return {
        provide: OdataService, useFactory: (http) => {
            return new OdataService(url, http);
        },
        deps: [Http]
    };
}
