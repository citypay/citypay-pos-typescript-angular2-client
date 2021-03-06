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


/**
 * A request for a sale
 */
export interface SaleRequest {
    /**
     * The name of the target device used by the API. The device will be setup prior to the sale but allows targeting of multiple devices.
     */
    device: string;
    /**
     * The amount to process in the lowest denomination and in the base currency of the device. 4798 for instance would process the transaction for £47.98
     */
    amount: number;
    /**
     * An identifier or reference for the sale as taken by the point of sale system. This should be used to cross reference transactions after it has processed. The value should be unique and will be used to check on the processing of the transaction.
     */
    identifier: string;
}
