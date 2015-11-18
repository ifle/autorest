/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.13.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { ServiceClientOptions, RequestOptions, ServiceCallback, ServiceClientCredentials } from 'ms-rest';
import * as operations from "./operations";

declare class AutoRestAzureSpecialParametersTestClient {
    /**
     * @class
     * Initializes a new instance of the AutoRestAzureSpecialParametersTestClient class.
     * @constructor
     *
     * @param {Credentials} credentials The management credentials for Azure.
     *
     * @param {String} subscriptionId The subscription id, which appears in the path, always modeled in credentials. The value is always '1234-5678-9012-3456'
     *
     * @param {string} [baseUri] - The base URI of the service.
     *
     * @param {object} [options] - The parameter options
     *
     * @param {Array} [options.filters] - Filters to be added to the request pipeline
     *
     * @param {object} [options.requestOptions] - Options for the underlying request object
     * {@link https://github.com/request/request#requestoptions-callback Options doc}
     *
     * @param {bool} [options.noRetryPolicy] - If set to true, turn off default retry policy
     */
    constructor(credentials: ServiceClientCredentials, subscriptionId: string, baseUri: string, options: ServiceClientOptions);

    credentials: ServiceClientCredentials;

    subscriptionId: string;

    apiVersion: string;

    acceptLanguage: string;

    longRunningOperationRetryTimeout: number;

    // Operation groups
    xMsClientRequestId: operations.XMsClientRequestId;
    subscriptionInCredentials: operations.SubscriptionInCredentials;
    subscriptionInMethod: operations.SubscriptionInMethod;
    apiVersionDefault: operations.ApiVersionDefault;
    apiVersionLocal: operations.ApiVersionLocal;
    skipUrlEncoding: operations.SkipUrlEncoding;
    header: operations.Header;
    }

export = AutoRestAzureSpecialParametersTestClient;
