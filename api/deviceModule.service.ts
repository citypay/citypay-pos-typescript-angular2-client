/**
 * CityPay POS API
 * CityPay Point of Sale API for payment with card present devices including EMV readers and contactless POS readers.  The API is available from https://github.com/citypay/citypay-pos-api  The API makes it simple to add EMV and contactless card acceptance to iOS, Android, Tablet and desktop applicaitons using a HTTPS protocol. It segregates the complexity of payment processing from the sales environment and eliminates any necessity for the target system to handle card data. 
 *
 * OpenAPI spec version: 1.0.0
 * Contact: dev@citypay.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams }               from '@angular/common/http';

import { Observable }                                        from 'rxjs/Observable';
import '../rxjs-operators';

import { DeviceInfo } from '../model/deviceInfo';
import { Result } from '../model/result';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';


@Injectable()
export class DeviceModuleService {

    protected basePath = 'https://pos.citypay.com/citypay-pos-api/1.0.0';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Device Information
     * Obtains information regarding the device and to review the current status of a device such as the battery charge, serial number and device type. 
     * @param deviceId The name of the target device used by the API.
     */
    public deviceInfo(deviceId: string): Observable<DeviceInfo> {
        if (deviceId === null || deviceId === undefined) {
            throw new Error('Required parameter deviceId was null or undefined when calling deviceInfo.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<any>(`${this.basePath}/device/${encodeURIComponent(String(deviceId))}/info`,
            {
                headers: headers,
                withCredentials: this.configuration.withCredentials,
            }
        );
    }

    /**
     * Device Ping
     * To monitor or to check whether a device is available, the host can send a simple &#x60;GET&#x60; request to the URL at &#x60;/device/{deviceId}/ping&#x60; to see if the device is responding and available. 
     * @param deviceId The name of the target device used by the API.
     */
    public ping(deviceId: string): Observable<Result> {
        if (deviceId === null || deviceId === undefined) {
            throw new Error('Required parameter deviceId was null or undefined when calling ping.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<any>(`${this.basePath}/device/${encodeURIComponent(String(deviceId))}/ping`,
            {
                headers: headers,
                withCredentials: this.configuration.withCredentials,
            }
        );
    }

}
