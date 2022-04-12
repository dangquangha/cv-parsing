/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@affinda/affinda/dist-esm/affindaAPI.js":
/*!**************************************************************!*\
  !*** ./node_modules/@affinda/affinda/dist-esm/affindaAPI.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AffindaAPI": () => (/* binding */ AffindaAPI)
/* harmony export */ });
/* harmony import */ var _azure_core_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @azure/core-client */ "./node_modules/@azure/core-client/dist-esm/src/serializer.js");
/* harmony import */ var _models_parameters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/parameters */ "./node_modules/@affinda/affinda/dist-esm/models/parameters.js");
/* harmony import */ var _models_mappers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/mappers */ "./node_modules/@affinda/affinda/dist-esm/models/mappers.js");
/* harmony import */ var _affindaAPIContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./affindaAPIContext */ "./node_modules/@affinda/affinda/dist-esm/affindaAPIContext.js");




class AffindaAPI extends _affindaAPIContext__WEBPACK_IMPORTED_MODULE_0__.AffindaAPIContext {
    /**
     * Initializes a new instance of the AffindaAPI class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param options The parameter options
     */
    constructor(credentials, options) {
        super(credentials, options);
    }
    /**
     * Returns all the resume summaries for that user, limited to 300 per page.
     * @param options The options parameters.
     */
    getAllResumes(options) {
        return this.sendOperationRequest({ options }, getAllResumesOperationSpec);
    }
    /**
     * Uploads a resume for parsing.
     * When successful, returns an `identifier` in the response for subsequent use with the
     * [/resumes/{identifier}](#operation/getResume) endpoint to check processing status and retrieve
     * results.
     * @param options The options parameters.
     */
    createResume(options) {
        return this.sendOperationRequest({ options }, createResumeOperationSpec);
    }
    /**
     * Returns all the parse results for that resume if processing is completed.
     * The `identifier` is the unique ID returned after POST-ing the resume via the
     * [/resumes](#operation/createResume) endpoint.
     * @param identifier Document identifier
     * @param options The options parameters.
     */
    getResume(identifier, options) {
        return this.sendOperationRequest({ identifier, options }, getResumeOperationSpec);
    }
    /**
     * Deletes the specified resume from the database
     * @param identifier Resume identifier
     * @param options The options parameters.
     */
    deleteResume(identifier, options) {
        return this.sendOperationRequest({ identifier, options }, deleteResumeOperationSpec);
    }
    /**
     * Returns all the redacted resume information for that resume
     * @param options The options parameters.
     */
    getAllRedactedResumes(options) {
        return this.sendOperationRequest({ options }, getAllRedactedResumesOperationSpec);
    }
    /**
     * Uploads a resume for redacting.
     * @param options The options parameters.
     */
    createRedactedResume(options) {
        return this.sendOperationRequest({ options }, createRedactedResumeOperationSpec);
    }
    /**
     * Returns all the redaction results for that resume if processing is completed.
     * The `identifier` is the unique ID returned after POST-ing the resume via the
     * [/redacted_resumes](#operation/createRedactedResume) endpoint.
     * @param identifier Document identifier
     * @param options The options parameters.
     */
    getRedactedResume(identifier, options) {
        return this.sendOperationRequest({ identifier, options }, getRedactedResumeOperationSpec);
    }
    /**
     * Deletes the specified resume from the database
     * @param identifier Document identifier
     * @param options The options parameters.
     */
    deleteRedactedResume(identifier, options) {
        return this.sendOperationRequest({ identifier, options }, deleteRedactedResumeOperationSpec);
    }
    /**
     * Returns all the resume formats
     * @param options The options parameters.
     */
    getAllResumeFormats(options) {
        return this.sendOperationRequest({ options }, getAllResumeFormatsOperationSpec);
    }
    /**
     * Returns all the reformatted resume information for that resume
     * @param options The options parameters.
     */
    getAllReformattedResumes(options) {
        return this.sendOperationRequest({ options }, getAllReformattedResumesOperationSpec);
    }
    /**
     * Upload a resume for reformatting.
     * @param resumeFormat Identifier of the format used
     * @param options The options parameters.
     */
    createReformattedResume(resumeFormat, options) {
        return this.sendOperationRequest({ resumeFormat, options }, createReformattedResumeOperationSpec);
    }
    /**
     * Returns all the reformatting results for that resume if processing is completed.
     * The `identifier` is the unique ID returned after POST-ing the resume via the
     * [/reformatted_resumes](#operation/createReformattedResume) endpoint.
     * @param identifier Document identifier
     * @param options The options parameters.
     */
    getReformattedResume(identifier, options) {
        return this.sendOperationRequest({ identifier, options }, getReformattedResumeOperationSpec);
    }
    /**
     * Delete the specified resume from the database
     * @param identifier Document identifier
     * @param options The options parameters.
     */
    deleteReformattedResume(identifier, options) {
        return this.sendOperationRequest({ identifier, options }, deleteReformattedResumeOperationSpec);
    }
    /**
     * Searches through parsed resumes.
     * @param body Search parameters
     * @param options The options parameters.
     */
    createResumeSearch(body, options) {
        return this.sendOperationRequest({ body, options }, createResumeSearchOperationSpec);
    }
    /**
     * Returns all the indexes
     * @param options The options parameters.
     */
    getAllIndexes(options) {
        return this.sendOperationRequest({ options }, getAllIndexesOperationSpec);
    }
    /**
     * Create an index for the search tool
     * @param options The options parameters.
     */
    createIndex(options) {
        return this.sendOperationRequest({ options }, createIndexOperationSpec);
    }
    /**
     * Deletes the specified index from the database
     * @param name Index name
     * @param options The options parameters.
     */
    deleteIndex(name, options) {
        return this.sendOperationRequest({ name, options }, deleteIndexOperationSpec);
    }
    /**
     * Returns all the indexed documents for that index
     * @param name Index name
     * @param options The options parameters.
     */
    getAllIndexDocuments(name, options) {
        return this.sendOperationRequest({ name, options }, getAllIndexDocumentsOperationSpec);
    }
    /**
     * Create an indexed document for the search tool
     * @param name Index name
     * @param body Document to index
     * @param options The options parameters.
     */
    createIndexDocument(name, body, options) {
        return this.sendOperationRequest({ name, body, options }, createIndexDocumentOperationSpec);
    }
    /**
     * Delete the specified indexed document from the database
     * @param name Index name
     * @param identifier Document identifier
     * @param options The options parameters.
     */
    deleteIndexDocument(name, identifier, options) {
        return this.sendOperationRequest({ name, identifier, options }, deleteIndexDocumentOperationSpec);
    }
    /**
     * Returns all the invoice summaries for that user, limited to 300 per page.
     * @param options The options parameters.
     */
    getAllInvoices(options) {
        return this.sendOperationRequest({ options }, getAllInvoicesOperationSpec);
    }
    /**
     * Uploads an invoice for parsing.
     * When successful, returns an `identifier` in the response for subsequent use with the
     * [/invoices/{identifier}](#operation/getInvoice) endpoint to check processing status and retrieve
     * results.
     * @param options The options parameters.
     */
    createInvoice(options) {
        return this.sendOperationRequest({ options }, createInvoiceOperationSpec);
    }
    /**
     * Returns all the parse results for that invoice if processing is completed.
     * The `identifier` is the unique ID returned after POST-ing the invoice via the
     * [/invoices](#operation/createInvoice) endpoint.
     * @param identifier Document identifier
     * @param options The options parameters.
     */
    getInvoice(identifier, options) {
        return this.sendOperationRequest({ identifier, options }, getInvoiceOperationSpec);
    }
    /**
     * Delete the specified invoice from the database
     * @param identifier Invoice identifier
     * @param options The options parameters.
     */
    deleteInvoice(identifier, options) {
        return this.sendOperationRequest({ identifier, options }, deleteInvoiceOperationSpec);
    }
    /**
     * TODO TODO TODO
     * @param options The options parameters.
     */
    listOccupationGroups(options) {
        return this.sendOperationRequest({ options }, listOccupationGroupsOperationSpec);
    }
}
// Operation Specifications
const serializer = _azure_core_client__WEBPACK_IMPORTED_MODULE_1__.createSerializer(_models_mappers__WEBPACK_IMPORTED_MODULE_2__, /* isXml */ false);
const getAllResumesOperationSpec = {
    path: "/resumes",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.GetAllDocumentsResults
        },
        400: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        401: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        404: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        default: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        }
    },
    queryParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.offset, _models_parameters__WEBPACK_IMPORTED_MODULE_3__.limit],
    urlParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.$host],
    headerParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.accept],
    serializer
};
const createResumeOperationSpec = {
    path: "/resumes",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.Resume
        },
        201: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.Resume
        },
        400: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        401: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        404: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        default: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        }
    },
    formDataParameters: [
        _models_parameters__WEBPACK_IMPORTED_MODULE_3__.file,
        _models_parameters__WEBPACK_IMPORTED_MODULE_3__.identifier,
        _models_parameters__WEBPACK_IMPORTED_MODULE_3__.fileName,
        _models_parameters__WEBPACK_IMPORTED_MODULE_3__.url,
        _models_parameters__WEBPACK_IMPORTED_MODULE_3__.wait,
        _models_parameters__WEBPACK_IMPORTED_MODULE_3__.language,
        _models_parameters__WEBPACK_IMPORTED_MODULE_3__.expiryTime
    ],
    urlParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.$host],
    headerParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.contentType, _models_parameters__WEBPACK_IMPORTED_MODULE_3__.accept1],
    serializer
};
const getResumeOperationSpec = {
    path: "/resumes/{identifier}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.Resume
        },
        400: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        401: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        404: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        default: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        }
    },
    urlParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.$host, _models_parameters__WEBPACK_IMPORTED_MODULE_3__.identifier1],
    headerParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.accept],
    serializer
};
const deleteResumeOperationSpec = {
    path: "/resumes/{identifier}",
    httpMethod: "DELETE",
    responses: {
        204: {},
        400: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        401: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        404: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        default: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        }
    },
    urlParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.$host, _models_parameters__WEBPACK_IMPORTED_MODULE_3__.identifier1],
    headerParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.accept],
    serializer
};
const getAllRedactedResumesOperationSpec = {
    path: "/redacted_resumes",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.GetAllDocumentsResults
        },
        400: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        401: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        404: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        default: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        }
    },
    queryParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.offset, _models_parameters__WEBPACK_IMPORTED_MODULE_3__.limit],
    urlParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.$host],
    headerParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.accept],
    serializer
};
const createRedactedResumeOperationSpec = {
    path: "/redacted_resumes",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RedactedResume
        },
        201: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RedactedResume
        },
        400: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        401: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        404: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        default: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        }
    },
    formDataParameters: [
        _models_parameters__WEBPACK_IMPORTED_MODULE_3__.file,
        _models_parameters__WEBPACK_IMPORTED_MODULE_3__.identifier,
        _models_parameters__WEBPACK_IMPORTED_MODULE_3__.fileName,
        _models_parameters__WEBPACK_IMPORTED_MODULE_3__.url,
        _models_parameters__WEBPACK_IMPORTED_MODULE_3__.wait,
        _models_parameters__WEBPACK_IMPORTED_MODULE_3__.language,
        _models_parameters__WEBPACK_IMPORTED_MODULE_3__.expiryTime,
        _models_parameters__WEBPACK_IMPORTED_MODULE_3__.redactHeadshot,
        _models_parameters__WEBPACK_IMPORTED_MODULE_3__.redactPersonalDetails,
        _models_parameters__WEBPACK_IMPORTED_MODULE_3__.redactWorkDetails,
        _models_parameters__WEBPACK_IMPORTED_MODULE_3__.redactEducationDetails,
        _models_parameters__WEBPACK_IMPORTED_MODULE_3__.redactReferees,
        _models_parameters__WEBPACK_IMPORTED_MODULE_3__.redactLocations,
        _models_parameters__WEBPACK_IMPORTED_MODULE_3__.redactDates,
        _models_parameters__WEBPACK_IMPORTED_MODULE_3__.redactGender
    ],
    urlParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.$host],
    headerParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.contentType, _models_parameters__WEBPACK_IMPORTED_MODULE_3__.accept1],
    serializer
};
const getRedactedResumeOperationSpec = {
    path: "/redacted_resumes/{identifier}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RedactedResume
        },
        400: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        401: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        404: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        default: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        }
    },
    urlParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.$host, _models_parameters__WEBPACK_IMPORTED_MODULE_3__.identifier1],
    headerParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.accept],
    serializer
};
const deleteRedactedResumeOperationSpec = {
    path: "/redacted_resumes/{identifier}",
    httpMethod: "DELETE",
    responses: {
        204: {},
        400: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        401: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        404: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        default: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        }
    },
    urlParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.$host, _models_parameters__WEBPACK_IMPORTED_MODULE_3__.identifier1],
    headerParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.accept],
    serializer
};
const getAllResumeFormatsOperationSpec = {
    path: "/resume_formats",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.Paths1UtuacyResumeFormatsGetResponses200ContentApplicationJsonSchema
        },
        400: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        401: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        404: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        default: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        }
    },
    queryParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.offset, _models_parameters__WEBPACK_IMPORTED_MODULE_3__.limit],
    urlParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.$host],
    headerParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.accept],
    serializer
};
const getAllReformattedResumesOperationSpec = {
    path: "/reformatted_resumes",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.GetAllDocumentsResults
        },
        400: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        401: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        404: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        default: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        }
    },
    queryParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.offset, _models_parameters__WEBPACK_IMPORTED_MODULE_3__.limit],
    urlParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.$host],
    headerParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.accept],
    serializer
};
const createReformattedResumeOperationSpec = {
    path: "/reformatted_resumes",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.ReformattedResume
        },
        201: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.ReformattedResume
        },
        400: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        401: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        404: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        default: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        }
    },
    formDataParameters: [
        _models_parameters__WEBPACK_IMPORTED_MODULE_3__.file,
        _models_parameters__WEBPACK_IMPORTED_MODULE_3__.identifier,
        _models_parameters__WEBPACK_IMPORTED_MODULE_3__.fileName,
        _models_parameters__WEBPACK_IMPORTED_MODULE_3__.url,
        _models_parameters__WEBPACK_IMPORTED_MODULE_3__.wait,
        _models_parameters__WEBPACK_IMPORTED_MODULE_3__.language,
        _models_parameters__WEBPACK_IMPORTED_MODULE_3__.resumeFormat
    ],
    urlParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.$host],
    headerParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.contentType, _models_parameters__WEBPACK_IMPORTED_MODULE_3__.accept1],
    serializer
};
const getReformattedResumeOperationSpec = {
    path: "/reformatted_resumes/{identifier}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.ReformattedResume
        },
        400: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        401: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        404: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        default: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        }
    },
    urlParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.$host, _models_parameters__WEBPACK_IMPORTED_MODULE_3__.identifier1],
    headerParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.accept],
    serializer
};
const deleteReformattedResumeOperationSpec = {
    path: "/reformatted_resumes/{identifier}",
    httpMethod: "DELETE",
    responses: {
        204: {},
        400: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        401: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        404: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        default: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        }
    },
    urlParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.$host, _models_parameters__WEBPACK_IMPORTED_MODULE_3__.identifier1],
    headerParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.accept],
    serializer
};
const createResumeSearchOperationSpec = {
    path: "/resume_search",
    httpMethod: "POST",
    responses: {
        201: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.ResumeSearch
        },
        400: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        401: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        404: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        default: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        }
    },
    requestBody: _models_parameters__WEBPACK_IMPORTED_MODULE_3__.body,
    queryParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.offset, _models_parameters__WEBPACK_IMPORTED_MODULE_3__.limit1],
    urlParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.$host],
    headerParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.accept, _models_parameters__WEBPACK_IMPORTED_MODULE_3__.contentType1],
    mediaType: "json",
    serializer
};
const getAllIndexesOperationSpec = {
    path: "/index",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.Paths6Pypg5IndexGetResponses200ContentApplicationJsonSchema
        },
        400: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        401: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        404: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        default: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        }
    },
    queryParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.offset, _models_parameters__WEBPACK_IMPORTED_MODULE_3__.limit],
    urlParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.$host],
    headerParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.accept],
    serializer
};
const createIndexOperationSpec = {
    path: "/index",
    httpMethod: "POST",
    responses: {
        201: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.Paths1Mc0Je6IndexPostResponses201ContentApplicationJsonSchema
        },
        400: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        401: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        404: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        default: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        }
    },
    formDataParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.name],
    urlParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.$host],
    headerParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.contentType, _models_parameters__WEBPACK_IMPORTED_MODULE_3__.accept1],
    serializer
};
const deleteIndexOperationSpec = {
    path: "/index/{name}",
    httpMethod: "DELETE",
    responses: {
        204: {},
        400: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        401: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        404: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        default: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        }
    },
    urlParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.$host, _models_parameters__WEBPACK_IMPORTED_MODULE_3__.name1],
    headerParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.accept],
    serializer
};
const getAllIndexDocumentsOperationSpec = {
    path: "/index/{name}/documents",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.PathsRvverlIndexNameDocumentsGetResponses200ContentApplicationJsonSchema
        },
        400: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        401: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        404: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        default: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        }
    },
    urlParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.$host, _models_parameters__WEBPACK_IMPORTED_MODULE_3__.name1],
    headerParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.accept],
    serializer
};
const createIndexDocumentOperationSpec = {
    path: "/index/{name}/documents",
    httpMethod: "POST",
    responses: {
        201: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.PathsCoo0XpIndexNameDocumentsPostResponses201ContentApplicationJsonSchema
        },
        400: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        401: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        404: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        default: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        }
    },
    requestBody: _models_parameters__WEBPACK_IMPORTED_MODULE_3__.body1,
    urlParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.$host, _models_parameters__WEBPACK_IMPORTED_MODULE_3__.name1],
    headerParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.accept, _models_parameters__WEBPACK_IMPORTED_MODULE_3__.contentType1],
    mediaType: "json",
    serializer
};
const deleteIndexDocumentOperationSpec = {
    path: "/index/{name}/documents/{identifier}",
    httpMethod: "DELETE",
    responses: {
        204: {},
        400: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        401: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        404: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        default: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        }
    },
    urlParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.$host, _models_parameters__WEBPACK_IMPORTED_MODULE_3__.identifier1, _models_parameters__WEBPACK_IMPORTED_MODULE_3__.name1],
    headerParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.accept],
    serializer
};
const getAllInvoicesOperationSpec = {
    path: "/invoices",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.GetAllInvoicesResults
        },
        400: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        401: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        404: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        default: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        }
    },
    queryParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.offset, _models_parameters__WEBPACK_IMPORTED_MODULE_3__.limit],
    urlParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.$host],
    headerParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.accept],
    serializer
};
const createInvoiceOperationSpec = {
    path: "/invoices",
    httpMethod: "POST",
    responses: {
        200: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.Invoice
        },
        201: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.Invoice
        },
        400: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        401: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        404: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        default: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        }
    },
    formDataParameters: [
        _models_parameters__WEBPACK_IMPORTED_MODULE_3__.file,
        _models_parameters__WEBPACK_IMPORTED_MODULE_3__.identifier,
        _models_parameters__WEBPACK_IMPORTED_MODULE_3__.fileName,
        _models_parameters__WEBPACK_IMPORTED_MODULE_3__.url,
        _models_parameters__WEBPACK_IMPORTED_MODULE_3__.wait,
        _models_parameters__WEBPACK_IMPORTED_MODULE_3__.language,
        _models_parameters__WEBPACK_IMPORTED_MODULE_3__.expiryTime
    ],
    urlParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.$host],
    headerParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.contentType, _models_parameters__WEBPACK_IMPORTED_MODULE_3__.accept1],
    serializer
};
const getInvoiceOperationSpec = {
    path: "/invoices/{identifier}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.Invoice
        },
        400: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        401: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        404: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        default: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        }
    },
    urlParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.$host, _models_parameters__WEBPACK_IMPORTED_MODULE_3__.identifier1],
    headerParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.accept],
    serializer
};
const deleteInvoiceOperationSpec = {
    path: "/invoices/{identifier}",
    httpMethod: "DELETE",
    responses: {
        204: {},
        400: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        401: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        404: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        default: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        }
    },
    urlParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.$host, _models_parameters__WEBPACK_IMPORTED_MODULE_3__.identifier1],
    headerParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.accept],
    serializer
};
const listOccupationGroupsOperationSpec = {
    path: "/occupation_groups",
    httpMethod: "GET",
    responses: {
        201: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.OccupationGroup
        },
        400: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        401: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        404: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        },
        default: {
            bodyMapper: _models_mappers__WEBPACK_IMPORTED_MODULE_2__.RequestError
        }
    },
    urlParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.$host],
    headerParameters: [_models_parameters__WEBPACK_IMPORTED_MODULE_3__.accept],
    serializer
};
//# sourceMappingURL=affindaAPI.js.map

/***/ }),

/***/ "./node_modules/@affinda/affinda/dist-esm/affindaAPIContext.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@affinda/affinda/dist-esm/affindaAPIContext.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AffindaAPIContext": () => (/* binding */ AffindaAPIContext)
/* harmony export */ });
/* harmony import */ var _azure_core_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @azure/core-client */ "./node_modules/@azure/core-client/dist-esm/src/serviceClient.js");

class AffindaAPIContext extends _azure_core_client__WEBPACK_IMPORTED_MODULE_0__.ServiceClient {
    /**
     * Initializes a new instance of the AffindaAPIContext class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param options The parameter options
     */
    constructor(credentials, options) {
        if (credentials === undefined) {
            throw new Error("'credentials' cannot be null");
        }
        // Initializing default values for options
        if (!options) {
            options = {};
        }
        const defaults = {
            requestContentType: "application/json; charset=utf-8",
            credential: credentials
        };
        const packageDetails = `azsdk-js-affinda/0.4.0`;
        const userAgentPrefix = options.userAgentOptions && options.userAgentOptions.userAgentPrefix
            ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
            : `${packageDetails}`;
        if (!options.credentialScopes) {
            options.credentialScopes = ["https://management.azure.com/.default"];
        }
        const optionsWithDefaults = Object.assign(Object.assign(Object.assign({}, defaults), options), { userAgentOptions: {
                userAgentPrefix
            }, baseUri: options.endpoint || "https://api.affinda.com/v1" });
        super(optionsWithDefaults);
        // Assigning values to Constant parameters
        this.$host = options.$host || "https://api.affinda.com/v1";
    }
}
//# sourceMappingURL=affindaAPIContext.js.map

/***/ }),

/***/ "./node_modules/@affinda/affinda/dist-esm/affindaAPICredential.js":
/*!************************************************************************!*\
  !*** ./node_modules/@affinda/affinda/dist-esm/affindaAPICredential.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AffindaCredential": () => (/* binding */ AffindaCredential)
/* harmony export */ });
class AffindaCredential {
    constructor(token) {
        this.token = token;
    }
    getToken(scopes, options) {
        return Promise.resolve({
            token: this.token,
            expiresOnTimestamp: 0
        });
    }
}
//# sourceMappingURL=affindaAPICredential.js.map

/***/ }),

/***/ "./node_modules/@affinda/affinda/dist-esm/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@affinda/affinda/dist-esm/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AffindaAPI": () => (/* reexport safe */ _affindaAPI__WEBPACK_IMPORTED_MODULE_0__.AffindaAPI),
/* harmony export */   "AffindaAPIContext": () => (/* reexport safe */ _affindaAPIContext__WEBPACK_IMPORTED_MODULE_1__.AffindaAPIContext),
/* harmony export */   "AffindaCredential": () => (/* reexport safe */ _affindaAPICredential__WEBPACK_IMPORTED_MODULE_2__.AffindaCredential)
/* harmony export */ });
/* harmony import */ var _affindaAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./affindaAPI */ "./node_modules/@affinda/affinda/dist-esm/affindaAPI.js");
/* harmony import */ var _affindaAPIContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./affindaAPIContext */ "./node_modules/@affinda/affinda/dist-esm/affindaAPIContext.js");
/* harmony import */ var _affindaAPICredential__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./affindaAPICredential */ "./node_modules/@affinda/affinda/dist-esm/affindaAPICredential.js");




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@affinda/affinda/dist-esm/models/mappers.js":
/*!******************************************************************!*\
  !*** ./node_modules/@affinda/affinda/dist-esm/models/mappers.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Components1TryetgSchemasResumedataPropertiesWorkexperienceItemsPropertiesOccupationPropertiesClassification": () => (/* binding */ Components1TryetgSchemasResumedataPropertiesWorkexperienceItemsPropertiesOccupationPropertiesClassification),
/* harmony export */   "ErrorModel": () => (/* binding */ ErrorModel),
/* harmony export */   "Get200ApplicationJsonPropertiesItemsItem": () => (/* binding */ Get200ApplicationJsonPropertiesItemsItem),
/* harmony export */   "GetAllDocumentsResults": () => (/* binding */ GetAllDocumentsResults),
/* harmony export */   "GetAllInvoicesResults": () => (/* binding */ GetAllInvoicesResults),
/* harmony export */   "Invoice": () => (/* binding */ Invoice),
/* harmony export */   "InvoiceData": () => (/* binding */ InvoiceData),
/* harmony export */   "Location": () => (/* binding */ Location),
/* harmony export */   "Meta": () => (/* binding */ Meta),
/* harmony export */   "OccupationGroup": () => (/* binding */ OccupationGroup),
/* harmony export */   "Paths108CfgmIndexGetResponses200ContentApplicationJsonSchemaPropertiesResultsItems": () => (/* binding */ Paths108CfgmIndexGetResponses200ContentApplicationJsonSchemaPropertiesResultsItems),
/* harmony export */   "Paths1BwrvmkInvoicesPostRequestbodyContentMultipartFormDataSchema": () => (/* binding */ Paths1BwrvmkInvoicesPostRequestbodyContentMultipartFormDataSchema),
/* harmony export */   "Paths1Mc0Je6IndexPostResponses201ContentApplicationJsonSchema": () => (/* binding */ Paths1Mc0Je6IndexPostResponses201ContentApplicationJsonSchema),
/* harmony export */   "Paths1UtuacyResumeFormatsGetResponses200ContentApplicationJsonSchema": () => (/* binding */ Paths1UtuacyResumeFormatsGetResponses200ContentApplicationJsonSchema),
/* harmony export */   "Paths6Pypg5IndexGetResponses200ContentApplicationJsonSchema": () => (/* binding */ Paths6Pypg5IndexGetResponses200ContentApplicationJsonSchema),
/* harmony export */   "Paths7EskthResumesPostRequestbodyContentMultipartFormDataSchema": () => (/* binding */ Paths7EskthResumesPostRequestbodyContentMultipartFormDataSchema),
/* harmony export */   "Paths8DdhfcRedactedResumesPostRequestbodyContentMultipartFormDataSchema": () => (/* binding */ Paths8DdhfcRedactedResumesPostRequestbodyContentMultipartFormDataSchema),
/* harmony export */   "PathsCoo0XpIndexNameDocumentsPostResponses201ContentApplicationJsonSchema": () => (/* binding */ PathsCoo0XpIndexNameDocumentsPostResponses201ContentApplicationJsonSchema),
/* harmony export */   "PathsGpptmIndexNameDocumentsPostRequestbodyContentApplicationJsonSchema": () => (/* binding */ PathsGpptmIndexNameDocumentsPostRequestbodyContentApplicationJsonSchema),
/* harmony export */   "PathsHryo8IndexNameDocumentsGetResponses200ContentApplicationJsonSchemaPropertiesResultsItems": () => (/* binding */ PathsHryo8IndexNameDocumentsGetResponses200ContentApplicationJsonSchemaPropertiesResultsItems),
/* harmony export */   "PathsRvverlIndexNameDocumentsGetResponses200ContentApplicationJsonSchema": () => (/* binding */ PathsRvverlIndexNameDocumentsGetResponses200ContentApplicationJsonSchema),
/* harmony export */   "PathsSot11NIndexPostRequestbodyContentMultipartFormDataSchema": () => (/* binding */ PathsSot11NIndexPostRequestbodyContentMultipartFormDataSchema),
/* harmony export */   "PathsYzn84IReformattedResumesPostRequestbodyContentMultipartFormDataSchema": () => (/* binding */ PathsYzn84IReformattedResumesPostRequestbodyContentMultipartFormDataSchema),
/* harmony export */   "RedactedResume": () => (/* binding */ RedactedResume),
/* harmony export */   "RedactedResumeData": () => (/* binding */ RedactedResumeData),
/* harmony export */   "ReformattedResume": () => (/* binding */ ReformattedResume),
/* harmony export */   "ReformattedResumeData": () => (/* binding */ ReformattedResumeData),
/* harmony export */   "RequestError": () => (/* binding */ RequestError),
/* harmony export */   "Resume": () => (/* binding */ Resume),
/* harmony export */   "ResumeData": () => (/* binding */ ResumeData),
/* harmony export */   "ResumeDataEducationItem": () => (/* binding */ ResumeDataEducationItem),
/* harmony export */   "ResumeDataEducationItemAccreditation": () => (/* binding */ ResumeDataEducationItemAccreditation),
/* harmony export */   "ResumeDataEducationItemDates": () => (/* binding */ ResumeDataEducationItemDates),
/* harmony export */   "ResumeDataEducationItemGrade": () => (/* binding */ ResumeDataEducationItemGrade),
/* harmony export */   "ResumeDataName": () => (/* binding */ ResumeDataName),
/* harmony export */   "ResumeDataRefereesItem": () => (/* binding */ ResumeDataRefereesItem),
/* harmony export */   "ResumeDataSectionsItem": () => (/* binding */ ResumeDataSectionsItem),
/* harmony export */   "ResumeDataSkillsItem": () => (/* binding */ ResumeDataSkillsItem),
/* harmony export */   "ResumeDataSkillsPropertiesItemsItem": () => (/* binding */ ResumeDataSkillsPropertiesItemsItem),
/* harmony export */   "ResumeDataWorkExperienceItem": () => (/* binding */ ResumeDataWorkExperienceItem),
/* harmony export */   "ResumeDataWorkExperienceItemDates": () => (/* binding */ ResumeDataWorkExperienceItemDates),
/* harmony export */   "ResumeDataWorkExperienceItemOccupation": () => (/* binding */ ResumeDataWorkExperienceItemOccupation),
/* harmony export */   "ResumeSearch": () => (/* binding */ ResumeSearch),
/* harmony export */   "ResumeSearchParameters": () => (/* binding */ ResumeSearchParameters),
/* harmony export */   "ResumeSearchParametersLanguagesItem": () => (/* binding */ ResumeSearchParametersLanguagesItem),
/* harmony export */   "ResumeSearchParametersLocationsItem": () => (/* binding */ ResumeSearchParametersLocationsItem),
/* harmony export */   "ResumeSearchParametersLocationsItemCoordinates": () => (/* binding */ ResumeSearchParametersLocationsItemCoordinates),
/* harmony export */   "ResumeSearchParametersSkillsItem": () => (/* binding */ ResumeSearchParametersSkillsItem),
/* harmony export */   "ResumeSearchResult": () => (/* binding */ ResumeSearchResult),
/* harmony export */   "ResumeSearchScoreComponent": () => (/* binding */ ResumeSearchScoreComponent)
/* harmony export */ });
const GetAllDocumentsResults = {
    type: {
        name: "Composite",
        className: "GetAllDocumentsResults",
        modelProperties: {
            count: {
                serializedName: "count",
                type: {
                    name: "Number"
                }
            },
            next: {
                serializedName: "next",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            previous: {
                serializedName: "previous",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            results: {
                serializedName: "results",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "Meta"
                        }
                    }
                }
            }
        }
    }
};
const Meta = {
    type: {
        name: "Composite",
        className: "Meta",
        modelProperties: {
            identifier: {
                serializedName: "identifier",
                required: true,
                nullable: true,
                type: {
                    name: "String"
                }
            },
            fileName: {
                serializedName: "fileName",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            ready: {
                serializedName: "ready",
                required: true,
                type: {
                    name: "Boolean"
                }
            },
            readyDt: {
                serializedName: "readyDt",
                nullable: true,
                type: {
                    name: "DateTime"
                }
            },
            failed: {
                serializedName: "failed",
                required: true,
                type: {
                    name: "Boolean"
                }
            },
            expiryTime: {
                serializedName: "expiryTime",
                nullable: true,
                type: {
                    name: "String"
                }
            }
        }
    }
};
const RequestError = {
    type: {
        name: "Composite",
        className: "RequestError",
        modelProperties: {
            detail: {
                serializedName: "detail",
                required: true,
                type: {
                    name: "String"
                }
            },
            statusCode: {
                serializedName: "statusCode",
                required: true,
                type: {
                    name: "Number"
                }
            }
        }
    }
};
const Resume = {
    type: {
        name: "Composite",
        className: "Resume",
        modelProperties: {
            data: {
                serializedName: "data",
                type: {
                    name: "Composite",
                    className: "ResumeData"
                }
            },
            meta: {
                serializedName: "meta",
                type: {
                    name: "Composite",
                    className: "Meta"
                }
            },
            error: {
                serializedName: "error",
                type: {
                    name: "Composite",
                    className: "ErrorModel"
                }
            }
        }
    }
};
const ResumeData = {
    type: {
        name: "Composite",
        className: "ResumeData",
        modelProperties: {
            name: {
                serializedName: "name",
                type: {
                    name: "Composite",
                    className: "ResumeDataName"
                }
            },
            phoneNumbers: {
                serializedName: "phoneNumbers",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "String"
                        }
                    }
                }
            },
            websites: {
                serializedName: "websites",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "String"
                        }
                    }
                }
            },
            emails: {
                serializedName: "emails",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "String"
                        }
                    }
                }
            },
            dateOfBirth: {
                serializedName: "dateOfBirth",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            location: {
                serializedName: "location",
                type: {
                    name: "Composite",
                    className: "Location"
                }
            },
            objective: {
                serializedName: "objective",
                type: {
                    name: "String"
                }
            },
            languages: {
                serializedName: "languages",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "String"
                        }
                    }
                }
            },
            summary: {
                serializedName: "summary",
                type: {
                    name: "String"
                }
            },
            totalYearsExperience: {
                serializedName: "totalYearsExperience",
                type: {
                    name: "Number"
                }
            },
            headShot: {
                serializedName: "headShot",
                nullable: true,
                type: {
                    name: "ByteArray"
                }
            },
            education: {
                serializedName: "education",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "ResumeDataEducationItem"
                        }
                    }
                }
            },
            profession: {
                serializedName: "profession",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            linkedin: {
                serializedName: "linkedin",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            workExperience: {
                serializedName: "workExperience",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "ResumeDataWorkExperienceItem"
                        }
                    }
                }
            },
            skills: {
                serializedName: "skills",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "ResumeDataSkillsItem"
                        }
                    }
                }
            },
            certifications: {
                serializedName: "certifications",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "String"
                        }
                    }
                }
            },
            publications: {
                serializedName: "publications",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "String"
                        }
                    }
                }
            },
            referees: {
                serializedName: "referees",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "ResumeDataRefereesItem"
                        }
                    }
                }
            },
            sections: {
                serializedName: "sections",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "ResumeDataSectionsItem"
                        }
                    }
                }
            },
            isResumeProbability: {
                serializedName: "isResumeProbability",
                type: {
                    name: "Number"
                }
            },
            rawText: {
                serializedName: "rawText",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const ResumeDataName = {
    type: {
        name: "Composite",
        className: "ResumeDataName",
        modelProperties: {
            raw: {
                serializedName: "raw",
                type: {
                    name: "String"
                }
            },
            first: {
                serializedName: "first",
                type: {
                    name: "String"
                }
            },
            last: {
                serializedName: "last",
                type: {
                    name: "String"
                }
            },
            middle: {
                serializedName: "middle",
                type: {
                    name: "String"
                }
            },
            title: {
                serializedName: "title",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const Location = {
    type: {
        name: "Composite",
        className: "Location",
        modelProperties: {
            formatted: {
                serializedName: "formatted",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            postalCode: {
                serializedName: "postalCode",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            state: {
                serializedName: "state",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            country: {
                serializedName: "country",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            countryCode: {
                serializedName: "countryCode",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            rawInput: {
                serializedName: "rawInput",
                required: true,
                type: {
                    name: "String"
                }
            },
            streetNumber: {
                serializedName: "streetNumber",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            street: {
                serializedName: "street",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            apartmentNumber: {
                serializedName: "apartmentNumber",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            city: {
                serializedName: "city",
                nullable: true,
                type: {
                    name: "String"
                }
            }
        }
    }
};
const ResumeDataEducationItem = {
    type: {
        name: "Composite",
        className: "ResumeDataEducationItem",
        modelProperties: {
            organization: {
                serializedName: "organization",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            accreditation: {
                serializedName: "accreditation",
                type: {
                    name: "Composite",
                    className: "ResumeDataEducationItemAccreditation"
                }
            },
            grade: {
                serializedName: "grade",
                type: {
                    name: "Composite",
                    className: "ResumeDataEducationItemGrade"
                }
            },
            location: {
                serializedName: "location",
                type: {
                    name: "Composite",
                    className: "Location"
                }
            },
            dates: {
                serializedName: "dates",
                type: {
                    name: "Composite",
                    className: "ResumeDataEducationItemDates"
                }
            }
        }
    }
};
const ResumeDataEducationItemAccreditation = {
    type: {
        name: "Composite",
        className: "ResumeDataEducationItemAccreditation",
        modelProperties: {
            education: {
                serializedName: "education",
                type: {
                    name: "String"
                }
            },
            inputStr: {
                serializedName: "inputStr",
                type: {
                    name: "String"
                }
            },
            matchStr: {
                serializedName: "matchStr",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            educationLevel: {
                serializedName: "educationLevel",
                nullable: true,
                type: {
                    name: "String"
                }
            }
        }
    }
};
const ResumeDataEducationItemGrade = {
    type: {
        name: "Composite",
        className: "ResumeDataEducationItemGrade",
        modelProperties: {
            raw: {
                serializedName: "raw",
                type: {
                    name: "String"
                }
            },
            metric: {
                serializedName: "metric",
                type: {
                    name: "String"
                }
            },
            value: {
                serializedName: "value",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const ResumeDataEducationItemDates = {
    type: {
        name: "Composite",
        className: "ResumeDataEducationItemDates",
        modelProperties: {
            completionDate: {
                serializedName: "completionDate",
                type: {
                    name: "Date"
                }
            },
            isCurrent: {
                serializedName: "isCurrent",
                type: {
                    name: "Boolean"
                }
            },
            startDate: {
                serializedName: "startDate",
                nullable: true,
                type: {
                    name: "Date"
                }
            }
        }
    }
};
const ResumeDataWorkExperienceItem = {
    type: {
        name: "Composite",
        className: "ResumeDataWorkExperienceItem",
        modelProperties: {
            jobTitle: {
                serializedName: "jobTitle",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            organization: {
                serializedName: "organization",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            location: {
                serializedName: "location",
                type: {
                    name: "Composite",
                    className: "Location"
                }
            },
            jobDescription: {
                serializedName: "jobDescription",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            dates: {
                serializedName: "dates",
                type: {
                    name: "Composite",
                    className: "ResumeDataWorkExperienceItemDates"
                }
            },
            occupation: {
                serializedName: "occupation",
                type: {
                    name: "Composite",
                    className: "ResumeDataWorkExperienceItemOccupation"
                }
            }
        }
    }
};
const ResumeDataWorkExperienceItemDates = {
    type: {
        name: "Composite",
        className: "ResumeDataWorkExperienceItemDates",
        modelProperties: {
            startDate: {
                serializedName: "startDate",
                nullable: true,
                type: {
                    name: "Date"
                }
            },
            endDate: {
                serializedName: "endDate",
                nullable: true,
                type: {
                    name: "Date"
                }
            },
            monthsInPosition: {
                serializedName: "monthsInPosition",
                nullable: true,
                type: {
                    name: "Number"
                }
            },
            isCurrent: {
                serializedName: "isCurrent",
                type: {
                    name: "Boolean"
                }
            }
        }
    }
};
const ResumeDataWorkExperienceItemOccupation = {
    type: {
        name: "Composite",
        className: "ResumeDataWorkExperienceItemOccupation",
        modelProperties: {
            jobTitle: {
                serializedName: "jobTitle",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            jobTitleNormalized: {
                serializedName: "jobTitleNormalized",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            managementLevel: {
                serializedName: "managementLevel",
                nullable: true,
                type: {
                    name: "Enum",
                    allowedValues: ["Low", "Mid", "Upper"]
                }
            },
            classification: {
                serializedName: "classification",
                type: {
                    name: "Composite",
                    className: "Components1TryetgSchemasResumedataPropertiesWorkexperienceItemsPropertiesOccupationPropertiesClassification"
                }
            }
        }
    }
};
const Components1TryetgSchemasResumedataPropertiesWorkexperienceItemsPropertiesOccupationPropertiesClassification = {
    type: {
        name: "Composite",
        className: "Components1TryetgSchemasResumedataPropertiesWorkexperienceItemsPropertiesOccupationPropertiesClassification",
        modelProperties: {
            title: {
                serializedName: "title",
                type: {
                    name: "String"
                }
            },
            minorGroup: {
                serializedName: "minorGroup",
                type: {
                    name: "String"
                }
            },
            subMajorGroup: {
                serializedName: "subMajorGroup",
                type: {
                    name: "String"
                }
            },
            majorGroup: {
                serializedName: "majorGroup",
                type: {
                    name: "String"
                }
            },
            socCode: {
                serializedName: "socCode",
                type: {
                    name: "Number"
                }
            }
        }
    }
};
const ResumeDataSkillsItem = {
    type: {
        name: "Composite",
        className: "ResumeDataSkillsItem",
        modelProperties: {
            name: {
                serializedName: "name",
                type: {
                    name: "String"
                }
            },
            lastUsed: {
                serializedName: "lastUsed",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            numberOfMonths: {
                serializedName: "numberOfMonths",
                nullable: true,
                type: {
                    name: "Number"
                }
            },
            type: {
                serializedName: "type",
                type: {
                    name: "String"
                }
            },
            sources: {
                serializedName: "sources",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "ResumeDataSkillsPropertiesItemsItem"
                        }
                    }
                }
            }
        }
    }
};
const ResumeDataSkillsPropertiesItemsItem = {
    type: {
        name: "Composite",
        className: "ResumeDataSkillsPropertiesItemsItem",
        modelProperties: {
            section: {
                serializedName: "section",
                type: {
                    name: "String"
                }
            },
            position: {
                serializedName: "position",
                nullable: true,
                type: {
                    name: "Number"
                }
            }
        }
    }
};
const ResumeDataRefereesItem = {
    type: {
        name: "Composite",
        className: "ResumeDataRefereesItem",
        modelProperties: {
            name: {
                serializedName: "name",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            text: {
                serializedName: "text",
                type: {
                    name: "String"
                }
            },
            email: {
                serializedName: "email",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            number: {
                serializedName: "number",
                nullable: true,
                type: {
                    name: "String"
                }
            }
        }
    }
};
const ResumeDataSectionsItem = {
    type: {
        name: "Composite",
        className: "ResumeDataSectionsItem",
        modelProperties: {
            sectionType: {
                serializedName: "sectionType",
                type: {
                    name: "String"
                }
            },
            bbox: {
                constraints: {
                    MinItems: 4,
                    MaxItems: 4
                },
                serializedName: "bbox",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Number"
                        }
                    }
                }
            },
            pageIndex: {
                serializedName: "pageIndex",
                type: {
                    name: "Number"
                }
            },
            text: {
                serializedName: "text",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const ErrorModel = {
    type: {
        name: "Composite",
        className: "ErrorModel",
        modelProperties: {
            errorCode: {
                serializedName: "errorCode",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            errorDetail: {
                serializedName: "errorDetail",
                nullable: true,
                type: {
                    name: "String"
                }
            }
        }
    }
};
const RedactedResume = {
    type: {
        name: "Composite",
        className: "RedactedResume",
        modelProperties: {
            data: {
                serializedName: "data",
                type: {
                    name: "Composite",
                    className: "RedactedResumeData"
                }
            },
            meta: {
                serializedName: "meta",
                type: {
                    name: "Composite",
                    className: "Meta"
                }
            },
            error: {
                serializedName: "error",
                type: {
                    name: "Composite",
                    className: "ErrorModel"
                }
            }
        }
    }
};
const RedactedResumeData = {
    type: {
        name: "Composite",
        className: "RedactedResumeData",
        modelProperties: {
            redactedPdf: {
                serializedName: "redactedPdf",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const Paths1UtuacyResumeFormatsGetResponses200ContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "Paths1UtuacyResumeFormatsGetResponses200ContentApplicationJsonSchema",
        modelProperties: {
            count: {
                serializedName: "count",
                type: {
                    name: "Number"
                }
            },
            next: {
                serializedName: "next",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            previous: {
                serializedName: "previous",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            results: {
                serializedName: "results",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "Get200ApplicationJsonPropertiesItemsItem"
                        }
                    }
                }
            }
        }
    }
};
const Get200ApplicationJsonPropertiesItemsItem = {
    type: {
        name: "Composite",
        className: "Get200ApplicationJsonPropertiesItemsItem",
        modelProperties: {
            identifier: {
                serializedName: "identifier",
                required: true,
                nullable: true,
                type: {
                    name: "String"
                }
            },
            formatFile: {
                serializedName: "formatFile",
                required: true,
                type: {
                    name: "String"
                }
            }
        }
    }
};
const ReformattedResume = {
    type: {
        name: "Composite",
        className: "ReformattedResume",
        modelProperties: {
            data: {
                serializedName: "data",
                type: {
                    name: "Composite",
                    className: "ReformattedResumeData"
                }
            },
            meta: {
                serializedName: "meta",
                type: {
                    name: "Composite",
                    className: "Meta"
                }
            },
            error: {
                serializedName: "error",
                type: {
                    name: "Composite",
                    className: "ErrorModel"
                }
            }
        }
    }
};
const ReformattedResumeData = {
    type: {
        name: "Composite",
        className: "ReformattedResumeData",
        modelProperties: {
            reformattedFile: {
                serializedName: "reformattedFile",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const ResumeSearchParameters = {
    type: {
        name: "Composite",
        className: "ResumeSearchParameters",
        modelProperties: {
            indices: {
                serializedName: "indices",
                required: true,
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "String"
                        }
                    }
                }
            },
            jobTitles: {
                serializedName: "jobTitles",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "String"
                        }
                    }
                }
            },
            jobTitlesCurrentOnly: {
                serializedName: "jobTitlesCurrentOnly",
                type: {
                    name: "Boolean"
                }
            },
            jobTitlesRequired: {
                serializedName: "jobTitlesRequired",
                type: {
                    name: "Boolean"
                }
            },
            jobTitlesWeight: {
                constraints: {
                    InclusiveMaximum: 1,
                    InclusiveMinimum: 0
                },
                serializedName: "jobTitlesWeight",
                type: {
                    name: "Number"
                }
            },
            yearsExperienceMin: {
                serializedName: "yearsExperienceMin",
                type: {
                    name: "Number"
                }
            },
            yearsExperienceMax: {
                serializedName: "yearsExperienceMax",
                type: {
                    name: "Number"
                }
            },
            yearsExperienceRequired: {
                serializedName: "yearsExperienceRequired",
                type: {
                    name: "Boolean"
                }
            },
            yearsExperienceWeight: {
                constraints: {
                    InclusiveMaximum: 1,
                    InclusiveMinimum: 0
                },
                serializedName: "yearsExperienceWeight",
                type: {
                    name: "Number"
                }
            },
            locations: {
                serializedName: "locations",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "ResumeSearchParametersLocationsItem"
                        }
                    }
                }
            },
            locationsWeight: {
                constraints: {
                    InclusiveMaximum: 1,
                    InclusiveMinimum: 0
                },
                serializedName: "locationsWeight",
                type: {
                    name: "Number"
                }
            },
            locationsRequired: {
                serializedName: "locationsRequired",
                type: {
                    name: "Boolean"
                }
            },
            skills: {
                serializedName: "skills",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "ResumeSearchParametersSkillsItem"
                        }
                    }
                }
            },
            skillsWeight: {
                constraints: {
                    InclusiveMaximum: 1,
                    InclusiveMinimum: 0
                },
                serializedName: "skillsWeight",
                type: {
                    name: "Number"
                }
            },
            languages: {
                serializedName: "languages",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "ResumeSearchParametersLanguagesItem"
                        }
                    }
                }
            },
            languagesWeight: {
                constraints: {
                    InclusiveMaximum: 1,
                    InclusiveMinimum: 0
                },
                serializedName: "languagesWeight",
                type: {
                    name: "Number"
                }
            },
            institutions: {
                serializedName: "institutions",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "String"
                        }
                    }
                }
            },
            institutionsRequired: {
                serializedName: "institutionsRequired",
                type: {
                    name: "Boolean"
                }
            },
            degrees: {
                serializedName: "degrees",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "String"
                        }
                    }
                }
            },
            degreesRequired: {
                serializedName: "degreesRequired",
                type: {
                    name: "Boolean"
                }
            },
            highestDegreeTypes: {
                constraints: {
                    UniqueItems: true
                },
                serializedName: "highestDegreeTypes",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Enum",
                            allowedValues: [
                                "school",
                                "certificate",
                                "bachelors",
                                "masters",
                                "doctoral"
                            ]
                        }
                    }
                }
            },
            highestDegreeTypesRequired: {
                serializedName: "highestDegreeTypesRequired",
                type: {
                    name: "Boolean"
                }
            },
            isCurrentStudent: {
                serializedName: "isCurrentStudent",
                type: {
                    name: "Boolean"
                }
            },
            isCurrentStudentRequired: {
                serializedName: "isCurrentStudentRequired",
                type: {
                    name: "Boolean"
                }
            },
            isRecentGraduate: {
                serializedName: "isRecentGraduate",
                type: {
                    name: "Boolean"
                }
            },
            isRecentGraduateRequired: {
                serializedName: "isRecentGraduateRequired",
                type: {
                    name: "Boolean"
                }
            },
            educationWeight: {
                constraints: {
                    InclusiveMaximum: 1,
                    InclusiveMinimum: 0
                },
                serializedName: "educationWeight",
                type: {
                    name: "Number"
                }
            },
            searchExpression: {
                serializedName: "searchExpression",
                type: {
                    name: "String"
                }
            },
            searchExpressionRequired: {
                serializedName: "searchExpressionRequired",
                type: {
                    name: "Boolean"
                }
            },
            searchExpressionWeight: {
                constraints: {
                    InclusiveMaximum: 1,
                    InclusiveMinimum: 0
                },
                serializedName: "searchExpressionWeight",
                type: {
                    name: "Number"
                }
            },
            socCodes: {
                serializedName: "socCodes",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Number"
                        }
                    }
                }
            },
            socCodesWeight: {
                constraints: {
                    InclusiveMaximum: 1,
                    InclusiveMinimum: 0
                },
                serializedName: "socCodesWeight",
                type: {
                    name: "Number"
                }
            },
            socCodesRequired: {
                serializedName: "socCodesRequired",
                type: {
                    name: "Boolean"
                }
            },
            managementLevel: {
                serializedName: "managementLevel",
                nullable: true,
                type: {
                    name: "Enum",
                    allowedValues: ["Low", "Mid", "Upper"]
                }
            },
            managementLevelRequired: {
                serializedName: "managementLevelRequired",
                type: {
                    name: "Boolean"
                }
            },
            managementLevelWeight: {
                constraints: {
                    InclusiveMaximum: 1,
                    InclusiveMinimum: 0
                },
                serializedName: "managementLevelWeight",
                type: {
                    name: "Number"
                }
            }
        }
    }
};
const ResumeSearchParametersLocationsItem = {
    type: {
        name: "Composite",
        className: "ResumeSearchParametersLocationsItem",
        modelProperties: {
            name: {
                serializedName: "name",
                type: {
                    name: "String"
                }
            },
            coordinates: {
                serializedName: "coordinates",
                type: {
                    name: "Composite",
                    className: "ResumeSearchParametersLocationsItemCoordinates"
                }
            },
            distance: {
                serializedName: "distance",
                type: {
                    name: "Number"
                }
            },
            unit: {
                serializedName: "unit",
                type: {
                    name: "Enum",
                    allowedValues: ["km", "mi"]
                }
            }
        }
    }
};
const ResumeSearchParametersLocationsItemCoordinates = {
    type: {
        name: "Composite",
        className: "ResumeSearchParametersLocationsItemCoordinates",
        modelProperties: {
            latitude: {
                serializedName: "latitude",
                nullable: true,
                type: {
                    name: "Number"
                }
            },
            longitude: {
                serializedName: "longitude",
                nullable: true,
                type: {
                    name: "Number"
                }
            }
        }
    }
};
const ResumeSearchParametersSkillsItem = {
    type: {
        name: "Composite",
        className: "ResumeSearchParametersSkillsItem",
        modelProperties: {
            name: {
                serializedName: "name",
                type: {
                    name: "String"
                }
            },
            required: {
                serializedName: "required",
                type: {
                    name: "Boolean"
                }
            }
        }
    }
};
const ResumeSearchParametersLanguagesItem = {
    type: {
        name: "Composite",
        className: "ResumeSearchParametersLanguagesItem",
        modelProperties: {
            name: {
                serializedName: "name",
                type: {
                    name: "String"
                }
            },
            required: {
                serializedName: "required",
                type: {
                    name: "Boolean"
                }
            }
        }
    }
};
const ResumeSearch = {
    type: {
        name: "Composite",
        className: "ResumeSearch",
        modelProperties: {
            count: {
                serializedName: "count",
                type: {
                    name: "Number"
                }
            },
            next: {
                serializedName: "next",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            previous: {
                serializedName: "previous",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            parameters: {
                serializedName: "parameters",
                type: {
                    name: "Composite",
                    className: "ResumeSearchParameters"
                }
            },
            results: {
                serializedName: "results",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "ResumeSearchResult"
                        }
                    }
                }
            }
        }
    }
};
const ResumeSearchResult = {
    type: {
        name: "Composite",
        className: "ResumeSearchResult",
        modelProperties: {
            identifier: {
                serializedName: "identifier",
                required: true,
                nullable: true,
                type: {
                    name: "String"
                }
            },
            score: {
                serializedName: "score",
                required: true,
                type: {
                    name: "Number"
                }
            },
            pdf: {
                serializedName: "pdf",
                required: true,
                type: {
                    name: "String"
                }
            },
            name: {
                serializedName: "name",
                type: {
                    name: "String"
                }
            },
            jobTitle: {
                serializedName: "jobTitle",
                type: {
                    name: "Composite",
                    className: "ResumeSearchScoreComponent"
                }
            },
            managementLevel: {
                serializedName: "managementLevel",
                type: {
                    name: "Composite",
                    className: "ResumeSearchScoreComponent"
                }
            },
            experience: {
                serializedName: "experience",
                type: {
                    name: "Composite",
                    className: "ResumeSearchScoreComponent"
                }
            },
            skills: {
                serializedName: "skills",
                type: {
                    name: "Composite",
                    className: "ResumeSearchScoreComponent"
                }
            },
            languages: {
                serializedName: "languages",
                type: {
                    name: "Composite",
                    className: "ResumeSearchScoreComponent"
                }
            },
            location: {
                serializedName: "location",
                type: {
                    name: "Composite",
                    className: "ResumeSearchScoreComponent"
                }
            },
            education: {
                serializedName: "education",
                type: {
                    name: "Composite",
                    className: "ResumeSearchScoreComponent"
                }
            },
            occupationGroup: {
                serializedName: "occupationGroup",
                type: {
                    name: "Composite",
                    className: "ResumeSearchScoreComponent"
                }
            }
        }
    }
};
const ResumeSearchScoreComponent = {
    type: {
        name: "Composite",
        className: "ResumeSearchScoreComponent",
        modelProperties: {
            label: {
                serializedName: "label",
                required: true,
                type: {
                    name: "String"
                }
            },
            value: {
                serializedName: "value",
                type: {
                    name: "String"
                }
            },
            score: {
                serializedName: "score",
                type: {
                    name: "Number"
                }
            }
        }
    }
};
const Paths6Pypg5IndexGetResponses200ContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "Paths6Pypg5IndexGetResponses200ContentApplicationJsonSchema",
        modelProperties: {
            count: {
                serializedName: "count",
                type: {
                    name: "Number"
                }
            },
            next: {
                serializedName: "next",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            previous: {
                serializedName: "previous",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            results: {
                serializedName: "results",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "Paths108CfgmIndexGetResponses200ContentApplicationJsonSchemaPropertiesResultsItems"
                        }
                    }
                }
            }
        }
    }
};
const Paths108CfgmIndexGetResponses200ContentApplicationJsonSchemaPropertiesResultsItems = {
    type: {
        name: "Composite",
        className: "Paths108CfgmIndexGetResponses200ContentApplicationJsonSchemaPropertiesResultsItems",
        modelProperties: {
            name: {
                serializedName: "name",
                required: true,
                type: {
                    name: "String"
                }
            }
        }
    }
};
const Paths1Mc0Je6IndexPostResponses201ContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "Paths1Mc0Je6IndexPostResponses201ContentApplicationJsonSchema",
        modelProperties: {
            name: {
                serializedName: "name",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const PathsRvverlIndexNameDocumentsGetResponses200ContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "PathsRvverlIndexNameDocumentsGetResponses200ContentApplicationJsonSchema",
        modelProperties: {
            count: {
                serializedName: "count",
                type: {
                    name: "Number"
                }
            },
            next: {
                serializedName: "next",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            previous: {
                serializedName: "previous",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            results: {
                serializedName: "results",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "PathsHryo8IndexNameDocumentsGetResponses200ContentApplicationJsonSchemaPropertiesResultsItems"
                        }
                    }
                }
            }
        }
    }
};
const PathsHryo8IndexNameDocumentsGetResponses200ContentApplicationJsonSchemaPropertiesResultsItems = {
    type: {
        name: "Composite",
        className: "PathsHryo8IndexNameDocumentsGetResponses200ContentApplicationJsonSchemaPropertiesResultsItems",
        modelProperties: {
            document: {
                serializedName: "document",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const PathsGpptmIndexNameDocumentsPostRequestbodyContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "PathsGpptmIndexNameDocumentsPostRequestbodyContentApplicationJsonSchema",
        modelProperties: {
            document: {
                serializedName: "document",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const PathsCoo0XpIndexNameDocumentsPostResponses201ContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "PathsCoo0XpIndexNameDocumentsPostResponses201ContentApplicationJsonSchema",
        modelProperties: {
            document: {
                serializedName: "document",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const GetAllInvoicesResults = {
    type: {
        name: "Composite",
        className: "GetAllInvoicesResults",
        modelProperties: {
            count: {
                serializedName: "count",
                type: {
                    name: "Number"
                }
            },
            next: {
                serializedName: "next",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            previous: {
                serializedName: "previous",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            results: {
                serializedName: "results",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "Meta"
                        }
                    }
                }
            }
        }
    }
};
const Invoice = {
    type: {
        name: "Composite",
        className: "Invoice",
        modelProperties: {
            data: {
                serializedName: "data",
                type: {
                    name: "Composite",
                    className: "InvoiceData"
                }
            },
            meta: {
                serializedName: "meta",
                type: {
                    name: "Composite",
                    className: "Meta"
                }
            },
            error: {
                serializedName: "error",
                type: {
                    name: "Composite",
                    className: "ErrorModel"
                }
            }
        }
    }
};
const InvoiceData = {
    type: {
        name: "Composite",
        className: "InvoiceData",
        modelProperties: {
            invoiceDate: {
                serializedName: "invoiceDate",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            invoiceOrderDate: {
                serializedName: "invoiceOrderDate",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            paymentDateDue: {
                serializedName: "paymentDateDue",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            paymentAmountBase: {
                serializedName: "paymentAmountBase",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            paymentAmountTax: {
                serializedName: "paymentAmountTax",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            paymentAmountTotal: {
                serializedName: "paymentAmountTotal",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            paymentAmountPaid: {
                serializedName: "paymentAmountPaid",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            paymentAmountDue: {
                serializedName: "paymentAmountDue",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            invoiceNumber: {
                serializedName: "invoiceNumber",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            invoicePurchaseOrderNumber: {
                serializedName: "invoicePurchaseOrderNumber",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            supplierBusinessNumber: {
                serializedName: "supplierBusinessNumber",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            customerNumber: {
                serializedName: "customerNumber",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            customerBusinessNumber: {
                serializedName: "customerBusinessNumber",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            paymentReference: {
                serializedName: "paymentReference",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            bankAccountNumber: {
                serializedName: "bankAccountNumber",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            supplierVAT: {
                serializedName: "supplierVAT",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            customerVAT: {
                serializedName: "customerVAT",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            bpayBillerCode: {
                serializedName: "bpayBillerCode",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            bpayReference: {
                serializedName: "bpayReference",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            bankSortCode: {
                serializedName: "bankSortCode",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            bankIban: {
                serializedName: "bankIBAN",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            bankSwift: {
                serializedName: "bankSwift",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            bankBSB: {
                serializedName: "bankBSB",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            customerContactName: {
                serializedName: "customerContactName",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            customerCompanyName: {
                serializedName: "customerCompanyName",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            supplierCompanyName: {
                serializedName: "supplierCompanyName",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            customerBillingAddress: {
                serializedName: "customerBillingAddress",
                type: {
                    name: "Composite",
                    className: "Location"
                }
            },
            customerDeliveryAddress: {
                serializedName: "customerDeliveryAddress",
                type: {
                    name: "Composite",
                    className: "Location"
                }
            },
            supplierAddress: {
                serializedName: "supplierAddress",
                type: {
                    name: "Composite",
                    className: "Location"
                }
            },
            customerPhoneNumber: {
                serializedName: "customerPhoneNumber",
                type: {
                    name: "String"
                }
            },
            supplierPhoneNumber: {
                serializedName: "supplierPhoneNumber",
                type: {
                    name: "String"
                }
            },
            supplierFax: {
                serializedName: "supplierFax",
                type: {
                    name: "String"
                }
            },
            customerEmail: {
                serializedName: "customerEmail",
                type: {
                    name: "String"
                }
            },
            supplierEmail: {
                serializedName: "supplierEmail",
                type: {
                    name: "String"
                }
            },
            supplierWebsite: {
                serializedName: "supplierWebsite",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const OccupationGroup = {
    type: {
        name: "Composite",
        className: "OccupationGroup",
        modelProperties: {
            code: {
                serializedName: "code",
                required: true,
                type: {
                    name: "Number"
                }
            },
            name: {
                serializedName: "name",
                required: true,
                type: {
                    name: "String"
                }
            },
            children: {
                serializedName: "children",
                required: true,
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "OccupationGroup"
                        }
                    }
                }
            }
        }
    }
};
const Paths7EskthResumesPostRequestbodyContentMultipartFormDataSchema = {
    type: {
        name: "Composite",
        className: "Paths7EskthResumesPostRequestbodyContentMultipartFormDataSchema",
        modelProperties: {
            file: {
                serializedName: "file",
                type: {
                    name: "Stream"
                }
            },
            identifier: {
                serializedName: "identifier",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            fileName: {
                serializedName: "fileName",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            url: {
                serializedName: "url",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            wait: {
                defaultValue: "true",
                serializedName: "wait",
                type: {
                    name: "String"
                }
            },
            language: {
                serializedName: "language",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            expiryTime: {
                serializedName: "expiryTime",
                nullable: true,
                type: {
                    name: "String"
                }
            }
        }
    }
};
const Paths8DdhfcRedactedResumesPostRequestbodyContentMultipartFormDataSchema = {
    type: {
        name: "Composite",
        className: "Paths8DdhfcRedactedResumesPostRequestbodyContentMultipartFormDataSchema",
        modelProperties: {
            file: {
                serializedName: "file",
                type: {
                    name: "Stream"
                }
            },
            identifier: {
                serializedName: "identifier",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            fileName: {
                serializedName: "fileName",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            url: {
                serializedName: "url",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            language: {
                serializedName: "language",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            wait: {
                defaultValue: "true",
                serializedName: "wait",
                type: {
                    name: "String"
                }
            },
            redactHeadshot: {
                defaultValue: "true",
                serializedName: "redactHeadshot",
                type: {
                    name: "String"
                }
            },
            redactPersonalDetails: {
                defaultValue: "true",
                serializedName: "redactPersonalDetails",
                type: {
                    name: "String"
                }
            },
            redactWorkDetails: {
                defaultValue: "true",
                serializedName: "redactWorkDetails",
                type: {
                    name: "String"
                }
            },
            redactEducationDetails: {
                defaultValue: "true",
                serializedName: "redactEducationDetails",
                type: {
                    name: "String"
                }
            },
            redactReferees: {
                defaultValue: "true",
                serializedName: "redactReferees",
                type: {
                    name: "String"
                }
            },
            redactLocations: {
                defaultValue: "true",
                serializedName: "redactLocations",
                type: {
                    name: "String"
                }
            },
            redactDates: {
                defaultValue: "true",
                serializedName: "redactDates",
                type: {
                    name: "String"
                }
            },
            redactGender: {
                defaultValue: "true",
                serializedName: "redactGender",
                type: {
                    name: "String"
                }
            },
            expiryTime: {
                serializedName: "expiryTime",
                nullable: true,
                type: {
                    name: "String"
                }
            }
        }
    }
};
const PathsYzn84IReformattedResumesPostRequestbodyContentMultipartFormDataSchema = {
    type: {
        name: "Composite",
        className: "PathsYzn84IReformattedResumesPostRequestbodyContentMultipartFormDataSchema",
        modelProperties: {
            file: {
                serializedName: "file",
                type: {
                    name: "Stream"
                }
            },
            identifier: {
                serializedName: "identifier",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            fileName: {
                serializedName: "fileName",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            url: {
                serializedName: "url",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            language: {
                serializedName: "language",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            resumeFormat: {
                serializedName: "resumeFormat",
                required: true,
                type: {
                    name: "String"
                }
            },
            wait: {
                defaultValue: "true",
                serializedName: "wait",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const PathsSot11NIndexPostRequestbodyContentMultipartFormDataSchema = {
    type: {
        name: "Composite",
        className: "PathsSot11NIndexPostRequestbodyContentMultipartFormDataSchema",
        modelProperties: {
            name: {
                serializedName: "name",
                type: {
                    name: "String"
                }
            }
        }
    }
};
const Paths1BwrvmkInvoicesPostRequestbodyContentMultipartFormDataSchema = {
    type: {
        name: "Composite",
        className: "Paths1BwrvmkInvoicesPostRequestbodyContentMultipartFormDataSchema",
        modelProperties: {
            file: {
                serializedName: "file",
                type: {
                    name: "Stream"
                }
            },
            identifier: {
                serializedName: "identifier",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            fileName: {
                serializedName: "fileName",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            url: {
                serializedName: "url",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            wait: {
                defaultValue: "true",
                serializedName: "wait",
                type: {
                    name: "String"
                }
            },
            language: {
                serializedName: "language",
                nullable: true,
                type: {
                    name: "String"
                }
            },
            expiryTime: {
                serializedName: "expiryTime",
                nullable: true,
                type: {
                    name: "String"
                }
            }
        }
    }
};
//# sourceMappingURL=mappers.js.map

/***/ }),

/***/ "./node_modules/@affinda/affinda/dist-esm/models/parameters.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@affinda/affinda/dist-esm/models/parameters.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$host": () => (/* binding */ $host),
/* harmony export */   "accept": () => (/* binding */ accept),
/* harmony export */   "accept1": () => (/* binding */ accept1),
/* harmony export */   "body": () => (/* binding */ body),
/* harmony export */   "body1": () => (/* binding */ body1),
/* harmony export */   "contentType": () => (/* binding */ contentType),
/* harmony export */   "contentType1": () => (/* binding */ contentType1),
/* harmony export */   "expiryTime": () => (/* binding */ expiryTime),
/* harmony export */   "file": () => (/* binding */ file),
/* harmony export */   "fileName": () => (/* binding */ fileName),
/* harmony export */   "identifier": () => (/* binding */ identifier),
/* harmony export */   "identifier1": () => (/* binding */ identifier1),
/* harmony export */   "language": () => (/* binding */ language),
/* harmony export */   "limit": () => (/* binding */ limit),
/* harmony export */   "limit1": () => (/* binding */ limit1),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "name1": () => (/* binding */ name1),
/* harmony export */   "offset": () => (/* binding */ offset),
/* harmony export */   "redactDates": () => (/* binding */ redactDates),
/* harmony export */   "redactEducationDetails": () => (/* binding */ redactEducationDetails),
/* harmony export */   "redactGender": () => (/* binding */ redactGender),
/* harmony export */   "redactHeadshot": () => (/* binding */ redactHeadshot),
/* harmony export */   "redactLocations": () => (/* binding */ redactLocations),
/* harmony export */   "redactPersonalDetails": () => (/* binding */ redactPersonalDetails),
/* harmony export */   "redactReferees": () => (/* binding */ redactReferees),
/* harmony export */   "redactWorkDetails": () => (/* binding */ redactWorkDetails),
/* harmony export */   "resumeFormat": () => (/* binding */ resumeFormat),
/* harmony export */   "url": () => (/* binding */ url),
/* harmony export */   "wait": () => (/* binding */ wait)
/* harmony export */ });
/* harmony import */ var _models_mappers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/mappers */ "./node_modules/@affinda/affinda/dist-esm/models/mappers.js");

const accept = {
    parameterPath: "accept",
    mapper: {
        defaultValue: "application/json",
        isConstant: true,
        serializedName: "Accept",
        type: {
            name: "String"
        }
    }
};
const $host = {
    parameterPath: "$host",
    mapper: {
        serializedName: "$host",
        required: true,
        type: {
            name: "String"
        }
    },
    skipEncoding: true
};
const offset = {
    parameterPath: ["options", "offset"],
    mapper: {
        constraints: {
            InclusiveMinimum: 0
        },
        serializedName: "offset",
        type: {
            name: "Number"
        }
    }
};
const limit = {
    parameterPath: ["options", "limit"],
    mapper: {
        defaultValue: 300,
        constraints: {
            InclusiveMinimum: 1
        },
        serializedName: "limit",
        type: {
            name: "Number"
        }
    }
};
const contentType = {
    parameterPath: ["options", "contentType"],
    mapper: {
        defaultValue: "multipart/form-data",
        isConstant: true,
        serializedName: "Content-Type",
        type: {
            name: "String"
        }
    }
};
const file = {
    parameterPath: ["options", "file"],
    mapper: {
        serializedName: "file",
        type: {
            name: "Stream"
        }
    }
};
const identifier = {
    parameterPath: ["options", "identifier"],
    mapper: {
        serializedName: "identifier",
        type: {
            name: "String"
        }
    }
};
const fileName = {
    parameterPath: ["options", "fileName"],
    mapper: {
        serializedName: "fileName",
        type: {
            name: "String"
        }
    }
};
const url = {
    parameterPath: ["options", "url"],
    mapper: {
        serializedName: "url",
        type: {
            name: "String"
        }
    }
};
const wait = {
    parameterPath: ["options", "wait"],
    mapper: {
        defaultValue: "true",
        serializedName: "wait",
        type: {
            name: "String"
        }
    }
};
const language = {
    parameterPath: ["options", "language"],
    mapper: {
        serializedName: "language",
        type: {
            name: "String"
        }
    }
};
const expiryTime = {
    parameterPath: ["options", "expiryTime"],
    mapper: {
        serializedName: "expiryTime",
        type: {
            name: "String"
        }
    }
};
const accept1 = {
    parameterPath: "accept",
    mapper: {
        defaultValue: "application/json",
        isConstant: true,
        serializedName: "Accept",
        type: {
            name: "String"
        }
    }
};
const identifier1 = {
    parameterPath: "identifier",
    mapper: {
        serializedName: "identifier",
        required: true,
        type: {
            name: "String"
        }
    }
};
const redactHeadshot = {
    parameterPath: ["options", "redactHeadshot"],
    mapper: {
        defaultValue: "true",
        serializedName: "redactHeadshot",
        type: {
            name: "String"
        }
    }
};
const redactPersonalDetails = {
    parameterPath: ["options", "redactPersonalDetails"],
    mapper: {
        defaultValue: "true",
        serializedName: "redactPersonalDetails",
        type: {
            name: "String"
        }
    }
};
const redactWorkDetails = {
    parameterPath: ["options", "redactWorkDetails"],
    mapper: {
        defaultValue: "true",
        serializedName: "redactWorkDetails",
        type: {
            name: "String"
        }
    }
};
const redactEducationDetails = {
    parameterPath: ["options", "redactEducationDetails"],
    mapper: {
        defaultValue: "true",
        serializedName: "redactEducationDetails",
        type: {
            name: "String"
        }
    }
};
const redactReferees = {
    parameterPath: ["options", "redactReferees"],
    mapper: {
        defaultValue: "true",
        serializedName: "redactReferees",
        type: {
            name: "String"
        }
    }
};
const redactLocations = {
    parameterPath: ["options", "redactLocations"],
    mapper: {
        defaultValue: "true",
        serializedName: "redactLocations",
        type: {
            name: "String"
        }
    }
};
const redactDates = {
    parameterPath: ["options", "redactDates"],
    mapper: {
        defaultValue: "true",
        serializedName: "redactDates",
        type: {
            name: "String"
        }
    }
};
const redactGender = {
    parameterPath: ["options", "redactGender"],
    mapper: {
        defaultValue: "true",
        serializedName: "redactGender",
        type: {
            name: "String"
        }
    }
};
const resumeFormat = {
    parameterPath: "resumeFormat",
    mapper: {
        serializedName: "resumeFormat",
        required: true,
        type: {
            name: "String"
        }
    }
};
const contentType1 = {
    parameterPath: ["options", "contentType"],
    mapper: {
        defaultValue: "application/json",
        isConstant: true,
        serializedName: "Content-Type",
        type: {
            name: "String"
        }
    }
};
const body = {
    parameterPath: "body",
    mapper: _models_mappers__WEBPACK_IMPORTED_MODULE_0__.ResumeSearchParameters
};
const limit1 = {
    parameterPath: ["options", "limit"],
    mapper: {
        defaultValue: 20,
        constraints: {
            InclusiveMinimum: 1
        },
        serializedName: "limit",
        type: {
            name: "Number"
        }
    }
};
const name = {
    parameterPath: ["options", "name"],
    mapper: {
        serializedName: "name",
        type: {
            name: "String"
        }
    }
};
const name1 = {
    parameterPath: "name",
    mapper: {
        serializedName: "name",
        required: true,
        type: {
            name: "String"
        }
    }
};
const body1 = {
    parameterPath: "body",
    mapper: _models_mappers__WEBPACK_IMPORTED_MODULE_0__.PathsGpptmIndexNameDocumentsPostRequestbodyContentApplicationJsonSchema
};
//# sourceMappingURL=parameters.js.map

/***/ }),

/***/ "./node_modules/@azure/abort-controller/dist-esm/src/AbortController.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@azure/abort-controller/dist-esm/src/AbortController.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbortController": () => (/* binding */ AbortController),
/* harmony export */   "AbortError": () => (/* binding */ AbortError)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _AbortSignal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbortSignal */ "./node_modules/@azure/abort-controller/dist-esm/src/AbortSignal.js");
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.


/**
 * This error is thrown when an asynchronous operation has been aborted.
 * Check for this error by testing the `name` that the name property of the
 * error matches `"AbortError"`.
 *
 * @example
 * ```ts
 * const controller = new AbortController();
 * controller.abort();
 * try {
 *   doAsyncWork(controller.signal)
 * } catch (e) {
 *   if (e.name === 'AbortError') {
 *     // handle abort error here.
 *   }
 * }
 * ```
 */
var AbortError = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(AbortError, _super);
    function AbortError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "AbortError";
        return _this;
    }
    return AbortError;
}(Error));

/**
 * An AbortController provides an AbortSignal and the associated controls to signal
 * that an asynchronous operation should be aborted.
 *
 * @example
 * Abort an operation when another event fires
 * ```ts
 * const controller = new AbortController();
 * const signal = controller.signal;
 * doAsyncWork(signal);
 * button.addEventListener('click', () => controller.abort());
 * ```
 *
 * @example
 * Share aborter cross multiple operations in 30s
 * ```ts
 * // Upload the same data to 2 different data centers at the same time,
 * // abort another when any of them is finished
 * const controller = AbortController.withTimeout(30 * 1000);
 * doAsyncWork(controller.signal).then(controller.abort);
 * doAsyncWork(controller.signal).then(controller.abort);
 *```
 *
 * @example
 * Cascaded aborting
 * ```ts
 * // All operations can't take more than 30 seconds
 * const aborter = Aborter.timeout(30 * 1000);
 *
 * // Following 2 operations can't take more than 25 seconds
 * await doAsyncWork(aborter.withTimeout(25 * 1000));
 * await doAsyncWork(aborter.withTimeout(25 * 1000));
 * ```
 */
var AbortController = /** @class */ (function () {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    function AbortController(parentSignals) {
        var _this = this;
        this._signal = new _AbortSignal__WEBPACK_IMPORTED_MODULE_1__.AbortSignal();
        if (!parentSignals) {
            return;
        }
        // coerce parentSignals into an array
        if (!Array.isArray(parentSignals)) {
            // eslint-disable-next-line prefer-rest-params
            parentSignals = arguments;
        }
        for (var _i = 0, parentSignals_1 = parentSignals; _i < parentSignals_1.length; _i++) {
            var parentSignal = parentSignals_1[_i];
            // if the parent signal has already had abort() called,
            // then call abort on this signal as well.
            if (parentSignal.aborted) {
                this.abort();
            }
            else {
                // when the parent signal aborts, this signal should as well.
                parentSignal.addEventListener("abort", function () {
                    _this.abort();
                });
            }
        }
    }
    Object.defineProperty(AbortController.prototype, "signal", {
        /**
         * The AbortSignal associated with this controller that will signal aborted
         * when the abort method is called on this controller.
         *
         * @readonly
         */
        get: function () {
            return this._signal;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Signal that any operations passed this controller's associated abort signal
     * to cancel any remaining work and throw an `AbortError`.
     */
    AbortController.prototype.abort = function () {
        (0,_AbortSignal__WEBPACK_IMPORTED_MODULE_1__.abortSignal)(this._signal);
    };
    /**
     * Creates a new AbortSignal instance that will abort after the provided ms.
     * @param ms - Elapsed time in milliseconds to trigger an abort.
     */
    AbortController.timeout = function (ms) {
        var signal = new _AbortSignal__WEBPACK_IMPORTED_MODULE_1__.AbortSignal();
        var timer = setTimeout(_AbortSignal__WEBPACK_IMPORTED_MODULE_1__.abortSignal, ms, signal);
        // Prevent the active Timer from keeping the Node.js event loop active.
        if (typeof timer.unref === "function") {
            timer.unref();
        }
        return signal;
    };
    return AbortController;
}());

//# sourceMappingURL=AbortController.js.map

/***/ }),

/***/ "./node_modules/@azure/abort-controller/dist-esm/src/AbortSignal.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@azure/abort-controller/dist-esm/src/AbortSignal.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbortSignal": () => (/* binding */ AbortSignal),
/* harmony export */   "abortSignal": () => (/* binding */ abortSignal)
/* harmony export */ });
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
var listenersMap = new WeakMap();
var abortedMap = new WeakMap();
/**
 * An aborter instance implements AbortSignal interface, can abort HTTP requests.
 *
 * - Call AbortSignal.none to create a new AbortSignal instance that cannot be cancelled.
 * Use `AbortSignal.none` when you are required to pass a cancellation token but the operation
 * cannot or will not ever be cancelled.
 *
 * @example
 * Abort without timeout
 * ```ts
 * await doAsyncWork(AbortSignal.none);
 * ```
 */
var AbortSignal = /** @class */ (function () {
    function AbortSignal() {
        /**
         * onabort event listener.
         */
        this.onabort = null;
        listenersMap.set(this, []);
        abortedMap.set(this, false);
    }
    Object.defineProperty(AbortSignal.prototype, "aborted", {
        /**
         * Status of whether aborted or not.
         *
         * @readonly
         */
        get: function () {
            if (!abortedMap.has(this)) {
                throw new TypeError("Expected `this` to be an instance of AbortSignal.");
            }
            return abortedMap.get(this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AbortSignal, "none", {
        /**
         * Creates a new AbortSignal instance that will never be aborted.
         *
         * @readonly
         */
        get: function () {
            return new AbortSignal();
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Added new "abort" event listener, only support "abort" event.
     *
     * @param _type - Only support "abort" event
     * @param listener - The listener to be added
     */
    AbortSignal.prototype.addEventListener = function (
    // tslint:disable-next-line:variable-name
    _type, listener) {
        if (!listenersMap.has(this)) {
            throw new TypeError("Expected `this` to be an instance of AbortSignal.");
        }
        var listeners = listenersMap.get(this);
        listeners.push(listener);
    };
    /**
     * Remove "abort" event listener, only support "abort" event.
     *
     * @param _type - Only support "abort" event
     * @param listener - The listener to be removed
     */
    AbortSignal.prototype.removeEventListener = function (
    // tslint:disable-next-line:variable-name
    _type, listener) {
        if (!listenersMap.has(this)) {
            throw new TypeError("Expected `this` to be an instance of AbortSignal.");
        }
        var listeners = listenersMap.get(this);
        var index = listeners.indexOf(listener);
        if (index > -1) {
            listeners.splice(index, 1);
        }
    };
    /**
     * Dispatches a synthetic event to the AbortSignal.
     */
    AbortSignal.prototype.dispatchEvent = function (_event) {
        throw new Error("This is a stub dispatchEvent implementation that should not be used.  It only exists for type-checking purposes.");
    };
    return AbortSignal;
}());

/**
 * Helper to trigger an abort event immediately, the onabort and all abort event listeners will be triggered.
 * Will try to trigger abort event for all linked AbortSignal nodes.
 *
 * - If there is a timeout, the timer will be cancelled.
 * - If aborted is true, nothing will happen.
 *
 * @internal
 */
// eslint-disable-next-line @azure/azure-sdk/ts-use-interface-parameters
function abortSignal(signal) {
    if (signal.aborted) {
        return;
    }
    if (signal.onabort) {
        signal.onabort.call(signal);
    }
    var listeners = listenersMap.get(signal);
    if (listeners) {
        // Create a copy of listeners so mutations to the array
        // (e.g. via removeListener calls) don't affect the listeners
        // we invoke.
        listeners.slice().forEach(function (listener) {
            listener.call(signal, { type: "abort" });
        });
    }
    abortedMap.set(signal, true);
}
//# sourceMappingURL=AbortSignal.js.map

/***/ }),

/***/ "./node_modules/@azure/core-client/dist-esm/src/base64.browser.js":
/*!************************************************************************!*\
  !*** ./node_modules/@azure/core-client/dist-esm/src/base64.browser.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decodeString": () => (/* binding */ decodeString),
/* harmony export */   "decodeStringToString": () => (/* binding */ decodeStringToString),
/* harmony export */   "encodeByteArray": () => (/* binding */ encodeByteArray),
/* harmony export */   "encodeString": () => (/* binding */ encodeString)
/* harmony export */ });
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
/**
 * Encodes a string in base64 format.
 * @param value - the string to encode
 */
function encodeString(value) {
    return btoa(value);
}
/**
 * Encodes a byte array in base64 format.
 * @param value - the Uint8Aray to encode
 */
function encodeByteArray(value) {
    let str = "";
    for (let i = 0; i < value.length; i++) {
        str += String.fromCharCode(value[i]);
    }
    return btoa(str);
}
/**
 * Decodes a base64 string into a byte array.
 * @param value - the base64 string to decode
 */
function decodeString(value) {
    const byteString = atob(value);
    const arr = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++) {
        arr[i] = byteString.charCodeAt(i);
    }
    return arr;
}
/**
 * Decodes a base64 string into a string.
 * @param value - the base64 string to decode
 */
function decodeStringToString(value) {
    return atob(value);
}
//# sourceMappingURL=base64.browser.js.map

/***/ }),

/***/ "./node_modules/@azure/core-client/dist-esm/src/deserializationPolicy.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@azure/core-client/dist-esm/src/deserializationPolicy.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deserializationPolicy": () => (/* binding */ deserializationPolicy),
/* harmony export */   "deserializationPolicyName": () => (/* binding */ deserializationPolicyName)
/* harmony export */ });
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interfaces */ "./node_modules/@azure/core-client/dist-esm/src/interfaces.js");
/* harmony import */ var _azure_core_rest_pipeline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @azure/core-rest-pipeline */ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/restError.js");
/* harmony import */ var _serializer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./serializer */ "./node_modules/@azure/core-client/dist-esm/src/serializer.js");
/* harmony import */ var _operationHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./operationHelpers */ "./node_modules/@azure/core-client/dist-esm/src/operationHelpers.js");
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.




const defaultJsonContentTypes = ["application/json", "text/json"];
const defaultXmlContentTypes = ["application/xml", "application/atom+xml"];
/**
 * The programmatic identifier of the deserializationPolicy.
 */
const deserializationPolicyName = "deserializationPolicy";
/**
 * This policy handles parsing out responses according to OperationSpecs on the request.
 */
function deserializationPolicy(options = {}) {
    var _a, _b, _c, _d, _e, _f, _g;
    const jsonContentTypes = (_b = (_a = options.expectedContentTypes) === null || _a === void 0 ? void 0 : _a.json) !== null && _b !== void 0 ? _b : defaultJsonContentTypes;
    const xmlContentTypes = (_d = (_c = options.expectedContentTypes) === null || _c === void 0 ? void 0 : _c.xml) !== null && _d !== void 0 ? _d : defaultXmlContentTypes;
    const parseXML = options.parseXML;
    const serializerOptions = options.serializerOptions;
    const updatedOptions = {
        xml: {
            rootName: (_e = serializerOptions === null || serializerOptions === void 0 ? void 0 : serializerOptions.xml.rootName) !== null && _e !== void 0 ? _e : "",
            includeRoot: (_f = serializerOptions === null || serializerOptions === void 0 ? void 0 : serializerOptions.xml.includeRoot) !== null && _f !== void 0 ? _f : false,
            xmlCharKey: (_g = serializerOptions === null || serializerOptions === void 0 ? void 0 : serializerOptions.xml.xmlCharKey) !== null && _g !== void 0 ? _g : _interfaces__WEBPACK_IMPORTED_MODULE_0__.XML_CHARKEY,
        },
    };
    return {
        name: deserializationPolicyName,
        async sendRequest(request, next) {
            const response = await next(request);
            return deserializeResponseBody(jsonContentTypes, xmlContentTypes, response, updatedOptions, parseXML);
        },
    };
}
function getOperationResponseMap(parsedResponse) {
    let result;
    const request = parsedResponse.request;
    const operationInfo = (0,_operationHelpers__WEBPACK_IMPORTED_MODULE_1__.getOperationRequestInfo)(request);
    const operationSpec = operationInfo === null || operationInfo === void 0 ? void 0 : operationInfo.operationSpec;
    if (operationSpec) {
        if (!(operationInfo === null || operationInfo === void 0 ? void 0 : operationInfo.operationResponseGetter)) {
            result = operationSpec.responses[parsedResponse.status];
        }
        else {
            result = operationInfo === null || operationInfo === void 0 ? void 0 : operationInfo.operationResponseGetter(operationSpec, parsedResponse);
        }
    }
    return result;
}
function shouldDeserializeResponse(parsedResponse) {
    const request = parsedResponse.request;
    const operationInfo = (0,_operationHelpers__WEBPACK_IMPORTED_MODULE_1__.getOperationRequestInfo)(request);
    const shouldDeserialize = operationInfo === null || operationInfo === void 0 ? void 0 : operationInfo.shouldDeserialize;
    let result;
    if (shouldDeserialize === undefined) {
        result = true;
    }
    else if (typeof shouldDeserialize === "boolean") {
        result = shouldDeserialize;
    }
    else {
        result = shouldDeserialize(parsedResponse);
    }
    return result;
}
async function deserializeResponseBody(jsonContentTypes, xmlContentTypes, response, options, parseXML) {
    const parsedResponse = await parse(jsonContentTypes, xmlContentTypes, response, options, parseXML);
    if (!shouldDeserializeResponse(parsedResponse)) {
        return parsedResponse;
    }
    const operationInfo = (0,_operationHelpers__WEBPACK_IMPORTED_MODULE_1__.getOperationRequestInfo)(parsedResponse.request);
    const operationSpec = operationInfo === null || operationInfo === void 0 ? void 0 : operationInfo.operationSpec;
    if (!operationSpec || !operationSpec.responses) {
        return parsedResponse;
    }
    const responseSpec = getOperationResponseMap(parsedResponse);
    const { error, shouldReturnResponse } = handleErrorResponse(parsedResponse, operationSpec, responseSpec);
    if (error) {
        throw error;
    }
    else if (shouldReturnResponse) {
        return parsedResponse;
    }
    // An operation response spec does exist for current status code, so
    // use it to deserialize the response.
    if (responseSpec) {
        if (responseSpec.bodyMapper) {
            let valueToDeserialize = parsedResponse.parsedBody;
            if (operationSpec.isXML && responseSpec.bodyMapper.type.name === _serializer__WEBPACK_IMPORTED_MODULE_2__.MapperTypeNames.Sequence) {
                valueToDeserialize =
                    typeof valueToDeserialize === "object"
                        ? valueToDeserialize[responseSpec.bodyMapper.xmlElementName]
                        : [];
            }
            try {
                parsedResponse.parsedBody = operationSpec.serializer.deserialize(responseSpec.bodyMapper, valueToDeserialize, "operationRes.parsedBody");
            }
            catch (deserializeError) {
                const restError = new _azure_core_rest_pipeline__WEBPACK_IMPORTED_MODULE_3__.RestError(`Error ${deserializeError} occurred in deserializing the responseBody - ${parsedResponse.bodyAsText}`, {
                    statusCode: parsedResponse.status,
                    request: parsedResponse.request,
                    response: parsedResponse,
                });
                throw restError;
            }
        }
        else if (operationSpec.httpMethod === "HEAD") {
            // head methods never have a body, but we return a boolean to indicate presence/absence of the resource
            parsedResponse.parsedBody = response.status >= 200 && response.status < 300;
        }
        if (responseSpec.headersMapper) {
            parsedResponse.parsedHeaders = operationSpec.serializer.deserialize(responseSpec.headersMapper, parsedResponse.headers.toJSON(), "operationRes.parsedHeaders");
        }
    }
    return parsedResponse;
}
function isOperationSpecEmpty(operationSpec) {
    const expectedStatusCodes = Object.keys(operationSpec.responses);
    return (expectedStatusCodes.length === 0 ||
        (expectedStatusCodes.length === 1 && expectedStatusCodes[0] === "default"));
}
function handleErrorResponse(parsedResponse, operationSpec, responseSpec) {
    var _a;
    const isSuccessByStatus = 200 <= parsedResponse.status && parsedResponse.status < 300;
    const isExpectedStatusCode = isOperationSpecEmpty(operationSpec)
        ? isSuccessByStatus
        : !!responseSpec;
    if (isExpectedStatusCode) {
        if (responseSpec) {
            if (!responseSpec.isError) {
                return { error: null, shouldReturnResponse: false };
            }
        }
        else {
            return { error: null, shouldReturnResponse: false };
        }
    }
    const errorResponseSpec = responseSpec !== null && responseSpec !== void 0 ? responseSpec : operationSpec.responses.default;
    const initialErrorMessage = ((_a = parsedResponse.request.streamResponseStatusCodes) === null || _a === void 0 ? void 0 : _a.has(parsedResponse.status))
        ? `Unexpected status code: ${parsedResponse.status}`
        : parsedResponse.bodyAsText;
    const error = new _azure_core_rest_pipeline__WEBPACK_IMPORTED_MODULE_3__.RestError(initialErrorMessage, {
        statusCode: parsedResponse.status,
        request: parsedResponse.request,
        response: parsedResponse,
    });
    // If the item failed but there's no error spec or default spec to deserialize the error,
    // we should fail so we just throw the parsed response
    if (!errorResponseSpec) {
        throw error;
    }
    const defaultBodyMapper = errorResponseSpec.bodyMapper;
    const defaultHeadersMapper = errorResponseSpec.headersMapper;
    try {
        // If error response has a body, try to deserialize it using default body mapper.
        // Then try to extract error code & message from it
        if (parsedResponse.parsedBody) {
            const parsedBody = parsedResponse.parsedBody;
            let deserializedError;
            if (defaultBodyMapper) {
                let valueToDeserialize = parsedBody;
                if (operationSpec.isXML && defaultBodyMapper.type.name === _serializer__WEBPACK_IMPORTED_MODULE_2__.MapperTypeNames.Sequence) {
                    valueToDeserialize = [];
                    const elementName = defaultBodyMapper.xmlElementName;
                    if (typeof parsedBody === "object" && elementName) {
                        valueToDeserialize = parsedBody[elementName];
                    }
                }
                deserializedError = operationSpec.serializer.deserialize(defaultBodyMapper, valueToDeserialize, "error.response.parsedBody");
            }
            const internalError = parsedBody.error || deserializedError || parsedBody;
            error.code = internalError.code;
            if (internalError.message) {
                error.message = internalError.message;
            }
            if (defaultBodyMapper) {
                error.response.parsedBody = deserializedError;
            }
        }
        // If error response has headers, try to deserialize it using default header mapper
        if (parsedResponse.headers && defaultHeadersMapper) {
            error.response.parsedHeaders =
                operationSpec.serializer.deserialize(defaultHeadersMapper, parsedResponse.headers.toJSON(), "operationRes.parsedHeaders");
        }
    }
    catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody - "${parsedResponse.bodyAsText}" for the default response.`;
    }
    return { error, shouldReturnResponse: false };
}
async function parse(jsonContentTypes, xmlContentTypes, operationResponse, opts, parseXML) {
    var _a;
    if (!((_a = operationResponse.request.streamResponseStatusCodes) === null || _a === void 0 ? void 0 : _a.has(operationResponse.status)) &&
        operationResponse.bodyAsText) {
        const text = operationResponse.bodyAsText;
        const contentType = operationResponse.headers.get("Content-Type") || "";
        const contentComponents = !contentType
            ? []
            : contentType.split(";").map((component) => component.toLowerCase());
        try {
            if (contentComponents.length === 0 ||
                contentComponents.some((component) => jsonContentTypes.indexOf(component) !== -1)) {
                operationResponse.parsedBody = JSON.parse(text);
                return operationResponse;
            }
            else if (contentComponents.some((component) => xmlContentTypes.indexOf(component) !== -1)) {
                if (!parseXML) {
                    throw new Error("Parsing XML not supported.");
                }
                const body = await parseXML(text, opts.xml);
                operationResponse.parsedBody = body;
                return operationResponse;
            }
        }
        catch (err) {
            const msg = `Error "${err}" occurred while parsing the response body - ${operationResponse.bodyAsText}.`;
            const errCode = err.code || _azure_core_rest_pipeline__WEBPACK_IMPORTED_MODULE_3__.RestError.PARSE_ERROR;
            const e = new _azure_core_rest_pipeline__WEBPACK_IMPORTED_MODULE_3__.RestError(msg, {
                code: errCode,
                statusCode: operationResponse.status,
                request: operationResponse.request,
                response: operationResponse,
            });
            throw e;
        }
    }
    return operationResponse;
}
//# sourceMappingURL=deserializationPolicy.js.map

/***/ }),

/***/ "./node_modules/@azure/core-client/dist-esm/src/httpClientCache.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@azure/core-client/dist-esm/src/httpClientCache.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCachedDefaultHttpClient": () => (/* binding */ getCachedDefaultHttpClient)
/* harmony export */ });
/* harmony import */ var _azure_core_rest_pipeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @azure/core-rest-pipeline */ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/defaultHttpClient.browser.js");
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

let cachedHttpClient;
function getCachedDefaultHttpClient() {
    if (!cachedHttpClient) {
        cachedHttpClient = (0,_azure_core_rest_pipeline__WEBPACK_IMPORTED_MODULE_0__.createDefaultHttpClient)();
    }
    return cachedHttpClient;
}
//# sourceMappingURL=httpClientCache.js.map

/***/ }),

/***/ "./node_modules/@azure/core-client/dist-esm/src/interfaceHelpers.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@azure/core-client/dist-esm/src/interfaceHelpers.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPathStringFromParameter": () => (/* binding */ getPathStringFromParameter),
/* harmony export */   "getStreamingResponseStatusCodes": () => (/* binding */ getStreamingResponseStatusCodes)
/* harmony export */ });
/* harmony import */ var _serializer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./serializer */ "./node_modules/@azure/core-client/dist-esm/src/serializer.js");
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/**
 * Gets the list of status codes for streaming responses.
 * @internal
 */
function getStreamingResponseStatusCodes(operationSpec) {
    const result = new Set();
    for (const statusCode in operationSpec.responses) {
        const operationResponse = operationSpec.responses[statusCode];
        if (operationResponse.bodyMapper &&
            operationResponse.bodyMapper.type.name === _serializer__WEBPACK_IMPORTED_MODULE_0__.MapperTypeNames.Stream) {
            result.add(Number(statusCode));
        }
    }
    return result;
}
/**
 * Get the path to this parameter's value as a dotted string (a.b.c).
 * @param parameter - The parameter to get the path string for.
 * @returns The path to this parameter's value as a dotted string.
 * @internal
 */
function getPathStringFromParameter(parameter) {
    const { parameterPath, mapper } = parameter;
    let result;
    if (typeof parameterPath === "string") {
        result = parameterPath;
    }
    else if (Array.isArray(parameterPath)) {
        result = parameterPath.join(".");
    }
    else {
        result = mapper.serializedName;
    }
    return result;
}
//# sourceMappingURL=interfaceHelpers.js.map

/***/ }),

/***/ "./node_modules/@azure/core-client/dist-esm/src/interfaces.js":
/*!********************************************************************!*\
  !*** ./node_modules/@azure/core-client/dist-esm/src/interfaces.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "XML_ATTRKEY": () => (/* binding */ XML_ATTRKEY),
/* harmony export */   "XML_CHARKEY": () => (/* binding */ XML_CHARKEY)
/* harmony export */ });
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
/**
 * Default key used to access the XML attributes.
 */
const XML_ATTRKEY = "$";
/**
 * Default key used to access the XML value content.
 */
const XML_CHARKEY = "_";
//# sourceMappingURL=interfaces.js.map

/***/ }),

/***/ "./node_modules/@azure/core-client/dist-esm/src/operationHelpers.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@azure/core-client/dist-esm/src/operationHelpers.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOperationArgumentValueFromParameter": () => (/* binding */ getOperationArgumentValueFromParameter),
/* harmony export */   "getOperationRequestInfo": () => (/* binding */ getOperationRequestInfo)
/* harmony export */ });
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
/**
 * @internal
 * Retrieves the value to use for a given operation argument
 * @param operationArguments - The arguments passed from the generated client
 * @param parameter - The parameter description
 * @param fallbackObject - If something isn't found in the arguments bag, look here.
 *  Generally used to look at the service client properties.
 */
function getOperationArgumentValueFromParameter(operationArguments, parameter, fallbackObject) {
    let parameterPath = parameter.parameterPath;
    const parameterMapper = parameter.mapper;
    let value;
    if (typeof parameterPath === "string") {
        parameterPath = [parameterPath];
    }
    if (Array.isArray(parameterPath)) {
        if (parameterPath.length > 0) {
            if (parameterMapper.isConstant) {
                value = parameterMapper.defaultValue;
            }
            else {
                let propertySearchResult = getPropertyFromParameterPath(operationArguments, parameterPath);
                if (!propertySearchResult.propertyFound && fallbackObject) {
                    propertySearchResult = getPropertyFromParameterPath(fallbackObject, parameterPath);
                }
                let useDefaultValue = false;
                if (!propertySearchResult.propertyFound) {
                    useDefaultValue =
                        parameterMapper.required ||
                            (parameterPath[0] === "options" && parameterPath.length === 2);
                }
                value = useDefaultValue ? parameterMapper.defaultValue : propertySearchResult.propertyValue;
            }
        }
    }
    else {
        if (parameterMapper.required) {
            value = {};
        }
        for (const propertyName in parameterPath) {
            const propertyMapper = parameterMapper.type.modelProperties[propertyName];
            const propertyPath = parameterPath[propertyName];
            const propertyValue = getOperationArgumentValueFromParameter(operationArguments, {
                parameterPath: propertyPath,
                mapper: propertyMapper,
            }, fallbackObject);
            if (propertyValue !== undefined) {
                if (!value) {
                    value = {};
                }
                value[propertyName] = propertyValue;
            }
        }
    }
    return value;
}
function getPropertyFromParameterPath(parent, parameterPath) {
    const result = { propertyFound: false };
    let i = 0;
    for (; i < parameterPath.length; ++i) {
        const parameterPathPart = parameterPath[i];
        // Make sure to check inherited properties too, so don't use hasOwnProperty().
        if (parent && parameterPathPart in parent) {
            parent = parent[parameterPathPart];
        }
        else {
            break;
        }
    }
    if (i === parameterPath.length) {
        result.propertyValue = parent;
        result.propertyFound = true;
    }
    return result;
}
const operationRequestMap = new WeakMap();
function getOperationRequestInfo(request) {
    let info = operationRequestMap.get(request);
    if (!info) {
        info = {};
        operationRequestMap.set(request, info);
    }
    return info;
}
//# sourceMappingURL=operationHelpers.js.map

/***/ }),

/***/ "./node_modules/@azure/core-client/dist-esm/src/pipeline.js":
/*!******************************************************************!*\
  !*** ./node_modules/@azure/core-client/dist-esm/src/pipeline.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createClientPipeline": () => (/* binding */ createClientPipeline)
/* harmony export */ });
/* harmony import */ var _deserializationPolicy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deserializationPolicy */ "./node_modules/@azure/core-client/dist-esm/src/deserializationPolicy.js");
/* harmony import */ var _azure_core_rest_pipeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @azure/core-rest-pipeline */ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/createPipelineFromOptions.js");
/* harmony import */ var _azure_core_rest_pipeline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @azure/core-rest-pipeline */ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/policies/bearerTokenAuthenticationPolicy.js");
/* harmony import */ var _serializationPolicy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./serializationPolicy */ "./node_modules/@azure/core-client/dist-esm/src/serializationPolicy.js");
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.



/**
 * Creates a new Pipeline for use with a Service Client.
 * Adds in deserializationPolicy by default.
 * Also adds in bearerTokenAuthenticationPolicy if passed a TokenCredential.
 * @param options - Options to customize the created pipeline.
 */
function createClientPipeline(options = {}) {
    const pipeline = (0,_azure_core_rest_pipeline__WEBPACK_IMPORTED_MODULE_0__.createPipelineFromOptions)(options !== null && options !== void 0 ? options : {});
    if (options.credentialOptions) {
        pipeline.addPolicy((0,_azure_core_rest_pipeline__WEBPACK_IMPORTED_MODULE_1__.bearerTokenAuthenticationPolicy)({
            credential: options.credentialOptions.credential,
            scopes: options.credentialOptions.credentialScopes,
        }));
    }
    pipeline.addPolicy((0,_serializationPolicy__WEBPACK_IMPORTED_MODULE_2__.serializationPolicy)(options.serializationOptions), { phase: "Serialize" });
    pipeline.addPolicy((0,_deserializationPolicy__WEBPACK_IMPORTED_MODULE_3__.deserializationPolicy)(options.deserializationOptions), {
        phase: "Deserialize",
    });
    return pipeline;
}
//# sourceMappingURL=pipeline.js.map

/***/ }),

/***/ "./node_modules/@azure/core-client/dist-esm/src/serializationPolicy.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@azure/core-client/dist-esm/src/serializationPolicy.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "serializationPolicy": () => (/* binding */ serializationPolicy),
/* harmony export */   "serializationPolicyName": () => (/* binding */ serializationPolicyName),
/* harmony export */   "serializeHeaders": () => (/* binding */ serializeHeaders),
/* harmony export */   "serializeRequestBody": () => (/* binding */ serializeRequestBody)
/* harmony export */ });
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interfaces */ "./node_modules/@azure/core-client/dist-esm/src/interfaces.js");
/* harmony import */ var _operationHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./operationHelpers */ "./node_modules/@azure/core-client/dist-esm/src/operationHelpers.js");
/* harmony import */ var _serializer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./serializer */ "./node_modules/@azure/core-client/dist-esm/src/serializer.js");
/* harmony import */ var _interfaceHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interfaceHelpers */ "./node_modules/@azure/core-client/dist-esm/src/interfaceHelpers.js");
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.




/**
 * The programmatic identifier of the serializationPolicy.
 */
const serializationPolicyName = "serializationPolicy";
/**
 * This policy handles assembling the request body and headers using
 * an OperationSpec and OperationArguments on the request.
 */
function serializationPolicy(options = {}) {
    const stringifyXML = options.stringifyXML;
    return {
        name: serializationPolicyName,
        async sendRequest(request, next) {
            const operationInfo = (0,_operationHelpers__WEBPACK_IMPORTED_MODULE_0__.getOperationRequestInfo)(request);
            const operationSpec = operationInfo === null || operationInfo === void 0 ? void 0 : operationInfo.operationSpec;
            const operationArguments = operationInfo === null || operationInfo === void 0 ? void 0 : operationInfo.operationArguments;
            if (operationSpec && operationArguments) {
                serializeHeaders(request, operationArguments, operationSpec);
                serializeRequestBody(request, operationArguments, operationSpec, stringifyXML);
            }
            return next(request);
        },
    };
}
/**
 * @internal
 */
function serializeHeaders(request, operationArguments, operationSpec) {
    var _a, _b;
    if (operationSpec.headerParameters) {
        for (const headerParameter of operationSpec.headerParameters) {
            let headerValue = (0,_operationHelpers__WEBPACK_IMPORTED_MODULE_0__.getOperationArgumentValueFromParameter)(operationArguments, headerParameter);
            if ((headerValue !== null && headerValue !== undefined) || headerParameter.mapper.required) {
                headerValue = operationSpec.serializer.serialize(headerParameter.mapper, headerValue, (0,_interfaceHelpers__WEBPACK_IMPORTED_MODULE_1__.getPathStringFromParameter)(headerParameter));
                const headerCollectionPrefix = headerParameter.mapper
                    .headerCollectionPrefix;
                if (headerCollectionPrefix) {
                    for (const key of Object.keys(headerValue)) {
                        request.headers.set(headerCollectionPrefix + key, headerValue[key]);
                    }
                }
                else {
                    request.headers.set(headerParameter.mapper.serializedName || (0,_interfaceHelpers__WEBPACK_IMPORTED_MODULE_1__.getPathStringFromParameter)(headerParameter), headerValue);
                }
            }
        }
    }
    const customHeaders = (_b = (_a = operationArguments.options) === null || _a === void 0 ? void 0 : _a.requestOptions) === null || _b === void 0 ? void 0 : _b.customHeaders;
    if (customHeaders) {
        for (const customHeaderName of Object.keys(customHeaders)) {
            request.headers.set(customHeaderName, customHeaders[customHeaderName]);
        }
    }
}
/**
 * @internal
 */
function serializeRequestBody(request, operationArguments, operationSpec, stringifyXML = function () {
    throw new Error("XML serialization unsupported!");
}) {
    var _a, _b, _c, _d, _e;
    const serializerOptions = (_a = operationArguments.options) === null || _a === void 0 ? void 0 : _a.serializerOptions;
    const updatedOptions = {
        xml: {
            rootName: (_b = serializerOptions === null || serializerOptions === void 0 ? void 0 : serializerOptions.xml.rootName) !== null && _b !== void 0 ? _b : "",
            includeRoot: (_c = serializerOptions === null || serializerOptions === void 0 ? void 0 : serializerOptions.xml.includeRoot) !== null && _c !== void 0 ? _c : false,
            xmlCharKey: (_d = serializerOptions === null || serializerOptions === void 0 ? void 0 : serializerOptions.xml.xmlCharKey) !== null && _d !== void 0 ? _d : _interfaces__WEBPACK_IMPORTED_MODULE_2__.XML_CHARKEY,
        },
    };
    const xmlCharKey = updatedOptions.xml.xmlCharKey;
    if (operationSpec.requestBody && operationSpec.requestBody.mapper) {
        request.body = (0,_operationHelpers__WEBPACK_IMPORTED_MODULE_0__.getOperationArgumentValueFromParameter)(operationArguments, operationSpec.requestBody);
        const bodyMapper = operationSpec.requestBody.mapper;
        const { required, serializedName, xmlName, xmlElementName, xmlNamespace, xmlNamespacePrefix, nullable, } = bodyMapper;
        const typeName = bodyMapper.type.name;
        try {
            if ((request.body !== undefined && request.body !== null) ||
                (nullable && request.body === null) ||
                required) {
                const requestBodyParameterPathString = (0,_interfaceHelpers__WEBPACK_IMPORTED_MODULE_1__.getPathStringFromParameter)(operationSpec.requestBody);
                request.body = operationSpec.serializer.serialize(bodyMapper, request.body, requestBodyParameterPathString, updatedOptions);
                const isStream = typeName === _serializer__WEBPACK_IMPORTED_MODULE_3__.MapperTypeNames.Stream;
                if (operationSpec.isXML) {
                    const xmlnsKey = xmlNamespacePrefix ? `xmlns:${xmlNamespacePrefix}` : "xmlns";
                    const value = getXmlValueWithNamespace(xmlNamespace, xmlnsKey, typeName, request.body, updatedOptions);
                    if (typeName === _serializer__WEBPACK_IMPORTED_MODULE_3__.MapperTypeNames.Sequence) {
                        request.body = stringifyXML(prepareXMLRootList(value, xmlElementName || xmlName || serializedName, xmlnsKey, xmlNamespace), { rootName: xmlName || serializedName, xmlCharKey });
                    }
                    else if (!isStream) {
                        request.body = stringifyXML(value, {
                            rootName: xmlName || serializedName,
                            xmlCharKey,
                        });
                    }
                }
                else if (typeName === _serializer__WEBPACK_IMPORTED_MODULE_3__.MapperTypeNames.String &&
                    (((_e = operationSpec.contentType) === null || _e === void 0 ? void 0 : _e.match("text/plain")) || operationSpec.mediaType === "text")) {
                    // the String serializer has validated that request body is a string
                    // so just send the string.
                    return;
                }
                else if (!isStream) {
                    request.body = JSON.stringify(request.body);
                }
            }
        }
        catch (error) {
            throw new Error(`Error "${error.message}" occurred in serializing the payload - ${JSON.stringify(serializedName, undefined, "  ")}.`);
        }
    }
    else if (operationSpec.formDataParameters && operationSpec.formDataParameters.length > 0) {
        request.formData = {};
        for (const formDataParameter of operationSpec.formDataParameters) {
            const formDataParameterValue = (0,_operationHelpers__WEBPACK_IMPORTED_MODULE_0__.getOperationArgumentValueFromParameter)(operationArguments, formDataParameter);
            if (formDataParameterValue !== undefined && formDataParameterValue !== null) {
                const formDataParameterPropertyName = formDataParameter.mapper.serializedName || (0,_interfaceHelpers__WEBPACK_IMPORTED_MODULE_1__.getPathStringFromParameter)(formDataParameter);
                request.formData[formDataParameterPropertyName] = operationSpec.serializer.serialize(formDataParameter.mapper, formDataParameterValue, (0,_interfaceHelpers__WEBPACK_IMPORTED_MODULE_1__.getPathStringFromParameter)(formDataParameter), updatedOptions);
            }
        }
    }
}
/**
 * Adds an xml namespace to the xml serialized object if needed, otherwise it just returns the value itself
 */
function getXmlValueWithNamespace(xmlNamespace, xmlnsKey, typeName, serializedValue, options) {
    // Composite and Sequence schemas already got their root namespace set during serialization
    // We just need to add xmlns to the other schema types
    if (xmlNamespace && !["Composite", "Sequence", "Dictionary"].includes(typeName)) {
        const result = {};
        result[options.xml.xmlCharKey] = serializedValue;
        result[_interfaces__WEBPACK_IMPORTED_MODULE_2__.XML_ATTRKEY] = { [xmlnsKey]: xmlNamespace };
        return result;
    }
    return serializedValue;
}
function prepareXMLRootList(obj, elementName, xmlNamespaceKey, xmlNamespace) {
    if (!Array.isArray(obj)) {
        obj = [obj];
    }
    if (!xmlNamespaceKey || !xmlNamespace) {
        return { [elementName]: obj };
    }
    const result = { [elementName]: obj };
    result[_interfaces__WEBPACK_IMPORTED_MODULE_2__.XML_ATTRKEY] = { [xmlNamespaceKey]: xmlNamespace };
    return result;
}
//# sourceMappingURL=serializationPolicy.js.map

/***/ }),

/***/ "./node_modules/@azure/core-client/dist-esm/src/serializer.js":
/*!********************************************************************!*\
  !*** ./node_modules/@azure/core-client/dist-esm/src/serializer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapperTypeNames": () => (/* binding */ MapperTypeNames),
/* harmony export */   "createSerializer": () => (/* binding */ createSerializer)
/* harmony export */ });
/* harmony import */ var _base64__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base64 */ "./node_modules/@azure/core-client/dist-esm/src/base64.browser.js");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interfaces */ "./node_modules/@azure/core-client/dist-esm/src/interfaces.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/@azure/core-client/dist-esm/src/utils.js");
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.



class SerializerImpl {
    constructor(modelMappers = {}, isXML = false) {
        this.modelMappers = modelMappers;
        this.isXML = isXML;
    }
    validateConstraints(mapper, value, objectName) {
        const failValidation = (constraintName, constraintValue) => {
            throw new Error(`"${objectName}" with value "${value}" should satisfy the constraint "${constraintName}": ${constraintValue}.`);
        };
        if (mapper.constraints && value !== undefined && value !== null) {
            const { ExclusiveMaximum, ExclusiveMinimum, InclusiveMaximum, InclusiveMinimum, MaxItems, MaxLength, MinItems, MinLength, MultipleOf, Pattern, UniqueItems, } = mapper.constraints;
            if (ExclusiveMaximum !== undefined && value >= ExclusiveMaximum) {
                failValidation("ExclusiveMaximum", ExclusiveMaximum);
            }
            if (ExclusiveMinimum !== undefined && value <= ExclusiveMinimum) {
                failValidation("ExclusiveMinimum", ExclusiveMinimum);
            }
            if (InclusiveMaximum !== undefined && value > InclusiveMaximum) {
                failValidation("InclusiveMaximum", InclusiveMaximum);
            }
            if (InclusiveMinimum !== undefined && value < InclusiveMinimum) {
                failValidation("InclusiveMinimum", InclusiveMinimum);
            }
            if (MaxItems !== undefined && value.length > MaxItems) {
                failValidation("MaxItems", MaxItems);
            }
            if (MaxLength !== undefined && value.length > MaxLength) {
                failValidation("MaxLength", MaxLength);
            }
            if (MinItems !== undefined && value.length < MinItems) {
                failValidation("MinItems", MinItems);
            }
            if (MinLength !== undefined && value.length < MinLength) {
                failValidation("MinLength", MinLength);
            }
            if (MultipleOf !== undefined && value % MultipleOf !== 0) {
                failValidation("MultipleOf", MultipleOf);
            }
            if (Pattern) {
                const pattern = typeof Pattern === "string" ? new RegExp(Pattern) : Pattern;
                if (typeof value !== "string" || value.match(pattern) === null) {
                    failValidation("Pattern", Pattern);
                }
            }
            if (UniqueItems &&
                value.some((item, i, ar) => ar.indexOf(item) !== i)) {
                failValidation("UniqueItems", UniqueItems);
            }
        }
    }
    /**
     * Serialize the given object based on its metadata defined in the mapper
     *
     * @param mapper - The mapper which defines the metadata of the serializable object
     *
     * @param object - A valid Javascript object to be serialized
     *
     * @param objectName - Name of the serialized object
     *
     * @param options - additional options to serialization
     *
     * @returns A valid serialized Javascript object
     */
    serialize(mapper, object, objectName, options = { xml: {} }) {
        var _a, _b, _c;
        const updatedOptions = {
            xml: {
                rootName: (_a = options.xml.rootName) !== null && _a !== void 0 ? _a : "",
                includeRoot: (_b = options.xml.includeRoot) !== null && _b !== void 0 ? _b : false,
                xmlCharKey: (_c = options.xml.xmlCharKey) !== null && _c !== void 0 ? _c : _interfaces__WEBPACK_IMPORTED_MODULE_0__.XML_CHARKEY,
            },
        };
        let payload = {};
        const mapperType = mapper.type.name;
        if (!objectName) {
            objectName = mapper.serializedName;
        }
        if (mapperType.match(/^Sequence$/i) !== null) {
            payload = [];
        }
        if (mapper.isConstant) {
            object = mapper.defaultValue;
        }
        // This table of allowed values should help explain
        // the mapper.required and mapper.nullable properties.
        // X means "neither undefined or null are allowed".
        //           || required
        //           || true      | false
        //  nullable || ==========================
        //      true || null      | undefined/null
        //     false || X         | undefined
        // undefined || X         | undefined/null
        const { required, nullable } = mapper;
        if (required && nullable && object === undefined) {
            throw new Error(`${objectName} cannot be undefined.`);
        }
        if (required && !nullable && (object === undefined || object === null)) {
            throw new Error(`${objectName} cannot be null or undefined.`);
        }
        if (!required && nullable === false && object === null) {
            throw new Error(`${objectName} cannot be null.`);
        }
        if (object === undefined || object === null) {
            payload = object;
        }
        else {
            // Validate Constraints if any
            this.validateConstraints(mapper, object, objectName);
            if (mapperType.match(/^any$/i) !== null) {
                payload = object;
            }
            else if (mapperType.match(/^(Number|String|Boolean|Object|Stream|Uuid)$/i) !== null) {
                payload = serializeBasicTypes(mapperType, objectName, object);
            }
            else if (mapperType.match(/^Enum$/i) !== null) {
                const enumMapper = mapper;
                payload = serializeEnumType(objectName, enumMapper.type.allowedValues, object);
            }
            else if (mapperType.match(/^(Date|DateTime|TimeSpan|DateTimeRfc1123|UnixTime)$/i) !== null) {
                payload = serializeDateTypes(mapperType, object, objectName);
            }
            else if (mapperType.match(/^ByteArray$/i) !== null) {
                payload = serializeByteArrayType(objectName, object);
            }
            else if (mapperType.match(/^Base64Url$/i) !== null) {
                payload = serializeBase64UrlType(objectName, object);
            }
            else if (mapperType.match(/^Sequence$/i) !== null) {
                payload = serializeSequenceType(this, mapper, object, objectName, Boolean(this.isXML), updatedOptions);
            }
            else if (mapperType.match(/^Dictionary$/i) !== null) {
                payload = serializeDictionaryType(this, mapper, object, objectName, Boolean(this.isXML), updatedOptions);
            }
            else if (mapperType.match(/^Composite$/i) !== null) {
                payload = serializeCompositeType(this, mapper, object, objectName, Boolean(this.isXML), updatedOptions);
            }
        }
        return payload;
    }
    /**
     * Deserialize the given object based on its metadata defined in the mapper
     *
     * @param mapper - The mapper which defines the metadata of the serializable object
     *
     * @param responseBody - A valid Javascript entity to be deserialized
     *
     * @param objectName - Name of the deserialized object
     *
     * @param options - Controls behavior of XML parser and builder.
     *
     * @returns A valid deserialized Javascript object
     */
    deserialize(mapper, responseBody, objectName, options = { xml: {} }) {
        var _a, _b, _c;
        const updatedOptions = {
            xml: {
                rootName: (_a = options.xml.rootName) !== null && _a !== void 0 ? _a : "",
                includeRoot: (_b = options.xml.includeRoot) !== null && _b !== void 0 ? _b : false,
                xmlCharKey: (_c = options.xml.xmlCharKey) !== null && _c !== void 0 ? _c : _interfaces__WEBPACK_IMPORTED_MODULE_0__.XML_CHARKEY,
            },
        };
        if (responseBody === undefined || responseBody === null) {
            if (this.isXML && mapper.type.name === "Sequence" && !mapper.xmlIsWrapped) {
                // Edge case for empty XML non-wrapped lists. xml2js can't distinguish
                // between the list being empty versus being missing,
                // so let's do the more user-friendly thing and return an empty list.
                responseBody = [];
            }
            // specifically check for undefined as default value can be a falsey value `0, "", false, null`
            if (mapper.defaultValue !== undefined) {
                responseBody = mapper.defaultValue;
            }
            return responseBody;
        }
        let payload;
        const mapperType = mapper.type.name;
        if (!objectName) {
            objectName = mapper.serializedName;
        }
        if (mapperType.match(/^Composite$/i) !== null) {
            payload = deserializeCompositeType(this, mapper, responseBody, objectName, updatedOptions);
        }
        else {
            if (this.isXML) {
                const xmlCharKey = updatedOptions.xml.xmlCharKey;
                /**
                 * If the mapper specifies this as a non-composite type value but the responseBody contains
                 * both header ("$" i.e., XML_ATTRKEY) and body ("#" i.e., XML_CHARKEY) properties,
                 * then just reduce the responseBody value to the body ("#" i.e., XML_CHARKEY) property.
                 */
                if (responseBody[_interfaces__WEBPACK_IMPORTED_MODULE_0__.XML_ATTRKEY] !== undefined && responseBody[xmlCharKey] !== undefined) {
                    responseBody = responseBody[xmlCharKey];
                }
            }
            if (mapperType.match(/^Number$/i) !== null) {
                payload = parseFloat(responseBody);
                if (isNaN(payload)) {
                    payload = responseBody;
                }
            }
            else if (mapperType.match(/^Boolean$/i) !== null) {
                if (responseBody === "true") {
                    payload = true;
                }
                else if (responseBody === "false") {
                    payload = false;
                }
                else {
                    payload = responseBody;
                }
            }
            else if (mapperType.match(/^(String|Enum|Object|Stream|Uuid|TimeSpan|any)$/i) !== null) {
                payload = responseBody;
            }
            else if (mapperType.match(/^(Date|DateTime|DateTimeRfc1123)$/i) !== null) {
                payload = new Date(responseBody);
            }
            else if (mapperType.match(/^UnixTime$/i) !== null) {
                payload = unixTimeToDate(responseBody);
            }
            else if (mapperType.match(/^ByteArray$/i) !== null) {
                payload = _base64__WEBPACK_IMPORTED_MODULE_1__.decodeString(responseBody);
            }
            else if (mapperType.match(/^Base64Url$/i) !== null) {
                payload = base64UrlToByteArray(responseBody);
            }
            else if (mapperType.match(/^Sequence$/i) !== null) {
                payload = deserializeSequenceType(this, mapper, responseBody, objectName, updatedOptions);
            }
            else if (mapperType.match(/^Dictionary$/i) !== null) {
                payload = deserializeDictionaryType(this, mapper, responseBody, objectName, updatedOptions);
            }
        }
        if (mapper.isConstant) {
            payload = mapper.defaultValue;
        }
        return payload;
    }
}
/**
 * Method that creates and returns a Serializer.
 * @param modelMappers - Known models to map
 * @param isXML - If XML should be supported
 */
function createSerializer(modelMappers = {}, isXML = false) {
    return new SerializerImpl(modelMappers, isXML);
}
function trimEnd(str, ch) {
    let len = str.length;
    while (len - 1 >= 0 && str[len - 1] === ch) {
        --len;
    }
    return str.substr(0, len);
}
function bufferToBase64Url(buffer) {
    if (!buffer) {
        return undefined;
    }
    if (!(buffer instanceof Uint8Array)) {
        throw new Error(`Please provide an input of type Uint8Array for converting to Base64Url.`);
    }
    // Uint8Array to Base64.
    const str = _base64__WEBPACK_IMPORTED_MODULE_1__.encodeByteArray(buffer);
    // Base64 to Base64Url.
    return trimEnd(str, "=").replace(/\+/g, "-").replace(/\//g, "_");
}
function base64UrlToByteArray(str) {
    if (!str) {
        return undefined;
    }
    if (str && typeof str.valueOf() !== "string") {
        throw new Error("Please provide an input of type string for converting to Uint8Array");
    }
    // Base64Url to Base64.
    str = str.replace(/-/g, "+").replace(/_/g, "/");
    // Base64 to Uint8Array.
    return _base64__WEBPACK_IMPORTED_MODULE_1__.decodeString(str);
}
function splitSerializeName(prop) {
    const classes = [];
    let partialclass = "";
    if (prop) {
        const subwords = prop.split(".");
        for (const item of subwords) {
            if (item.charAt(item.length - 1) === "\\") {
                partialclass += item.substr(0, item.length - 1) + ".";
            }
            else {
                partialclass += item;
                classes.push(partialclass);
                partialclass = "";
            }
        }
    }
    return classes;
}
function dateToUnixTime(d) {
    if (!d) {
        return undefined;
    }
    if (typeof d.valueOf() === "string") {
        d = new Date(d);
    }
    return Math.floor(d.getTime() / 1000);
}
function unixTimeToDate(n) {
    if (!n) {
        return undefined;
    }
    return new Date(n * 1000);
}
function serializeBasicTypes(typeName, objectName, value) {
    if (value !== null && value !== undefined) {
        if (typeName.match(/^Number$/i) !== null) {
            if (typeof value !== "number") {
                throw new Error(`${objectName} with value ${value} must be of type number.`);
            }
        }
        else if (typeName.match(/^String$/i) !== null) {
            if (typeof value.valueOf() !== "string") {
                throw new Error(`${objectName} with value "${value}" must be of type string.`);
            }
        }
        else if (typeName.match(/^Uuid$/i) !== null) {
            if (!(typeof value.valueOf() === "string" && (0,_utils__WEBPACK_IMPORTED_MODULE_2__.isValidUuid)(value))) {
                throw new Error(`${objectName} with value "${value}" must be of type string and a valid uuid.`);
            }
        }
        else if (typeName.match(/^Boolean$/i) !== null) {
            if (typeof value !== "boolean") {
                throw new Error(`${objectName} with value ${value} must be of type boolean.`);
            }
        }
        else if (typeName.match(/^Stream$/i) !== null) {
            const objectType = typeof value;
            if (objectType !== "string" &&
                typeof value.pipe !== "function" &&
                !(value instanceof ArrayBuffer) &&
                !ArrayBuffer.isView(value) &&
                // File objects count as a type of Blob, so we want to use instanceof explicitly
                !((typeof Blob === "function" || typeof Blob === "object") && value instanceof Blob)) {
                throw new Error(`${objectName} must be a string, Blob, ArrayBuffer, ArrayBufferView, or NodeJS.ReadableStream.`);
            }
        }
    }
    return value;
}
function serializeEnumType(objectName, allowedValues, value) {
    if (!allowedValues) {
        throw new Error(`Please provide a set of allowedValues to validate ${objectName} as an Enum Type.`);
    }
    const isPresent = allowedValues.some((item) => {
        if (typeof item.valueOf() === "string") {
            return item.toLowerCase() === value.toLowerCase();
        }
        return item === value;
    });
    if (!isPresent) {
        throw new Error(`${value} is not a valid value for ${objectName}. The valid values are: ${JSON.stringify(allowedValues)}.`);
    }
    return value;
}
function serializeByteArrayType(objectName, value) {
    if (value !== undefined && value !== null) {
        if (!(value instanceof Uint8Array)) {
            throw new Error(`${objectName} must be of type Uint8Array.`);
        }
        value = _base64__WEBPACK_IMPORTED_MODULE_1__.encodeByteArray(value);
    }
    return value;
}
function serializeBase64UrlType(objectName, value) {
    if (value !== undefined && value !== null) {
        if (!(value instanceof Uint8Array)) {
            throw new Error(`${objectName} must be of type Uint8Array.`);
        }
        value = bufferToBase64Url(value);
    }
    return value;
}
function serializeDateTypes(typeName, value, objectName) {
    if (value !== undefined && value !== null) {
        if (typeName.match(/^Date$/i) !== null) {
            if (!(value instanceof Date ||
                (typeof value.valueOf() === "string" && !isNaN(Date.parse(value))))) {
                throw new Error(`${objectName} must be an instanceof Date or a string in ISO8601 format.`);
            }
            value =
                value instanceof Date
                    ? value.toISOString().substring(0, 10)
                    : new Date(value).toISOString().substring(0, 10);
        }
        else if (typeName.match(/^DateTime$/i) !== null) {
            if (!(value instanceof Date ||
                (typeof value.valueOf() === "string" && !isNaN(Date.parse(value))))) {
                throw new Error(`${objectName} must be an instanceof Date or a string in ISO8601 format.`);
            }
            value = value instanceof Date ? value.toISOString() : new Date(value).toISOString();
        }
        else if (typeName.match(/^DateTimeRfc1123$/i) !== null) {
            if (!(value instanceof Date ||
                (typeof value.valueOf() === "string" && !isNaN(Date.parse(value))))) {
                throw new Error(`${objectName} must be an instanceof Date or a string in RFC-1123 format.`);
            }
            value = value instanceof Date ? value.toUTCString() : new Date(value).toUTCString();
        }
        else if (typeName.match(/^UnixTime$/i) !== null) {
            if (!(value instanceof Date ||
                (typeof value.valueOf() === "string" && !isNaN(Date.parse(value))))) {
                throw new Error(`${objectName} must be an instanceof Date or a string in RFC-1123/ISO8601 format ` +
                    `for it to be serialized in UnixTime/Epoch format.`);
            }
            value = dateToUnixTime(value);
        }
        else if (typeName.match(/^TimeSpan$/i) !== null) {
            if (!(0,_utils__WEBPACK_IMPORTED_MODULE_2__.isDuration)(value)) {
                throw new Error(`${objectName} must be a string in ISO 8601 format. Instead was "${value}".`);
            }
        }
    }
    return value;
}
function serializeSequenceType(serializer, mapper, object, objectName, isXml, options) {
    var _a;
    if (!Array.isArray(object)) {
        throw new Error(`${objectName} must be of type Array.`);
    }
    let elementType = mapper.type.element;
    if (!elementType || typeof elementType !== "object") {
        throw new Error(`element" metadata for an Array must be defined in the ` +
            `mapper and it must of type "object" in ${objectName}.`);
    }
    // Quirk: Composite mappers referenced by `element` might
    // not have *all* properties declared (like uberParent),
    // so let's try to look up the full definition by name.
    if (elementType.type.name === "Composite" && elementType.type.className) {
        elementType = (_a = serializer.modelMappers[elementType.type.className]) !== null && _a !== void 0 ? _a : elementType;
    }
    const tempArray = [];
    for (let i = 0; i < object.length; i++) {
        const serializedValue = serializer.serialize(elementType, object[i], objectName, options);
        if (isXml && elementType.xmlNamespace) {
            const xmlnsKey = elementType.xmlNamespacePrefix
                ? `xmlns:${elementType.xmlNamespacePrefix}`
                : "xmlns";
            if (elementType.type.name === "Composite") {
                tempArray[i] = Object.assign({}, serializedValue);
                tempArray[i][_interfaces__WEBPACK_IMPORTED_MODULE_0__.XML_ATTRKEY] = { [xmlnsKey]: elementType.xmlNamespace };
            }
            else {
                tempArray[i] = {};
                tempArray[i][options.xml.xmlCharKey] = serializedValue;
                tempArray[i][_interfaces__WEBPACK_IMPORTED_MODULE_0__.XML_ATTRKEY] = { [xmlnsKey]: elementType.xmlNamespace };
            }
        }
        else {
            tempArray[i] = serializedValue;
        }
    }
    return tempArray;
}
function serializeDictionaryType(serializer, mapper, object, objectName, isXml, options) {
    if (typeof object !== "object") {
        throw new Error(`${objectName} must be of type object.`);
    }
    const valueType = mapper.type.value;
    if (!valueType || typeof valueType !== "object") {
        throw new Error(`"value" metadata for a Dictionary must be defined in the ` +
            `mapper and it must of type "object" in ${objectName}.`);
    }
    const tempDictionary = {};
    for (const key of Object.keys(object)) {
        const serializedValue = serializer.serialize(valueType, object[key], objectName, options);
        // If the element needs an XML namespace we need to add it within the $ property
        tempDictionary[key] = getXmlObjectValue(valueType, serializedValue, isXml, options);
    }
    // Add the namespace to the root element if needed
    if (isXml && mapper.xmlNamespace) {
        const xmlnsKey = mapper.xmlNamespacePrefix ? `xmlns:${mapper.xmlNamespacePrefix}` : "xmlns";
        const result = tempDictionary;
        result[_interfaces__WEBPACK_IMPORTED_MODULE_0__.XML_ATTRKEY] = { [xmlnsKey]: mapper.xmlNamespace };
        return result;
    }
    return tempDictionary;
}
/**
 * Resolves the additionalProperties property from a referenced mapper
 * @param serializer - the serializer containing the entire set of mappers
 * @param mapper - the composite mapper to resolve
 * @param objectName - name of the object being serialized
 */
function resolveAdditionalProperties(serializer, mapper, objectName) {
    const additionalProperties = mapper.type.additionalProperties;
    if (!additionalProperties && mapper.type.className) {
        const modelMapper = resolveReferencedMapper(serializer, mapper, objectName);
        return modelMapper === null || modelMapper === void 0 ? void 0 : modelMapper.type.additionalProperties;
    }
    return additionalProperties;
}
/**
 * Finds the mapper referenced by className
 * @param serializer - the serializer containing the entire set of mappers
 * @param mapper - the composite mapper to resolve
 * @param objectName - name of the object being serialized
 */
function resolveReferencedMapper(serializer, mapper, objectName) {
    const className = mapper.type.className;
    if (!className) {
        throw new Error(`Class name for model "${objectName}" is not provided in the mapper "${JSON.stringify(mapper, undefined, 2)}".`);
    }
    return serializer.modelMappers[className];
}
/**
 * Resolves a composite mapper's modelProperties.
 * @param serializer - the serializer containing the entire set of mappers
 * @param mapper - the composite mapper to resolve
 */
function resolveModelProperties(serializer, mapper, objectName) {
    let modelProps = mapper.type.modelProperties;
    if (!modelProps) {
        const modelMapper = resolveReferencedMapper(serializer, mapper, objectName);
        if (!modelMapper) {
            throw new Error(`mapper() cannot be null or undefined for model "${mapper.type.className}".`);
        }
        modelProps = modelMapper === null || modelMapper === void 0 ? void 0 : modelMapper.type.modelProperties;
        if (!modelProps) {
            throw new Error(`modelProperties cannot be null or undefined in the ` +
                `mapper "${JSON.stringify(modelMapper)}" of type "${mapper.type.className}" for object "${objectName}".`);
        }
    }
    return modelProps;
}
function serializeCompositeType(serializer, mapper, object, objectName, isXml, options) {
    if (getPolymorphicDiscriminatorRecursively(serializer, mapper)) {
        mapper = getPolymorphicMapper(serializer, mapper, object, "clientName");
    }
    if (object !== undefined && object !== null) {
        const payload = {};
        const modelProps = resolveModelProperties(serializer, mapper, objectName);
        for (const key of Object.keys(modelProps)) {
            const propertyMapper = modelProps[key];
            if (propertyMapper.readOnly) {
                continue;
            }
            let propName;
            let parentObject = payload;
            if (serializer.isXML) {
                if (propertyMapper.xmlIsWrapped) {
                    propName = propertyMapper.xmlName;
                }
                else {
                    propName = propertyMapper.xmlElementName || propertyMapper.xmlName;
                }
            }
            else {
                const paths = splitSerializeName(propertyMapper.serializedName);
                propName = paths.pop();
                for (const pathName of paths) {
                    const childObject = parentObject[pathName];
                    if ((childObject === undefined || childObject === null) &&
                        ((object[key] !== undefined && object[key] !== null) ||
                            propertyMapper.defaultValue !== undefined)) {
                        parentObject[pathName] = {};
                    }
                    parentObject = parentObject[pathName];
                }
            }
            if (parentObject !== undefined && parentObject !== null) {
                if (isXml && mapper.xmlNamespace) {
                    const xmlnsKey = mapper.xmlNamespacePrefix
                        ? `xmlns:${mapper.xmlNamespacePrefix}`
                        : "xmlns";
                    parentObject[_interfaces__WEBPACK_IMPORTED_MODULE_0__.XML_ATTRKEY] = Object.assign(Object.assign({}, parentObject[_interfaces__WEBPACK_IMPORTED_MODULE_0__.XML_ATTRKEY]), { [xmlnsKey]: mapper.xmlNamespace });
                }
                const propertyObjectName = propertyMapper.serializedName !== ""
                    ? objectName + "." + propertyMapper.serializedName
                    : objectName;
                let toSerialize = object[key];
                const polymorphicDiscriminator = getPolymorphicDiscriminatorRecursively(serializer, mapper);
                if (polymorphicDiscriminator &&
                    polymorphicDiscriminator.clientName === key &&
                    (toSerialize === undefined || toSerialize === null)) {
                    toSerialize = mapper.serializedName;
                }
                const serializedValue = serializer.serialize(propertyMapper, toSerialize, propertyObjectName, options);
                if (serializedValue !== undefined && propName !== undefined && propName !== null) {
                    const value = getXmlObjectValue(propertyMapper, serializedValue, isXml, options);
                    if (isXml && propertyMapper.xmlIsAttribute) {
                        // XML_ATTRKEY, i.e., $ is the key attributes are kept under in xml2js.
                        // This keeps things simple while preventing name collision
                        // with names in user documents.
                        parentObject[_interfaces__WEBPACK_IMPORTED_MODULE_0__.XML_ATTRKEY] = parentObject[_interfaces__WEBPACK_IMPORTED_MODULE_0__.XML_ATTRKEY] || {};
                        parentObject[_interfaces__WEBPACK_IMPORTED_MODULE_0__.XML_ATTRKEY][propName] = serializedValue;
                    }
                    else if (isXml && propertyMapper.xmlIsWrapped) {
                        parentObject[propName] = { [propertyMapper.xmlElementName]: value };
                    }
                    else {
                        parentObject[propName] = value;
                    }
                }
            }
        }
        const additionalPropertiesMapper = resolveAdditionalProperties(serializer, mapper, objectName);
        if (additionalPropertiesMapper) {
            const propNames = Object.keys(modelProps);
            for (const clientPropName in object) {
                const isAdditionalProperty = propNames.every((pn) => pn !== clientPropName);
                if (isAdditionalProperty) {
                    payload[clientPropName] = serializer.serialize(additionalPropertiesMapper, object[clientPropName], objectName + '["' + clientPropName + '"]', options);
                }
            }
        }
        return payload;
    }
    return object;
}
function getXmlObjectValue(propertyMapper, serializedValue, isXml, options) {
    if (!isXml || !propertyMapper.xmlNamespace) {
        return serializedValue;
    }
    const xmlnsKey = propertyMapper.xmlNamespacePrefix
        ? `xmlns:${propertyMapper.xmlNamespacePrefix}`
        : "xmlns";
    const xmlNamespace = { [xmlnsKey]: propertyMapper.xmlNamespace };
    if (["Composite"].includes(propertyMapper.type.name)) {
        if (serializedValue[_interfaces__WEBPACK_IMPORTED_MODULE_0__.XML_ATTRKEY]) {
            return serializedValue;
        }
        else {
            const result = Object.assign({}, serializedValue);
            result[_interfaces__WEBPACK_IMPORTED_MODULE_0__.XML_ATTRKEY] = xmlNamespace;
            return result;
        }
    }
    const result = {};
    result[options.xml.xmlCharKey] = serializedValue;
    result[_interfaces__WEBPACK_IMPORTED_MODULE_0__.XML_ATTRKEY] = xmlNamespace;
    return result;
}
function isSpecialXmlProperty(propertyName, options) {
    return [_interfaces__WEBPACK_IMPORTED_MODULE_0__.XML_ATTRKEY, options.xml.xmlCharKey].includes(propertyName);
}
function deserializeCompositeType(serializer, mapper, responseBody, objectName, options) {
    var _a;
    if (getPolymorphicDiscriminatorRecursively(serializer, mapper)) {
        mapper = getPolymorphicMapper(serializer, mapper, responseBody, "serializedName");
    }
    const modelProps = resolveModelProperties(serializer, mapper, objectName);
    let instance = {};
    const handledPropertyNames = [];
    for (const key of Object.keys(modelProps)) {
        const propertyMapper = modelProps[key];
        const paths = splitSerializeName(modelProps[key].serializedName);
        handledPropertyNames.push(paths[0]);
        const { serializedName, xmlName, xmlElementName } = propertyMapper;
        let propertyObjectName = objectName;
        if (serializedName !== "" && serializedName !== undefined) {
            propertyObjectName = objectName + "." + serializedName;
        }
        const headerCollectionPrefix = propertyMapper.headerCollectionPrefix;
        if (headerCollectionPrefix) {
            const dictionary = {};
            for (const headerKey of Object.keys(responseBody)) {
                if (headerKey.startsWith(headerCollectionPrefix)) {
                    dictionary[headerKey.substring(headerCollectionPrefix.length)] = serializer.deserialize(propertyMapper.type.value, responseBody[headerKey], propertyObjectName, options);
                }
                handledPropertyNames.push(headerKey);
            }
            instance[key] = dictionary;
        }
        else if (serializer.isXML) {
            if (propertyMapper.xmlIsAttribute && responseBody[_interfaces__WEBPACK_IMPORTED_MODULE_0__.XML_ATTRKEY]) {
                instance[key] = serializer.deserialize(propertyMapper, responseBody[_interfaces__WEBPACK_IMPORTED_MODULE_0__.XML_ATTRKEY][xmlName], propertyObjectName, options);
            }
            else {
                const propertyName = xmlElementName || xmlName || serializedName;
                if (propertyMapper.xmlIsWrapped) {
                    /* a list of <xmlElementName> wrapped by <xmlName>
                      For the xml example below
                        <Cors>
                          <CorsRule>...</CorsRule>
                          <CorsRule>...</CorsRule>
                        </Cors>
                      the responseBody has
                        {
                          Cors: {
                            CorsRule: [{...}, {...}]
                          }
                        }
                      xmlName is "Cors" and xmlElementName is"CorsRule".
                    */
                    const wrapped = responseBody[xmlName];
                    const elementList = (_a = wrapped === null || wrapped === void 0 ? void 0 : wrapped[xmlElementName]) !== null && _a !== void 0 ? _a : [];
                    instance[key] = serializer.deserialize(propertyMapper, elementList, propertyObjectName, options);
                }
                else {
                    const property = responseBody[propertyName];
                    instance[key] = serializer.deserialize(propertyMapper, property, propertyObjectName, options);
                }
            }
        }
        else {
            // deserialize the property if it is present in the provided responseBody instance
            let propertyInstance;
            let res = responseBody;
            // traversing the object step by step.
            for (const item of paths) {
                if (!res)
                    break;
                res = res[item];
            }
            propertyInstance = res;
            const polymorphicDiscriminator = mapper.type.polymorphicDiscriminator;
            // checking that the model property name (key)(ex: "fishtype") and the
            // clientName of the polymorphicDiscriminator {metadata} (ex: "fishtype")
            // instead of the serializedName of the polymorphicDiscriminator (ex: "fish.type")
            // is a better approach. The generator is not consistent with escaping '\.' in the
            // serializedName of the property (ex: "fish\.type") that is marked as polymorphic discriminator
            // and the serializedName of the metadata polymorphicDiscriminator (ex: "fish.type"). However,
            // the clientName transformation of the polymorphicDiscriminator (ex: "fishtype") and
            // the transformation of model property name (ex: "fishtype") is done consistently.
            // Hence, it is a safer bet to rely on the clientName of the polymorphicDiscriminator.
            if (polymorphicDiscriminator &&
                key === polymorphicDiscriminator.clientName &&
                (propertyInstance === undefined || propertyInstance === null)) {
                propertyInstance = mapper.serializedName;
            }
            let serializedValue;
            // paging
            if (Array.isArray(responseBody[key]) && modelProps[key].serializedName === "") {
                propertyInstance = responseBody[key];
                const arrayInstance = serializer.deserialize(propertyMapper, propertyInstance, propertyObjectName, options);
                // Copy over any properties that have already been added into the instance, where they do
                // not exist on the newly de-serialized array
                for (const [k, v] of Object.entries(instance)) {
                    if (!Object.prototype.hasOwnProperty.call(arrayInstance, k)) {
                        arrayInstance[k] = v;
                    }
                }
                instance = arrayInstance;
            }
            else if (propertyInstance !== undefined || propertyMapper.defaultValue !== undefined) {
                serializedValue = serializer.deserialize(propertyMapper, propertyInstance, propertyObjectName, options);
                instance[key] = serializedValue;
            }
        }
    }
    const additionalPropertiesMapper = mapper.type.additionalProperties;
    if (additionalPropertiesMapper) {
        const isAdditionalProperty = (responsePropName) => {
            for (const clientPropName in modelProps) {
                const paths = splitSerializeName(modelProps[clientPropName].serializedName);
                if (paths[0] === responsePropName) {
                    return false;
                }
            }
            return true;
        };
        for (const responsePropName in responseBody) {
            if (isAdditionalProperty(responsePropName)) {
                instance[responsePropName] = serializer.deserialize(additionalPropertiesMapper, responseBody[responsePropName], objectName + '["' + responsePropName + '"]', options);
            }
        }
    }
    else if (responseBody) {
        for (const key of Object.keys(responseBody)) {
            if (instance[key] === undefined &&
                !handledPropertyNames.includes(key) &&
                !isSpecialXmlProperty(key, options)) {
                instance[key] = responseBody[key];
            }
        }
    }
    return instance;
}
function deserializeDictionaryType(serializer, mapper, responseBody, objectName, options) {
    /* jshint validthis: true */
    const value = mapper.type.value;
    if (!value || typeof value !== "object") {
        throw new Error(`"value" metadata for a Dictionary must be defined in the ` +
            `mapper and it must of type "object" in ${objectName}`);
    }
    if (responseBody) {
        const tempDictionary = {};
        for (const key of Object.keys(responseBody)) {
            tempDictionary[key] = serializer.deserialize(value, responseBody[key], objectName, options);
        }
        return tempDictionary;
    }
    return responseBody;
}
function deserializeSequenceType(serializer, mapper, responseBody, objectName, options) {
    var _a;
    let element = mapper.type.element;
    if (!element || typeof element !== "object") {
        throw new Error(`element" metadata for an Array must be defined in the ` +
            `mapper and it must of type "object" in ${objectName}`);
    }
    if (responseBody) {
        if (!Array.isArray(responseBody)) {
            // xml2js will interpret a single element array as just the element, so force it to be an array
            responseBody = [responseBody];
        }
        // Quirk: Composite mappers referenced by `element` might
        // not have *all* properties declared (like uberParent),
        // so let's try to look up the full definition by name.
        if (element.type.name === "Composite" && element.type.className) {
            element = (_a = serializer.modelMappers[element.type.className]) !== null && _a !== void 0 ? _a : element;
        }
        const tempArray = [];
        for (let i = 0; i < responseBody.length; i++) {
            tempArray[i] = serializer.deserialize(element, responseBody[i], `${objectName}[${i}]`, options);
        }
        return tempArray;
    }
    return responseBody;
}
function getPolymorphicMapper(serializer, mapper, object, polymorphicPropertyName) {
    const polymorphicDiscriminator = getPolymorphicDiscriminatorRecursively(serializer, mapper);
    if (polymorphicDiscriminator) {
        let discriminatorName = polymorphicDiscriminator[polymorphicPropertyName];
        if (discriminatorName) {
            // The serializedName might have \\, which we just want to ignore
            if (polymorphicPropertyName === "serializedName") {
                discriminatorName = discriminatorName.replace(/\\/gi, "");
            }
            const discriminatorValue = object[discriminatorName];
            if (discriminatorValue !== undefined && discriminatorValue !== null) {
                const typeName = mapper.type.uberParent || mapper.type.className;
                const indexDiscriminator = discriminatorValue === typeName
                    ? discriminatorValue
                    : typeName + "." + discriminatorValue;
                const polymorphicMapper = serializer.modelMappers.discriminators[indexDiscriminator];
                if (polymorphicMapper) {
                    mapper = polymorphicMapper;
                }
            }
        }
    }
    return mapper;
}
function getPolymorphicDiscriminatorRecursively(serializer, mapper) {
    return (mapper.type.polymorphicDiscriminator ||
        getPolymorphicDiscriminatorSafely(serializer, mapper.type.uberParent) ||
        getPolymorphicDiscriminatorSafely(serializer, mapper.type.className));
}
function getPolymorphicDiscriminatorSafely(serializer, typeName) {
    return (typeName &&
        serializer.modelMappers[typeName] &&
        serializer.modelMappers[typeName].type.polymorphicDiscriminator);
}
/**
 * Known types of Mappers
 */
const MapperTypeNames = {
    Base64Url: "Base64Url",
    Boolean: "Boolean",
    ByteArray: "ByteArray",
    Composite: "Composite",
    Date: "Date",
    DateTime: "DateTime",
    DateTimeRfc1123: "DateTimeRfc1123",
    Dictionary: "Dictionary",
    Enum: "Enum",
    Number: "Number",
    Object: "Object",
    Sequence: "Sequence",
    String: "String",
    Stream: "Stream",
    TimeSpan: "TimeSpan",
    UnixTime: "UnixTime",
};
//# sourceMappingURL=serializer.js.map

/***/ }),

/***/ "./node_modules/@azure/core-client/dist-esm/src/serviceClient.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@azure/core-client/dist-esm/src/serviceClient.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceClient": () => (/* binding */ ServiceClient)
/* harmony export */ });
/* harmony import */ var _azure_core_rest_pipeline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @azure/core-rest-pipeline */ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/pipelineRequest.js");
/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipeline */ "./node_modules/@azure/core-client/dist-esm/src/pipeline.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./node_modules/@azure/core-client/dist-esm/src/utils.js");
/* harmony import */ var _httpClientCache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./httpClientCache */ "./node_modules/@azure/core-client/dist-esm/src/httpClientCache.js");
/* harmony import */ var _operationHelpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./operationHelpers */ "./node_modules/@azure/core-client/dist-esm/src/operationHelpers.js");
/* harmony import */ var _urlHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./urlHelpers */ "./node_modules/@azure/core-client/dist-esm/src/urlHelpers.js");
/* harmony import */ var _interfaceHelpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interfaceHelpers */ "./node_modules/@azure/core-client/dist-esm/src/interfaceHelpers.js");
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.







/**
 * Initializes a new instance of the ServiceClient.
 */
class ServiceClient {
    /**
     * The ServiceClient constructor
     * @param credential - The credentials used for authentication with the service.
     * @param options - The service client options that govern the behavior of the client.
     */
    constructor(options = {}) {
        var _a;
        this._requestContentType = options.requestContentType;
        this._baseUri = options.baseUri;
        this._allowInsecureConnection = options.allowInsecureConnection;
        this._httpClient = options.httpClient || (0,_httpClientCache__WEBPACK_IMPORTED_MODULE_0__.getCachedDefaultHttpClient)();
        this.pipeline = options.pipeline || createDefaultPipeline(options);
        if ((_a = options.additionalPolicies) === null || _a === void 0 ? void 0 : _a.length) {
            for (const { policy, position } of options.additionalPolicies) {
                // Sign happens after Retry and is commonly needed to occur
                // before policies that intercept post-retry.
                const afterPhase = position === "perRetry" ? "Sign" : undefined;
                this.pipeline.addPolicy(policy, {
                    afterPhase,
                });
            }
        }
    }
    /**
     * Send the provided httpRequest.
     */
    async sendRequest(request) {
        return this.pipeline.sendRequest(this._httpClient, request);
    }
    /**
     * Send an HTTP request that is populated using the provided OperationSpec.
     * @typeParam T - The typed result of the request, based on the OperationSpec.
     * @param operationArguments - The arguments that the HTTP request's templated values will be populated from.
     * @param operationSpec - The OperationSpec to use to populate the httpRequest.
     */
    async sendOperationRequest(operationArguments, operationSpec) {
        const baseUri = operationSpec.baseUrl || this._baseUri;
        if (!baseUri) {
            throw new Error("If operationSpec.baseUrl is not specified, then the ServiceClient must have a baseUri string property that contains the base URL to use.");
        }
        // Templatized URLs sometimes reference properties on the ServiceClient child class,
        // so we have to pass `this` below in order to search these properties if they're
        // not part of OperationArguments
        const url = (0,_urlHelpers__WEBPACK_IMPORTED_MODULE_1__.getRequestUrl)(baseUri, operationSpec, operationArguments, this);
        const request = (0,_azure_core_rest_pipeline__WEBPACK_IMPORTED_MODULE_2__.createPipelineRequest)({
            url,
        });
        request.method = operationSpec.httpMethod;
        const operationInfo = (0,_operationHelpers__WEBPACK_IMPORTED_MODULE_3__.getOperationRequestInfo)(request);
        operationInfo.operationSpec = operationSpec;
        operationInfo.operationArguments = operationArguments;
        const contentType = operationSpec.contentType || this._requestContentType;
        if (contentType && operationSpec.requestBody) {
            request.headers.set("Content-Type", contentType);
        }
        const options = operationArguments.options;
        if (options) {
            const requestOptions = options.requestOptions;
            if (requestOptions) {
                if (requestOptions.timeout) {
                    request.timeout = requestOptions.timeout;
                }
                if (requestOptions.onUploadProgress) {
                    request.onUploadProgress = requestOptions.onUploadProgress;
                }
                if (requestOptions.onDownloadProgress) {
                    request.onDownloadProgress = requestOptions.onDownloadProgress;
                }
                if (requestOptions.shouldDeserialize !== undefined) {
                    operationInfo.shouldDeserialize = requestOptions.shouldDeserialize;
                }
                if (requestOptions.allowInsecureConnection) {
                    request.allowInsecureConnection = true;
                }
            }
            if (options.abortSignal) {
                request.abortSignal = options.abortSignal;
            }
            if (options.tracingOptions) {
                request.tracingOptions = options.tracingOptions;
            }
        }
        if (this._allowInsecureConnection) {
            request.allowInsecureConnection = true;
        }
        if (request.streamResponseStatusCodes === undefined) {
            request.streamResponseStatusCodes = (0,_interfaceHelpers__WEBPACK_IMPORTED_MODULE_4__.getStreamingResponseStatusCodes)(operationSpec);
        }
        try {
            const rawResponse = await this.sendRequest(request);
            const flatResponse = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.flattenResponse)(rawResponse, operationSpec.responses[rawResponse.status]);
            if (options === null || options === void 0 ? void 0 : options.onResponse) {
                options.onResponse(rawResponse, flatResponse);
            }
            return flatResponse;
        }
        catch (error) {
            if (typeof error === "object" && (error === null || error === void 0 ? void 0 : error.response)) {
                const rawResponse = error.response;
                const flatResponse = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.flattenResponse)(rawResponse, operationSpec.responses[error.statusCode] || operationSpec.responses["default"]);
                error.details = flatResponse;
                if (options === null || options === void 0 ? void 0 : options.onResponse) {
                    options.onResponse(rawResponse, flatResponse, error);
                }
            }
            throw error;
        }
    }
}
function createDefaultPipeline(options) {
    const credentialScopes = getCredentialScopes(options);
    const credentialOptions = options.credential && credentialScopes
        ? { credentialScopes, credential: options.credential }
        : undefined;
    return (0,_pipeline__WEBPACK_IMPORTED_MODULE_6__.createClientPipeline)(Object.assign(Object.assign({}, options), { credentialOptions }));
}
function getCredentialScopes(options) {
    if (options.credentialScopes) {
        const scopes = options.credentialScopes;
        return Array.isArray(scopes)
            ? scopes.map((scope) => new URL(scope).toString())
            : new URL(scopes).toString();
    }
    if (options.baseUri) {
        return `${options.baseUri}/.default`;
    }
    if (options.credential && !options.credentialScopes) {
        throw new Error(`When using credentials, the ServiceClientOptions must contain either a baseUri or a credentialScopes. Unable to create a bearerTokenAuthenticationPolicy`);
    }
    return undefined;
}
//# sourceMappingURL=serviceClient.js.map

/***/ }),

/***/ "./node_modules/@azure/core-client/dist-esm/src/urlHelpers.js":
/*!********************************************************************!*\
  !*** ./node_modules/@azure/core-client/dist-esm/src/urlHelpers.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendQueryParams": () => (/* binding */ appendQueryParams),
/* harmony export */   "getRequestUrl": () => (/* binding */ getRequestUrl)
/* harmony export */ });
/* harmony import */ var _operationHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./operationHelpers */ "./node_modules/@azure/core-client/dist-esm/src/operationHelpers.js");
/* harmony import */ var _interfaceHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interfaceHelpers */ "./node_modules/@azure/core-client/dist-esm/src/interfaceHelpers.js");
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.


const CollectionFormatToDelimiterMap = {
    CSV: ",",
    SSV: " ",
    Multi: "Multi",
    TSV: "\t",
    Pipes: "|",
};
function getRequestUrl(baseUri, operationSpec, operationArguments, fallbackObject) {
    const urlReplacements = calculateUrlReplacements(operationSpec, operationArguments, fallbackObject);
    let isAbsolutePath = false;
    let requestUrl = replaceAll(baseUri, urlReplacements);
    if (operationSpec.path) {
        let path = replaceAll(operationSpec.path, urlReplacements);
        // QUIRK: sometimes we get a path component like /{nextLink}
        // which may be a fully formed URL with a leading /. In that case, we should
        // remove the leading /
        if (operationSpec.path === "/{nextLink}" && path.startsWith("/")) {
            path = path.substring(1);
        }
        // QUIRK: sometimes we get a path component like {nextLink}
        // which may be a fully formed URL. In that case, we should
        // ignore the baseUri.
        if (isAbsoluteUrl(path)) {
            requestUrl = path;
            isAbsolutePath = true;
        }
        else {
            requestUrl = appendPath(requestUrl, path);
        }
    }
    const { queryParams, sequenceParams } = calculateQueryParameters(operationSpec, operationArguments, fallbackObject);
    /**
     * Notice that this call sets the `noOverwrite` parameter to true if the `requestUrl`
     * is an absolute path. This ensures that existing query parameter values in `requestUrl`
     * do not get overwritten. On the other hand when `requestUrl` is not absolute path, it
     * is still being built so there is nothing to overwrite.
     */
    requestUrl = appendQueryParams(requestUrl, queryParams, sequenceParams, isAbsolutePath);
    return requestUrl;
}
function replaceAll(input, replacements) {
    let result = input;
    for (const [searchValue, replaceValue] of replacements) {
        result = result.split(searchValue).join(replaceValue);
    }
    return result;
}
function calculateUrlReplacements(operationSpec, operationArguments, fallbackObject) {
    var _a;
    const result = new Map();
    if ((_a = operationSpec.urlParameters) === null || _a === void 0 ? void 0 : _a.length) {
        for (const urlParameter of operationSpec.urlParameters) {
            let urlParameterValue = (0,_operationHelpers__WEBPACK_IMPORTED_MODULE_0__.getOperationArgumentValueFromParameter)(operationArguments, urlParameter, fallbackObject);
            const parameterPathString = (0,_interfaceHelpers__WEBPACK_IMPORTED_MODULE_1__.getPathStringFromParameter)(urlParameter);
            urlParameterValue = operationSpec.serializer.serialize(urlParameter.mapper, urlParameterValue, parameterPathString);
            if (!urlParameter.skipEncoding) {
                urlParameterValue = encodeURIComponent(urlParameterValue);
            }
            result.set(`{${urlParameter.mapper.serializedName || parameterPathString}}`, urlParameterValue);
        }
    }
    return result;
}
function isAbsoluteUrl(url) {
    return url.includes("://");
}
function appendPath(url, pathToAppend) {
    if (!pathToAppend) {
        return url;
    }
    const parsedUrl = new URL(url);
    let newPath = parsedUrl.pathname;
    if (!newPath.endsWith("/")) {
        newPath = `${newPath}/`;
    }
    if (pathToAppend.startsWith("/")) {
        pathToAppend = pathToAppend.substring(1);
    }
    const searchStart = pathToAppend.indexOf("?");
    if (searchStart !== -1) {
        const path = pathToAppend.substring(0, searchStart);
        const search = pathToAppend.substring(searchStart + 1);
        newPath = newPath + path;
        if (search) {
            parsedUrl.search = parsedUrl.search ? `${parsedUrl.search}&${search}` : search;
        }
    }
    else {
        newPath = newPath + pathToAppend;
    }
    parsedUrl.pathname = newPath;
    return parsedUrl.toString();
}
function calculateQueryParameters(operationSpec, operationArguments, fallbackObject) {
    var _a;
    const result = new Map();
    const sequenceParams = new Set();
    if ((_a = operationSpec.queryParameters) === null || _a === void 0 ? void 0 : _a.length) {
        for (const queryParameter of operationSpec.queryParameters) {
            if (queryParameter.mapper.type.name === "Sequence" && queryParameter.mapper.serializedName) {
                sequenceParams.add(queryParameter.mapper.serializedName);
            }
            let queryParameterValue = (0,_operationHelpers__WEBPACK_IMPORTED_MODULE_0__.getOperationArgumentValueFromParameter)(operationArguments, queryParameter, fallbackObject);
            if ((queryParameterValue !== undefined && queryParameterValue !== null) ||
                queryParameter.mapper.required) {
                queryParameterValue = operationSpec.serializer.serialize(queryParameter.mapper, queryParameterValue, (0,_interfaceHelpers__WEBPACK_IMPORTED_MODULE_1__.getPathStringFromParameter)(queryParameter));
                const delimiter = queryParameter.collectionFormat
                    ? CollectionFormatToDelimiterMap[queryParameter.collectionFormat]
                    : "";
                if (Array.isArray(queryParameterValue)) {
                    // replace null and undefined
                    queryParameterValue = queryParameterValue.map((item) => {
                        if (item === null || item === undefined) {
                            return "";
                        }
                        return item;
                    });
                }
                if (queryParameter.collectionFormat === "Multi" && queryParameterValue.length === 0) {
                    continue;
                }
                else if (Array.isArray(queryParameterValue) &&
                    (queryParameter.collectionFormat === "SSV" || queryParameter.collectionFormat === "TSV")) {
                    queryParameterValue = queryParameterValue.join(delimiter);
                }
                if (!queryParameter.skipEncoding) {
                    if (Array.isArray(queryParameterValue)) {
                        queryParameterValue = queryParameterValue.map((item) => {
                            return encodeURIComponent(item);
                        });
                    }
                    else {
                        queryParameterValue = encodeURIComponent(queryParameterValue);
                    }
                }
                // Join pipes and CSV *after* encoding, or the server will be upset.
                if (Array.isArray(queryParameterValue) &&
                    (queryParameter.collectionFormat === "CSV" || queryParameter.collectionFormat === "Pipes")) {
                    queryParameterValue = queryParameterValue.join(delimiter);
                }
                result.set(queryParameter.mapper.serializedName || (0,_interfaceHelpers__WEBPACK_IMPORTED_MODULE_1__.getPathStringFromParameter)(queryParameter), queryParameterValue);
            }
        }
    }
    return {
        queryParams: result,
        sequenceParams,
    };
}
function simpleParseQueryParams(queryString) {
    const result = new Map();
    if (!queryString || queryString[0] !== "?") {
        return result;
    }
    // remove the leading ?
    queryString = queryString.slice(1);
    const pairs = queryString.split("&");
    for (const pair of pairs) {
        const [name, value] = pair.split("=", 2);
        const existingValue = result.get(name);
        if (existingValue) {
            if (Array.isArray(existingValue)) {
                existingValue.push(value);
            }
            else {
                result.set(name, [existingValue, value]);
            }
        }
        else {
            result.set(name, value);
        }
    }
    return result;
}
/** @internal */
function appendQueryParams(url, queryParams, sequenceParams, noOverwrite = false) {
    if (queryParams.size === 0) {
        return url;
    }
    const parsedUrl = new URL(url);
    // QUIRK: parsedUrl.searchParams will have their name/value pairs decoded, which
    // can change their meaning to the server, such as in the case of a SAS signature.
    // To avoid accidentally un-encoding a query param, we parse the key/values ourselves
    const combinedParams = simpleParseQueryParams(parsedUrl.search);
    for (const [name, value] of queryParams) {
        const existingValue = combinedParams.get(name);
        if (Array.isArray(existingValue)) {
            if (Array.isArray(value)) {
                existingValue.push(...value);
                const valueSet = new Set(existingValue);
                combinedParams.set(name, Array.from(valueSet));
            }
            else {
                existingValue.push(value);
            }
        }
        else if (existingValue) {
            if (Array.isArray(value)) {
                value.unshift(existingValue);
            }
            else if (sequenceParams.has(name)) {
                combinedParams.set(name, [existingValue, value]);
            }
            if (!noOverwrite) {
                combinedParams.set(name, value);
            }
        }
        else {
            combinedParams.set(name, value);
        }
    }
    const searchPieces = [];
    for (const [name, value] of combinedParams) {
        if (typeof value === "string") {
            searchPieces.push(`${name}=${value}`);
        }
        else if (Array.isArray(value)) {
            // QUIRK: If we get an array of values, include multiple key/value pairs
            for (const subValue of value) {
                searchPieces.push(`${name}=${subValue}`);
            }
        }
        else {
            searchPieces.push(`${name}=${value}`);
        }
    }
    // QUIRK: we have to set search manually as searchParams will encode comma when it shouldn't.
    parsedUrl.search = searchPieces.length ? `?${searchPieces.join("&")}` : "";
    return parsedUrl.toString();
}
//# sourceMappingURL=urlHelpers.js.map

/***/ }),

/***/ "./node_modules/@azure/core-client/dist-esm/src/utils.js":
/*!***************************************************************!*\
  !*** ./node_modules/@azure/core-client/dist-esm/src/utils.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "flattenResponse": () => (/* binding */ flattenResponse),
/* harmony export */   "isDuration": () => (/* binding */ isDuration),
/* harmony export */   "isPrimitiveBody": () => (/* binding */ isPrimitiveBody),
/* harmony export */   "isValidUuid": () => (/* binding */ isValidUuid)
/* harmony export */ });
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
/**
 * A type guard for a primitive response body.
 * @param value - Value to test
 *
 * @internal
 */
function isPrimitiveBody(value, mapperTypeName) {
    return (mapperTypeName !== "Composite" &&
        mapperTypeName !== "Dictionary" &&
        (typeof value === "string" ||
            typeof value === "number" ||
            typeof value === "boolean" ||
            (mapperTypeName === null || mapperTypeName === void 0 ? void 0 : mapperTypeName.match(/^(Date|DateTime|DateTimeRfc1123|UnixTime|ByteArray|Base64Url)$/i)) !==
                null ||
            value === undefined ||
            value === null));
}
const validateISODuration = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
/**
 * Returns true if the given string is in ISO 8601 format.
 * @param value - The value to be validated for ISO 8601 duration format.
 * @internal
 */
function isDuration(value) {
    return validateISODuration.test(value);
}
const validUuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/i;
/**
 * Returns true if the provided uuid is valid.
 *
 * @param uuid - The uuid that needs to be validated.
 *
 * @internal
 */
function isValidUuid(uuid) {
    return validUuidRegex.test(uuid);
}
/**
 * Maps the response as follows:
 * - wraps the response body if needed (typically if its type is primitive).
 * - returns null if the combination of the headers and the body is empty.
 * - otherwise, returns the combination of the headers and the body.
 *
 * @param responseObject - a representation of the parsed response
 * @returns the response that will be returned to the user which can be null and/or wrapped
 *
 * @internal
 */
function handleNullableResponseAndWrappableBody(responseObject) {
    const combinedHeadersAndBody = Object.assign(Object.assign({}, responseObject.headers), responseObject.body);
    if (responseObject.hasNullableType &&
        Object.getOwnPropertyNames(combinedHeadersAndBody).length === 0) {
        return responseObject.shouldWrapBody ? { body: null } : null;
    }
    else {
        return responseObject.shouldWrapBody
            ? Object.assign(Object.assign({}, responseObject.headers), { body: responseObject.body }) : combinedHeadersAndBody;
    }
}
/**
 * Take a `FullOperationResponse` and turn it into a flat
 * response object to hand back to the consumer.
 * @param fullResponse - The processed response from the operation request
 * @param responseSpec - The response map from the OperationSpec
 *
 * @internal
 */
function flattenResponse(fullResponse, responseSpec) {
    var _a, _b;
    const parsedHeaders = fullResponse.parsedHeaders;
    // head methods never have a body, but we return a boolean set to body property
    // to indicate presence/absence of the resource
    if (fullResponse.request.method === "HEAD") {
        return Object.assign(Object.assign({}, parsedHeaders), { body: fullResponse.parsedBody });
    }
    const bodyMapper = responseSpec && responseSpec.bodyMapper;
    const isNullable = Boolean(bodyMapper === null || bodyMapper === void 0 ? void 0 : bodyMapper.nullable);
    const expectedBodyTypeName = bodyMapper === null || bodyMapper === void 0 ? void 0 : bodyMapper.type.name;
    /** If the body is asked for, we look at the expected body type to handle it */
    if (expectedBodyTypeName === "Stream") {
        return Object.assign(Object.assign({}, parsedHeaders), { blobBody: fullResponse.blobBody, readableStreamBody: fullResponse.readableStreamBody });
    }
    const modelProperties = (expectedBodyTypeName === "Composite" &&
        bodyMapper.type.modelProperties) ||
        {};
    const isPageableResponse = Object.keys(modelProperties).some((k) => modelProperties[k].serializedName === "");
    if (expectedBodyTypeName === "Sequence" || isPageableResponse) {
        const arrayResponse = (_a = fullResponse.parsedBody) !== null && _a !== void 0 ? _a : [];
        for (const key of Object.keys(modelProperties)) {
            if (modelProperties[key].serializedName) {
                arrayResponse[key] = (_b = fullResponse.parsedBody) === null || _b === void 0 ? void 0 : _b[key];
            }
        }
        if (parsedHeaders) {
            for (const key of Object.keys(parsedHeaders)) {
                arrayResponse[key] = parsedHeaders[key];
            }
        }
        return isNullable &&
            !fullResponse.parsedBody &&
            !parsedHeaders &&
            Object.getOwnPropertyNames(modelProperties).length === 0
            ? null
            : arrayResponse;
    }
    return handleNullableResponseAndWrappableBody({
        body: fullResponse.parsedBody,
        headers: parsedHeaders,
        hasNullableType: isNullable,
        shouldWrapBody: isPrimitiveBody(fullResponse.parsedBody, expectedBodyTypeName),
    });
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/constants.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@azure/core-rest-pipeline/dist-esm/src/constants.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_RETRY_POLICY_COUNT": () => (/* binding */ DEFAULT_RETRY_POLICY_COUNT),
/* harmony export */   "SDK_VERSION": () => (/* binding */ SDK_VERSION)
/* harmony export */ });
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
const SDK_VERSION = "1.8.0";
const DEFAULT_RETRY_POLICY_COUNT = 3;
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/createPipelineFromOptions.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@azure/core-rest-pipeline/dist-esm/src/createPipelineFromOptions.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPipelineFromOptions": () => (/* binding */ createPipelineFromOptions)
/* harmony export */ });
/* harmony import */ var _pipeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pipeline */ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/pipeline.js");
/* harmony import */ var _policies_decompressResponsePolicy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./policies/decompressResponsePolicy */ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/policies/decompressResponsePolicy.browser.js");
/* harmony import */ var _policies_formDataPolicy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./policies/formDataPolicy */ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/policies/formDataPolicy.browser.js");
/* harmony import */ var _policies_logPolicy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./policies/logPolicy */ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/policies/logPolicy.js");
/* harmony import */ var _policies_proxyPolicy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./policies/proxyPolicy */ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/policies/proxyPolicy.browser.js");
/* harmony import */ var _policies_redirectPolicy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./policies/redirectPolicy */ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/policies/redirectPolicy.js");
/* harmony import */ var _policies_setClientRequestIdPolicy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./policies/setClientRequestIdPolicy */ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/policies/setClientRequestIdPolicy.js");
/* harmony import */ var _policies_tracingPolicy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./policies/tracingPolicy */ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/policies/tracingPolicy.js");
/* harmony import */ var _policies_userAgentPolicy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./policies/userAgentPolicy */ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/policies/userAgentPolicy.js");
/* harmony import */ var _policies_defaultRetryPolicy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./policies/defaultRetryPolicy */ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/policies/defaultRetryPolicy.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/helpers */ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/util/helpers.js");
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.











/**
 * Create a new pipeline with a default set of customizable policies.
 * @param options - Options to configure a custom pipeline.
 */
function createPipelineFromOptions(options) {
    const pipeline = (0,_pipeline__WEBPACK_IMPORTED_MODULE_0__.createEmptyPipeline)();
    if (_util_helpers__WEBPACK_IMPORTED_MODULE_1__.isNode) {
        pipeline.addPolicy((0,_policies_proxyPolicy__WEBPACK_IMPORTED_MODULE_2__.proxyPolicy)(options.proxyOptions));
        pipeline.addPolicy((0,_policies_decompressResponsePolicy__WEBPACK_IMPORTED_MODULE_3__.decompressResponsePolicy)());
    }
    pipeline.addPolicy((0,_policies_formDataPolicy__WEBPACK_IMPORTED_MODULE_4__.formDataPolicy)());
    pipeline.addPolicy((0,_policies_userAgentPolicy__WEBPACK_IMPORTED_MODULE_5__.userAgentPolicy)(options.userAgentOptions));
    pipeline.addPolicy((0,_policies_setClientRequestIdPolicy__WEBPACK_IMPORTED_MODULE_6__.setClientRequestIdPolicy)());
    pipeline.addPolicy((0,_policies_defaultRetryPolicy__WEBPACK_IMPORTED_MODULE_7__.defaultRetryPolicy)(options.retryOptions), { phase: "Retry" });
    pipeline.addPolicy((0,_policies_tracingPolicy__WEBPACK_IMPORTED_MODULE_8__.tracingPolicy)(options.userAgentOptions), { afterPhase: "Retry" });
    if (_util_helpers__WEBPACK_IMPORTED_MODULE_1__.isNode) {
        // Both XHR and Fetch expect to handle redirects automatically,
        // so only include this policy when we're in Node.
        pipeline.addPolicy((0,_policies_redirectPolicy__WEBPACK_IMPORTED_MODULE_9__.redirectPolicy)(options.redirectOptions), { afterPhase: "Retry" });
    }
    pipeline.addPolicy((0,_policies_logPolicy__WEBPACK_IMPORTED_MODULE_10__.logPolicy)(options.loggingOptions), { afterPhase: "Retry" });
    return pipeline;
}
//# sourceMappingURL=createPipelineFromOptions.js.map

/***/ }),

/***/ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/defaultHttpClient.browser.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@azure/core-rest-pipeline/dist-esm/src/defaultHttpClient.browser.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDefaultHttpClient": () => (/* binding */ createDefaultHttpClient)
/* harmony export */ });
/* harmony import */ var _fetchHttpClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchHttpClient */ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/fetchHttpClient.js");
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/**
 * Create the correct HttpClient for the current environment.
 */
function createDefaultHttpClient() {
    return (0,_fetchHttpClient__WEBPACK_IMPORTED_MODULE_0__.createFetchHttpClient)();
}
//# sourceMappingURL=defaultHttpClient.browser.js.map

/***/ }),

/***/ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/fetchHttpClient.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@azure/core-rest-pipeline/dist-esm/src/fetchHttpClient.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFetchHttpClient": () => (/* binding */ createFetchHttpClient)
/* harmony export */ });
/* harmony import */ var _azure_abort_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @azure/abort-controller */ "./node_modules/@azure/abort-controller/dist-esm/src/AbortController.js");
/* harmony import */ var _restError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restError */ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/restError.js");
/* harmony import */ var _httpHeaders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./httpHeaders */ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/httpHeaders.js");
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.



/**
 * Checks if the body is a NodeReadable stream which is not supported in Browsers
 */
function isNodeReadableStream(body) {
    return body && typeof body.pipe === "function";
}
/**
 * Checks if the body is a ReadableStream supported by browsers
 */
function isReadableStream(body) {
    return Boolean(body &&
        typeof body.getReader === "function" &&
        typeof body.tee === "function");
}
/**
 * A HttpClient implementation that uses window.fetch to send HTTP requests.
 * @internal
 */
class FetchHttpClient {
    /**
     * Makes a request over an underlying transport layer and returns the response.
     * @param request - The request to be made.
     */
    async sendRequest(request) {
        const url = new URL(request.url);
        const isInsecure = url.protocol !== "https:";
        if (isInsecure && !request.allowInsecureConnection) {
            throw new Error(`Cannot connect to ${request.url} while allowInsecureConnection is false.`);
        }
        if (request.proxySettings) {
            throw new Error("HTTP proxy is not supported in browser environment");
        }
        try {
            return await makeRequest(request);
        }
        catch (e) {
            throw getError(e, request);
        }
    }
}
/**
 * Sends a request
 */
async function makeRequest(request) {
    const { abortController, abortControllerCleanup } = setupAbortSignal(request);
    try {
        const headers = buildFetchHeaders(request.headers);
        const requestBody = buildRequestBody(request);
        /**
         * Developers of the future:
         * Do not set redirect: "manual" as part
         * of request options.
         * It will not work as you expect.
         */
        const response = await fetch(request.url, {
            body: requestBody,
            method: request.method,
            headers: headers,
            signal: abortController.signal,
            credentials: request.withCredentials ? "include" : "same-origin",
            cache: "no-store",
        });
        return buildPipelineResponse(response, request);
    }
    finally {
        if (abortControllerCleanup) {
            abortControllerCleanup();
        }
    }
}
/**
 * Creates a pipeline response from a Fetch response;
 */
async function buildPipelineResponse(httpResponse, request) {
    var _a, _b;
    const headers = buildPipelineHeaders(httpResponse);
    const response = {
        request,
        headers,
        status: httpResponse.status,
    };
    const bodyStream = isReadableStream(httpResponse.body)
        ? buildBodyStream(httpResponse.body, request.onDownloadProgress)
        : httpResponse.body;
    if (
    // Value of POSITIVE_INFINITY in streamResponseStatusCodes is considered as any status code
    ((_a = request.streamResponseStatusCodes) === null || _a === void 0 ? void 0 : _a.has(Number.POSITIVE_INFINITY)) ||
        ((_b = request.streamResponseStatusCodes) === null || _b === void 0 ? void 0 : _b.has(response.status))) {
        if (request.enableBrowserStreams) {
            response.browserStreamBody = bodyStream !== null && bodyStream !== void 0 ? bodyStream : undefined;
        }
        else {
            const responseStream = new Response(bodyStream);
            response.blobBody = responseStream.blob();
        }
    }
    else {
        const responseStream = new Response(bodyStream);
        response.bodyAsText = await responseStream.text();
    }
    return response;
}
function setupAbortSignal(request) {
    const abortController = new AbortController();
    // Cleanup function
    let abortControllerCleanup;
    /**
     * Attach an abort listener to the request
     */
    let abortListener;
    if (request.abortSignal) {
        if (request.abortSignal.aborted) {
            throw new _azure_abort_controller__WEBPACK_IMPORTED_MODULE_0__.AbortError("The operation was aborted.");
        }
        abortListener = (event) => {
            if (event.type === "abort") {
                abortController.abort();
            }
        };
        request.abortSignal.addEventListener("abort", abortListener);
        abortControllerCleanup = () => {
            var _a;
            if (abortListener) {
                (_a = request.abortSignal) === null || _a === void 0 ? void 0 : _a.removeEventListener("abort", abortListener);
            }
        };
    }
    // If a timeout was passed, call the abort signal once the time elapses
    if (request.timeout > 0) {
        setTimeout(() => {
            abortController.abort();
        }, request.timeout);
    }
    return { abortController, abortControllerCleanup };
}
/**
 * Gets the specific error
 */
function getError(e, request) {
    var _a;
    if (e && (e === null || e === void 0 ? void 0 : e.name) === "AbortError") {
        return e;
    }
    else {
        return new _restError__WEBPACK_IMPORTED_MODULE_1__.RestError(`Error sending request: ${e.message}`, {
            code: (_a = e === null || e === void 0 ? void 0 : e.code) !== null && _a !== void 0 ? _a : _restError__WEBPACK_IMPORTED_MODULE_1__.RestError.REQUEST_SEND_ERROR,
            request,
        });
    }
}
/**
 * Converts PipelineRequest headers to Fetch headers
 */
function buildFetchHeaders(pipelineHeaders) {
    const headers = new Headers();
    for (const [name, value] of pipelineHeaders) {
        headers.append(name, value);
    }
    return headers;
}
function buildPipelineHeaders(httpResponse) {
    const responseHeaders = (0,_httpHeaders__WEBPACK_IMPORTED_MODULE_2__.createHttpHeaders)();
    for (const [name, value] of httpResponse.headers) {
        responseHeaders.set(name, value);
    }
    return responseHeaders;
}
function buildRequestBody(request) {
    const body = typeof request.body === "function" ? request.body() : request.body;
    if (isNodeReadableStream(body)) {
        throw new Error("Node streams are not supported in browser environment.");
    }
    return isReadableStream(body) ? buildBodyStream(body, request.onUploadProgress) : body;
}
/**
 * Reads the request/response original stream and stream it through a new
 * ReadableStream, this is done to be able to report progress in a way that
 * all modern browsers support. TransformStreams would be an alternative,
 * however they are not yet supported by all browsers i.e Firefox
 */
function buildBodyStream(readableStream, onProgress) {
    let loadedBytes = 0;
    // If the current browser supports pipeThrough we use a TransformStream
    // to report progress
    if (isTransformStreamSupported(readableStream)) {
        return readableStream.pipeThrough(new TransformStream({
            transform(chunk, controller) {
                if (chunk === null) {
                    controller.terminate();
                    return;
                }
                controller.enqueue(chunk);
                loadedBytes += chunk.length;
                if (onProgress) {
                    onProgress({ loadedBytes });
                }
            },
        }));
    }
    else {
        // If we can't use transform streams, wrap the original stream in a new readable stream
        // and use pull to enqueue each chunk and report progress.
        const reader = readableStream.getReader();
        return new ReadableStream({
            async pull(controller) {
                var _a;
                const { done, value } = await reader.read();
                // When no more data needs to be consumed, break the reading
                if (done || !value) {
                    // Close the stream
                    controller.close();
                    reader.releaseLock();
                    return;
                }
                loadedBytes += (_a = value === null || value === void 0 ? void 0 : value.length) !== null && _a !== void 0 ? _a : 0;
                // Enqueue the next data chunk into our target stream
                controller.enqueue(value);
                if (onProgress) {
                    onProgress({ loadedBytes });
                }
            },
        });
    }
}
/**
 * Create a new HttpClient instance for the browser environment.
 * @internal
 */
function createFetchHttpClient() {
    return new FetchHttpClient();
}
function isTransformStreamSupported(readableStream) {
    return readableStream.pipeThrough !== undefined && self.TransformStream !== undefined;
}
//# sourceMappingURL=fetchHttpClient.js.map

/***/ }),

/***/ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/httpHeaders.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@azure/core-rest-pipeline/dist-esm/src/httpHeaders.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHttpHeaders": () => (/* binding */ createHttpHeaders)
/* harmony export */ });
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
function normalizeName(name) {
    return name.toLowerCase();
}
function* headerIterator(map) {
    for (const entry of map.values()) {
        yield [entry.name, entry.value];
    }
}
class HttpHeadersImpl {
    constructor(rawHeaders) {
        this._headersMap = new Map();
        if (rawHeaders) {
            for (const headerName of Object.keys(rawHeaders)) {
                this.set(headerName, rawHeaders[headerName]);
            }
        }
    }
    /**
     * Set a header in this collection with the provided name and value. The name is
     * case-insensitive.
     * @param name - The name of the header to set. This value is case-insensitive.
     * @param value - The value of the header to set.
     */
    set(name, value) {
        this._headersMap.set(normalizeName(name), { name, value: String(value) });
    }
    /**
     * Get the header value for the provided header name, or undefined if no header exists in this
     * collection with the provided name.
     * @param name - The name of the header. This value is case-insensitive.
     */
    get(name) {
        var _a;
        return (_a = this._headersMap.get(normalizeName(name))) === null || _a === void 0 ? void 0 : _a.value;
    }
    /**
     * Get whether or not this header collection contains a header entry for the provided header name.
     * @param name - The name of the header to set. This value is case-insensitive.
     */
    has(name) {
        return this._headersMap.has(normalizeName(name));
    }
    /**
     * Remove the header with the provided headerName.
     * @param name - The name of the header to remove.
     */
    delete(name) {
        this._headersMap.delete(normalizeName(name));
    }
    /**
     * Get the JSON object representation of this HTTP header collection.
     */
    toJSON(options = {}) {
        const result = {};
        if (options.preserveCase) {
            for (const entry of this._headersMap.values()) {
                result[entry.name] = entry.value;
            }
        }
        else {
            for (const [normalizedName, entry] of this._headersMap) {
                result[normalizedName] = entry.value;
            }
        }
        return result;
    }
    /**
     * Get the string representation of this HTTP header collection.
     */
    toString() {
        return JSON.stringify(this.toJSON({ preserveCase: true }));
    }
    /**
     * Iterate over tuples of header [name, value] pairs.
     */
    [Symbol.iterator]() {
        return headerIterator(this._headersMap);
    }
}
/**
 * Creates an object that satisfies the `HttpHeaders` interface.
 * @param rawHeaders - A simple object representing initial headers
 */
function createHttpHeaders(rawHeaders) {
    return new HttpHeadersImpl(rawHeaders);
}
//# sourceMappingURL=httpHeaders.js.map

/***/ }),

/***/ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/log.js":
/*!********************************************************************!*\
  !*** ./node_modules/@azure/core-rest-pipeline/dist-esm/src/log.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "logger": () => (/* binding */ logger)
/* harmony export */ });
/* harmony import */ var _azure_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @azure/logger */ "./node_modules/@azure/logger/dist-esm/src/index.js");
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

const logger = (0,_azure_logger__WEBPACK_IMPORTED_MODULE_0__.createClientLogger)("core-rest-pipeline");
//# sourceMappingURL=log.js.map

/***/ }),

/***/ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/pipeline.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@azure/core-rest-pipeline/dist-esm/src/pipeline.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createEmptyPipeline": () => (/* binding */ createEmptyPipeline)
/* harmony export */ });
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
const ValidPhaseNames = new Set(["Deserialize", "Serialize", "Retry", "Sign"]);
/**
 * A private implementation of Pipeline.
 * Do not export this class from the package.
 * @internal
 */
class HttpPipeline {
    constructor(policies = []) {
        this._policies = [];
        this._policies = policies;
        this._orderedPolicies = undefined;
    }
    addPolicy(policy, options = {}) {
        if (options.phase && options.afterPhase) {
            throw new Error("Policies inside a phase cannot specify afterPhase.");
        }
        if (options.phase && !ValidPhaseNames.has(options.phase)) {
            throw new Error(`Invalid phase name: ${options.phase}`);
        }
        if (options.afterPhase && !ValidPhaseNames.has(options.afterPhase)) {
            throw new Error(`Invalid afterPhase name: ${options.afterPhase}`);
        }
        this._policies.push({
            policy,
            options,
        });
        this._orderedPolicies = undefined;
    }
    removePolicy(options) {
        const removedPolicies = [];
        this._policies = this._policies.filter((policyDescriptor) => {
            if ((options.name && policyDescriptor.policy.name === options.name) ||
                (options.phase && policyDescriptor.options.phase === options.phase)) {
                removedPolicies.push(policyDescriptor.policy);
                return false;
            }
            else {
                return true;
            }
        });
        this._orderedPolicies = undefined;
        return removedPolicies;
    }
    sendRequest(httpClient, request) {
        const policies = this.getOrderedPolicies();
        const pipeline = policies.reduceRight((next, policy) => {
            return (req) => {
                return policy.sendRequest(req, next);
            };
        }, (req) => httpClient.sendRequest(req));
        return pipeline(request);
    }
    getOrderedPolicies() {
        if (!this._orderedPolicies) {
            this._orderedPolicies = this.orderPolicies();
        }
        return this._orderedPolicies;
    }
    clone() {
        return new HttpPipeline(this._policies);
    }
    static create() {
        return new HttpPipeline();
    }
    orderPolicies() {
        /**
         * The goal of this method is to reliably order pipeline policies
         * based on their declared requirements when they were added.
         *
         * Order is first determined by phase:
         *
         * 1. Serialize Phase
         * 2. Policies not in a phase
         * 3. Deserialize Phase
         * 4. Retry Phase
         * 5. Sign Phase
         *
         * Within each phase, policies are executed in the order
         * they were added unless they were specified to execute
         * before/after other policies or after a particular phase.
         *
         * To determine the final order, we will walk the policy list
         * in phase order multiple times until all dependencies are
         * satisfied.
         *
         * `afterPolicies` are the set of policies that must be
         * executed before a given policy. This requirement is
         * considered satisfied when each of the listed policies
         * have been scheduled.
         *
         * `beforePolicies` are the set of policies that must be
         * executed after a given policy. Since this dependency
         * can be expressed by converting it into a equivalent
         * `afterPolicies` declarations, they are normalized
         * into that form for simplicity.
         *
         * An `afterPhase` dependency is considered satisfied when all
         * policies in that phase have scheduled.
         *
         */
        const result = [];
        // Track all policies we know about.
        const policyMap = new Map();
        function createPhase(name) {
            return {
                name,
                policies: new Set(),
                hasRun: false,
            };
        }
        // Track policies for each phase.
        const serializePhase = createPhase("Serialize");
        const noPhase = createPhase("None");
        const deserializePhase = createPhase("Deserialize");
        const retryPhase = createPhase("Retry");
        const signPhase = createPhase("Sign");
        // a list of phases in order
        const orderedPhases = [serializePhase, noPhase, deserializePhase, retryPhase, signPhase];
        // Small helper function to map phase name to each Phase
        function getPhase(phase) {
            if (phase === "Retry") {
                return retryPhase;
            }
            else if (phase === "Serialize") {
                return serializePhase;
            }
            else if (phase === "Deserialize") {
                return deserializePhase;
            }
            else if (phase === "Sign") {
                return signPhase;
            }
            else {
                return noPhase;
            }
        }
        // First walk each policy and create a node to track metadata.
        for (const descriptor of this._policies) {
            const policy = descriptor.policy;
            const options = descriptor.options;
            const policyName = policy.name;
            if (policyMap.has(policyName)) {
                throw new Error("Duplicate policy names not allowed in pipeline");
            }
            const node = {
                policy,
                dependsOn: new Set(),
                dependants: new Set(),
            };
            if (options.afterPhase) {
                node.afterPhase = getPhase(options.afterPhase);
            }
            policyMap.set(policyName, node);
            const phase = getPhase(options.phase);
            phase.policies.add(node);
        }
        // Now that each policy has a node, connect dependency references.
        for (const descriptor of this._policies) {
            const { policy, options } = descriptor;
            const policyName = policy.name;
            const node = policyMap.get(policyName);
            if (!node) {
                throw new Error(`Missing node for policy ${policyName}`);
            }
            if (options.afterPolicies) {
                for (const afterPolicyName of options.afterPolicies) {
                    const afterNode = policyMap.get(afterPolicyName);
                    if (afterNode) {
                        // Linking in both directions helps later
                        // when we want to notify dependants.
                        node.dependsOn.add(afterNode);
                        afterNode.dependants.add(node);
                    }
                }
            }
            if (options.beforePolicies) {
                for (const beforePolicyName of options.beforePolicies) {
                    const beforeNode = policyMap.get(beforePolicyName);
                    if (beforeNode) {
                        // To execute before another node, make it
                        // depend on the current node.
                        beforeNode.dependsOn.add(node);
                        node.dependants.add(beforeNode);
                    }
                }
            }
        }
        function walkPhase(phase) {
            phase.hasRun = true;
            // Sets iterate in insertion order
            for (const node of phase.policies) {
                if (node.afterPhase && (!node.afterPhase.hasRun || node.afterPhase.policies.size)) {
                    // If this node is waiting on a phase to complete,
                    // we need to skip it for now.
                    // Even if the phase is empty, we should wait for it
                    // to be walked to avoid re-ordering policies.
                    continue;
                }
                if (node.dependsOn.size === 0) {
                    // If there's nothing else we're waiting for, we can
                    // add this policy to the result list.
                    result.push(node.policy);
                    // Notify anything that depends on this policy that
                    // the policy has been scheduled.
                    for (const dependant of node.dependants) {
                        dependant.dependsOn.delete(node);
                    }
                    policyMap.delete(node.policy.name);
                    phase.policies.delete(node);
                }
            }
        }
        function walkPhases() {
            for (const phase of orderedPhases) {
                walkPhase(phase);
                // if the phase isn't complete
                if (phase.policies.size > 0 && phase !== noPhase) {
                    if (!noPhase.hasRun) {
                        // Try running noPhase to see if that unblocks this phase next tick.
                        // This can happen if a phase that happens before noPhase
                        // is waiting on a noPhase policy to complete.
                        walkPhase(noPhase);
                    }
                    // Don't proceed to the next phase until this phase finishes.
                    return;
                }
            }
        }
        // Iterate until we've put every node in the result list.
        let iteration = 0;
        while (policyMap.size > 0) {
            iteration++;
            const initialResultLength = result.length;
            // Keep walking each phase in order until we can order every node.
            walkPhases();
            // The result list *should* get at least one larger each time
            // after the first full pass.
            // Otherwise, we're going to loop forever.
            if (result.length <= initialResultLength && iteration > 1) {
                throw new Error("Cannot satisfy policy dependencies due to requirements cycle.");
            }
        }
        return result;
    }
}
/**
 * Creates a totally empty pipeline.
 * Useful for testing or creating a custom one.
 */
function createEmptyPipeline() {
    return HttpPipeline.create();
}
//# sourceMappingURL=pipeline.js.map

/***/ }),

/***/ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/pipelineRequest.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@azure/core-rest-pipeline/dist-esm/src/pipelineRequest.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPipelineRequest": () => (/* binding */ createPipelineRequest)
/* harmony export */ });
/* harmony import */ var _httpHeaders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./httpHeaders */ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/httpHeaders.js");
/* harmony import */ var _util_uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/uuid */ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/util/uuid.js");
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.


class PipelineRequestImpl {
    constructor(options) {
        var _a, _b, _c, _d, _e, _f, _g;
        this.url = options.url;
        this.body = options.body;
        this.headers = (_a = options.headers) !== null && _a !== void 0 ? _a : (0,_httpHeaders__WEBPACK_IMPORTED_MODULE_0__.createHttpHeaders)();
        this.method = (_b = options.method) !== null && _b !== void 0 ? _b : "GET";
        this.timeout = (_c = options.timeout) !== null && _c !== void 0 ? _c : 0;
        this.formData = options.formData;
        this.disableKeepAlive = (_d = options.disableKeepAlive) !== null && _d !== void 0 ? _d : false;
        this.proxySettings = options.proxySettings;
        this.streamResponseStatusCodes = options.streamResponseStatusCodes;
        this.withCredentials = (_e = options.withCredentials) !== null && _e !== void 0 ? _e : false;
        this.abortSignal = options.abortSignal;
        this.tracingOptions = options.tracingOptions;
        this.onUploadProgress = options.onUploadProgress;
        this.onDownloadProgress = options.onDownloadProgress;
        this.requestId = options.requestId || (0,_util_uuid__WEBPACK_IMPORTED_MODULE_1__.generateUuid)();
        this.allowInsecureConnection = (_f = options.allowInsecureConnection) !== null && _f !== void 0 ? _f : false;
        this.enableBrowserStreams = (_g = options.enableBrowserStreams) !== null && _g !== void 0 ? _g : false;
    }
}
/**
 * Creates a new pipeline request with the given options.
 * This method is to allow for the easy setting of default values and not required.
 * @param options - The options to create the request with.
 */
function createPipelineRequest(options) {
    return new PipelineRequestImpl(options);
}
//# sourceMappingURL=pipelineRequest.js.map

/***/ }),

/***/ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/policies/bearerTokenAuthenticationPolicy.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@azure/core-rest-pipeline/dist-esm/src/policies/bearerTokenAuthenticationPolicy.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bearerTokenAuthenticationPolicy": () => (/* binding */ bearerTokenAuthenticationPolicy),
/* harmony export */   "bearerTokenAuthenticationPolicyName": () => (/* binding */ bearerTokenAuthenticationPolicyName)
/* harmony export */ });
/* harmony import */ var _util_tokenCycler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/tokenCycler */ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/util/tokenCycler.js");
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/**
 * The programmatic identifier of the bearerTokenAuthenticationPolicy.
 */
const bearerTokenAuthenticationPolicyName = "bearerTokenAuthenticationPolicy";
/**
 * Default authorize request handler
 */
async function defaultAuthorizeRequest(options) {
    const { scopes, getAccessToken, request } = options;
    const getTokenOptions = {
        abortSignal: request.abortSignal,
        tracingOptions: request.tracingOptions,
    };
    const accessToken = await getAccessToken(scopes, getTokenOptions);
    if (accessToken) {
        options.request.headers.set("Authorization", `Bearer ${accessToken.token}`);
    }
}
/**
 * We will retrieve the challenge only if the response status code was 401,
 * and if the response contained the header "WWW-Authenticate" with a non-empty value.
 */
function getChallenge(response) {
    const challenge = response.headers.get("WWW-Authenticate");
    if (response.status === 401 && challenge) {
        return challenge;
    }
    return;
}
/**
 * A policy that can request a token from a TokenCredential implementation and
 * then apply it to the Authorization header of a request as a Bearer token.
 */
function bearerTokenAuthenticationPolicy(options) {
    var _a;
    const { credential, scopes, challengeCallbacks, logger } = options;
    const callbacks = Object.assign({ authorizeRequest: (_a = challengeCallbacks === null || challengeCallbacks === void 0 ? void 0 : challengeCallbacks.authorizeRequest) !== null && _a !== void 0 ? _a : defaultAuthorizeRequest, authorizeRequestOnChallenge: challengeCallbacks === null || challengeCallbacks === void 0 ? void 0 : challengeCallbacks.authorizeRequestOnChallenge }, challengeCallbacks);
    // This function encapsulates the entire process of reliably retrieving the token
    // The options are left out of the public API until there's demand to configure this.
    // Remember to extend `BearerTokenAuthenticationPolicyOptions` with `TokenCyclerOptions`
    // in order to pass through the `options` object.
    const getAccessToken = credential
        ? (0,_util_tokenCycler__WEBPACK_IMPORTED_MODULE_0__.createTokenCycler)(credential /* , options */)
        : () => Promise.resolve(null);
    return {
        name: bearerTokenAuthenticationPolicyName,
        /**
         * If there's no challenge parameter:
         * - It will try to retrieve the token using the cache, or the credential's getToken.
         * - Then it will try the next policy with or without the retrieved token.
         *
         * It uses the challenge parameters to:
         * - Skip a first attempt to get the token from the credential if there's no cached token,
         *   since it expects the token to be retrievable only after the challenge.
         * - Prepare the outgoing request if the `prepareRequest` method has been provided.
         * - Send an initial request to receive the challenge if it fails.
         * - Process a challenge if the response contains it.
         * - Retrieve a token with the challenge information, then re-send the request.
         */
        async sendRequest(request, next) {
            if (!request.url.toLowerCase().startsWith("https://")) {
                throw new Error("Bearer token authentication is not permitted for non-TLS protected (non-https) URLs.");
            }
            await callbacks.authorizeRequest({
                scopes: Array.isArray(scopes) ? scopes : [scopes],
                request,
                getAccessToken,
                logger,
            });
            let response;
            let error;
            try {
                response = await next(request);
            }
            catch (err) {
                error = err;
                response = err.response;
            }
            if (callbacks.authorizeRequestOnChallenge &&
                (response === null || response === void 0 ? void 0 : response.status) === 401 &&
                getChallenge(response)) {
                // processes challenge
                const shouldSendRequest = await callbacks.authorizeRequestOnChallenge({
                    scopes: Array.isArray(scopes) ? scopes : [scopes],
                    request,
                    response,
                    getAccessToken,
                    logger,
                });
                if (shouldSendRequest) {
                    return next(request);
                }
            }
            if (error) {
                throw error;
            }
            else {
                return response;
            }
        },
    };
}
//# sourceMappingURL=bearerTokenAuthenticationPolicy.js.map

/***/ }),

/***/ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/policies/decompressResponsePolicy.browser.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@azure/core-rest-pipeline/dist-esm/src/policies/decompressResponsePolicy.browser.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decompressResponsePolicy": () => (/* binding */ decompressResponsePolicy),
/* harmony export */   "decompressResponsePolicyName": () => (/* binding */ decompressResponsePolicyName)
/* harmony export */ });
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
/*
 * NOTE: When moving this file, please update "browser" section in package.json
 */
const NotSupported = new Error("decompressResponsePolicy is not supported in browser environment");
const decompressResponsePolicyName = "decompressResponsePolicy";
/**
 * decompressResponsePolicy is not supported in the browser and attempting
 * to use it will raise an error.
 */
function decompressResponsePolicy() {
    throw NotSupported;
}
//# sourceMappingURL=decompressResponsePolicy.browser.js.map

/***/ }),

/***/ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/policies/defaultRetryPolicy.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@azure/core-rest-pipeline/dist-esm/src/policies/defaultRetryPolicy.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultRetryPolicy": () => (/* binding */ defaultRetryPolicy),
/* harmony export */   "defaultRetryPolicyName": () => (/* binding */ defaultRetryPolicyName)
/* harmony export */ });
/* harmony import */ var _retryStrategies_exponentialRetryStrategy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../retryStrategies/exponentialRetryStrategy */ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/retryStrategies/exponentialRetryStrategy.js");
/* harmony import */ var _retryStrategies_throttlingRetryStrategy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../retryStrategies/throttlingRetryStrategy */ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/retryStrategies/throttlingRetryStrategy.js");
/* harmony import */ var _retryPolicy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./retryPolicy */ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/policies/retryPolicy.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/constants.js");
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.




/**
 * Name of the {@link defaultRetryPolicy}
 */
const defaultRetryPolicyName = "defaultRetryPolicy";
/**
 * A policy that retries according to three strategies:
 * - When the server sends a 429 response with a Retry-After header.
 * - When there are errors in the underlying transport layer (e.g. DNS lookup failures).
 * - Or otherwise if the outgoing request fails, it will retry with an exponentially increasing delay.
 */
function defaultRetryPolicy(options = {}) {
    var _a;
    return {
        name: defaultRetryPolicyName,
        sendRequest: (0,_retryPolicy__WEBPACK_IMPORTED_MODULE_0__.retryPolicy)([(0,_retryStrategies_throttlingRetryStrategy__WEBPACK_IMPORTED_MODULE_1__.throttlingRetryStrategy)(), (0,_retryStrategies_exponentialRetryStrategy__WEBPACK_IMPORTED_MODULE_2__.exponentialRetryStrategy)(options)], {
            maxRetries: (_a = options.maxRetries) !== null && _a !== void 0 ? _a : _constants__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_RETRY_POLICY_COUNT,
        }).sendRequest,
    };
}
//# sourceMappingURL=defaultRetryPolicy.js.map

/***/ }),

/***/ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/policies/formDataPolicy.browser.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@azure/core-rest-pipeline/dist-esm/src/policies/formDataPolicy.browser.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formDataPolicy": () => (/* binding */ formDataPolicy),
/* harmony export */   "formDataPolicyName": () => (/* binding */ formDataPolicyName)
/* harmony export */ });
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
/**
 * The programmatic identifier of the formDataPolicy.
 */
const formDataPolicyName = "formDataPolicy";
/**
 * A policy that encodes FormData on the request into the body.
 */
function formDataPolicy() {
    return {
        name: formDataPolicyName,
        async sendRequest(request, next) {
            if (request.formData) {
                const formData = request.formData;
                const requestForm = new FormData();
                for (const formKey of Object.keys(formData)) {
                    const formValue = formData[formKey];
                    if (Array.isArray(formValue)) {
                        for (const subValue of formValue) {
                            requestForm.append(formKey, subValue);
                        }
                    }
                    else {
                        requestForm.append(formKey, formValue);
                    }
                }
                request.body = requestForm;
                request.formData = undefined;
                const contentType = request.headers.get("Content-Type");
                if (contentType && contentType.indexOf("application/x-www-form-urlencoded") !== -1) {
                    request.body = new URLSearchParams(requestForm).toString();
                }
                else if (contentType && contentType.indexOf("multipart/form-data") !== -1) {
                    // browser will automatically apply a suitable content-type header
                    request.headers.delete("Content-Type");
                }
            }
            return next(request);
        },
    };
}
//# sourceMappingURL=formDataPolicy.browser.js.map

/***/ }),

/***/ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/policies/logPolicy.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@azure/core-rest-pipeline/dist-esm/src/policies/logPolicy.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "logPolicy": () => (/* binding */ logPolicy),
/* harmony export */   "logPolicyName": () => (/* binding */ logPolicyName)
/* harmony export */ });
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../log */ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/log.js");
/* harmony import */ var _util_sanitizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/sanitizer */ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/util/sanitizer.js");
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.


/**
 * The programmatic identifier of the logPolicy.
 */
const logPolicyName = "logPolicy";
/**
 * A policy that logs all requests and responses.
 * @param options - Options to configure logPolicy.
 */
function logPolicy(options = {}) {
    var _a;
    const logger = (_a = options.logger) !== null && _a !== void 0 ? _a : _log__WEBPACK_IMPORTED_MODULE_0__.logger.info;
    const sanitizer = new _util_sanitizer__WEBPACK_IMPORTED_MODULE_1__.Sanitizer({
        additionalAllowedHeaderNames: options.additionalAllowedHeaderNames,
        additionalAllowedQueryParameters: options.additionalAllowedQueryParameters,
    });
    return {
        name: logPolicyName,
        async sendRequest(request, next) {
            if (!logger.enabled) {
                return next(request);
            }
            logger(`Request: ${sanitizer.sanitize(request)}`);
            const response = await next(request);
            logger(`Response status code: ${response.status}`);
            logger(`Headers: ${sanitizer.sanitize(response.headers)}`);
            return response;
        },
    };
}
//# sourceMappingURL=logPolicy.js.map

/***/ }),

/***/ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/policies/proxyPolicy.browser.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@azure/core-rest-pipeline/dist-esm/src/policies/proxyPolicy.browser.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultProxySettings": () => (/* binding */ getDefaultProxySettings),
/* harmony export */   "proxyPolicy": () => (/* binding */ proxyPolicy),
/* harmony export */   "proxyPolicyName": () => (/* binding */ proxyPolicyName)
/* harmony export */ });
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
/*
 * NOTE: When moving this file, please update "browser" section in package.json
 */
const NotSupported = new Error("proxyPolicy is not supported in browser environment");
const proxyPolicyName = "proxyPolicy";
function getDefaultProxySettings() {
    throw NotSupported;
}
/**
 * proxyPolicy is not supported in the browser and attempting
 * to use it will raise an error.
 */
function proxyPolicy() {
    throw NotSupported;
}
//# sourceMappingURL=proxyPolicy.browser.js.map

/***/ }),

/***/ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/policies/redirectPolicy.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@azure/core-rest-pipeline/dist-esm/src/policies/redirectPolicy.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "redirectPolicy": () => (/* binding */ redirectPolicy),
/* harmony export */   "redirectPolicyName": () => (/* binding */ redirectPolicyName)
/* harmony export */ });
/* harmony import */ var _util_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/url */ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/util/url.browser.js");
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/**
 * The programmatic identifier of the redirectPolicy.
 */
const redirectPolicyName = "redirectPolicy";
/**
 * Methods that are allowed to follow redirects 301 and 302
 */
const allowedRedirect = ["GET", "HEAD"];
/**
 * A policy to follow Location headers from the server in order
 * to support server-side redirection.
 * In the browser, this policy is not used.
 * @param options - Options to control policy behavior.
 */
function redirectPolicy(options = {}) {
    const { maxRetries = 20 } = options;
    return {
        name: redirectPolicyName,
        async sendRequest(request, next) {
            const response = await next(request);
            return handleRedirect(next, response, maxRetries);
        },
    };
}
async function handleRedirect(next, response, maxRetries, currentRetries = 0) {
    const { request, status, headers } = response;
    const locationHeader = headers.get("location");
    if (locationHeader &&
        (status === 300 ||
            (status === 301 && allowedRedirect.includes(request.method)) ||
            (status === 302 && allowedRedirect.includes(request.method)) ||
            (status === 303 && request.method === "POST") ||
            status === 307) &&
        currentRetries < maxRetries) {
        const url = new _util_url__WEBPACK_IMPORTED_MODULE_0__.URL(locationHeader, request.url);
        request.url = url.toString();
        // POST request with Status code 303 should be converted into a
        // redirected GET request if the redirect url is present in the location header
        if (status === 303) {
            request.method = "GET";
            request.headers.delete("Content-Length");
            delete request.body;
        }
        request.headers.delete("Authorization");
        const res = await next(request);
        return handleRedirect(next, res, maxRetries, currentRetries + 1);
    }
    return response;
}
//# sourceMappingURL=redirectPolicy.js.map

/***/ }),

/***/ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/policies/retryPolicy.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@azure/core-rest-pipeline/dist-esm/src/policies/retryPolicy.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "retryPolicy": () => (/* binding */ retryPolicy)
/* harmony export */ });
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/helpers */ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/util/helpers.js");
/* harmony import */ var _azure_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @azure/logger */ "./node_modules/@azure/logger/dist-esm/src/index.js");
/* harmony import */ var _azure_abort_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @azure/abort-controller */ "./node_modules/@azure/abort-controller/dist-esm/src/AbortController.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/constants.js");
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.




const retryPolicyLogger = (0,_azure_logger__WEBPACK_IMPORTED_MODULE_0__.createClientLogger)("core-rest-pipeline retryPolicy");
/**
 * The programmatic identifier of the retryPolicy.
 */
const retryPolicyName = "retryPolicy";
/**
 * retryPolicy is a generic policy to enable retrying requests when certain conditions are met
 */
function retryPolicy(strategies, options = { maxRetries: _constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_RETRY_POLICY_COUNT }) {
    const logger = options.logger || retryPolicyLogger;
    return {
        name: retryPolicyName,
        async sendRequest(request, next) {
            var _a, _b;
            let response;
            let responseError;
            let retryCount = -1;
            // eslint-disable-next-line no-constant-condition
            retryRequest: while (true) {
                retryCount += 1;
                response = undefined;
                responseError = undefined;
                try {
                    logger.info(`Retry ${retryCount}: Attempting to send request`, request.requestId);
                    response = await next(request);
                    logger.info(`Retry ${retryCount}: Received a response from request`, request.requestId);
                }
                catch (e) {
                    logger.error(`Retry ${retryCount}: Received an error from request`, request.requestId);
                    // RestErrors are valid targets for the retry strategies.
                    // If none of the retry strategies can work with them, they will be thrown later in this policy.
                    // If the received error is not a RestError, it is immediately thrown.
                    responseError = e;
                    if (!e || responseError.name !== "RestError") {
                        throw e;
                    }
                    response = responseError.response;
                }
                if ((_a = request.abortSignal) === null || _a === void 0 ? void 0 : _a.aborted) {
                    logger.error(`Retry ${retryCount}: Request aborted.`);
                    const abortError = new _azure_abort_controller__WEBPACK_IMPORTED_MODULE_2__.AbortError();
                    throw abortError;
                }
                if (retryCount >= ((_b = options.maxRetries) !== null && _b !== void 0 ? _b : _constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_RETRY_POLICY_COUNT)) {
                    logger.info(`Retry ${retryCount}: Maximum retries reached. Returning the last received response, or throwing the last received error.`);
                    if (responseError) {
                        throw responseError;
                    }
                    else if (response) {
                        return response;
                    }
                    else {
                        throw new Error("Maximum retries reached with no response or error to throw");
                    }
                }
                logger.info(`Retry ${retryCount}: Processing ${strategies.length} retry strategies.`);
                strategiesLoop: for (const strategy of strategies) {
                    const strategyLogger = strategy.logger || retryPolicyLogger;
                    strategyLogger.info(`Retry ${retryCount}: Processing retry strategy ${strategy.name}.`);
                    const modifiers = strategy.retry({
                        retryCount,
                        response,
                        responseError,
                    });
                    if (modifiers.skipStrategy) {
                        strategyLogger.info(`Retry ${retryCount}: Skipped.`);
                        continue strategiesLoop;
                    }
                    const { errorToThrow, retryAfterInMs, redirectTo } = modifiers;
                    if (errorToThrow) {
                        strategyLogger.error(`Retry ${retryCount}: Retry strategy ${strategy.name} throws error:`, errorToThrow);
                        throw errorToThrow;
                    }
                    if (retryAfterInMs || retryAfterInMs === 0) {
                        strategyLogger.info(`Retry ${retryCount}: Retry strategy ${strategy.name} retries after ${retryAfterInMs}`);
                        await (0,_util_helpers__WEBPACK_IMPORTED_MODULE_3__.delay)(retryAfterInMs, undefined, { abortSignal: request.abortSignal });
                        continue retryRequest;
                    }
                    if (redirectTo) {
                        strategyLogger.info(`Retry ${retryCount}: Retry strategy ${strategy.name} redirects to ${redirectTo}`);
                        request.url = redirectTo;
                        continue retryRequest;
                    }
                }
                if (responseError) {
                    logger.info(`None of the retry strategies could work with the received error. Throwing it.`);
                    throw responseError;
                }
                if (response) {
                    logger.info(`None of the retry strategies could work with the received response. Returning it.`);
                    return response;
                }
                // If all the retries skip and there's no response,
                // we're still in the retry loop, so a new request will be sent
                // until `maxRetries` is reached.
            }
        },
    };
}
//# sourceMappingURL=retryPolicy.js.map

/***/ }),

/***/ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/policies/setClientRequestIdPolicy.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@azure/core-rest-pipeline/dist-esm/src/policies/setClientRequestIdPolicy.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setClientRequestIdPolicy": () => (/* binding */ setClientRequestIdPolicy),
/* harmony export */   "setClientRequestIdPolicyName": () => (/* binding */ setClientRequestIdPolicyName)
/* harmony export */ });
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
/**
 * The programmatic identifier of the setClientRequestIdPolicy.
 */
const setClientRequestIdPolicyName = "setClientRequestIdPolicy";
/**
 * Each PipelineRequest gets a unique id upon creation.
 * This policy passes that unique id along via an HTTP header to enable better
 * telemetry and tracing.
 * @param requestIdHeaderName - The name of the header to pass the request ID to.
 */
function setClientRequestIdPolicy(requestIdHeaderName = "x-ms-client-request-id") {
    return {
        name: setClientRequestIdPolicyName,
        async sendRequest(request, next) {
            if (!request.headers.has(requestIdHeaderName)) {
                request.headers.set(requestIdHeaderName, request.requestId);
            }
            return next(request);
        },
    };
}
//# sourceMappingURL=setClientRequestIdPolicy.js.map

/***/ }),

/***/ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/policies/tracingPolicy.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@azure/core-rest-pipeline/dist-esm/src/policies/tracingPolicy.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tracingPolicy": () => (/* binding */ tracingPolicy),
/* harmony export */   "tracingPolicyName": () => (/* binding */ tracingPolicyName)
/* harmony export */ });
/* harmony import */ var _azure_core_tracing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @azure/core-tracing */ "./node_modules/@azure/core-tracing/dist-esm/src/createSpan.js");
/* harmony import */ var _azure_core_tracing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @azure/core-tracing */ "./node_modules/@azure/core-tracing/dist-esm/src/utils/traceParentHeader.js");
/* harmony import */ var _azure_core_tracing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @azure/core-tracing */ "./node_modules/@azure/core-tracing/dist-esm/src/interfaces.js");
/* harmony import */ var _util_userAgent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/userAgent */ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/util/userAgent.js");
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../log */ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/log.js");
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.




const createSpan = (0,_azure_core_tracing__WEBPACK_IMPORTED_MODULE_0__.createSpanFunction)({
    packagePrefix: "",
    namespace: "",
});
/**
 * The programmatic identifier of the tracingPolicy.
 */
const tracingPolicyName = "tracingPolicy";
/**
 * A simple policy to create OpenTelemetry Spans for each request made by the pipeline
 * that has SpanOptions with a parent.
 * Requests made without a parent Span will not be recorded.
 * @param options - Options to configure the telemetry logged by the tracing policy.
 */
function tracingPolicy(options = {}) {
    const userAgent = (0,_util_userAgent__WEBPACK_IMPORTED_MODULE_1__.getUserAgentValue)(options.userAgentPrefix);
    return {
        name: tracingPolicyName,
        async sendRequest(request, next) {
            var _a;
            if (!((_a = request.tracingOptions) === null || _a === void 0 ? void 0 : _a.tracingContext)) {
                return next(request);
            }
            const span = tryCreateSpan(request, userAgent);
            if (!span) {
                return next(request);
            }
            try {
                const response = await next(request);
                tryProcessResponse(span, response);
                return response;
            }
            catch (err) {
                tryProcessError(span, err);
                throw err;
            }
        },
    };
}
function tryCreateSpan(request, userAgent) {
    var _a, _b, _c;
    try {
        const createSpanOptions = Object.assign(Object.assign({}, (_a = request.tracingOptions) === null || _a === void 0 ? void 0 : _a.spanOptions), { kind: _azure_core_tracing__WEBPACK_IMPORTED_MODULE_2__.SpanKind.CLIENT });
        // Passing spanOptions as part of tracingOptions to maintain compatibility @azure/core-tracing@preview.13 and earlier.
        // We can pass this as a separate parameter once we upgrade to the latest core-tracing.
        // As per spec, we do not need to differentiate between HTTP and HTTPS in span name.
        const { span } = createSpan(`HTTP ${request.method}`, {
            tracingOptions: Object.assign(Object.assign({}, request.tracingOptions), { spanOptions: createSpanOptions }),
        });
        // If the span is not recording, don't do any more work.
        if (!span.isRecording()) {
            span.end();
            return undefined;
        }
        const namespaceFromContext = (_c = (_b = request.tracingOptions) === null || _b === void 0 ? void 0 : _b.tracingContext) === null || _c === void 0 ? void 0 : _c.getValue(Symbol.for("az.namespace"));
        if (typeof namespaceFromContext === "string") {
            span.setAttribute("az.namespace", namespaceFromContext);
        }
        span.setAttributes({
            "http.method": request.method,
            "http.url": request.url,
            requestId: request.requestId,
        });
        if (userAgent) {
            span.setAttribute("http.user_agent", userAgent);
        }
        // set headers
        const spanContext = span.spanContext();
        const traceParentHeader = (0,_azure_core_tracing__WEBPACK_IMPORTED_MODULE_3__.getTraceParentHeader)(spanContext);
        if (traceParentHeader && (0,_azure_core_tracing__WEBPACK_IMPORTED_MODULE_2__.isSpanContextValid)(spanContext)) {
            request.headers.set("traceparent", traceParentHeader);
            const traceState = spanContext.traceState && spanContext.traceState.serialize();
            // if tracestate is set, traceparent MUST be set, so only set tracestate after traceparent
            if (traceState) {
                request.headers.set("tracestate", traceState);
            }
        }
        return span;
    }
    catch (error) {
        _log__WEBPACK_IMPORTED_MODULE_4__.logger.warning(`Skipping creating a tracing span due to an error: ${error.message}`);
        return undefined;
    }
}
function tryProcessError(span, err) {
    try {
        span.setStatus({
            code: _azure_core_tracing__WEBPACK_IMPORTED_MODULE_2__.SpanStatusCode.ERROR,
            message: err.message,
        });
        if (err.statusCode) {
            span.setAttribute("http.status_code", err.statusCode);
        }
        span.end();
    }
    catch (error) {
        _log__WEBPACK_IMPORTED_MODULE_4__.logger.warning(`Skipping tracing span processing due to an error: ${error.message}`);
    }
}
function tryProcessResponse(span, response) {
    try {
        span.setAttribute("http.status_code", response.status);
        const serviceRequestId = response.headers.get("x-ms-request-id");
        if (serviceRequestId) {
            span.setAttribute("serviceRequestId", serviceRequestId);
        }
        span.setStatus({
            code: _azure_core_tracing__WEBPACK_IMPORTED_MODULE_2__.SpanStatusCode.OK,
        });
        span.end();
    }
    catch (error) {
        _log__WEBPACK_IMPORTED_MODULE_4__.logger.warning(`Skipping tracing span processing due to an error: ${error.message}`);
    }
}
//# sourceMappingURL=tracingPolicy.js.map

/***/ }),

/***/ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/policies/userAgentPolicy.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@azure/core-rest-pipeline/dist-esm/src/policies/userAgentPolicy.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "userAgentPolicy": () => (/* binding */ userAgentPolicy),
/* harmony export */   "userAgentPolicyName": () => (/* binding */ userAgentPolicyName)
/* harmony export */ });
/* harmony import */ var _util_userAgent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/userAgent */ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/util/userAgent.js");
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

const UserAgentHeaderName = (0,_util_userAgent__WEBPACK_IMPORTED_MODULE_0__.getUserAgentHeaderName)();
/**
 * The programmatic identifier of the userAgentPolicy.
 */
const userAgentPolicyName = "userAgentPolicy";
/**
 * A policy that sets the User-Agent header (or equivalent) to reflect
 * the library version.
 * @param options - Options to customize the user agent value.
 */
function userAgentPolicy(options = {}) {
    const userAgentValue = (0,_util_userAgent__WEBPACK_IMPORTED_MODULE_0__.getUserAgentValue)(options.userAgentPrefix);
    return {
        name: userAgentPolicyName,
        async sendRequest(request, next) {
            if (!request.headers.has(UserAgentHeaderName)) {
                request.headers.set(UserAgentHeaderName, userAgentValue);
            }
            return next(request);
        },
    };
}
//# sourceMappingURL=userAgentPolicy.js.map

/***/ }),

/***/ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/restError.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@azure/core-rest-pipeline/dist-esm/src/restError.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestError": () => (/* binding */ RestError)
/* harmony export */ });
/* harmony import */ var _util_inspect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/inspect */ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/util/inspect.browser.js");
/* harmony import */ var _util_sanitizer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/sanitizer */ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/util/sanitizer.js");
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.


const errorSanitizer = new _util_sanitizer__WEBPACK_IMPORTED_MODULE_0__.Sanitizer();
/**
 * A custom error type for failed pipeline requests.
 */
class RestError extends Error {
    constructor(message, options = {}) {
        super(message);
        this.name = "RestError";
        this.code = options.code;
        this.statusCode = options.statusCode;
        this.request = options.request;
        this.response = options.response;
        Object.setPrototypeOf(this, RestError.prototype);
    }
    /**
     * Logging method for util.inspect in Node
     */
    [_util_inspect__WEBPACK_IMPORTED_MODULE_1__.custom]() {
        return `RestError: ${this.message} \n ${errorSanitizer.sanitize(this)}`;
    }
}
/**
 * Something went wrong when making the request.
 * This means the actual request failed for some reason,
 * such as a DNS issue or the connection being lost.
 */
RestError.REQUEST_SEND_ERROR = "REQUEST_SEND_ERROR";
/**
 * This means that parsing the response from the server failed.
 * It may have been malformed.
 */
RestError.PARSE_ERROR = "PARSE_ERROR";
//# sourceMappingURL=restError.js.map

/***/ }),

/***/ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/retryStrategies/exponentialRetryStrategy.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@azure/core-rest-pipeline/dist-esm/src/retryStrategies/exponentialRetryStrategy.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "exponentialRetryStrategy": () => (/* binding */ exponentialRetryStrategy),
/* harmony export */   "isExponentialRetryResponse": () => (/* binding */ isExponentialRetryResponse),
/* harmony export */   "isSystemError": () => (/* binding */ isSystemError)
/* harmony export */ });
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/helpers */ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/util/helpers.js");
/* harmony import */ var _throttlingRetryStrategy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./throttlingRetryStrategy */ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/retryStrategies/throttlingRetryStrategy.js");
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.


// intervals are in milliseconds
const DEFAULT_CLIENT_RETRY_INTERVAL = 1000;
const DEFAULT_CLIENT_MAX_RETRY_INTERVAL = 1000 * 64;
/**
 * A retry strategy that retries with an exponentially increasing delay in these two cases:
 * - When there are errors in the underlying transport layer (e.g. DNS lookup failures).
 * - Or otherwise if the outgoing request fails (408, greater or equal than 500, except for 501 and 505).
 */
function exponentialRetryStrategy(options = {}) {
    var _a, _b;
    const retryInterval = (_a = options.retryDelayInMs) !== null && _a !== void 0 ? _a : DEFAULT_CLIENT_RETRY_INTERVAL;
    const maxRetryInterval = (_b = options.maxRetryDelayInMs) !== null && _b !== void 0 ? _b : DEFAULT_CLIENT_MAX_RETRY_INTERVAL;
    let retryAfterInMs = retryInterval;
    return {
        name: "exponentialRetryStrategy",
        retry({ retryCount, response, responseError }) {
            const matchedSystemError = isSystemError(responseError);
            const ignoreSystemErrors = matchedSystemError && options.ignoreSystemErrors;
            const isExponential = isExponentialRetryResponse(response);
            const ignoreExponentialResponse = isExponential && options.ignoreHttpStatusCodes;
            const unknownResponse = response && ((0,_throttlingRetryStrategy__WEBPACK_IMPORTED_MODULE_0__.isThrottlingRetryResponse)(response) || !isExponential);
            if (unknownResponse || ignoreExponentialResponse || ignoreSystemErrors) {
                return { skipStrategy: true };
            }
            if (responseError && !matchedSystemError && !isExponential) {
                return { errorToThrow: responseError };
            }
            // Exponentially increase the delay each time
            const exponentialDelay = retryAfterInMs * Math.pow(2, retryCount);
            // Don't let the delay exceed the maximum
            const clampedExponentialDelay = Math.min(maxRetryInterval, exponentialDelay);
            // Allow the final value to have some "jitter" (within 50% of the delay size) so
            // that retries across multiple clients don't occur simultaneously.
            retryAfterInMs =
                clampedExponentialDelay / 2 + (0,_util_helpers__WEBPACK_IMPORTED_MODULE_1__.getRandomIntegerInclusive)(0, clampedExponentialDelay / 2);
            return { retryAfterInMs };
        },
    };
}
/**
 * A response is a retry response if it has status codes:
 * - 408, or
 * - Greater or equal than 500, except for 501 and 505.
 */
function isExponentialRetryResponse(response) {
    return Boolean(response &&
        response.status !== undefined &&
        (response.status >= 500 || response.status === 408) &&
        response.status !== 501 &&
        response.status !== 505);
}
/**
 * Determines whether an error from a pipeline response was triggered in the network layer.
 */
function isSystemError(err) {
    if (!err) {
        return false;
    }
    return (err.code === "ETIMEDOUT" ||
        err.code === "ESOCKETTIMEDOUT" ||
        err.code === "ECONNREFUSED" ||
        err.code === "ECONNRESET" ||
        err.code === "ENOENT");
}
//# sourceMappingURL=exponentialRetryStrategy.js.map

/***/ }),

/***/ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/retryStrategies/throttlingRetryStrategy.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@azure/core-rest-pipeline/dist-esm/src/retryStrategies/throttlingRetryStrategy.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isThrottlingRetryResponse": () => (/* binding */ isThrottlingRetryResponse),
/* harmony export */   "throttlingRetryStrategy": () => (/* binding */ throttlingRetryStrategy)
/* harmony export */ });
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/helpers */ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/util/helpers.js");
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/**
 * The header that comes back from Azure services representing
 * the amount of time (minimum) to wait to retry (in seconds or timestamp after which we can retry).
 */
const RetryAfterHeader = "Retry-After";
/**
 * The headers that come back from Azure services representing
 * the amount of time (minimum) to wait to retry.
 *
 * "retry-after-ms", "x-ms-retry-after-ms" : milliseconds
 * "Retry-After" : seconds or timestamp
 */
const AllRetryAfterHeaders = ["retry-after-ms", "x-ms-retry-after-ms", RetryAfterHeader];
/**
 * A response is a throttling retry response if it has a throttling status code (429 or 503),
 * as long as one of the [ "Retry-After" or "retry-after-ms" or "x-ms-retry-after-ms" ] headers has a valid value.
 *
 * Returns the `retryAfterInMs` value if the response is a throttling retry response.
 * If not throttling retry response, returns `undefined`.
 *
 * @internal
 */
function getRetryAfterInMs(response) {
    if (!(response && [429, 503].includes(response.status)))
        return undefined;
    try {
        // Headers: "retry-after-ms", "x-ms-retry-after-ms", "Retry-After"
        for (const header of AllRetryAfterHeaders) {
            const retryAfterValue = (0,_util_helpers__WEBPACK_IMPORTED_MODULE_0__.parseHeaderValueAsNumber)(response, header);
            if (retryAfterValue === 0 || retryAfterValue) {
                // "Retry-After" header ==> seconds
                // "retry-after-ms", "x-ms-retry-after-ms" headers ==> milli-seconds
                const multiplyingFactor = header === RetryAfterHeader ? 1000 : 1;
                return retryAfterValue * multiplyingFactor; // in milli-seconds
            }
        }
        // RetryAfterHeader ("Retry-After") has a special case where it might be formatted as a date instead of a number of seconds
        const retryAfterHeader = response.headers.get(RetryAfterHeader);
        if (!retryAfterHeader)
            return;
        const date = Date.parse(retryAfterHeader);
        const diff = date - Date.now();
        // negative diff would mean a date in the past, so retry asap with 0 milliseconds
        return Number.isFinite(diff) ? Math.max(0, diff) : undefined;
    }
    catch (e) {
        return undefined;
    }
}
/**
 * A response is a retry response if it has a throttling status code (429 or 503),
 * as long as one of the [ "Retry-After" or "retry-after-ms" or "x-ms-retry-after-ms" ] headers has a valid value.
 */
function isThrottlingRetryResponse(response) {
    return Number.isFinite(getRetryAfterInMs(response));
}
function throttlingRetryStrategy() {
    return {
        name: "throttlingRetryStrategy",
        retry({ response }) {
            const retryAfterInMs = getRetryAfterInMs(response);
            if (!Number.isFinite(retryAfterInMs)) {
                return { skipStrategy: true };
            }
            return {
                retryAfterInMs,
            };
        },
    };
}
//# sourceMappingURL=throttlingRetryStrategy.js.map

/***/ }),

/***/ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/util/helpers.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@azure/core-rest-pipeline/dist-esm/src/util/helpers.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "delay": () => (/* binding */ delay),
/* harmony export */   "getRandomIntegerInclusive": () => (/* binding */ getRandomIntegerInclusive),
/* harmony export */   "isNode": () => (/* binding */ isNode),
/* harmony export */   "isObject": () => (/* binding */ isObject),
/* harmony export */   "parseHeaderValueAsNumber": () => (/* binding */ parseHeaderValueAsNumber)
/* harmony export */ });
/* harmony import */ var _azure_abort_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @azure/abort-controller */ "./node_modules/@azure/abort-controller/dist-esm/src/AbortController.js");
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
var _a;

/**
 * A constant that indicates whether the environment the code is running is Node.JS.
 * @internal
 */
const isNode = typeof process !== "undefined" && Boolean(process.version) && Boolean((_a = process.versions) === null || _a === void 0 ? void 0 : _a.node);
const StandardAbortMessage = "The operation was aborted.";
/**
 * A wrapper for setTimeout that resolves a promise after delayInMs milliseconds.
 * @param delayInMs - The number of milliseconds to be delayed.
 * @param value - The value to be resolved with after a timeout of t milliseconds.
 * @param options - The options for delay - currently abort options
 *                  - abortSignal - The abortSignal associated with containing operation.
 *                  - abortErrorMsg - The abort error message associated with containing operation.
 * @returns Resolved promise
 */
function delay(delayInMs, value, options) {
    return new Promise((resolve, reject) => {
        let timer = undefined;
        let onAborted = undefined;
        const rejectOnAbort = () => {
            return reject(new _azure_abort_controller__WEBPACK_IMPORTED_MODULE_0__.AbortError((options === null || options === void 0 ? void 0 : options.abortErrorMsg) ? options === null || options === void 0 ? void 0 : options.abortErrorMsg : StandardAbortMessage));
        };
        const removeListeners = () => {
            if ((options === null || options === void 0 ? void 0 : options.abortSignal) && onAborted) {
                options.abortSignal.removeEventListener("abort", onAborted);
            }
        };
        onAborted = () => {
            if (timer) {
                clearTimeout(timer);
            }
            removeListeners();
            return rejectOnAbort();
        };
        if ((options === null || options === void 0 ? void 0 : options.abortSignal) && options.abortSignal.aborted) {
            return rejectOnAbort();
        }
        timer = setTimeout(() => {
            removeListeners();
            resolve(value);
        }, delayInMs);
        if (options === null || options === void 0 ? void 0 : options.abortSignal) {
            options.abortSignal.addEventListener("abort", onAborted);
        }
    });
}
/**
 * Returns a random integer value between a lower and upper bound,
 * inclusive of both bounds.
 * Note that this uses Math.random and isn't secure. If you need to use
 * this for any kind of security purpose, find a better source of random.
 * @param min - The smallest integer value allowed.
 * @param max - The largest integer value allowed.
 * @internal
 */
function getRandomIntegerInclusive(min, max) {
    // Make sure inputs are integers.
    min = Math.ceil(min);
    max = Math.floor(max);
    // Pick a random offset from zero to the size of the range.
    // Since Math.random() can never return 1, we have to make the range one larger
    // in order to be inclusive of the maximum value after we take the floor.
    const offset = Math.floor(Math.random() * (max - min + 1));
    return offset + min;
}
/**
 * @internal
 * @returns true when input is an object type that is not null, Array, RegExp, or Date.
 */
function isObject(input) {
    return (typeof input === "object" &&
        input !== null &&
        !Array.isArray(input) &&
        !(input instanceof RegExp) &&
        !(input instanceof Date));
}
/**
 * @internal
 * @returns the parsed value or undefined if the parsed value is invalid.
 */
function parseHeaderValueAsNumber(response, headerName) {
    const value = response.headers.get(headerName);
    if (!value)
        return;
    const valueAsNum = Number(value);
    if (Number.isNaN(valueAsNum))
        return;
    return valueAsNum;
}
//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/util/inspect.browser.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@azure/core-rest-pipeline/dist-esm/src/util/inspect.browser.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "custom": () => (/* binding */ custom)
/* harmony export */ });
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
const custom = {};
//# sourceMappingURL=inspect.browser.js.map

/***/ }),

/***/ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/util/sanitizer.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@azure/core-rest-pipeline/dist-esm/src/util/sanitizer.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sanitizer": () => (/* binding */ Sanitizer)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/util/helpers.js");
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./url */ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/util/url.browser.js");
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.


const RedactedString = "REDACTED";
const defaultAllowedHeaderNames = [
    "x-ms-client-request-id",
    "x-ms-return-client-request-id",
    "x-ms-useragent",
    "x-ms-correlation-request-id",
    "x-ms-request-id",
    "client-request-id",
    "ms-cv",
    "return-client-request-id",
    "traceparent",
    "Access-Control-Allow-Credentials",
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Methods",
    "Access-Control-Allow-Origin",
    "Access-Control-Expose-Headers",
    "Access-Control-Max-Age",
    "Access-Control-Request-Headers",
    "Access-Control-Request-Method",
    "Origin",
    "Accept",
    "Accept-Encoding",
    "Cache-Control",
    "Connection",
    "Content-Length",
    "Content-Type",
    "Date",
    "ETag",
    "Expires",
    "If-Match",
    "If-Modified-Since",
    "If-None-Match",
    "If-Unmodified-Since",
    "Last-Modified",
    "Pragma",
    "Request-Id",
    "Retry-After",
    "Server",
    "Transfer-Encoding",
    "User-Agent",
    "WWW-Authenticate",
];
const defaultAllowedQueryParameters = ["api-version"];
/**
 * @internal
 */
class Sanitizer {
    constructor({ additionalAllowedHeaderNames: allowedHeaderNames = [], additionalAllowedQueryParameters: allowedQueryParameters = [], } = {}) {
        allowedHeaderNames = defaultAllowedHeaderNames.concat(allowedHeaderNames);
        allowedQueryParameters = defaultAllowedQueryParameters.concat(allowedQueryParameters);
        this.allowedHeaderNames = new Set(allowedHeaderNames.map((n) => n.toLowerCase()));
        this.allowedQueryParameters = new Set(allowedQueryParameters.map((p) => p.toLowerCase()));
    }
    sanitize(obj) {
        const seen = new Set();
        return JSON.stringify(obj, (key, value) => {
            // Ensure Errors include their interesting non-enumerable members
            if (value instanceof Error) {
                return Object.assign(Object.assign({}, value), { name: value.name, message: value.message });
            }
            if (key === "headers") {
                return this.sanitizeHeaders(value);
            }
            else if (key === "url") {
                return this.sanitizeUrl(value);
            }
            else if (key === "query") {
                return this.sanitizeQuery(value);
            }
            else if (key === "body") {
                // Don't log the request body
                return undefined;
            }
            else if (key === "response") {
                // Don't log response again
                return undefined;
            }
            else if (key === "operationSpec") {
                // When using sendOperationRequest, the request carries a massive
                // field with the autorest spec. No need to log it.
                return undefined;
            }
            else if (Array.isArray(value) || (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isObject)(value)) {
                if (seen.has(value)) {
                    return "[Circular]";
                }
                seen.add(value);
            }
            return value;
        }, 2);
    }
    sanitizeHeaders(obj) {
        const sanitized = {};
        for (const key of Object.keys(obj)) {
            if (this.allowedHeaderNames.has(key.toLowerCase())) {
                sanitized[key] = obj[key];
            }
            else {
                sanitized[key] = RedactedString;
            }
        }
        return sanitized;
    }
    sanitizeQuery(value) {
        if (typeof value !== "object" || value === null) {
            return value;
        }
        const sanitized = {};
        for (const k of Object.keys(value)) {
            if (this.allowedQueryParameters.has(k.toLowerCase())) {
                sanitized[k] = value[k];
            }
            else {
                sanitized[k] = RedactedString;
            }
        }
        return sanitized;
    }
    sanitizeUrl(value) {
        if (typeof value !== "string" || value === null) {
            return value;
        }
        const url = new _url__WEBPACK_IMPORTED_MODULE_1__.URL(value);
        if (!url.search) {
            return value;
        }
        for (const [key] of url.searchParams) {
            if (!this.allowedQueryParameters.has(key.toLowerCase())) {
                url.searchParams.set(key, RedactedString);
            }
        }
        return url.toString();
    }
}
//# sourceMappingURL=sanitizer.js.map

/***/ }),

/***/ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/util/tokenCycler.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@azure/core-rest-pipeline/dist-esm/src/util/tokenCycler.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_CYCLER_OPTIONS": () => (/* binding */ DEFAULT_CYCLER_OPTIONS),
/* harmony export */   "createTokenCycler": () => (/* binding */ createTokenCycler)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/util/helpers.js");
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Default options for the cycler if none are provided
const DEFAULT_CYCLER_OPTIONS = {
    forcedRefreshWindowInMs: 1000,
    retryIntervalInMs: 3000,
    refreshWindowInMs: 1000 * 60 * 2, // Start refreshing 2m before expiry
};
/**
 * Converts an an unreliable access token getter (which may resolve with null)
 * into an AccessTokenGetter by retrying the unreliable getter in a regular
 * interval.
 *
 * @param getAccessToken - A function that produces a promise of an access token that may fail by returning null.
 * @param retryIntervalInMs - The time (in milliseconds) to wait between retry attempts.
 * @param refreshTimeout - The timestamp after which the refresh attempt will fail, throwing an exception.
 * @returns - A promise that, if it resolves, will resolve with an access token.
 */
async function beginRefresh(getAccessToken, retryIntervalInMs, refreshTimeout) {
    // This wrapper handles exceptions gracefully as long as we haven't exceeded
    // the timeout.
    async function tryGetAccessToken() {
        if (Date.now() < refreshTimeout) {
            try {
                return await getAccessToken();
            }
            catch (_a) {
                return null;
            }
        }
        else {
            const finalToken = await getAccessToken();
            // Timeout is up, so throw if it's still null
            if (finalToken === null) {
                throw new Error("Failed to refresh access token.");
            }
            return finalToken;
        }
    }
    let token = await tryGetAccessToken();
    while (token === null) {
        await (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.delay)(retryIntervalInMs);
        token = await tryGetAccessToken();
    }
    return token;
}
/**
 * Creates a token cycler from a credential, scopes, and optional settings.
 *
 * A token cycler represents a way to reliably retrieve a valid access token
 * from a TokenCredential. It will handle initializing the token, refreshing it
 * when it nears expiration, and synchronizes refresh attempts to avoid
 * concurrency hazards.
 *
 * @param credential - the underlying TokenCredential that provides the access
 * token
 * @param tokenCyclerOptions - optionally override default settings for the cycler
 *
 * @returns - a function that reliably produces a valid access token
 */
function createTokenCycler(credential, tokenCyclerOptions) {
    let refreshWorker = null;
    let token = null;
    const options = Object.assign(Object.assign({}, DEFAULT_CYCLER_OPTIONS), tokenCyclerOptions);
    /**
     * This little holder defines several predicates that we use to construct
     * the rules of refreshing the token.
     */
    const cycler = {
        /**
         * Produces true if a refresh job is currently in progress.
         */
        get isRefreshing() {
            return refreshWorker !== null;
        },
        /**
         * Produces true if the cycler SHOULD refresh (we are within the refresh
         * window and not already refreshing)
         */
        get shouldRefresh() {
            var _a;
            return (!cycler.isRefreshing &&
                ((_a = token === null || token === void 0 ? void 0 : token.expiresOnTimestamp) !== null && _a !== void 0 ? _a : 0) - options.refreshWindowInMs < Date.now());
        },
        /**
         * Produces true if the cycler MUST refresh (null or nearly-expired
         * token).
         */
        get mustRefresh() {
            return (token === null || token.expiresOnTimestamp - options.forcedRefreshWindowInMs < Date.now());
        },
    };
    /**
     * Starts a refresh job or returns the existing job if one is already
     * running.
     */
    function refresh(scopes, getTokenOptions) {
        var _a;
        if (!cycler.isRefreshing) {
            // We bind `scopes` here to avoid passing it around a lot
            const tryGetAccessToken = () => credential.getToken(scopes, getTokenOptions);
            // Take advantage of promise chaining to insert an assignment to `token`
            // before the refresh can be considered done.
            refreshWorker = beginRefresh(tryGetAccessToken, options.retryIntervalInMs, 
            // If we don't have a token, then we should timeout immediately
            (_a = token === null || token === void 0 ? void 0 : token.expiresOnTimestamp) !== null && _a !== void 0 ? _a : Date.now())
                .then((_token) => {
                refreshWorker = null;
                token = _token;
                return token;
            })
                .catch((reason) => {
                // We also should reset the refresher if we enter a failed state.  All
                // existing awaiters will throw, but subsequent requests will start a
                // new retry chain.
                refreshWorker = null;
                token = null;
                throw reason;
            });
        }
        return refreshWorker;
    }
    return async (scopes, tokenOptions) => {
        //
        // Simple rules:
        // - If we MUST refresh, then return the refresh task, blocking
        //   the pipeline until a token is available.
        // - If we SHOULD refresh, then run refresh but don't return it
        //   (we can still use the cached token).
        // - Return the token, since it's fine if we didn't return in
        //   step 1.
        //
        if (cycler.mustRefresh)
            return refresh(scopes, tokenOptions);
        if (cycler.shouldRefresh) {
            refresh(scopes, tokenOptions);
        }
        return token;
    };
}
//# sourceMappingURL=tokenCycler.js.map

/***/ }),

/***/ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/util/url.browser.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@azure/core-rest-pipeline/dist-esm/src/util/url.browser.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "URL": () => (/* binding */ url),
/* harmony export */   "URLSearchParams": () => (/* binding */ urlSearchParams)
/* harmony export */ });
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
const url = URL;
const urlSearchParams = URLSearchParams;

//# sourceMappingURL=url.browser.js.map

/***/ }),

/***/ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/util/userAgent.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@azure/core-rest-pipeline/dist-esm/src/util/userAgent.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getUserAgentHeaderName": () => (/* binding */ getUserAgentHeaderName),
/* harmony export */   "getUserAgentValue": () => (/* binding */ getUserAgentValue)
/* harmony export */ });
/* harmony import */ var _userAgentPlatform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userAgentPlatform */ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/util/userAgentPlatform.browser.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/constants.js");
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.


function getUserAgentString(telemetryInfo) {
    const parts = [];
    for (const [key, value] of telemetryInfo) {
        const token = value ? `${key}/${value}` : key;
        parts.push(token);
    }
    return parts.join(" ");
}
/**
 * @internal
 */
function getUserAgentHeaderName() {
    return (0,_userAgentPlatform__WEBPACK_IMPORTED_MODULE_0__.getHeaderName)();
}
/**
 * @internal
 */
function getUserAgentValue(prefix) {
    const runtimeInfo = new Map();
    runtimeInfo.set("core-rest-pipeline", _constants__WEBPACK_IMPORTED_MODULE_1__.SDK_VERSION);
    (0,_userAgentPlatform__WEBPACK_IMPORTED_MODULE_0__.setPlatformSpecificData)(runtimeInfo);
    const defaultAgent = getUserAgentString(runtimeInfo);
    const userAgentValue = prefix ? `${prefix} ${defaultAgent}` : defaultAgent;
    return userAgentValue;
}
//# sourceMappingURL=userAgent.js.map

/***/ }),

/***/ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/util/userAgentPlatform.browser.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@azure/core-rest-pipeline/dist-esm/src/util/userAgentPlatform.browser.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getHeaderName": () => (/* binding */ getHeaderName),
/* harmony export */   "setPlatformSpecificData": () => (/* binding */ setPlatformSpecificData)
/* harmony export */ });
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
/*
 * NOTE: When moving this file, please update "browser" section in package.json.
 */
/**
 * @internal
 */
function getHeaderName() {
    return "x-ms-useragent";
}
/**
 * @internal
 */
function setPlatformSpecificData(map) {
    const navigator = self.navigator;
    map.set("OS", (navigator.oscpu || navigator.platform).replace(" ", ""));
}
//# sourceMappingURL=userAgentPlatform.browser.js.map

/***/ }),

/***/ "./node_modules/@azure/core-rest-pipeline/dist-esm/src/util/uuid.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@azure/core-rest-pipeline/dist-esm/src/util/uuid.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateUuid": () => (/* binding */ generateUuid)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/**
 * Generated Universally Unique Identifier
 *
 * @returns RFC4122 v4 UUID.
 * @internal
 */
function generateUuid() {
    return (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])();
}
//# sourceMappingURL=uuid.js.map

/***/ }),

/***/ "./node_modules/@azure/core-tracing/dist-esm/src/createSpan.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@azure/core-tracing/dist-esm/src/createSpan.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSpanFunction": () => (/* binding */ createSpanFunction),
/* harmony export */   "isTracingDisabled": () => (/* binding */ isTracingDisabled)
/* harmony export */ });
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interfaces */ "./node_modules/@azure/core-tracing/dist-esm/src/interfaces.js");
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @opentelemetry/api */ "./node_modules/@opentelemetry/api/build/esm/index.js");
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.


function isTracingDisabled() {
    var _a;
    if (typeof process === "undefined") {
        // not supported in browser for now without polyfills
        return false;
    }
    const azureTracingDisabledValue = (_a = process.env.AZURE_TRACING_DISABLED) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    if (azureTracingDisabledValue === "false" || azureTracingDisabledValue === "0") {
        return false;
    }
    return Boolean(azureTracingDisabledValue);
}
/**
 * Creates a function that can be used to create spans using the global tracer.
 *
 * Usage:
 *
 * ```typescript
 * // once
 * const createSpan = createSpanFunction({ packagePrefix: "Azure.Data.AppConfiguration", namespace: "Microsoft.AppConfiguration" });
 *
 * // in each operation
 * const span = createSpan("deleteConfigurationSetting", operationOptions);
 *    // code...
 * span.end();
 * ```
 *
 * @hidden
 * @param args - allows configuration of the prefix for each span as well as the az.namespace field.
 */
function createSpanFunction(args) {
    return function (operationName, operationOptions) {
        const tracer = (0,_interfaces__WEBPACK_IMPORTED_MODULE_1__.getTracer)();
        const tracingOptions = (operationOptions === null || operationOptions === void 0 ? void 0 : operationOptions.tracingOptions) || {};
        const spanOptions = Object.assign({ kind: _interfaces__WEBPACK_IMPORTED_MODULE_1__.SpanKind.INTERNAL }, tracingOptions.spanOptions);
        const spanName = args.packagePrefix ? `${args.packagePrefix}.${operationName}` : operationName;
        let span;
        if (isTracingDisabled()) {
            span = _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.trace.wrapSpanContext(_opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.INVALID_SPAN_CONTEXT);
        }
        else {
            span = tracer.startSpan(spanName, spanOptions, tracingOptions.tracingContext);
        }
        if (args.namespace) {
            span.setAttribute("az.namespace", args.namespace);
        }
        let newSpanOptions = tracingOptions.spanOptions || {};
        if (span.isRecording() && args.namespace) {
            newSpanOptions = Object.assign(Object.assign({}, tracingOptions.spanOptions), { attributes: Object.assign(Object.assign({}, spanOptions.attributes), { "az.namespace": args.namespace }) });
        }
        const newTracingOptions = Object.assign(Object.assign({}, tracingOptions), { spanOptions: newSpanOptions, tracingContext: (0,_interfaces__WEBPACK_IMPORTED_MODULE_1__.setSpan)(tracingOptions.tracingContext || _interfaces__WEBPACK_IMPORTED_MODULE_1__.context.active(), span) });
        const newOperationOptions = Object.assign(Object.assign({}, operationOptions), { tracingOptions: newTracingOptions });
        return {
            span,
            updatedOptions: newOperationOptions
        };
    };
}
//# sourceMappingURL=createSpan.js.map

/***/ }),

/***/ "./node_modules/@azure/core-tracing/dist-esm/src/interfaces.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@azure/core-tracing/dist-esm/src/interfaces.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpanKind": () => (/* binding */ SpanKind),
/* harmony export */   "SpanStatusCode": () => (/* binding */ SpanStatusCode),
/* harmony export */   "context": () => (/* binding */ context),
/* harmony export */   "getSpan": () => (/* binding */ getSpan),
/* harmony export */   "getSpanContext": () => (/* binding */ getSpanContext),
/* harmony export */   "getTracer": () => (/* binding */ getTracer),
/* harmony export */   "isSpanContextValid": () => (/* binding */ isSpanContextValid),
/* harmony export */   "setSpan": () => (/* binding */ setSpan),
/* harmony export */   "setSpanContext": () => (/* binding */ setSpanContext)
/* harmony export */ });
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @opentelemetry/api */ "./node_modules/@opentelemetry/api/build/esm/index.js");
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/**
 * The kind of span.
 */
var SpanKind;
(function (SpanKind) {
    /** Default value. Indicates that the span is used internally. */
    SpanKind[SpanKind["INTERNAL"] = 0] = "INTERNAL";
    /**
     * Indicates that the span covers server-side handling of an RPC or other
     * remote request.
     */
    SpanKind[SpanKind["SERVER"] = 1] = "SERVER";
    /**
     * Indicates that the span covers the client-side wrapper around an RPC or
     * other remote request.
     */
    SpanKind[SpanKind["CLIENT"] = 2] = "CLIENT";
    /**
     * Indicates that the span describes producer sending a message to a
     * broker. Unlike client and server, there is no direct critical path latency
     * relationship between producer and consumer spans.
     */
    SpanKind[SpanKind["PRODUCER"] = 3] = "PRODUCER";
    /**
     * Indicates that the span describes consumer receiving a message from a
     * broker. Unlike client and server, there is no direct critical path latency
     * relationship between producer and consumer spans.
     */
    SpanKind[SpanKind["CONSUMER"] = 4] = "CONSUMER";
})(SpanKind || (SpanKind = {}));
/**
 * Return the span if one exists
 *
 * @param context - context to get span from
 */
function getSpan(context) {
    return _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.trace.getSpan(context);
}
/**
 * Set the span on a context
 *
 * @param context - context to use as parent
 * @param span - span to set active
 */
function setSpan(context, span) {
    return _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.trace.setSpan(context, span);
}
/**
 * Wrap span context in a NoopSpan and set as span in a new
 * context
 *
 * @param context - context to set active span on
 * @param spanContext - span context to be wrapped
 */
function setSpanContext(context, spanContext) {
    return _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.trace.setSpanContext(context, spanContext);
}
/**
 * Get the span context of the span if it exists.
 *
 * @param context - context to get values from
 */
function getSpanContext(context) {
    return _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.trace.getSpanContext(context);
}
/**
 * Returns true of the given {@link SpanContext} is valid.
 * A valid {@link SpanContext} is one which has a valid trace ID and span ID as per the spec.
 *
 * @param context - the {@link SpanContext} to validate.
 *
 * @returns true if the {@link SpanContext} is valid, false otherwise.
 */
function isSpanContextValid(context) {
    return _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.trace.isSpanContextValid(context);
}
function getTracer(name, version) {
    return _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.trace.getTracer(name || "azure/core-tracing", version);
}
/** Entrypoint for context API */
const context = _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.context;
/** SpanStatusCode */
var SpanStatusCode;
(function (SpanStatusCode) {
    /**
     * The default status.
     */
    SpanStatusCode[SpanStatusCode["UNSET"] = 0] = "UNSET";
    /**
     * The operation has been validated by an Application developer or
     * Operator to have completed successfully.
     */
    SpanStatusCode[SpanStatusCode["OK"] = 1] = "OK";
    /**
     * The operation contains an error.
     */
    SpanStatusCode[SpanStatusCode["ERROR"] = 2] = "ERROR";
})(SpanStatusCode || (SpanStatusCode = {}));
//# sourceMappingURL=interfaces.js.map

/***/ }),

/***/ "./node_modules/@azure/core-tracing/dist-esm/src/utils/traceParentHeader.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@azure/core-tracing/dist-esm/src/utils/traceParentHeader.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "extractSpanContextFromTraceParentHeader": () => (/* binding */ extractSpanContextFromTraceParentHeader),
/* harmony export */   "getTraceParentHeader": () => (/* binding */ getTraceParentHeader)
/* harmony export */ });
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
const VERSION = "00";
/**
 * Generates a `SpanContext` given a `traceparent` header value.
 * @param traceParent - Serialized span context data as a `traceparent` header value.
 * @returns The `SpanContext` generated from the `traceparent` value.
 */
function extractSpanContextFromTraceParentHeader(traceParentHeader) {
    const parts = traceParentHeader.split("-");
    if (parts.length !== 4) {
        return;
    }
    const [version, traceId, spanId, traceOptions] = parts;
    if (version !== VERSION) {
        return;
    }
    const traceFlags = parseInt(traceOptions, 16);
    const spanContext = {
        spanId,
        traceId,
        traceFlags
    };
    return spanContext;
}
/**
 * Generates a `traceparent` value given a span context.
 * @param spanContext - Contains context for a specific span.
 * @returns The `spanContext` represented as a `traceparent` value.
 */
function getTraceParentHeader(spanContext) {
    const missingFields = [];
    if (!spanContext.traceId) {
        missingFields.push("traceId");
    }
    if (!spanContext.spanId) {
        missingFields.push("spanId");
    }
    if (missingFields.length) {
        return;
    }
    const flags = spanContext.traceFlags || 0 /* NONE */;
    const hexFlags = flags.toString(16);
    const traceFlags = hexFlags.length === 1 ? `0${hexFlags}` : hexFlags;
    // https://www.w3.org/TR/trace-context/#traceparent-header-field-values
    return `${VERSION}-${spanContext.traceId}-${spanContext.spanId}-${traceFlags}`;
}
//# sourceMappingURL=traceParentHeader.js.map

/***/ }),

/***/ "./node_modules/@azure/logger/dist-esm/src/debug.js":
/*!**********************************************************!*\
  !*** ./node_modules/@azure/logger/dist-esm/src/debug.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log */ "./node_modules/@azure/logger/dist-esm/src/log.browser.js");
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

const debugEnvVariable = (typeof process !== "undefined" && process.env && process.env.DEBUG) || undefined;
let enabledString;
let enabledNamespaces = [];
let skippedNamespaces = [];
const debuggers = [];
if (debugEnvVariable) {
    enable(debugEnvVariable);
}
const debugObj = Object.assign((namespace) => {
    return createDebugger(namespace);
}, {
    enable,
    enabled,
    disable,
    log: _log__WEBPACK_IMPORTED_MODULE_0__.log
});
function enable(namespaces) {
    enabledString = namespaces;
    enabledNamespaces = [];
    skippedNamespaces = [];
    const wildcard = /\*/g;
    const namespaceList = namespaces.split(",").map((ns) => ns.trim().replace(wildcard, ".*?"));
    for (const ns of namespaceList) {
        if (ns.startsWith("-")) {
            skippedNamespaces.push(new RegExp(`^${ns.substr(1)}$`));
        }
        else {
            enabledNamespaces.push(new RegExp(`^${ns}$`));
        }
    }
    for (const instance of debuggers) {
        instance.enabled = enabled(instance.namespace);
    }
}
function enabled(namespace) {
    if (namespace.endsWith("*")) {
        return true;
    }
    for (const skipped of skippedNamespaces) {
        if (skipped.test(namespace)) {
            return false;
        }
    }
    for (const enabledNamespace of enabledNamespaces) {
        if (enabledNamespace.test(namespace)) {
            return true;
        }
    }
    return false;
}
function disable() {
    const result = enabledString || "";
    enable("");
    return result;
}
function createDebugger(namespace) {
    const newDebugger = Object.assign(debug, {
        enabled: enabled(namespace),
        destroy,
        log: debugObj.log,
        namespace,
        extend
    });
    function debug(...args) {
        if (!newDebugger.enabled) {
            return;
        }
        if (args.length > 0) {
            args[0] = `${namespace} ${args[0]}`;
        }
        newDebugger.log(...args);
    }
    debuggers.push(newDebugger);
    return newDebugger;
}
function destroy() {
    const index = debuggers.indexOf(this);
    if (index >= 0) {
        debuggers.splice(index, 1);
        return true;
    }
    return false;
}
function extend(namespace) {
    const newDebugger = createDebugger(`${this.namespace}:${namespace}`);
    newDebugger.log = this.log;
    return newDebugger;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (debugObj);
//# sourceMappingURL=debug.js.map

/***/ }),

/***/ "./node_modules/@azure/logger/dist-esm/src/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@azure/logger/dist-esm/src/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AzureLogger": () => (/* binding */ AzureLogger),
/* harmony export */   "createClientLogger": () => (/* binding */ createClientLogger),
/* harmony export */   "getLogLevel": () => (/* binding */ getLogLevel),
/* harmony export */   "setLogLevel": () => (/* binding */ setLogLevel)
/* harmony export */ });
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debug */ "./node_modules/@azure/logger/dist-esm/src/debug.js");
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

const registeredLoggers = new Set();
const logLevelFromEnv = (typeof process !== "undefined" && process.env && process.env.AZURE_LOG_LEVEL) || undefined;
let azureLogLevel;
/**
 * The AzureLogger provides a mechanism for overriding where logs are output to.
 * By default, logs are sent to stderr.
 * Override the `log` method to redirect logs to another location.
 */
const AzureLogger = (0,_debug__WEBPACK_IMPORTED_MODULE_0__["default"])("azure");
AzureLogger.log = (...args) => {
    _debug__WEBPACK_IMPORTED_MODULE_0__["default"].log(...args);
};
const AZURE_LOG_LEVELS = ["verbose", "info", "warning", "error"];
if (logLevelFromEnv) {
    // avoid calling setLogLevel because we don't want a mis-set environment variable to crash
    if (isAzureLogLevel(logLevelFromEnv)) {
        setLogLevel(logLevelFromEnv);
    }
    else {
        console.error(`AZURE_LOG_LEVEL set to unknown log level '${logLevelFromEnv}'; logging is not enabled. Acceptable values: ${AZURE_LOG_LEVELS.join(", ")}.`);
    }
}
/**
 * Immediately enables logging at the specified log level.
 * @param level - The log level to enable for logging.
 * Options from most verbose to least verbose are:
 * - verbose
 * - info
 * - warning
 * - error
 */
function setLogLevel(level) {
    if (level && !isAzureLogLevel(level)) {
        throw new Error(`Unknown log level '${level}'. Acceptable values: ${AZURE_LOG_LEVELS.join(",")}`);
    }
    azureLogLevel = level;
    const enabledNamespaces = [];
    for (const logger of registeredLoggers) {
        if (shouldEnable(logger)) {
            enabledNamespaces.push(logger.namespace);
        }
    }
    _debug__WEBPACK_IMPORTED_MODULE_0__["default"].enable(enabledNamespaces.join(","));
}
/**
 * Retrieves the currently specified log level.
 */
function getLogLevel() {
    return azureLogLevel;
}
const levelMap = {
    verbose: 400,
    info: 300,
    warning: 200,
    error: 100
};
/**
 * Creates a logger for use by the Azure SDKs that inherits from `AzureLogger`.
 * @param namespace - The name of the SDK package.
 * @hidden
 */
function createClientLogger(namespace) {
    const clientRootLogger = AzureLogger.extend(namespace);
    patchLogMethod(AzureLogger, clientRootLogger);
    return {
        error: createLogger(clientRootLogger, "error"),
        warning: createLogger(clientRootLogger, "warning"),
        info: createLogger(clientRootLogger, "info"),
        verbose: createLogger(clientRootLogger, "verbose")
    };
}
function patchLogMethod(parent, child) {
    child.log = (...args) => {
        parent.log(...args);
    };
}
function createLogger(parent, level) {
    const logger = Object.assign(parent.extend(level), {
        level
    });
    patchLogMethod(parent, logger);
    if (shouldEnable(logger)) {
        const enabledNamespaces = _debug__WEBPACK_IMPORTED_MODULE_0__["default"].disable();
        _debug__WEBPACK_IMPORTED_MODULE_0__["default"].enable(enabledNamespaces + "," + logger.namespace);
    }
    registeredLoggers.add(logger);
    return logger;
}
function shouldEnable(logger) {
    if (azureLogLevel && levelMap[logger.level] <= levelMap[azureLogLevel]) {
        return true;
    }
    else {
        return false;
    }
}
function isAzureLogLevel(logLevel) {
    return AZURE_LOG_LEVELS.includes(logLevel);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@azure/logger/dist-esm/src/log.browser.js":
/*!****************************************************************!*\
  !*** ./node_modules/@azure/logger/dist-esm/src/log.browser.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "log": () => (/* binding */ log)
/* harmony export */ });
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
function log(...args) {
    if (args.length > 0) {
        const firstArg = String(args[0]);
        if (firstArg.includes(":error")) {
            console.error(...args);
        }
        else if (firstArg.includes(":warning")) {
            console.warn(...args);
        }
        else if (firstArg.includes(":info")) {
            console.info(...args);
        }
        else if (firstArg.includes(":verbose")) {
            console.debug(...args);
        }
        else {
            console.debug(...args);
        }
    }
}
//# sourceMappingURL=log.browser.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/api/context.js":
/*!******************************************************************!*\
  !*** ./node_modules/@opentelemetry/api/build/esm/api/context.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContextAPI": () => (/* binding */ ContextAPI)
/* harmony export */ });
/* harmony import */ var _context_NoopContextManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../context/NoopContextManager */ "./node_modules/@opentelemetry/api/build/esm/context/NoopContextManager.js");
/* harmony import */ var _internal_global_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../internal/global-utils */ "./node_modules/@opentelemetry/api/build/esm/internal/global-utils.js");
/* harmony import */ var _diag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./diag */ "./node_modules/@opentelemetry/api/build/esm/api/diag.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};



var API_NAME = 'context';
var NOOP_CONTEXT_MANAGER = new _context_NoopContextManager__WEBPACK_IMPORTED_MODULE_0__.NoopContextManager();
/**
 * Singleton object which represents the entry point to the OpenTelemetry Context API
 */
var ContextAPI = /** @class */ (function () {
    /** Empty private constructor prevents end users from constructing a new instance of the API */
    function ContextAPI() {
    }
    /** Get the singleton instance of the Context API */
    ContextAPI.getInstance = function () {
        if (!this._instance) {
            this._instance = new ContextAPI();
        }
        return this._instance;
    };
    /**
     * Set the current context manager.
     *
     * @returns true if the context manager was successfully registered, else false
     */
    ContextAPI.prototype.setGlobalContextManager = function (contextManager) {
        return (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_1__.registerGlobal)(API_NAME, contextManager, _diag__WEBPACK_IMPORTED_MODULE_2__.DiagAPI.instance());
    };
    /**
     * Get the currently active context
     */
    ContextAPI.prototype.active = function () {
        return this._getContextManager().active();
    };
    /**
     * Execute a function with an active context
     *
     * @param context context to be active during function execution
     * @param fn function to execute in a context
     * @param thisArg optional receiver to be used for calling fn
     * @param args optional arguments forwarded to fn
     */
    ContextAPI.prototype.with = function (context, fn, thisArg) {
        var _a;
        var args = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            args[_i - 3] = arguments[_i];
        }
        return (_a = this._getContextManager()).with.apply(_a, __spreadArray([context, fn, thisArg], args));
    };
    /**
     * Bind a context to a target function or event emitter
     *
     * @param context context to bind to the event emitter or function. Defaults to the currently active context
     * @param target function or event emitter to bind
     */
    ContextAPI.prototype.bind = function (context, target) {
        return this._getContextManager().bind(context, target);
    };
    ContextAPI.prototype._getContextManager = function () {
        return (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_1__.getGlobal)(API_NAME) || NOOP_CONTEXT_MANAGER;
    };
    /** Disable and remove the global context manager */
    ContextAPI.prototype.disable = function () {
        this._getContextManager().disable();
        (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_1__.unregisterGlobal)(API_NAME, _diag__WEBPACK_IMPORTED_MODULE_2__.DiagAPI.instance());
    };
    return ContextAPI;
}());

//# sourceMappingURL=context.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/api/diag.js":
/*!***************************************************************!*\
  !*** ./node_modules/@opentelemetry/api/build/esm/api/diag.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiagAPI": () => (/* binding */ DiagAPI)
/* harmony export */ });
/* harmony import */ var _diag_ComponentLogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../diag/ComponentLogger */ "./node_modules/@opentelemetry/api/build/esm/diag/ComponentLogger.js");
/* harmony import */ var _diag_internal_logLevelLogger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../diag/internal/logLevelLogger */ "./node_modules/@opentelemetry/api/build/esm/diag/internal/logLevelLogger.js");
/* harmony import */ var _diag_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../diag/types */ "./node_modules/@opentelemetry/api/build/esm/diag/types.js");
/* harmony import */ var _internal_global_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../internal/global-utils */ "./node_modules/@opentelemetry/api/build/esm/internal/global-utils.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




var API_NAME = 'diag';
/**
 * Singleton object which represents the entry point to the OpenTelemetry internal
 * diagnostic API
 */
var DiagAPI = /** @class */ (function () {
    /**
     * Private internal constructor
     * @private
     */
    function DiagAPI() {
        function _logProxy(funcName) {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var logger = (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_3__.getGlobal)('diag');
                // shortcut if logger not set
                if (!logger)
                    return;
                return logger[funcName].apply(logger, args);
            };
        }
        // Using self local variable for minification purposes as 'this' cannot be minified
        var self = this;
        // DiagAPI specific functions
        self.setLogger = function (logger, logLevel) {
            var _a, _b;
            if (logLevel === void 0) { logLevel = _diag_types__WEBPACK_IMPORTED_MODULE_2__.DiagLogLevel.INFO; }
            if (logger === self) {
                // There isn't much we can do here.
                // Logging to the console might break the user application.
                // Try to log to self. If a logger was previously registered it will receive the log.
                var err = new Error('Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation');
                self.error((_a = err.stack) !== null && _a !== void 0 ? _a : err.message);
                return false;
            }
            var oldLogger = (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_3__.getGlobal)('diag');
            var newLogger = (0,_diag_internal_logLevelLogger__WEBPACK_IMPORTED_MODULE_1__.createLogLevelDiagLogger)(logLevel, logger);
            // There already is an logger registered. We'll let it know before overwriting it.
            if (oldLogger) {
                var stack = (_b = new Error().stack) !== null && _b !== void 0 ? _b : '<failed to generate stacktrace>';
                oldLogger.warn("Current logger will be overwritten from " + stack);
                newLogger.warn("Current logger will overwrite one already registered from " + stack);
            }
            return (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_3__.registerGlobal)('diag', newLogger, self, true);
        };
        self.disable = function () {
            (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_3__.unregisterGlobal)(API_NAME, self);
        };
        self.createComponentLogger = function (options) {
            return new _diag_ComponentLogger__WEBPACK_IMPORTED_MODULE_0__.DiagComponentLogger(options);
        };
        self.verbose = _logProxy('verbose');
        self.debug = _logProxy('debug');
        self.info = _logProxy('info');
        self.warn = _logProxy('warn');
        self.error = _logProxy('error');
    }
    /** Get the singleton instance of the DiagAPI API */
    DiagAPI.instance = function () {
        if (!this._instance) {
            this._instance = new DiagAPI();
        }
        return this._instance;
    };
    return DiagAPI;
}());

//# sourceMappingURL=diag.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/api/propagation.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@opentelemetry/api/build/esm/api/propagation.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropagationAPI": () => (/* binding */ PropagationAPI)
/* harmony export */ });
/* harmony import */ var _internal_global_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../internal/global-utils */ "./node_modules/@opentelemetry/api/build/esm/internal/global-utils.js");
/* harmony import */ var _propagation_NoopTextMapPropagator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../propagation/NoopTextMapPropagator */ "./node_modules/@opentelemetry/api/build/esm/propagation/NoopTextMapPropagator.js");
/* harmony import */ var _propagation_TextMapPropagator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../propagation/TextMapPropagator */ "./node_modules/@opentelemetry/api/build/esm/propagation/TextMapPropagator.js");
/* harmony import */ var _baggage_context_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../baggage/context-helpers */ "./node_modules/@opentelemetry/api/build/esm/baggage/context-helpers.js");
/* harmony import */ var _baggage_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../baggage/utils */ "./node_modules/@opentelemetry/api/build/esm/baggage/utils.js");
/* harmony import */ var _diag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./diag */ "./node_modules/@opentelemetry/api/build/esm/api/diag.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */






var API_NAME = 'propagation';
var NOOP_TEXT_MAP_PROPAGATOR = new _propagation_NoopTextMapPropagator__WEBPACK_IMPORTED_MODULE_1__.NoopTextMapPropagator();
/**
 * Singleton object which represents the entry point to the OpenTelemetry Propagation API
 */
var PropagationAPI = /** @class */ (function () {
    /** Empty private constructor prevents end users from constructing a new instance of the API */
    function PropagationAPI() {
        this.createBaggage = _baggage_utils__WEBPACK_IMPORTED_MODULE_4__.createBaggage;
        this.getBaggage = _baggage_context_helpers__WEBPACK_IMPORTED_MODULE_3__.getBaggage;
        this.setBaggage = _baggage_context_helpers__WEBPACK_IMPORTED_MODULE_3__.setBaggage;
        this.deleteBaggage = _baggage_context_helpers__WEBPACK_IMPORTED_MODULE_3__.deleteBaggage;
    }
    /** Get the singleton instance of the Propagator API */
    PropagationAPI.getInstance = function () {
        if (!this._instance) {
            this._instance = new PropagationAPI();
        }
        return this._instance;
    };
    /**
     * Set the current propagator.
     *
     * @returns true if the propagator was successfully registered, else false
     */
    PropagationAPI.prototype.setGlobalPropagator = function (propagator) {
        return (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_0__.registerGlobal)(API_NAME, propagator, _diag__WEBPACK_IMPORTED_MODULE_5__.DiagAPI.instance());
    };
    /**
     * Inject context into a carrier to be propagated inter-process
     *
     * @param context Context carrying tracing data to inject
     * @param carrier carrier to inject context into
     * @param setter Function used to set values on the carrier
     */
    PropagationAPI.prototype.inject = function (context, carrier, setter) {
        if (setter === void 0) { setter = _propagation_TextMapPropagator__WEBPACK_IMPORTED_MODULE_2__.defaultTextMapSetter; }
        return this._getGlobalPropagator().inject(context, carrier, setter);
    };
    /**
     * Extract context from a carrier
     *
     * @param context Context which the newly created context will inherit from
     * @param carrier Carrier to extract context from
     * @param getter Function used to extract keys from a carrier
     */
    PropagationAPI.prototype.extract = function (context, carrier, getter) {
        if (getter === void 0) { getter = _propagation_TextMapPropagator__WEBPACK_IMPORTED_MODULE_2__.defaultTextMapGetter; }
        return this._getGlobalPropagator().extract(context, carrier, getter);
    };
    /**
     * Return a list of all fields which may be used by the propagator.
     */
    PropagationAPI.prototype.fields = function () {
        return this._getGlobalPropagator().fields();
    };
    /** Remove the global propagator */
    PropagationAPI.prototype.disable = function () {
        (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_0__.unregisterGlobal)(API_NAME, _diag__WEBPACK_IMPORTED_MODULE_5__.DiagAPI.instance());
    };
    PropagationAPI.prototype._getGlobalPropagator = function () {
        return (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_0__.getGlobal)(API_NAME) || NOOP_TEXT_MAP_PROPAGATOR;
    };
    return PropagationAPI;
}());

//# sourceMappingURL=propagation.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/api/trace.js":
/*!****************************************************************!*\
  !*** ./node_modules/@opentelemetry/api/build/esm/api/trace.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TraceAPI": () => (/* binding */ TraceAPI)
/* harmony export */ });
/* harmony import */ var _internal_global_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../internal/global-utils */ "./node_modules/@opentelemetry/api/build/esm/internal/global-utils.js");
/* harmony import */ var _trace_ProxyTracerProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../trace/ProxyTracerProvider */ "./node_modules/@opentelemetry/api/build/esm/trace/ProxyTracerProvider.js");
/* harmony import */ var _trace_spancontext_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../trace/spancontext-utils */ "./node_modules/@opentelemetry/api/build/esm/trace/spancontext-utils.js");
/* harmony import */ var _trace_context_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../trace/context-utils */ "./node_modules/@opentelemetry/api/build/esm/trace/context-utils.js");
/* harmony import */ var _diag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./diag */ "./node_modules/@opentelemetry/api/build/esm/api/diag.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





var API_NAME = 'trace';
/**
 * Singleton object which represents the entry point to the OpenTelemetry Tracing API
 */
var TraceAPI = /** @class */ (function () {
    /** Empty private constructor prevents end users from constructing a new instance of the API */
    function TraceAPI() {
        this._proxyTracerProvider = new _trace_ProxyTracerProvider__WEBPACK_IMPORTED_MODULE_1__.ProxyTracerProvider();
        this.wrapSpanContext = _trace_spancontext_utils__WEBPACK_IMPORTED_MODULE_2__.wrapSpanContext;
        this.isSpanContextValid = _trace_spancontext_utils__WEBPACK_IMPORTED_MODULE_2__.isSpanContextValid;
        this.deleteSpan = _trace_context_utils__WEBPACK_IMPORTED_MODULE_3__.deleteSpan;
        this.getSpan = _trace_context_utils__WEBPACK_IMPORTED_MODULE_3__.getSpan;
        this.getSpanContext = _trace_context_utils__WEBPACK_IMPORTED_MODULE_3__.getSpanContext;
        this.setSpan = _trace_context_utils__WEBPACK_IMPORTED_MODULE_3__.setSpan;
        this.setSpanContext = _trace_context_utils__WEBPACK_IMPORTED_MODULE_3__.setSpanContext;
    }
    /** Get the singleton instance of the Trace API */
    TraceAPI.getInstance = function () {
        if (!this._instance) {
            this._instance = new TraceAPI();
        }
        return this._instance;
    };
    /**
     * Set the current global tracer.
     *
     * @returns true if the tracer provider was successfully registered, else false
     */
    TraceAPI.prototype.setGlobalTracerProvider = function (provider) {
        var success = (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_0__.registerGlobal)(API_NAME, this._proxyTracerProvider, _diag__WEBPACK_IMPORTED_MODULE_4__.DiagAPI.instance());
        if (success) {
            this._proxyTracerProvider.setDelegate(provider);
        }
        return success;
    };
    /**
     * Returns the global tracer provider.
     */
    TraceAPI.prototype.getTracerProvider = function () {
        return (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_0__.getGlobal)(API_NAME) || this._proxyTracerProvider;
    };
    /**
     * Returns a tracer from the global tracer provider.
     */
    TraceAPI.prototype.getTracer = function (name, version) {
        return this.getTracerProvider().getTracer(name, version);
    };
    /** Remove the global tracer provider */
    TraceAPI.prototype.disable = function () {
        (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_0__.unregisterGlobal)(API_NAME, _diag__WEBPACK_IMPORTED_MODULE_4__.DiagAPI.instance());
        this._proxyTracerProvider = new _trace_ProxyTracerProvider__WEBPACK_IMPORTED_MODULE_1__.ProxyTracerProvider();
    };
    return TraceAPI;
}());

//# sourceMappingURL=trace.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/baggage/context-helpers.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@opentelemetry/api/build/esm/baggage/context-helpers.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteBaggage": () => (/* binding */ deleteBaggage),
/* harmony export */   "getBaggage": () => (/* binding */ getBaggage),
/* harmony export */   "setBaggage": () => (/* binding */ setBaggage)
/* harmony export */ });
/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../context/context */ "./node_modules/@opentelemetry/api/build/esm/context/context.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Baggage key
 */
var BAGGAGE_KEY = (0,_context_context__WEBPACK_IMPORTED_MODULE_0__.createContextKey)('OpenTelemetry Baggage Key');
/**
 * Retrieve the current baggage from the given context
 *
 * @param {Context} Context that manage all context values
 * @returns {Baggage} Extracted baggage from the context
 */
function getBaggage(context) {
    return context.getValue(BAGGAGE_KEY) || undefined;
}
/**
 * Store a baggage in the given context
 *
 * @param {Context} Context that manage all context values
 * @param {Baggage} baggage that will be set in the actual context
 */
function setBaggage(context, baggage) {
    return context.setValue(BAGGAGE_KEY, baggage);
}
/**
 * Delete the baggage stored in the given context
 *
 * @param {Context} Context that manage all context values
 */
function deleteBaggage(context) {
    return context.deleteValue(BAGGAGE_KEY);
}
//# sourceMappingURL=context-helpers.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/baggage/internal/baggage-impl.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@opentelemetry/api/build/esm/baggage/internal/baggage-impl.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaggageImpl": () => (/* binding */ BaggageImpl)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var BaggageImpl = /** @class */ (function () {
    function BaggageImpl(entries) {
        this._entries = entries ? new Map(entries) : new Map();
    }
    BaggageImpl.prototype.getEntry = function (key) {
        var entry = this._entries.get(key);
        if (!entry) {
            return undefined;
        }
        return Object.assign({}, entry);
    };
    BaggageImpl.prototype.getAllEntries = function () {
        return Array.from(this._entries.entries()).map(function (_a) {
            var k = _a[0], v = _a[1];
            return [k, v];
        });
    };
    BaggageImpl.prototype.setEntry = function (key, entry) {
        var newBaggage = new BaggageImpl(this._entries);
        newBaggage._entries.set(key, entry);
        return newBaggage;
    };
    BaggageImpl.prototype.removeEntry = function (key) {
        var newBaggage = new BaggageImpl(this._entries);
        newBaggage._entries.delete(key);
        return newBaggage;
    };
    BaggageImpl.prototype.removeEntries = function () {
        var keys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i] = arguments[_i];
        }
        var newBaggage = new BaggageImpl(this._entries);
        for (var _a = 0, keys_1 = keys; _a < keys_1.length; _a++) {
            var key = keys_1[_a];
            newBaggage._entries.delete(key);
        }
        return newBaggage;
    };
    BaggageImpl.prototype.clear = function () {
        return new BaggageImpl();
    };
    return BaggageImpl;
}());

//# sourceMappingURL=baggage-impl.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/baggage/internal/symbol.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@opentelemetry/api/build/esm/baggage/internal/symbol.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "baggageEntryMetadataSymbol": () => (/* binding */ baggageEntryMetadataSymbol)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Symbol used to make BaggageEntryMetadata an opaque type
 */
var baggageEntryMetadataSymbol = Symbol('BaggageEntryMetadata');
//# sourceMappingURL=symbol.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/baggage/types.js":
/*!********************************************************************!*\
  !*** ./node_modules/@opentelemetry/api/build/esm/baggage/types.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/baggage/utils.js":
/*!********************************************************************!*\
  !*** ./node_modules/@opentelemetry/api/build/esm/baggage/utils.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "baggageEntryMetadataFromString": () => (/* binding */ baggageEntryMetadataFromString),
/* harmony export */   "createBaggage": () => (/* binding */ createBaggage)
/* harmony export */ });
/* harmony import */ var _api_diag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/diag */ "./node_modules/@opentelemetry/api/build/esm/api/diag.js");
/* harmony import */ var _internal_baggage_impl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/baggage-impl */ "./node_modules/@opentelemetry/api/build/esm/baggage/internal/baggage-impl.js");
/* harmony import */ var _internal_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/symbol */ "./node_modules/@opentelemetry/api/build/esm/baggage/internal/symbol.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



var diag = _api_diag__WEBPACK_IMPORTED_MODULE_0__.DiagAPI.instance();
/**
 * Create a new Baggage with optional entries
 *
 * @param entries An array of baggage entries the new baggage should contain
 */
function createBaggage(entries) {
    if (entries === void 0) { entries = {}; }
    return new _internal_baggage_impl__WEBPACK_IMPORTED_MODULE_1__.BaggageImpl(new Map(Object.entries(entries)));
}
/**
 * Create a serializable BaggageEntryMetadata object from a string.
 *
 * @param str string metadata. Format is currently not defined by the spec and has no special meaning.
 *
 */
function baggageEntryMetadataFromString(str) {
    if (typeof str !== 'string') {
        diag.error("Cannot create baggage metadata from unknown type: " + typeof str);
        str = '';
    }
    return {
        __TYPE__: _internal_symbol__WEBPACK_IMPORTED_MODULE_2__.baggageEntryMetadataSymbol,
        toString: function () {
            return str;
        },
    };
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/common/Exception.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@opentelemetry/api/build/esm/common/Exception.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=Exception.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/common/Time.js":
/*!******************************************************************!*\
  !*** ./node_modules/@opentelemetry/api/build/esm/common/Time.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=Time.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/context/NoopContextManager.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@opentelemetry/api/build/esm/context/NoopContextManager.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoopContextManager": () => (/* binding */ NoopContextManager)
/* harmony export */ });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context */ "./node_modules/@opentelemetry/api/build/esm/context/context.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};

var NoopContextManager = /** @class */ (function () {
    function NoopContextManager() {
    }
    NoopContextManager.prototype.active = function () {
        return _context__WEBPACK_IMPORTED_MODULE_0__.ROOT_CONTEXT;
    };
    NoopContextManager.prototype.with = function (_context, fn, thisArg) {
        var args = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            args[_i - 3] = arguments[_i];
        }
        return fn.call.apply(fn, __spreadArray([thisArg], args));
    };
    NoopContextManager.prototype.bind = function (_context, target) {
        return target;
    };
    NoopContextManager.prototype.enable = function () {
        return this;
    };
    NoopContextManager.prototype.disable = function () {
        return this;
    };
    return NoopContextManager;
}());

//# sourceMappingURL=NoopContextManager.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/context/context.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@opentelemetry/api/build/esm/context/context.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ROOT_CONTEXT": () => (/* binding */ ROOT_CONTEXT),
/* harmony export */   "createContextKey": () => (/* binding */ createContextKey)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Get a key to uniquely identify a context value */
function createContextKey(description) {
    // The specification states that for the same input, multiple calls should
    // return different keys. Due to the nature of the JS dependency management
    // system, this creates problems where multiple versions of some package
    // could hold different keys for the same property.
    //
    // Therefore, we use Symbol.for which returns the same key for the same input.
    return Symbol.for(description);
}
var BaseContext = /** @class */ (function () {
    /**
     * Construct a new context which inherits values from an optional parent context.
     *
     * @param parentContext a context from which to inherit values
     */
    function BaseContext(parentContext) {
        // for minification
        var self = this;
        self._currentContext = parentContext ? new Map(parentContext) : new Map();
        self.getValue = function (key) { return self._currentContext.get(key); };
        self.setValue = function (key, value) {
            var context = new BaseContext(self._currentContext);
            context._currentContext.set(key, value);
            return context;
        };
        self.deleteValue = function (key) {
            var context = new BaseContext(self._currentContext);
            context._currentContext.delete(key);
            return context;
        };
    }
    return BaseContext;
}());
/** The root context is used as the default parent context when there is no active context */
var ROOT_CONTEXT = new BaseContext();
//# sourceMappingURL=context.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/context/types.js":
/*!********************************************************************!*\
  !*** ./node_modules/@opentelemetry/api/build/esm/context/types.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/diag/ComponentLogger.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@opentelemetry/api/build/esm/diag/ComponentLogger.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiagComponentLogger": () => (/* binding */ DiagComponentLogger)
/* harmony export */ });
/* harmony import */ var _internal_global_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../internal/global-utils */ "./node_modules/@opentelemetry/api/build/esm/internal/global-utils.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Component Logger which is meant to be used as part of any component which
 * will add automatically additional namespace in front of the log message.
 * It will then forward all message to global diag logger
 * @example
 * const cLogger = diag.createComponentLogger({ namespace: '@opentelemetry/instrumentation-http' });
 * cLogger.debug('test');
 * // @opentelemetry/instrumentation-http test
 */
var DiagComponentLogger = /** @class */ (function () {
    function DiagComponentLogger(props) {
        this._namespace = props.namespace || 'DiagComponentLogger';
    }
    DiagComponentLogger.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return logProxy('debug', this._namespace, args);
    };
    DiagComponentLogger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return logProxy('error', this._namespace, args);
    };
    DiagComponentLogger.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return logProxy('info', this._namespace, args);
    };
    DiagComponentLogger.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return logProxy('warn', this._namespace, args);
    };
    DiagComponentLogger.prototype.verbose = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return logProxy('verbose', this._namespace, args);
    };
    return DiagComponentLogger;
}());

function logProxy(funcName, namespace, args) {
    var logger = (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_0__.getGlobal)('diag');
    // shortcut if logger not set
    if (!logger) {
        return;
    }
    args.unshift(namespace);
    return logger[funcName].apply(logger, args);
}
//# sourceMappingURL=ComponentLogger.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/diag/consoleLogger.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@opentelemetry/api/build/esm/diag/consoleLogger.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiagConsoleLogger": () => (/* binding */ DiagConsoleLogger)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var consoleMap = [
    { n: 'error', c: 'error' },
    { n: 'warn', c: 'warn' },
    { n: 'info', c: 'info' },
    { n: 'debug', c: 'debug' },
    { n: 'verbose', c: 'trace' },
];
/**
 * A simple Immutable Console based diagnostic logger which will output any messages to the Console.
 * If you want to limit the amount of logging to a specific level or lower use the
 * {@link createLogLevelDiagLogger}
 */
var DiagConsoleLogger = /** @class */ (function () {
    function DiagConsoleLogger() {
        function _consoleFunc(funcName) {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (console) {
                    // Some environments only expose the console when the F12 developer console is open
                    // eslint-disable-next-line no-console
                    var theFunc = console[funcName];
                    if (typeof theFunc !== 'function') {
                        // Not all environments support all functions
                        // eslint-disable-next-line no-console
                        theFunc = console.log;
                    }
                    // One last final check
                    if (typeof theFunc === 'function') {
                        return theFunc.apply(console, args);
                    }
                }
            };
        }
        for (var i = 0; i < consoleMap.length; i++) {
            this[consoleMap[i].n] = _consoleFunc(consoleMap[i].c);
        }
    }
    return DiagConsoleLogger;
}());

//# sourceMappingURL=consoleLogger.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/diag/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@opentelemetry/api/build/esm/diag/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiagConsoleLogger": () => (/* reexport safe */ _consoleLogger__WEBPACK_IMPORTED_MODULE_0__.DiagConsoleLogger),
/* harmony export */   "DiagLogLevel": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_1__.DiagLogLevel)
/* harmony export */ });
/* harmony import */ var _consoleLogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consoleLogger */ "./node_modules/@opentelemetry/api/build/esm/diag/consoleLogger.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./node_modules/@opentelemetry/api/build/esm/diag/types.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/diag/internal/logLevelLogger.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@opentelemetry/api/build/esm/diag/internal/logLevelLogger.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLogLevelDiagLogger": () => (/* binding */ createLogLevelDiagLogger)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./node_modules/@opentelemetry/api/build/esm/diag/types.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function createLogLevelDiagLogger(maxLevel, logger) {
    if (maxLevel < _types__WEBPACK_IMPORTED_MODULE_0__.DiagLogLevel.NONE) {
        maxLevel = _types__WEBPACK_IMPORTED_MODULE_0__.DiagLogLevel.NONE;
    }
    else if (maxLevel > _types__WEBPACK_IMPORTED_MODULE_0__.DiagLogLevel.ALL) {
        maxLevel = _types__WEBPACK_IMPORTED_MODULE_0__.DiagLogLevel.ALL;
    }
    // In case the logger is null or undefined
    logger = logger || {};
    function _filterFunc(funcName, theLevel) {
        var theFunc = logger[funcName];
        if (typeof theFunc === 'function' && maxLevel >= theLevel) {
            return theFunc.bind(logger);
        }
        return function () { };
    }
    return {
        error: _filterFunc('error', _types__WEBPACK_IMPORTED_MODULE_0__.DiagLogLevel.ERROR),
        warn: _filterFunc('warn', _types__WEBPACK_IMPORTED_MODULE_0__.DiagLogLevel.WARN),
        info: _filterFunc('info', _types__WEBPACK_IMPORTED_MODULE_0__.DiagLogLevel.INFO),
        debug: _filterFunc('debug', _types__WEBPACK_IMPORTED_MODULE_0__.DiagLogLevel.DEBUG),
        verbose: _filterFunc('verbose', _types__WEBPACK_IMPORTED_MODULE_0__.DiagLogLevel.VERBOSE),
    };
}
//# sourceMappingURL=logLevelLogger.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/diag/types.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@opentelemetry/api/build/esm/diag/types.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiagLogLevel": () => (/* binding */ DiagLogLevel)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Defines the available internal logging levels for the diagnostic logger, the numeric values
 * of the levels are defined to match the original values from the initial LogLevel to avoid
 * compatibility/migration issues for any implementation that assume the numeric ordering.
 */
var DiagLogLevel;
(function (DiagLogLevel) {
    /** Diagnostic Logging level setting to disable all logging (except and forced logs) */
    DiagLogLevel[DiagLogLevel["NONE"] = 0] = "NONE";
    /** Identifies an error scenario */
    DiagLogLevel[DiagLogLevel["ERROR"] = 30] = "ERROR";
    /** Identifies a warning scenario */
    DiagLogLevel[DiagLogLevel["WARN"] = 50] = "WARN";
    /** General informational log message */
    DiagLogLevel[DiagLogLevel["INFO"] = 60] = "INFO";
    /** General debug log message */
    DiagLogLevel[DiagLogLevel["DEBUG"] = 70] = "DEBUG";
    /**
     * Detailed trace level logging should only be used for development, should only be set
     * in a development environment.
     */
    DiagLogLevel[DiagLogLevel["VERBOSE"] = 80] = "VERBOSE";
    /** Used to set the logging level to include all logging */
    DiagLogLevel[DiagLogLevel["ALL"] = 9999] = "ALL";
})(DiagLogLevel || (DiagLogLevel = {}));
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@opentelemetry/api/build/esm/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiagConsoleLogger": () => (/* reexport safe */ _diag__WEBPACK_IMPORTED_MODULE_4__.DiagConsoleLogger),
/* harmony export */   "DiagLogLevel": () => (/* reexport safe */ _diag__WEBPACK_IMPORTED_MODULE_4__.DiagLogLevel),
/* harmony export */   "INVALID_SPANID": () => (/* reexport safe */ _trace_invalid_span_constants__WEBPACK_IMPORTED_MODULE_22__.INVALID_SPANID),
/* harmony export */   "INVALID_SPAN_CONTEXT": () => (/* reexport safe */ _trace_invalid_span_constants__WEBPACK_IMPORTED_MODULE_22__.INVALID_SPAN_CONTEXT),
/* harmony export */   "INVALID_TRACEID": () => (/* reexport safe */ _trace_invalid_span_constants__WEBPACK_IMPORTED_MODULE_22__.INVALID_TRACEID),
/* harmony export */   "ProxyTracer": () => (/* reexport safe */ _trace_ProxyTracer__WEBPACK_IMPORTED_MODULE_8__.ProxyTracer),
/* harmony export */   "ProxyTracerProvider": () => (/* reexport safe */ _trace_ProxyTracerProvider__WEBPACK_IMPORTED_MODULE_9__.ProxyTracerProvider),
/* harmony export */   "ROOT_CONTEXT": () => (/* reexport safe */ _context_context__WEBPACK_IMPORTED_MODULE_23__.ROOT_CONTEXT),
/* harmony export */   "SamplingDecision": () => (/* reexport safe */ _trace_SamplingResult__WEBPACK_IMPORTED_MODULE_11__.SamplingDecision),
/* harmony export */   "SpanKind": () => (/* reexport safe */ _trace_span_kind__WEBPACK_IMPORTED_MODULE_13__.SpanKind),
/* harmony export */   "SpanStatusCode": () => (/* reexport safe */ _trace_status__WEBPACK_IMPORTED_MODULE_16__.SpanStatusCode),
/* harmony export */   "TraceFlags": () => (/* reexport safe */ _trace_trace_flags__WEBPACK_IMPORTED_MODULE_17__.TraceFlags),
/* harmony export */   "baggageEntryMetadataFromString": () => (/* reexport safe */ _baggage_utils__WEBPACK_IMPORTED_MODULE_1__.baggageEntryMetadataFromString),
/* harmony export */   "context": () => (/* binding */ context),
/* harmony export */   "createContextKey": () => (/* reexport safe */ _context_context__WEBPACK_IMPORTED_MODULE_23__.createContextKey),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "defaultTextMapGetter": () => (/* reexport safe */ _propagation_TextMapPropagator__WEBPACK_IMPORTED_MODULE_5__.defaultTextMapGetter),
/* harmony export */   "defaultTextMapSetter": () => (/* reexport safe */ _propagation_TextMapPropagator__WEBPACK_IMPORTED_MODULE_5__.defaultTextMapSetter),
/* harmony export */   "diag": () => (/* binding */ diag),
/* harmony export */   "isSpanContextValid": () => (/* reexport safe */ _trace_spancontext_utils__WEBPACK_IMPORTED_MODULE_21__.isSpanContextValid),
/* harmony export */   "isValidSpanId": () => (/* reexport safe */ _trace_spancontext_utils__WEBPACK_IMPORTED_MODULE_21__.isValidSpanId),
/* harmony export */   "isValidTraceId": () => (/* reexport safe */ _trace_spancontext_utils__WEBPACK_IMPORTED_MODULE_21__.isValidTraceId),
/* harmony export */   "propagation": () => (/* binding */ propagation),
/* harmony export */   "trace": () => (/* binding */ trace)
/* harmony export */ });
/* harmony import */ var _baggage_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baggage/types */ "./node_modules/@opentelemetry/api/build/esm/baggage/types.js");
/* harmony import */ var _baggage_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baggage/utils */ "./node_modules/@opentelemetry/api/build/esm/baggage/utils.js");
/* harmony import */ var _common_Exception__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/Exception */ "./node_modules/@opentelemetry/api/build/esm/common/Exception.js");
/* harmony import */ var _common_Time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/Time */ "./node_modules/@opentelemetry/api/build/esm/common/Time.js");
/* harmony import */ var _diag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./diag */ "./node_modules/@opentelemetry/api/build/esm/diag/index.js");
/* harmony import */ var _propagation_TextMapPropagator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./propagation/TextMapPropagator */ "./node_modules/@opentelemetry/api/build/esm/propagation/TextMapPropagator.js");
/* harmony import */ var _trace_attributes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trace/attributes */ "./node_modules/@opentelemetry/api/build/esm/trace/attributes.js");
/* harmony import */ var _trace_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./trace/link */ "./node_modules/@opentelemetry/api/build/esm/trace/link.js");
/* harmony import */ var _trace_ProxyTracer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./trace/ProxyTracer */ "./node_modules/@opentelemetry/api/build/esm/trace/ProxyTracer.js");
/* harmony import */ var _trace_ProxyTracerProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./trace/ProxyTracerProvider */ "./node_modules/@opentelemetry/api/build/esm/trace/ProxyTracerProvider.js");
/* harmony import */ var _trace_Sampler__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./trace/Sampler */ "./node_modules/@opentelemetry/api/build/esm/trace/Sampler.js");
/* harmony import */ var _trace_SamplingResult__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./trace/SamplingResult */ "./node_modules/@opentelemetry/api/build/esm/trace/SamplingResult.js");
/* harmony import */ var _trace_span_context__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./trace/span_context */ "./node_modules/@opentelemetry/api/build/esm/trace/span_context.js");
/* harmony import */ var _trace_span_kind__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./trace/span_kind */ "./node_modules/@opentelemetry/api/build/esm/trace/span_kind.js");
/* harmony import */ var _trace_span__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./trace/span */ "./node_modules/@opentelemetry/api/build/esm/trace/span.js");
/* harmony import */ var _trace_SpanOptions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./trace/SpanOptions */ "./node_modules/@opentelemetry/api/build/esm/trace/SpanOptions.js");
/* harmony import */ var _trace_status__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./trace/status */ "./node_modules/@opentelemetry/api/build/esm/trace/status.js");
/* harmony import */ var _trace_trace_flags__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./trace/trace_flags */ "./node_modules/@opentelemetry/api/build/esm/trace/trace_flags.js");
/* harmony import */ var _trace_trace_state__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./trace/trace_state */ "./node_modules/@opentelemetry/api/build/esm/trace/trace_state.js");
/* harmony import */ var _trace_tracer_provider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./trace/tracer_provider */ "./node_modules/@opentelemetry/api/build/esm/trace/tracer_provider.js");
/* harmony import */ var _trace_tracer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./trace/tracer */ "./node_modules/@opentelemetry/api/build/esm/trace/tracer.js");
/* harmony import */ var _trace_spancontext_utils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./trace/spancontext-utils */ "./node_modules/@opentelemetry/api/build/esm/trace/spancontext-utils.js");
/* harmony import */ var _trace_invalid_span_constants__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./trace/invalid-span-constants */ "./node_modules/@opentelemetry/api/build/esm/trace/invalid-span-constants.js");
/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./context/context */ "./node_modules/@opentelemetry/api/build/esm/context/context.js");
/* harmony import */ var _context_types__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./context/types */ "./node_modules/@opentelemetry/api/build/esm/context/types.js");
/* harmony import */ var _api_context__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./api/context */ "./node_modules/@opentelemetry/api/build/esm/api/context.js");
/* harmony import */ var _api_trace__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./api/trace */ "./node_modules/@opentelemetry/api/build/esm/api/trace.js");
/* harmony import */ var _api_propagation__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./api/propagation */ "./node_modules/@opentelemetry/api/build/esm/api/propagation.js");
/* harmony import */ var _api_diag__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./api/diag */ "./node_modules/@opentelemetry/api/build/esm/api/diag.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


























/** Entrypoint for context API */
var context = _api_context__WEBPACK_IMPORTED_MODULE_25__.ContextAPI.getInstance();

/** Entrypoint for trace API */
var trace = _api_trace__WEBPACK_IMPORTED_MODULE_26__.TraceAPI.getInstance();

/** Entrypoint for propagation API */
var propagation = _api_propagation__WEBPACK_IMPORTED_MODULE_27__.PropagationAPI.getInstance();

/**
 * Entrypoint for Diag API.
 * Defines Diagnostic handler used for internal diagnostic logging operations.
 * The default provides a Noop DiagLogger implementation which may be changed via the
 * diag.setLogger(logger: DiagLogger) function.
 */
var diag = _api_diag__WEBPACK_IMPORTED_MODULE_28__.DiagAPI.instance();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    trace: trace,
    context: context,
    propagation: propagation,
    diag: diag,
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/internal/global-utils.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@opentelemetry/api/build/esm/internal/global-utils.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getGlobal": () => (/* binding */ getGlobal),
/* harmony export */   "registerGlobal": () => (/* binding */ registerGlobal),
/* harmony export */   "unregisterGlobal": () => (/* binding */ unregisterGlobal)
/* harmony export */ });
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../platform */ "./node_modules/@opentelemetry/api/build/esm/platform/browser/index.js");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../version */ "./node_modules/@opentelemetry/api/build/esm/version.js");
/* harmony import */ var _semver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./semver */ "./node_modules/@opentelemetry/api/build/esm/internal/semver.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



var major = _version__WEBPACK_IMPORTED_MODULE_1__.VERSION.split('.')[0];
var GLOBAL_OPENTELEMETRY_API_KEY = Symbol.for("opentelemetry.js.api." + major);
var _global = _platform__WEBPACK_IMPORTED_MODULE_0__._globalThis;
function registerGlobal(type, instance, diag, allowOverride) {
    var _a;
    if (allowOverride === void 0) { allowOverride = false; }
    var api = (_global[GLOBAL_OPENTELEMETRY_API_KEY] = (_a = _global[GLOBAL_OPENTELEMETRY_API_KEY]) !== null && _a !== void 0 ? _a : {
        version: _version__WEBPACK_IMPORTED_MODULE_1__.VERSION,
    });
    if (!allowOverride && api[type]) {
        // already registered an API of this type
        var err = new Error("@opentelemetry/api: Attempted duplicate registration of API: " + type);
        diag.error(err.stack || err.message);
        return false;
    }
    if (api.version !== _version__WEBPACK_IMPORTED_MODULE_1__.VERSION) {
        // All registered APIs must be of the same version exactly
        var err = new Error('@opentelemetry/api: All API registration versions must match');
        diag.error(err.stack || err.message);
        return false;
    }
    api[type] = instance;
    diag.debug("@opentelemetry/api: Registered a global for " + type + " v" + _version__WEBPACK_IMPORTED_MODULE_1__.VERSION + ".");
    return true;
}
function getGlobal(type) {
    var _a, _b;
    var globalVersion = (_a = _global[GLOBAL_OPENTELEMETRY_API_KEY]) === null || _a === void 0 ? void 0 : _a.version;
    if (!globalVersion || !(0,_semver__WEBPACK_IMPORTED_MODULE_2__.isCompatible)(globalVersion)) {
        return;
    }
    return (_b = _global[GLOBAL_OPENTELEMETRY_API_KEY]) === null || _b === void 0 ? void 0 : _b[type];
}
function unregisterGlobal(type, diag) {
    diag.debug("@opentelemetry/api: Unregistering a global for " + type + " v" + _version__WEBPACK_IMPORTED_MODULE_1__.VERSION + ".");
    var api = _global[GLOBAL_OPENTELEMETRY_API_KEY];
    if (api) {
        delete api[type];
    }
}
//# sourceMappingURL=global-utils.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/internal/semver.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@opentelemetry/api/build/esm/internal/semver.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_makeCompatibilityCheck": () => (/* binding */ _makeCompatibilityCheck),
/* harmony export */   "isCompatible": () => (/* binding */ isCompatible)
/* harmony export */ });
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../version */ "./node_modules/@opentelemetry/api/build/esm/version.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var re = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
/**
 * Create a function to test an API version to see if it is compatible with the provided ownVersion.
 *
 * The returned function has the following semantics:
 * - Exact match is always compatible
 * - Major versions must match exactly
 *    - 1.x package cannot use global 2.x package
 *    - 2.x package cannot use global 1.x package
 * - The minor version of the API module requesting access to the global API must be less than or equal to the minor version of this API
 *    - 1.3 package may use 1.4 global because the later global contains all functions 1.3 expects
 *    - 1.4 package may NOT use 1.3 global because it may try to call functions which don't exist on 1.3
 * - If the major version is 0, the minor version is treated as the major and the patch is treated as the minor
 * - Patch and build tag differences are not considered at this time
 *
 * @param ownVersion version which should be checked against
 */
function _makeCompatibilityCheck(ownVersion) {
    var acceptedVersions = new Set([ownVersion]);
    var rejectedVersions = new Set();
    var myVersionMatch = ownVersion.match(re);
    if (!myVersionMatch) {
        // we cannot guarantee compatibility so we always return noop
        return function () { return false; };
    }
    var ownVersionParsed = {
        major: +myVersionMatch[1],
        minor: +myVersionMatch[2],
        patch: +myVersionMatch[3],
        prerelease: myVersionMatch[4],
    };
    // if ownVersion has a prerelease tag, versions must match exactly
    if (ownVersionParsed.prerelease != null) {
        return function isExactmatch(globalVersion) {
            return globalVersion === ownVersion;
        };
    }
    function _reject(v) {
        rejectedVersions.add(v);
        return false;
    }
    function _accept(v) {
        acceptedVersions.add(v);
        return true;
    }
    return function isCompatible(globalVersion) {
        if (acceptedVersions.has(globalVersion)) {
            return true;
        }
        if (rejectedVersions.has(globalVersion)) {
            return false;
        }
        var globalVersionMatch = globalVersion.match(re);
        if (!globalVersionMatch) {
            // cannot parse other version
            // we cannot guarantee compatibility so we always noop
            return _reject(globalVersion);
        }
        var globalVersionParsed = {
            major: +globalVersionMatch[1],
            minor: +globalVersionMatch[2],
            patch: +globalVersionMatch[3],
            prerelease: globalVersionMatch[4],
        };
        // if globalVersion has a prerelease tag, versions must match exactly
        if (globalVersionParsed.prerelease != null) {
            return _reject(globalVersion);
        }
        // major versions must match
        if (ownVersionParsed.major !== globalVersionParsed.major) {
            return _reject(globalVersion);
        }
        if (ownVersionParsed.major === 0) {
            if (ownVersionParsed.minor === globalVersionParsed.minor &&
                ownVersionParsed.patch <= globalVersionParsed.patch) {
                return _accept(globalVersion);
            }
            return _reject(globalVersion);
        }
        if (ownVersionParsed.minor <= globalVersionParsed.minor) {
            return _accept(globalVersion);
        }
        return _reject(globalVersion);
    };
}
/**
 * Test an API version to see if it is compatible with this API.
 *
 * - Exact match is always compatible
 * - Major versions must match exactly
 *    - 1.x package cannot use global 2.x package
 *    - 2.x package cannot use global 1.x package
 * - The minor version of the API module requesting access to the global API must be less than or equal to the minor version of this API
 *    - 1.3 package may use 1.4 global because the later global contains all functions 1.3 expects
 *    - 1.4 package may NOT use 1.3 global because it may try to call functions which don't exist on 1.3
 * - If the major version is 0, the minor version is treated as the major and the patch is treated as the minor
 * - Patch and build tag differences are not considered at this time
 *
 * @param version version of the API requesting an instance of the global API
 */
var isCompatible = _makeCompatibilityCheck(_version__WEBPACK_IMPORTED_MODULE_0__.VERSION);
//# sourceMappingURL=semver.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/platform/browser/globalThis.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@opentelemetry/api/build/esm/platform/browser/globalThis.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_globalThis": () => (/* binding */ _globalThis)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Updates to this file should also be replicated to @opentelemetry/api-metrics and
// @opentelemetry/core too.
/**
 * - globalThis (New standard)
 * - self (Will return the current window instance for supported browsers)
 * - window (fallback for older browser implementations)
 * - global (NodeJS implementation)
 * - <object> (When all else fails)
 */
/** only globals that common to node and browsers are allowed */
// eslint-disable-next-line node/no-unsupported-features/es-builtins, no-undef
var _globalThis = typeof globalThis === 'object' ? globalThis :
    typeof self === 'object' ? self :
        typeof window === 'object' ? window :
            typeof __webpack_require__.g === 'object' ? __webpack_require__.g :
                {};
//# sourceMappingURL=globalThis.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/platform/browser/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@opentelemetry/api/build/esm/platform/browser/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_globalThis": () => (/* reexport safe */ _globalThis__WEBPACK_IMPORTED_MODULE_0__._globalThis)
/* harmony export */ });
/* harmony import */ var _globalThis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globalThis */ "./node_modules/@opentelemetry/api/build/esm/platform/browser/globalThis.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/propagation/NoopTextMapPropagator.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@opentelemetry/api/build/esm/propagation/NoopTextMapPropagator.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoopTextMapPropagator": () => (/* binding */ NoopTextMapPropagator)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * No-op implementations of {@link TextMapPropagator}.
 */
var NoopTextMapPropagator = /** @class */ (function () {
    function NoopTextMapPropagator() {
    }
    /** Noop inject function does nothing */
    NoopTextMapPropagator.prototype.inject = function (_context, _carrier) { };
    /** Noop extract function does nothing and returns the input context */
    NoopTextMapPropagator.prototype.extract = function (context, _carrier) {
        return context;
    };
    NoopTextMapPropagator.prototype.fields = function () {
        return [];
    };
    return NoopTextMapPropagator;
}());

//# sourceMappingURL=NoopTextMapPropagator.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/propagation/TextMapPropagator.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@opentelemetry/api/build/esm/propagation/TextMapPropagator.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultTextMapGetter": () => (/* binding */ defaultTextMapGetter),
/* harmony export */   "defaultTextMapSetter": () => (/* binding */ defaultTextMapSetter)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var defaultTextMapGetter = {
    get: function (carrier, key) {
        if (carrier == null) {
            return undefined;
        }
        return carrier[key];
    },
    keys: function (carrier) {
        if (carrier == null) {
            return [];
        }
        return Object.keys(carrier);
    },
};
var defaultTextMapSetter = {
    set: function (carrier, key, value) {
        if (carrier == null) {
            return;
        }
        carrier[key] = value;
    },
};
//# sourceMappingURL=TextMapPropagator.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/trace/NonRecordingSpan.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@opentelemetry/api/build/esm/trace/NonRecordingSpan.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NonRecordingSpan": () => (/* binding */ NonRecordingSpan)
/* harmony export */ });
/* harmony import */ var _invalid_span_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invalid-span-constants */ "./node_modules/@opentelemetry/api/build/esm/trace/invalid-span-constants.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * The NonRecordingSpan is the default {@link Span} that is used when no Span
 * implementation is available. All operations are no-op including context
 * propagation.
 */
var NonRecordingSpan = /** @class */ (function () {
    function NonRecordingSpan(_spanContext) {
        if (_spanContext === void 0) { _spanContext = _invalid_span_constants__WEBPACK_IMPORTED_MODULE_0__.INVALID_SPAN_CONTEXT; }
        this._spanContext = _spanContext;
    }
    // Returns a SpanContext.
    NonRecordingSpan.prototype.spanContext = function () {
        return this._spanContext;
    };
    // By default does nothing
    NonRecordingSpan.prototype.setAttribute = function (_key, _value) {
        return this;
    };
    // By default does nothing
    NonRecordingSpan.prototype.setAttributes = function (_attributes) {
        return this;
    };
    // By default does nothing
    NonRecordingSpan.prototype.addEvent = function (_name, _attributes) {
        return this;
    };
    // By default does nothing
    NonRecordingSpan.prototype.setStatus = function (_status) {
        return this;
    };
    // By default does nothing
    NonRecordingSpan.prototype.updateName = function (_name) {
        return this;
    };
    // By default does nothing
    NonRecordingSpan.prototype.end = function (_endTime) { };
    // isRecording always returns false for NonRecordingSpan.
    NonRecordingSpan.prototype.isRecording = function () {
        return false;
    };
    // By default does nothing
    NonRecordingSpan.prototype.recordException = function (_exception, _time) { };
    return NonRecordingSpan;
}());

//# sourceMappingURL=NonRecordingSpan.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/trace/NoopTracer.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@opentelemetry/api/build/esm/trace/NoopTracer.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoopTracer": () => (/* binding */ NoopTracer)
/* harmony export */ });
/* harmony import */ var _api_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/context */ "./node_modules/@opentelemetry/api/build/esm/api/context.js");
/* harmony import */ var _trace_context_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../trace/context-utils */ "./node_modules/@opentelemetry/api/build/esm/trace/context-utils.js");
/* harmony import */ var _NonRecordingSpan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NonRecordingSpan */ "./node_modules/@opentelemetry/api/build/esm/trace/NonRecordingSpan.js");
/* harmony import */ var _spancontext_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spancontext-utils */ "./node_modules/@opentelemetry/api/build/esm/trace/spancontext-utils.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




var context = _api_context__WEBPACK_IMPORTED_MODULE_0__.ContextAPI.getInstance();
/**
 * No-op implementations of {@link Tracer}.
 */
var NoopTracer = /** @class */ (function () {
    function NoopTracer() {
    }
    // startSpan starts a noop span.
    NoopTracer.prototype.startSpan = function (name, options, context) {
        var root = Boolean(options === null || options === void 0 ? void 0 : options.root);
        if (root) {
            return new _NonRecordingSpan__WEBPACK_IMPORTED_MODULE_2__.NonRecordingSpan();
        }
        var parentFromContext = context && (0,_trace_context_utils__WEBPACK_IMPORTED_MODULE_1__.getSpanContext)(context);
        if (isSpanContext(parentFromContext) &&
            (0,_spancontext_utils__WEBPACK_IMPORTED_MODULE_3__.isSpanContextValid)(parentFromContext)) {
            return new _NonRecordingSpan__WEBPACK_IMPORTED_MODULE_2__.NonRecordingSpan(parentFromContext);
        }
        else {
            return new _NonRecordingSpan__WEBPACK_IMPORTED_MODULE_2__.NonRecordingSpan();
        }
    };
    NoopTracer.prototype.startActiveSpan = function (name, arg2, arg3, arg4) {
        var opts;
        var ctx;
        var fn;
        if (arguments.length < 2) {
            return;
        }
        else if (arguments.length === 2) {
            fn = arg2;
        }
        else if (arguments.length === 3) {
            opts = arg2;
            fn = arg3;
        }
        else {
            opts = arg2;
            ctx = arg3;
            fn = arg4;
        }
        var parentContext = ctx !== null && ctx !== void 0 ? ctx : context.active();
        var span = this.startSpan(name, opts, parentContext);
        var contextWithSpanSet = (0,_trace_context_utils__WEBPACK_IMPORTED_MODULE_1__.setSpan)(parentContext, span);
        return context.with(contextWithSpanSet, fn, undefined, span);
    };
    return NoopTracer;
}());

function isSpanContext(spanContext) {
    return (typeof spanContext === 'object' &&
        typeof spanContext['spanId'] === 'string' &&
        typeof spanContext['traceId'] === 'string' &&
        typeof spanContext['traceFlags'] === 'number');
}
//# sourceMappingURL=NoopTracer.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/trace/NoopTracerProvider.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@opentelemetry/api/build/esm/trace/NoopTracerProvider.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoopTracerProvider": () => (/* binding */ NoopTracerProvider)
/* harmony export */ });
/* harmony import */ var _NoopTracer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NoopTracer */ "./node_modules/@opentelemetry/api/build/esm/trace/NoopTracer.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * An implementation of the {@link TracerProvider} which returns an impotent
 * Tracer for all calls to `getTracer`.
 *
 * All operations are no-op.
 */
var NoopTracerProvider = /** @class */ (function () {
    function NoopTracerProvider() {
    }
    NoopTracerProvider.prototype.getTracer = function (_name, _version) {
        return new _NoopTracer__WEBPACK_IMPORTED_MODULE_0__.NoopTracer();
    };
    return NoopTracerProvider;
}());

//# sourceMappingURL=NoopTracerProvider.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/trace/ProxyTracer.js":
/*!************************************************************************!*\
  !*** ./node_modules/@opentelemetry/api/build/esm/trace/ProxyTracer.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProxyTracer": () => (/* binding */ ProxyTracer)
/* harmony export */ });
/* harmony import */ var _NoopTracer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NoopTracer */ "./node_modules/@opentelemetry/api/build/esm/trace/NoopTracer.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var NOOP_TRACER = new _NoopTracer__WEBPACK_IMPORTED_MODULE_0__.NoopTracer();
/**
 * Proxy tracer provided by the proxy tracer provider
 */
var ProxyTracer = /** @class */ (function () {
    function ProxyTracer(_provider, name, version) {
        this._provider = _provider;
        this.name = name;
        this.version = version;
    }
    ProxyTracer.prototype.startSpan = function (name, options, context) {
        return this._getTracer().startSpan(name, options, context);
    };
    ProxyTracer.prototype.startActiveSpan = function (_name, _options, _context, _fn) {
        var tracer = this._getTracer();
        return Reflect.apply(tracer.startActiveSpan, tracer, arguments);
    };
    /**
     * Try to get a tracer from the proxy tracer provider.
     * If the proxy tracer provider has no delegate, return a noop tracer.
     */
    ProxyTracer.prototype._getTracer = function () {
        if (this._delegate) {
            return this._delegate;
        }
        var tracer = this._provider.getDelegateTracer(this.name, this.version);
        if (!tracer) {
            return NOOP_TRACER;
        }
        this._delegate = tracer;
        return this._delegate;
    };
    return ProxyTracer;
}());

//# sourceMappingURL=ProxyTracer.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/trace/ProxyTracerProvider.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@opentelemetry/api/build/esm/trace/ProxyTracerProvider.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProxyTracerProvider": () => (/* binding */ ProxyTracerProvider)
/* harmony export */ });
/* harmony import */ var _ProxyTracer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProxyTracer */ "./node_modules/@opentelemetry/api/build/esm/trace/ProxyTracer.js");
/* harmony import */ var _NoopTracerProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NoopTracerProvider */ "./node_modules/@opentelemetry/api/build/esm/trace/NoopTracerProvider.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var NOOP_TRACER_PROVIDER = new _NoopTracerProvider__WEBPACK_IMPORTED_MODULE_1__.NoopTracerProvider();
/**
 * Tracer provider which provides {@link ProxyTracer}s.
 *
 * Before a delegate is set, tracers provided are NoOp.
 *   When a delegate is set, traces are provided from the delegate.
 *   When a delegate is set after tracers have already been provided,
 *   all tracers already provided will use the provided delegate implementation.
 */
var ProxyTracerProvider = /** @class */ (function () {
    function ProxyTracerProvider() {
    }
    /**
     * Get a {@link ProxyTracer}
     */
    ProxyTracerProvider.prototype.getTracer = function (name, version) {
        var _a;
        return ((_a = this.getDelegateTracer(name, version)) !== null && _a !== void 0 ? _a : new _ProxyTracer__WEBPACK_IMPORTED_MODULE_0__.ProxyTracer(this, name, version));
    };
    ProxyTracerProvider.prototype.getDelegate = function () {
        var _a;
        return (_a = this._delegate) !== null && _a !== void 0 ? _a : NOOP_TRACER_PROVIDER;
    };
    /**
     * Set the delegate tracer provider
     */
    ProxyTracerProvider.prototype.setDelegate = function (delegate) {
        this._delegate = delegate;
    };
    ProxyTracerProvider.prototype.getDelegateTracer = function (name, version) {
        var _a;
        return (_a = this._delegate) === null || _a === void 0 ? void 0 : _a.getTracer(name, version);
    };
    return ProxyTracerProvider;
}());

//# sourceMappingURL=ProxyTracerProvider.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/trace/Sampler.js":
/*!********************************************************************!*\
  !*** ./node_modules/@opentelemetry/api/build/esm/trace/Sampler.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=Sampler.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/trace/SamplingResult.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@opentelemetry/api/build/esm/trace/SamplingResult.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SamplingDecision": () => (/* binding */ SamplingDecision)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A sampling decision that determines how a {@link Span} will be recorded
 * and collected.
 */
var SamplingDecision;
(function (SamplingDecision) {
    /**
     * `Span.isRecording() === false`, span will not be recorded and all events
     * and attributes will be dropped.
     */
    SamplingDecision[SamplingDecision["NOT_RECORD"] = 0] = "NOT_RECORD";
    /**
     * `Span.isRecording() === true`, but `Sampled` flag in {@link TraceFlags}
     * MUST NOT be set.
     */
    SamplingDecision[SamplingDecision["RECORD"] = 1] = "RECORD";
    /**
     * `Span.isRecording() === true` AND `Sampled` flag in {@link TraceFlags}
     * MUST be set.
     */
    SamplingDecision[SamplingDecision["RECORD_AND_SAMPLED"] = 2] = "RECORD_AND_SAMPLED";
})(SamplingDecision || (SamplingDecision = {}));
//# sourceMappingURL=SamplingResult.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/trace/SpanOptions.js":
/*!************************************************************************!*\
  !*** ./node_modules/@opentelemetry/api/build/esm/trace/SpanOptions.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=SpanOptions.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/trace/attributes.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@opentelemetry/api/build/esm/trace/attributes.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=attributes.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/trace/context-utils.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@opentelemetry/api/build/esm/trace/context-utils.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteSpan": () => (/* binding */ deleteSpan),
/* harmony export */   "getSpan": () => (/* binding */ getSpan),
/* harmony export */   "getSpanContext": () => (/* binding */ getSpanContext),
/* harmony export */   "setSpan": () => (/* binding */ setSpan),
/* harmony export */   "setSpanContext": () => (/* binding */ setSpanContext)
/* harmony export */ });
/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../context/context */ "./node_modules/@opentelemetry/api/build/esm/context/context.js");
/* harmony import */ var _NonRecordingSpan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NonRecordingSpan */ "./node_modules/@opentelemetry/api/build/esm/trace/NonRecordingSpan.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * span key
 */
var SPAN_KEY = (0,_context_context__WEBPACK_IMPORTED_MODULE_0__.createContextKey)('OpenTelemetry Context Key SPAN');
/**
 * Return the span if one exists
 *
 * @param context context to get span from
 */
function getSpan(context) {
    return context.getValue(SPAN_KEY) || undefined;
}
/**
 * Set the span on a context
 *
 * @param context context to use as parent
 * @param span span to set active
 */
function setSpan(context, span) {
    return context.setValue(SPAN_KEY, span);
}
/**
 * Remove current span stored in the context
 *
 * @param context context to delete span from
 */
function deleteSpan(context) {
    return context.deleteValue(SPAN_KEY);
}
/**
 * Wrap span context in a NoopSpan and set as span in a new
 * context
 *
 * @param context context to set active span on
 * @param spanContext span context to be wrapped
 */
function setSpanContext(context, spanContext) {
    return setSpan(context, new _NonRecordingSpan__WEBPACK_IMPORTED_MODULE_1__.NonRecordingSpan(spanContext));
}
/**
 * Get the span context of the span if it exists.
 *
 * @param context context to get values from
 */
function getSpanContext(context) {
    var _a;
    return (_a = getSpan(context)) === null || _a === void 0 ? void 0 : _a.spanContext();
}
//# sourceMappingURL=context-utils.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/trace/invalid-span-constants.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@opentelemetry/api/build/esm/trace/invalid-span-constants.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "INVALID_SPANID": () => (/* binding */ INVALID_SPANID),
/* harmony export */   "INVALID_SPAN_CONTEXT": () => (/* binding */ INVALID_SPAN_CONTEXT),
/* harmony export */   "INVALID_TRACEID": () => (/* binding */ INVALID_TRACEID)
/* harmony export */ });
/* harmony import */ var _trace_flags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trace_flags */ "./node_modules/@opentelemetry/api/build/esm/trace/trace_flags.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var INVALID_SPANID = '0000000000000000';
var INVALID_TRACEID = '00000000000000000000000000000000';
var INVALID_SPAN_CONTEXT = {
    traceId: INVALID_TRACEID,
    spanId: INVALID_SPANID,
    traceFlags: _trace_flags__WEBPACK_IMPORTED_MODULE_0__.TraceFlags.NONE,
};
//# sourceMappingURL=invalid-span-constants.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/trace/link.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@opentelemetry/api/build/esm/trace/link.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=link.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/trace/span.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@opentelemetry/api/build/esm/trace/span.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=span.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/trace/span_context.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@opentelemetry/api/build/esm/trace/span_context.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=span_context.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/trace/span_kind.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@opentelemetry/api/build/esm/trace/span_kind.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpanKind": () => (/* binding */ SpanKind)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var SpanKind;
(function (SpanKind) {
    /** Default value. Indicates that the span is used internally. */
    SpanKind[SpanKind["INTERNAL"] = 0] = "INTERNAL";
    /**
     * Indicates that the span covers server-side handling of an RPC or other
     * remote request.
     */
    SpanKind[SpanKind["SERVER"] = 1] = "SERVER";
    /**
     * Indicates that the span covers the client-side wrapper around an RPC or
     * other remote request.
     */
    SpanKind[SpanKind["CLIENT"] = 2] = "CLIENT";
    /**
     * Indicates that the span describes producer sending a message to a
     * broker. Unlike client and server, there is no direct critical path latency
     * relationship between producer and consumer spans.
     */
    SpanKind[SpanKind["PRODUCER"] = 3] = "PRODUCER";
    /**
     * Indicates that the span describes consumer receiving a message from a
     * broker. Unlike client and server, there is no direct critical path latency
     * relationship between producer and consumer spans.
     */
    SpanKind[SpanKind["CONSUMER"] = 4] = "CONSUMER";
})(SpanKind || (SpanKind = {}));
//# sourceMappingURL=span_kind.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/trace/spancontext-utils.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@opentelemetry/api/build/esm/trace/spancontext-utils.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isSpanContextValid": () => (/* binding */ isSpanContextValid),
/* harmony export */   "isValidSpanId": () => (/* binding */ isValidSpanId),
/* harmony export */   "isValidTraceId": () => (/* binding */ isValidTraceId),
/* harmony export */   "wrapSpanContext": () => (/* binding */ wrapSpanContext)
/* harmony export */ });
/* harmony import */ var _invalid_span_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invalid-span-constants */ "./node_modules/@opentelemetry/api/build/esm/trace/invalid-span-constants.js");
/* harmony import */ var _NonRecordingSpan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NonRecordingSpan */ "./node_modules/@opentelemetry/api/build/esm/trace/NonRecordingSpan.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var VALID_TRACEID_REGEX = /^([0-9a-f]{32})$/i;
var VALID_SPANID_REGEX = /^[0-9a-f]{16}$/i;
function isValidTraceId(traceId) {
    return VALID_TRACEID_REGEX.test(traceId) && traceId !== _invalid_span_constants__WEBPACK_IMPORTED_MODULE_0__.INVALID_TRACEID;
}
function isValidSpanId(spanId) {
    return VALID_SPANID_REGEX.test(spanId) && spanId !== _invalid_span_constants__WEBPACK_IMPORTED_MODULE_0__.INVALID_SPANID;
}
/**
 * Returns true if this {@link SpanContext} is valid.
 * @return true if this {@link SpanContext} is valid.
 */
function isSpanContextValid(spanContext) {
    return (isValidTraceId(spanContext.traceId) && isValidSpanId(spanContext.spanId));
}
/**
 * Wrap the given {@link SpanContext} in a new non-recording {@link Span}
 *
 * @param spanContext span context to be wrapped
 * @returns a new non-recording {@link Span} with the provided context
 */
function wrapSpanContext(spanContext) {
    return new _NonRecordingSpan__WEBPACK_IMPORTED_MODULE_1__.NonRecordingSpan(spanContext);
}
//# sourceMappingURL=spancontext-utils.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/trace/status.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@opentelemetry/api/build/esm/trace/status.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpanStatusCode": () => (/* binding */ SpanStatusCode)
/* harmony export */ });
/**
 * An enumeration of status codes.
 */
var SpanStatusCode;
(function (SpanStatusCode) {
    /**
     * The default status.
     */
    SpanStatusCode[SpanStatusCode["UNSET"] = 0] = "UNSET";
    /**
     * The operation has been validated by an Application developer or
     * Operator to have completed successfully.
     */
    SpanStatusCode[SpanStatusCode["OK"] = 1] = "OK";
    /**
     * The operation contains an error.
     */
    SpanStatusCode[SpanStatusCode["ERROR"] = 2] = "ERROR";
})(SpanStatusCode || (SpanStatusCode = {}));
//# sourceMappingURL=status.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/trace/trace_flags.js":
/*!************************************************************************!*\
  !*** ./node_modules/@opentelemetry/api/build/esm/trace/trace_flags.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TraceFlags": () => (/* binding */ TraceFlags)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var TraceFlags;
(function (TraceFlags) {
    /** Represents no flag set. */
    TraceFlags[TraceFlags["NONE"] = 0] = "NONE";
    /** Bit to represent whether trace is sampled in trace flags. */
    TraceFlags[TraceFlags["SAMPLED"] = 1] = "SAMPLED";
})(TraceFlags || (TraceFlags = {}));
//# sourceMappingURL=trace_flags.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/trace/trace_state.js":
/*!************************************************************************!*\
  !*** ./node_modules/@opentelemetry/api/build/esm/trace/trace_state.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=trace_state.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/trace/tracer.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@opentelemetry/api/build/esm/trace/tracer.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=tracer.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/trace/tracer_provider.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@opentelemetry/api/build/esm/trace/tracer_provider.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=tracer_provider.js.map

/***/ }),

/***/ "./node_modules/@opentelemetry/api/build/esm/version.js":
/*!**************************************************************!*\
  !*** ./node_modules/@opentelemetry/api/build/esm/version.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VERSION": () => (/* binding */ VERSION)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// this is autogenerated file, see scripts/version-update.js
var VERSION = '1.0.4';
//# sourceMappingURL=version.js.map

/***/ }),

/***/ "./resources/js/pages/components/render.js":
/*!*************************************************!*\
  !*** ./resources/js/pages/components/render.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/src/jquery.js");
var RENDER = {
  init: function init(result) {
    var data = result.data;
    this.renderName(data.name);
    this.renderProfession(data.profession);
    this.renderPhones(data.phoneNumbers);
    this.renderEmails(data.emails);
    this.renderWebsites(data.websites);
    this.renderDateOfBirth(data.dateOfBirth);
    this.renderLocation(data.location);
    this.renderObjective(data.objective);
    this.renderLanguages(data.languages);
    this.renderSummary(data.summary);
    this.renderEducations(data.education);
    this.renderSkills(data.skills);
    this.renderWorkExperiences(data.workExperience);
  },
  renderName: function renderName(names) {
    var _names$raw, _names$first, _names$last;

    $('.name').append("<p>Raw: <span>".concat((_names$raw = names.raw) !== null && _names$raw !== void 0 ? _names$raw : 'N/A', "</span></p>"));
    $('.name').append("<p>First: <span>".concat((_names$first = names.first) !== null && _names$first !== void 0 ? _names$first : 'N/A', "</span></p>"));
    $('.name').append("<p>Last: <span>".concat((_names$last = names.last) !== null && _names$last !== void 0 ? _names$last : 'N/A', "</span></p>"));
  },
  renderProfession: function renderProfession(profession) {
    $('.profession').append("<p><span>".concat(profession !== null && profession !== void 0 ? profession : 'N/A', "</span></p>"));
  },
  renderPhones: function renderPhones(phones) {
    phones.forEach(function (phone) {
      $('.phones').append("<p><span>".concat(phone !== null && phone !== void 0 ? phone : 'N/A', "</span></p>"));
    });
  },
  renderEmails: function renderEmails(emails) {
    emails.forEach(function (email) {
      $('.emails').append("<p><span>".concat(email !== null && email !== void 0 ? email : 'N/A', "</span></p>"));
    });
  },
  renderWebsites: function renderWebsites(websites) {
    websites.forEach(function (website) {
      $('.websites').append("<p><span>".concat(website !== null && website !== void 0 ? website : 'N/A', "</span></p>"));
    });
  },
  renderDateOfBirth: function renderDateOfBirth(date) {
    $('.date-of-birth').append("<p><span>".concat(date ? new Date(date).toISOString().split('T')[0] : 'N/A', "</span></p>"));
  },
  renderLocation: function renderLocation(location) {
    var _location$rawInput;

    $('.location').append("<p><span>".concat((_location$rawInput = location.rawInput) !== null && _location$rawInput !== void 0 ? _location$rawInput : 'N/A', "</span></p>"));
  },
  renderObjective: function renderObjective(objective) {
    $('.objective').append("<p><span>".concat(objective !== null && objective !== void 0 ? objective : 'N/A', "</span></p>"));
  },
  renderLanguages: function renderLanguages(languages) {
    languages.forEach(function (language) {
      $('.langagues').append("<p><span>".concat(language !== null && language !== void 0 ? language : 'N/A', "</span></p>"));
    });
  },
  renderSummary: function renderSummary(summary) {
    $('.summary').append("<p><span>".concat(summary !== null && summary !== void 0 ? summary : 'N/A', "</span></p>"));
  },
  renderEducations: function renderEducations(educations) {
    educations.forEach(function (education) {
      var _education$organizati;

      $('.educations').append("\n                <p><b>".concat((_education$organizati = education.organization) !== null && _education$organizati !== void 0 ? _education$organizati : 'N/A', "</b></p>\n                <p>Location: <span>").concat(education.location ? education.location.rawInput : 'N/A', "</span></p>\n                <p>From: <span>").concat(education.dates ? new Date(education.dates.startDate).toISOString().split('T')[0] : 'N/A', "</span></p>\n                <p>To: <span>").concat(education.dates ? new Date(education.dates.completionDate).toISOString().split('T')[0] : 'N/A', "</span></p>\n            "));
    });
  },
  renderSkills: function renderSkills(skills) {
    skills.forEach(function (skill) {
      var _skill$name;

      $('.skills').append("<p><span>".concat((_skill$name = skill.name) !== null && _skill$name !== void 0 ? _skill$name : 'N/A', "</span></p>"));
    });
  },
  renderWorkExperiences: function renderWorkExperiences(exps) {
    exps.forEach(function (exp) {
      var _exp$organization, _exp$jobDescription;

      $('.experiences').append("\n                <p><b>".concat(exp.jobTitle, "</b> at <b>").concat((_exp$organization = exp.organization) !== null && _exp$organization !== void 0 ? _exp$organization : 'N/A', "</b></p>\n                <p>Role: <span>").concat(exp.occupation ? exp.occupation.jobTitleNormalized : 'N/A', "</span></p>\n                <p>Description: <span>").concat((_exp$jobDescription = exp.jobDescription) !== null && _exp$jobDescription !== void 0 ? _exp$jobDescription : 'N/A', "</span></p>\n                <p>From: <span>").concat(exp.dates ? new Date(exp.dates.startDate).toISOString().split('T')[0] : 'N/A', "</span></p>\n                <p>To: <span>").concat(exp.dates ? new Date(exp.dates.endDate).toISOString().split('T')[0] : 'N/A', "</span></p>\n            "));
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RENDER);

/***/ }),

/***/ "./resources/js/pages/home.js":
/*!************************************!*\
  !*** ./resources/js/pages/home.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/render */ "./resources/js/pages/components/render.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/src/jquery.js");


var _require = __webpack_require__(/*! @affinda/affinda */ "./node_modules/@affinda/affinda/dist-esm/index.js"),
    AffindaCredential = _require.AffindaCredential,
    AffindaAPI = _require.AffindaAPI;

var credential = new AffindaCredential(AFFINDA_CREDENTIAL);
var client = new AffindaAPI(credential);
var HOME = {
  file: null,
  init: function init() {
    this.uploadFile();
    this.parsingFile();
  },
  uploadFile: function uploadFile() {
    $("#cv").change(function (event) {
      HOME.file = event.target.files[0];
    });
  },
  parsingFile: function parsingFile() {
    $("#parsing-file").click(function () {
      if (HOME.file) {
        $('.mask-loader').removeClass('hide');
        $('.clear').html('');
        $('#files').prop('files'), // client.createResume({url: "https://api.affinda.com/static/sample_resumes/example.pdf"})
        client.createResume({
          file: HOME.file
        }).then(function (result) {
          _components_render__WEBPACK_IMPORTED_MODULE_0__["default"].init(result);
          $('.mask-loader').addClass('hide');
        })["catch"](function (error) {
          console.log("An error occurred:");
          console.dir(error);
          $('.mask-loader').addClass('hide');
        });
      }
    });
  }
};
$(function () {
  HOME.init();
});

/***/ }),

/***/ "./node_modules/jquery/external/sizzle/dist/sizzle.js":
/*!************************************************************!*\
  !*** ./node_modules/jquery/external/sizzle/dist/sizzle.js ***!
  \************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Sizzle CSS Selector Engine v2.3.6
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2021-02-16
 */
( function( window ) {
var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

			// Strip the backslash prefix from a non-hex escape sequence
			nonHex :

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android<4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Can't trust NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Support: IE 8 only
				// Exclude object elements
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					if ( newContext !== context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem && elem.namespaceURI,
		docElem = elem && ( elem.ownerDocument || elem ).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	// Safari 4 - 5 only, Opera <=11.6 - 12.x only
	// IE/Edge & older browsers don't support the :scope pseudo-class.
	// Support: Safari 6.0 only
	// Safari 6.0 supports :scope but it's an alias of :root there.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a `[name='']` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Firefox <=3.6 - 5 only
			// Old Firefox doesn't throw on a badly-escaped identifier.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: Opera 10 - 11 only
			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Otherwise nodes in our document sort first
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

				// As well, disconnected nodes are said to be in a document
				// fragment in IE 9
				elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {

		// If no nodeType, this is expected to be an array
		while ( ( node = elem[ i++ ] ) ) {

			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {

			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}

	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {

								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		"not": markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos[ "empty" ]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :

			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?

				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// If the preceding token was a descendant combinator, insert an implicit any-element `*`
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

// EXPOSE
var _sizzle = window.Sizzle;

Sizzle.noConflict = function() {
	if ( window.Sizzle === Sizzle ) {
		window.Sizzle = _sizzle;
	}

	return Sizzle;
};

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return Sizzle;
	}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

// Sizzle requires that there be a global window in Common-JS like environments
} else {}

// EXPOSE

} )( window );


/***/ }),

/***/ "./node_modules/jquery/src/ajax.js":
/*!*****************************************!*\
  !*** ./node_modules/jquery/src/ajax.js ***!
  \*****************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./core */ "./node_modules/jquery/src/core.js"),
	__webpack_require__(/*! ./var/document */ "./node_modules/jquery/src/var/document.js"),
	__webpack_require__(/*! ./var/isFunction */ "./node_modules/jquery/src/var/isFunction.js"),
	__webpack_require__(/*! ./var/rnothtmlwhite */ "./node_modules/jquery/src/var/rnothtmlwhite.js"),
	__webpack_require__(/*! ./ajax/var/location */ "./node_modules/jquery/src/ajax/var/location.js"),
	__webpack_require__(/*! ./ajax/var/nonce */ "./node_modules/jquery/src/ajax/var/nonce.js"),
	__webpack_require__(/*! ./ajax/var/rquery */ "./node_modules/jquery/src/ajax/var/rquery.js"),

	__webpack_require__(/*! ./core/init */ "./node_modules/jquery/src/core/init.js"),
	__webpack_require__(/*! ./core/parseXML */ "./node_modules/jquery/src/core/parseXML.js"),
	__webpack_require__(/*! ./event/trigger */ "./node_modules/jquery/src/event/trigger.js"),
	__webpack_require__(/*! ./deferred */ "./node_modules/jquery/src/deferred.js"),
	__webpack_require__(/*! ./serialize */ "./node_modules/jquery/src/serialize.js") // jQuery.param
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, document, isFunction, rnothtmlwhite, location, nonce, rquery ) {

"use strict";

var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );

originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script but not if jsonp
			if ( !isSuccess &&
				jQuery.inArray( "script", s.dataTypes ) > -1 &&
				jQuery.inArray( "json", s.dataTypes ) < 0 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/ajax/jsonp.js":
/*!***********************************************!*\
  !*** ./node_modules/jquery/src/ajax/jsonp.js ***!
  \***********************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"),
	__webpack_require__(/*! ../var/isFunction */ "./node_modules/jquery/src/var/isFunction.js"),
	__webpack_require__(/*! ./var/nonce */ "./node_modules/jquery/src/ajax/var/nonce.js"),
	__webpack_require__(/*! ./var/rquery */ "./node_modules/jquery/src/ajax/var/rquery.js"),
	__webpack_require__(/*! ../ajax */ "./node_modules/jquery/src/ajax.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, isFunction, nonce, rquery ) {

"use strict";

var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/ajax/load.js":
/*!**********************************************!*\
  !*** ./node_modules/jquery/src/ajax/load.js ***!
  \**********************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"),
	__webpack_require__(/*! ../core/stripAndCollapse */ "./node_modules/jquery/src/core/stripAndCollapse.js"),
	__webpack_require__(/*! ../var/isFunction */ "./node_modules/jquery/src/var/isFunction.js"),
	__webpack_require__(/*! ../core/parseHTML */ "./node_modules/jquery/src/core/parseHTML.js"),
	__webpack_require__(/*! ../ajax */ "./node_modules/jquery/src/ajax.js"),
	__webpack_require__(/*! ../traversing */ "./node_modules/jquery/src/traversing.js"),
	__webpack_require__(/*! ../manipulation */ "./node_modules/jquery/src/manipulation.js"),
	__webpack_require__(/*! ../selector */ "./node_modules/jquery/src/selector.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, stripAndCollapse, isFunction ) {

"use strict";

/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/ajax/script.js":
/*!************************************************!*\
  !*** ./node_modules/jquery/src/ajax/script.js ***!
  \************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"),
	__webpack_require__(/*! ../var/document */ "./node_modules/jquery/src/var/document.js"),
	__webpack_require__(/*! ../ajax */ "./node_modules/jquery/src/ajax.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, document ) {

"use strict";

// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/ajax/var/location.js":
/*!******************************************************!*\
  !*** ./node_modules/jquery/src/ajax/var/location.js ***!
  \******************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	return window.location;
}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/ajax/var/nonce.js":
/*!***************************************************!*\
  !*** ./node_modules/jquery/src/ajax/var/nonce.js ***!
  \***************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	return { guid: Date.now() };
}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/ajax/var/rquery.js":
/*!****************************************************!*\
  !*** ./node_modules/jquery/src/ajax/var/rquery.js ***!
  \****************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	return ( /\?/ );
}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/ajax/xhr.js":
/*!*********************************************!*\
  !*** ./node_modules/jquery/src/ajax/xhr.js ***!
  \*********************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"),
	__webpack_require__(/*! ../var/support */ "./node_modules/jquery/src/var/support.js"),
	__webpack_require__(/*! ../ajax */ "./node_modules/jquery/src/ajax.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, support ) {

"use strict";

jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/attributes.js":
/*!***********************************************!*\
  !*** ./node_modules/jquery/src/attributes.js ***!
  \***********************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./core */ "./node_modules/jquery/src/core.js"),
	__webpack_require__(/*! ./attributes/attr */ "./node_modules/jquery/src/attributes/attr.js"),
	__webpack_require__(/*! ./attributes/prop */ "./node_modules/jquery/src/attributes/prop.js"),
	__webpack_require__(/*! ./attributes/classes */ "./node_modules/jquery/src/attributes/classes.js"),
	__webpack_require__(/*! ./attributes/val */ "./node_modules/jquery/src/attributes/val.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {

"use strict";

// Return jQuery for attributes-only inclusion
return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/attributes/attr.js":
/*!****************************************************!*\
  !*** ./node_modules/jquery/src/attributes/attr.js ***!
  \****************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"),
	__webpack_require__(/*! ../core/access */ "./node_modules/jquery/src/core/access.js"),
	__webpack_require__(/*! ../core/nodeName */ "./node_modules/jquery/src/core/nodeName.js"),
	__webpack_require__(/*! ./support */ "./node_modules/jquery/src/attributes/support.js"),
	__webpack_require__(/*! ../var/rnothtmlwhite */ "./node_modules/jquery/src/var/rnothtmlwhite.js"),
	__webpack_require__(/*! ../selector */ "./node_modules/jquery/src/selector.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, access, nodeName, support, rnothtmlwhite ) {

"use strict";

var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/attributes/classes.js":
/*!*******************************************************!*\
  !*** ./node_modules/jquery/src/attributes/classes.js ***!
  \*******************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"),
	__webpack_require__(/*! ../core/stripAndCollapse */ "./node_modules/jquery/src/core/stripAndCollapse.js"),
	__webpack_require__(/*! ../var/isFunction */ "./node_modules/jquery/src/var/isFunction.js"),
	__webpack_require__(/*! ../var/rnothtmlwhite */ "./node_modules/jquery/src/var/rnothtmlwhite.js"),
	__webpack_require__(/*! ../data/var/dataPriv */ "./node_modules/jquery/src/data/var/dataPriv.js"),
	__webpack_require__(/*! ../core/init */ "./node_modules/jquery/src/core/init.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, stripAndCollapse, isFunction, rnothtmlwhite, dataPriv ) {

"use strict";

function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
				return true;
			}
		}

		return false;
	}
} );

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/attributes/prop.js":
/*!****************************************************!*\
  !*** ./node_modules/jquery/src/attributes/prop.js ***!
  \****************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"),
	__webpack_require__(/*! ../core/access */ "./node_modules/jquery/src/core/access.js"),
	__webpack_require__(/*! ./support */ "./node_modules/jquery/src/attributes/support.js"),
	__webpack_require__(/*! ../selector */ "./node_modules/jquery/src/selector.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, access, support ) {

"use strict";

var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/attributes/support.js":
/*!*******************************************************!*\
  !*** ./node_modules/jquery/src/attributes/support.js ***!
  \*******************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../var/document */ "./node_modules/jquery/src/var/document.js"),
	__webpack_require__(/*! ../var/support */ "./node_modules/jquery/src/var/support.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( document, support ) {

"use strict";

( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();

return support;

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/attributes/val.js":
/*!***************************************************!*\
  !*** ./node_modules/jquery/src/attributes/val.js ***!
  \***************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"),
	__webpack_require__(/*! ../core/stripAndCollapse */ "./node_modules/jquery/src/core/stripAndCollapse.js"),
	__webpack_require__(/*! ./support */ "./node_modules/jquery/src/attributes/support.js"),
	__webpack_require__(/*! ../core/nodeName */ "./node_modules/jquery/src/core/nodeName.js"),
	__webpack_require__(/*! ../var/isFunction */ "./node_modules/jquery/src/var/isFunction.js"),

	__webpack_require__(/*! ../core/init */ "./node_modules/jquery/src/core/init.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, stripAndCollapse, support, nodeName, isFunction ) {

"use strict";

var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/callbacks.js":
/*!**********************************************!*\
  !*** ./node_modules/jquery/src/callbacks.js ***!
  \**********************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./core */ "./node_modules/jquery/src/core.js"),
	__webpack_require__(/*! ./core/toType */ "./node_modules/jquery/src/core/toType.js"),
	__webpack_require__(/*! ./var/isFunction */ "./node_modules/jquery/src/var/isFunction.js"),
	__webpack_require__(/*! ./var/rnothtmlwhite */ "./node_modules/jquery/src/var/rnothtmlwhite.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, toType, isFunction, rnothtmlwhite ) {

"use strict";

// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/core.js":
/*!*****************************************!*\
  !*** ./node_modules/jquery/src/core.js ***!
  \*****************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./var/arr */ "./node_modules/jquery/src/var/arr.js"),
	__webpack_require__(/*! ./var/getProto */ "./node_modules/jquery/src/var/getProto.js"),
	__webpack_require__(/*! ./var/slice */ "./node_modules/jquery/src/var/slice.js"),
	__webpack_require__(/*! ./var/flat */ "./node_modules/jquery/src/var/flat.js"),
	__webpack_require__(/*! ./var/push */ "./node_modules/jquery/src/var/push.js"),
	__webpack_require__(/*! ./var/indexOf */ "./node_modules/jquery/src/var/indexOf.js"),
	__webpack_require__(/*! ./var/class2type */ "./node_modules/jquery/src/var/class2type.js"),
	__webpack_require__(/*! ./var/toString */ "./node_modules/jquery/src/var/toString.js"),
	__webpack_require__(/*! ./var/hasOwn */ "./node_modules/jquery/src/var/hasOwn.js"),
	__webpack_require__(/*! ./var/fnToString */ "./node_modules/jquery/src/var/fnToString.js"),
	__webpack_require__(/*! ./var/ObjectFunctionString */ "./node_modules/jquery/src/var/ObjectFunctionString.js"),
	__webpack_require__(/*! ./var/support */ "./node_modules/jquery/src/var/support.js"),
	__webpack_require__(/*! ./var/isFunction */ "./node_modules/jquery/src/var/isFunction.js"),
	__webpack_require__(/*! ./var/isWindow */ "./node_modules/jquery/src/var/isWindow.js"),
	__webpack_require__(/*! ./core/DOMEval */ "./node_modules/jquery/src/core/DOMEval.js"),
	__webpack_require__(/*! ./core/toType */ "./node_modules/jquery/src/core/toType.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( arr, getProto, slice, flat, push, indexOf,
	class2type, toString, hasOwn, fnToString, ObjectFunctionString,
	support, isFunction, isWindow, DOMEval, toType ) {

"use strict";

var
	version = "3.6.0",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
						[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( _i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/core/DOMEval.js":
/*!*************************************************!*\
  !*** ./node_modules/jquery/src/core/DOMEval.js ***!
  \*************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../var/document */ "./node_modules/jquery/src/var/document.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( document ) {
	"use strict";

	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}

	return DOMEval;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/core/access.js":
/*!************************************************!*\
  !*** ./node_modules/jquery/src/core/access.js ***!
  \************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"),
	__webpack_require__(/*! ../core/toType */ "./node_modules/jquery/src/core/toType.js"),
	__webpack_require__(/*! ../var/isFunction */ "./node_modules/jquery/src/var/isFunction.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, toType, isFunction ) {

"use strict";

// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};

return access;

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/core/camelCase.js":
/*!***************************************************!*\
  !*** ./node_modules/jquery/src/core/camelCase.js ***!
  \***************************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {

"use strict";

// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}

return camelCase;

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/core/init.js":
/*!**********************************************!*\
  !*** ./node_modules/jquery/src/core/init.js ***!
  \**********************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Initialize a jQuery object
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"),
	__webpack_require__(/*! ../var/document */ "./node_modules/jquery/src/var/document.js"),
	__webpack_require__(/*! ../var/isFunction */ "./node_modules/jquery/src/var/isFunction.js"),
	__webpack_require__(/*! ./var/rsingleTag */ "./node_modules/jquery/src/core/var/rsingleTag.js"),

	__webpack_require__(/*! ../traversing/findFilter */ "./node_modules/jquery/src/traversing/findFilter.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, document, isFunction, rsingleTag ) {

"use strict";

// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );

return init;

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/core/isAttached.js":
/*!****************************************************!*\
  !*** ./node_modules/jquery/src/core/isAttached.js ***!
  \****************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"),
	__webpack_require__(/*! ../var/documentElement */ "./node_modules/jquery/src/var/documentElement.js"),
	__webpack_require__(/*! ../selector */ "./node_modules/jquery/src/selector.js") // jQuery.contains
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, documentElement ) {
	"use strict";

	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}

	return isAttached;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/core/nodeName.js":
/*!**************************************************!*\
  !*** ./node_modules/jquery/src/core/nodeName.js ***!
  \**************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {

"use strict";

function nodeName( elem, name ) {

	return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

}

return nodeName;

}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/core/parseHTML.js":
/*!***************************************************!*\
  !*** ./node_modules/jquery/src/core/parseHTML.js ***!
  \***************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"),
	__webpack_require__(/*! ../var/document */ "./node_modules/jquery/src/var/document.js"),
	__webpack_require__(/*! ./var/rsingleTag */ "./node_modules/jquery/src/core/var/rsingleTag.js"),
	__webpack_require__(/*! ../manipulation/buildFragment */ "./node_modules/jquery/src/manipulation/buildFragment.js"),

	// This is the only module that needs core/support
	__webpack_require__(/*! ./support */ "./node_modules/jquery/src/core/support.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, document, rsingleTag, buildFragment, support ) {

"use strict";

// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};

return jQuery.parseHTML;

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/core/parseXML.js":
/*!**************************************************!*\
  !*** ./node_modules/jquery/src/core/parseXML.js ***!
  \**************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {

"use strict";

// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, parserErrorElem;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {}

	parserErrorElem = xml && xml.getElementsByTagName( "parsererror" )[ 0 ];
	if ( !xml || parserErrorElem ) {
		jQuery.error( "Invalid XML: " + (
			parserErrorElem ?
				jQuery.map( parserErrorElem.childNodes, function( el ) {
					return el.textContent;
				} ).join( "\n" ) :
				data
		) );
	}
	return xml;
};

return jQuery.parseXML;

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/core/ready.js":
/*!***********************************************!*\
  !*** ./node_modules/jquery/src/core/ready.js ***!
  \***********************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"),
	__webpack_require__(/*! ../var/document */ "./node_modules/jquery/src/var/document.js"),
	__webpack_require__(/*! ../core/readyException */ "./node_modules/jquery/src/core/readyException.js"),
	__webpack_require__(/*! ../deferred */ "./node_modules/jquery/src/deferred.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, document ) {

"use strict";

// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/core/readyException.js":
/*!********************************************************!*\
  !*** ./node_modules/jquery/src/core/readyException.js ***!
  \********************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {

"use strict";

jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/core/stripAndCollapse.js":
/*!**********************************************************!*\
  !*** ./node_modules/jquery/src/core/stripAndCollapse.js ***!
  \**********************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../var/rnothtmlwhite */ "./node_modules/jquery/src/var/rnothtmlwhite.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( rnothtmlwhite ) {
	"use strict";

	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}

	return stripAndCollapse;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/core/support.js":
/*!*************************************************!*\
  !*** ./node_modules/jquery/src/core/support.js ***!
  \*************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../var/document */ "./node_modules/jquery/src/var/document.js"),
	__webpack_require__(/*! ../var/support */ "./node_modules/jquery/src/var/support.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( document, support ) {

"use strict";

// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();

return support;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/core/toType.js":
/*!************************************************!*\
  !*** ./node_modules/jquery/src/core/toType.js ***!
  \************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../var/class2type */ "./node_modules/jquery/src/var/class2type.js"),
	__webpack_require__(/*! ../var/toString */ "./node_modules/jquery/src/var/toString.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( class2type, toString ) {

"use strict";

function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}

return toType;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/core/var/rsingleTag.js":
/*!********************************************************!*\
  !*** ./node_modules/jquery/src/core/var/rsingleTag.js ***!
  \********************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	// rsingleTag matches a string consisting of a single HTML element with no attributes
	// and captures the element's name
	return ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );
}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/css.js":
/*!****************************************!*\
  !*** ./node_modules/jquery/src/css.js ***!
  \****************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./core */ "./node_modules/jquery/src/core.js"),
	__webpack_require__(/*! ./core/access */ "./node_modules/jquery/src/core/access.js"),
	__webpack_require__(/*! ./core/camelCase */ "./node_modules/jquery/src/core/camelCase.js"),
	__webpack_require__(/*! ./core/nodeName */ "./node_modules/jquery/src/core/nodeName.js"),
	__webpack_require__(/*! ./var/rcssNum */ "./node_modules/jquery/src/var/rcssNum.js"),
	__webpack_require__(/*! ./css/var/rnumnonpx */ "./node_modules/jquery/src/css/var/rnumnonpx.js"),
	__webpack_require__(/*! ./css/var/cssExpand */ "./node_modules/jquery/src/css/var/cssExpand.js"),
	__webpack_require__(/*! ./css/var/getStyles */ "./node_modules/jquery/src/css/var/getStyles.js"),
	__webpack_require__(/*! ./css/var/swap */ "./node_modules/jquery/src/css/var/swap.js"),
	__webpack_require__(/*! ./css/curCSS */ "./node_modules/jquery/src/css/curCSS.js"),
	__webpack_require__(/*! ./css/adjustCSS */ "./node_modules/jquery/src/css/adjustCSS.js"),
	__webpack_require__(/*! ./css/addGetHookIf */ "./node_modules/jquery/src/css/addGetHookIf.js"),
	__webpack_require__(/*! ./css/support */ "./node_modules/jquery/src/css/support.js"),
	__webpack_require__(/*! ./css/finalPropName */ "./node_modules/jquery/src/css/finalPropName.js"),

	__webpack_require__(/*! ./core/init */ "./node_modules/jquery/src/core/init.js"),
	__webpack_require__(/*! ./core/ready */ "./node_modules/jquery/src/core/ready.js"),
	__webpack_require__(/*! ./selector */ "./node_modules/jquery/src/selector.js") // contains
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, access, camelCase, nodeName, rcssNum, rnumnonpx, cssExpand,
	getStyles, swap, curCSS, adjustCSS, addGetHookIf, support, finalPropName ) {

"use strict";

var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
					swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, dimension, extra );
					} ) :
					getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
			) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/css/addGetHookIf.js":
/*!*****************************************************!*\
  !*** ./node_modules/jquery/src/css/addGetHookIf.js ***!
  \*****************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {

"use strict";

function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}

return addGetHookIf;

}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/css/adjustCSS.js":
/*!**************************************************!*\
  !*** ./node_modules/jquery/src/css/adjustCSS.js ***!
  \**************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"),
	__webpack_require__(/*! ../var/rcssNum */ "./node_modules/jquery/src/var/rcssNum.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, rcssNum ) {

"use strict";

function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}

return adjustCSS;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/css/curCSS.js":
/*!***********************************************!*\
  !*** ./node_modules/jquery/src/css/curCSS.js ***!
  \***********************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"),
	__webpack_require__(/*! ../core/isAttached */ "./node_modules/jquery/src/core/isAttached.js"),
	__webpack_require__(/*! ./var/rboxStyle */ "./node_modules/jquery/src/css/var/rboxStyle.js"),
	__webpack_require__(/*! ./var/rnumnonpx */ "./node_modules/jquery/src/css/var/rnumnonpx.js"),
	__webpack_require__(/*! ./var/getStyles */ "./node_modules/jquery/src/css/var/getStyles.js"),
	__webpack_require__(/*! ./support */ "./node_modules/jquery/src/css/support.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, isAttached, rboxStyle, rnumnonpx, getStyles, support ) {

"use strict";

function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}

return curCSS;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/css/finalPropName.js":
/*!******************************************************!*\
  !*** ./node_modules/jquery/src/css/finalPropName.js ***!
  \******************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../var/document */ "./node_modules/jquery/src/var/document.js"),
	__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( document, jQuery ) {

"use strict";

var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}

return finalPropName;

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/css/hiddenVisibleSelectors.js":
/*!***************************************************************!*\
  !*** ./node_modules/jquery/src/css/hiddenVisibleSelectors.js ***!
  \***************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"),
	__webpack_require__(/*! ../selector */ "./node_modules/jquery/src/selector.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {

"use strict";

jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/css/showHide.js":
/*!*************************************************!*\
  !*** ./node_modules/jquery/src/css/showHide.js ***!
  \*************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"),
	__webpack_require__(/*! ../data/var/dataPriv */ "./node_modules/jquery/src/data/var/dataPriv.js"),
	__webpack_require__(/*! ../css/var/isHiddenWithinTree */ "./node_modules/jquery/src/css/var/isHiddenWithinTree.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, dataPriv, isHiddenWithinTree ) {

"use strict";

var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );

return showHide;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/css/support.js":
/*!************************************************!*\
  !*** ./node_modules/jquery/src/css/support.js ***!
  \************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"),
	__webpack_require__(/*! ../var/document */ "./node_modules/jquery/src/var/document.js"),
	__webpack_require__(/*! ../var/documentElement */ "./node_modules/jquery/src/var/documentElement.js"),
	__webpack_require__(/*! ../var/support */ "./node_modules/jquery/src/var/support.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, document, documentElement, support ) {

"use strict";

( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		//
		// Support: Firefox 70+
		// Only Firefox includes border widths
		// in computed dimensions. (gh-4529)
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
				tr.style.cssText = "border:1px solid";

				// Support: Chrome 86+
				// Height set through cssText does not get applied.
				// Computed height then comes back as 0.
				tr.style.height = "1px";
				trChild.style.height = "9px";

				// Support: Android 8 Chrome 86+
				// In our bodyBackground.html iframe,
				// display for all div elements is set to "inline",
				// which causes a problem only in Android 8 Chrome 86.
				// Ensuring the div is display: block
				// gets around this issue.
				trChild.style.display = "block";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = ( parseInt( trStyle.height, 10 ) +
					parseInt( trStyle.borderTopWidth, 10 ) +
					parseInt( trStyle.borderBottomWidth, 10 ) ) === tr.offsetHeight;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();

return support;

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/css/var/cssExpand.js":
/*!******************************************************!*\
  !*** ./node_modules/jquery/src/css/var/cssExpand.js ***!
  \******************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	return [ "Top", "Right", "Bottom", "Left" ];
}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/css/var/getStyles.js":
/*!******************************************************!*\
  !*** ./node_modules/jquery/src/css/var/getStyles.js ***!
  \******************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	return function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};
}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/css/var/isHiddenWithinTree.js":
/*!***************************************************************!*\
  !*** ./node_modules/jquery/src/css/var/isHiddenWithinTree.js ***!
  \***************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../../core */ "./node_modules/jquery/src/core.js"),
	__webpack_require__(/*! ../../core/isAttached */ "./node_modules/jquery/src/core/isAttached.js")

	// css is assumed
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, isAttached ) {
	"use strict";

	// isHiddenWithinTree reports if an element has a non-"none" display style (inline and/or
	// through the CSS cascade), which is useful in deciding whether or not to make it visible.
	// It differs from the :hidden selector (jQuery.expr.pseudos.hidden) in two important ways:
	// * A hidden ancestor does not force an element to be classified as hidden.
	// * Being disconnected from the document does not force an element to be classified as hidden.
	// These differences improve the behavior of .toggle() et al. when applied to elements that are
	// detached or contained within hidden ancestors (gh-2404, gh-2863).
	return function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/css/var/rboxStyle.js":
/*!******************************************************!*\
  !*** ./node_modules/jquery/src/css/var/rboxStyle.js ***!
  \******************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./cssExpand */ "./node_modules/jquery/src/css/var/cssExpand.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( cssExpand ) {
	"use strict";

	return new RegExp( cssExpand.join( "|" ), "i" );
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/css/var/rnumnonpx.js":
/*!******************************************************!*\
  !*** ./node_modules/jquery/src/css/var/rnumnonpx.js ***!
  \******************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../../var/pnum */ "./node_modules/jquery/src/var/pnum.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( pnum ) {
	"use strict";

	return new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/css/var/swap.js":
/*!*************************************************!*\
  !*** ./node_modules/jquery/src/css/var/swap.js ***!
  \*************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {

"use strict";

// A method for quickly swapping in/out CSS properties to get correct calculations.
return function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};

}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/data.js":
/*!*****************************************!*\
  !*** ./node_modules/jquery/src/data.js ***!
  \*****************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./core */ "./node_modules/jquery/src/core.js"),
	__webpack_require__(/*! ./core/access */ "./node_modules/jquery/src/core/access.js"),
	__webpack_require__(/*! ./core/camelCase */ "./node_modules/jquery/src/core/camelCase.js"),
	__webpack_require__(/*! ./data/var/dataPriv */ "./node_modules/jquery/src/data/var/dataPriv.js"),
	__webpack_require__(/*! ./data/var/dataUser */ "./node_modules/jquery/src/data/var/dataUser.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, access, camelCase, dataPriv, dataUser ) {

"use strict";

//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/data/Data.js":
/*!**********************************************!*\
  !*** ./node_modules/jquery/src/data/Data.js ***!
  \**********************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"),
	__webpack_require__(/*! ../core/camelCase */ "./node_modules/jquery/src/core/camelCase.js"),
	__webpack_require__(/*! ../var/rnothtmlwhite */ "./node_modules/jquery/src/var/rnothtmlwhite.js"),
	__webpack_require__(/*! ./var/acceptData */ "./node_modules/jquery/src/data/var/acceptData.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, camelCase, rnothtmlwhite, acceptData ) {

"use strict";

function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};

return Data;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/data/var/acceptData.js":
/*!********************************************************!*\
  !*** ./node_modules/jquery/src/data/var/acceptData.js ***!
  \********************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {

"use strict";

/**
 * Determines whether an object can have data
 */
return function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};

}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/data/var/dataPriv.js":
/*!******************************************************!*\
  !*** ./node_modules/jquery/src/data/var/dataPriv.js ***!
  \******************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../Data */ "./node_modules/jquery/src/data/Data.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( Data ) {
	"use strict";

	return new Data();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/data/var/dataUser.js":
/*!******************************************************!*\
  !*** ./node_modules/jquery/src/data/var/dataUser.js ***!
  \******************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../Data */ "./node_modules/jquery/src/data/Data.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( Data ) {
	"use strict";

	return new Data();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/deferred.js":
/*!*********************************************!*\
  !*** ./node_modules/jquery/src/deferred.js ***!
  \*********************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./core */ "./node_modules/jquery/src/core.js"),
	__webpack_require__(/*! ./var/isFunction */ "./node_modules/jquery/src/var/isFunction.js"),
	__webpack_require__(/*! ./var/slice */ "./node_modules/jquery/src/var/slice.js"),
	__webpack_require__(/*! ./callbacks */ "./node_modules/jquery/src/callbacks.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, isFunction, slice ) {

"use strict";

function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the primary Deferred
			primary = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						primary.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, primary.done( updateFunc( i ) ).resolve, primary.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( primary.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return primary.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), primary.reject );
		}

		return primary.promise();
	}
} );

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/deferred/exceptionHook.js":
/*!***********************************************************!*\
  !*** ./node_modules/jquery/src/deferred/exceptionHook.js ***!
  \***********************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"),
	__webpack_require__(/*! ../deferred */ "./node_modules/jquery/src/deferred.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {

"use strict";

// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/deprecated.js":
/*!***********************************************!*\
  !*** ./node_modules/jquery/src/deprecated.js ***!
  \***********************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./core */ "./node_modules/jquery/src/core.js"),
	__webpack_require__(/*! ./core/nodeName */ "./node_modules/jquery/src/core/nodeName.js"),
	__webpack_require__(/*! ./core/camelCase */ "./node_modules/jquery/src/core/camelCase.js"),
	__webpack_require__(/*! ./core/toType */ "./node_modules/jquery/src/core/toType.js"),
	__webpack_require__(/*! ./var/isFunction */ "./node_modules/jquery/src/var/isFunction.js"),
	__webpack_require__(/*! ./var/isWindow */ "./node_modules/jquery/src/var/isWindow.js"),
	__webpack_require__(/*! ./var/slice */ "./node_modules/jquery/src/var/slice.js"),

	__webpack_require__(/*! ./deprecated/ajax-event-alias */ "./node_modules/jquery/src/deprecated/ajax-event-alias.js"),
	__webpack_require__(/*! ./deprecated/event */ "./node_modules/jquery/src/deprecated/event.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, nodeName, camelCase, toType, isFunction, isWindow, slice ) {

"use strict";

// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "" );
};
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/deprecated/ajax-event-alias.js":
/*!****************************************************************!*\
  !*** ./node_modules/jquery/src/deprecated/ajax-event-alias.js ***!
  \****************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"),
	__webpack_require__(/*! ../ajax */ "./node_modules/jquery/src/ajax.js"),
	__webpack_require__(/*! ../event */ "./node_modules/jquery/src/event.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {

"use strict";

jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/deprecated/event.js":
/*!*****************************************************!*\
  !*** ./node_modules/jquery/src/deprecated/event.js ***!
  \*****************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"),

	__webpack_require__(/*! ../event */ "./node_modules/jquery/src/event.js"),
	__webpack_require__(/*! ../event/trigger */ "./node_modules/jquery/src/event/trigger.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {

"use strict";

jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each(
	( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	}
);

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/dimensions.js":
/*!***********************************************!*\
  !*** ./node_modules/jquery/src/dimensions.js ***!
  \***********************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./core */ "./node_modules/jquery/src/core.js"),
	__webpack_require__(/*! ./core/access */ "./node_modules/jquery/src/core/access.js"),
	__webpack_require__(/*! ./var/isWindow */ "./node_modules/jquery/src/var/isWindow.js"),
	__webpack_require__(/*! ./css */ "./node_modules/jquery/src/css.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, access, isWindow ) {

"use strict";

// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( {
		padding: "inner" + name,
		content: type,
		"": "outer" + name
	}, function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/effects.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/src/effects.js ***!
  \********************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./core */ "./node_modules/jquery/src/core.js"),
	__webpack_require__(/*! ./core/camelCase */ "./node_modules/jquery/src/core/camelCase.js"),
	__webpack_require__(/*! ./var/document */ "./node_modules/jquery/src/var/document.js"),
	__webpack_require__(/*! ./var/isFunction */ "./node_modules/jquery/src/var/isFunction.js"),
	__webpack_require__(/*! ./var/rcssNum */ "./node_modules/jquery/src/var/rcssNum.js"),
	__webpack_require__(/*! ./var/rnothtmlwhite */ "./node_modules/jquery/src/var/rnothtmlwhite.js"),
	__webpack_require__(/*! ./css/var/cssExpand */ "./node_modules/jquery/src/css/var/cssExpand.js"),
	__webpack_require__(/*! ./css/var/isHiddenWithinTree */ "./node_modules/jquery/src/css/var/isHiddenWithinTree.js"),
	__webpack_require__(/*! ./css/adjustCSS */ "./node_modules/jquery/src/css/adjustCSS.js"),
	__webpack_require__(/*! ./data/var/dataPriv */ "./node_modules/jquery/src/data/var/dataPriv.js"),
	__webpack_require__(/*! ./css/showHide */ "./node_modules/jquery/src/css/showHide.js"),

	__webpack_require__(/*! ./core/init */ "./node_modules/jquery/src/core/init.js"),
	__webpack_require__(/*! ./queue */ "./node_modules/jquery/src/queue.js"),
	__webpack_require__(/*! ./deferred */ "./node_modules/jquery/src/deferred.js"),
	__webpack_require__(/*! ./traversing */ "./node_modules/jquery/src/traversing.js"),
	__webpack_require__(/*! ./manipulation */ "./node_modules/jquery/src/manipulation.js"),
	__webpack_require__(/*! ./css */ "./node_modules/jquery/src/css.js"),
	__webpack_require__(/*! ./effects/Tween */ "./node_modules/jquery/src/effects/Tween.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, camelCase, document, isFunction, rcssNum, rnothtmlwhite, cssExpand,
	isHiddenWithinTree, adjustCSS, dataPriv, showHide ) {

"use strict";

var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

				/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
					animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};

		doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/effects/Tween.js":
/*!**************************************************!*\
  !*** ./node_modules/jquery/src/effects/Tween.js ***!
  \**************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"),
	__webpack_require__(/*! ../css/finalPropName */ "./node_modules/jquery/src/css/finalPropName.js"),

	__webpack_require__(/*! ../css */ "./node_modules/jquery/src/css.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, finalPropName ) {

"use strict";

function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
				jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/effects/animatedSelector.js":
/*!*************************************************************!*\
  !*** ./node_modules/jquery/src/effects/animatedSelector.js ***!
  \*************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"),
	__webpack_require__(/*! ../selector */ "./node_modules/jquery/src/selector.js"),
	__webpack_require__(/*! ../effects */ "./node_modules/jquery/src/effects.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {

"use strict";

jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/event.js":
/*!******************************************!*\
  !*** ./node_modules/jquery/src/event.js ***!
  \******************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./core */ "./node_modules/jquery/src/core.js"),
	__webpack_require__(/*! ./var/document */ "./node_modules/jquery/src/var/document.js"),
	__webpack_require__(/*! ./var/documentElement */ "./node_modules/jquery/src/var/documentElement.js"),
	__webpack_require__(/*! ./var/isFunction */ "./node_modules/jquery/src/var/isFunction.js"),
	__webpack_require__(/*! ./var/rnothtmlwhite */ "./node_modules/jquery/src/var/rnothtmlwhite.js"),
	__webpack_require__(/*! ./var/rcheckableType */ "./node_modules/jquery/src/var/rcheckableType.js"),
	__webpack_require__(/*! ./var/slice */ "./node_modules/jquery/src/var/slice.js"),
	__webpack_require__(/*! ./data/var/acceptData */ "./node_modules/jquery/src/data/var/acceptData.js"),
	__webpack_require__(/*! ./data/var/dataPriv */ "./node_modules/jquery/src/data/var/dataPriv.js"),
	__webpack_require__(/*! ./core/nodeName */ "./node_modules/jquery/src/core/nodeName.js"),

	__webpack_require__(/*! ./core/init */ "./node_modules/jquery/src/core/init.js"),
	__webpack_require__(/*! ./selector */ "./node_modules/jquery/src/selector.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, document, documentElement, isFunction, rnothtmlwhite,
	rcheckableType, slice, acceptData, dataPriv, nodeName ) {

"use strict";

var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
				dataPriv.get( this, "events" ) || Object.create( null )
			)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
						return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
						return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();

						// Support: Chrome 86+
						// In Chrome, if an element having a focusout handler is blurred by
						// clicking outside of it, it invokes the handler synchronously. If
						// that handler calls `.remove()` on the element, the data is cleared,
						// leaving `result` undefined. We need to guard against this.
						return result && result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,
	which: true
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		// Suppress native focus or blur as it's already being fired
		// in leverageNative.
		_default: function() {
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/event/focusin.js":
/*!**************************************************!*\
  !*** ./node_modules/jquery/src/event/focusin.js ***!
  \**************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"),
	__webpack_require__(/*! ../data/var/dataPriv */ "./node_modules/jquery/src/data/var/dataPriv.js"),
	__webpack_require__(/*! ./support */ "./node_modules/jquery/src/event/support.js"),

	__webpack_require__(/*! ../event */ "./node_modules/jquery/src/event.js"),
	__webpack_require__(/*! ./trigger */ "./node_modules/jquery/src/event/trigger.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, dataPriv, support ) {

"use strict";

// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/event/support.js":
/*!**************************************************!*\
  !*** ./node_modules/jquery/src/event/support.js ***!
  \**************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../var/support */ "./node_modules/jquery/src/var/support.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( support ) {

"use strict";

support.focusin = "onfocusin" in window;

return support;

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/event/trigger.js":
/*!**************************************************!*\
  !*** ./node_modules/jquery/src/event/trigger.js ***!
  \**************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"),
	__webpack_require__(/*! ../var/document */ "./node_modules/jquery/src/var/document.js"),
	__webpack_require__(/*! ../data/var/dataPriv */ "./node_modules/jquery/src/data/var/dataPriv.js"),
	__webpack_require__(/*! ../data/var/acceptData */ "./node_modules/jquery/src/data/var/acceptData.js"),
	__webpack_require__(/*! ../var/hasOwn */ "./node_modules/jquery/src/var/hasOwn.js"),
	__webpack_require__(/*! ../var/isFunction */ "./node_modules/jquery/src/var/isFunction.js"),
	__webpack_require__(/*! ../var/isWindow */ "./node_modules/jquery/src/var/isWindow.js"),
	__webpack_require__(/*! ../event */ "./node_modules/jquery/src/event.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, document, dataPriv, acceptData, hasOwn, isFunction, isWindow ) {

"use strict";

var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || Object.create( null ) )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/exports/amd.js":
/*!************************************************!*\
  !*** ./node_modules/jquery/src/exports/amd.js ***!
  \************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {

"use strict";

// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/exports/global.js":
/*!***************************************************!*\
  !*** ./node_modules/jquery/src/exports/global.js ***!
  \***************************************************/
/***/ ((module, exports, __webpack_require__) => {

/* provided dependency */ var __webpack_provided_window_dot_jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/src/jquery.js");
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {

"use strict";

var

	// Map over jQuery in case of overwrite
	_jQuery = __webpack_provided_window_dot_jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && __webpack_provided_window_dot_jQuery === jQuery ) {
		__webpack_provided_window_dot_jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === "undefined" ) {
	__webpack_provided_window_dot_jQuery = window.$ = jQuery;
}

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/jquery.js":
/*!*******************************************!*\
  !*** ./node_modules/jquery/src/jquery.js ***!
  \*******************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./core */ "./node_modules/jquery/src/core.js"),
	__webpack_require__(/*! ./selector */ "./node_modules/jquery/src/selector.js"),
	__webpack_require__(/*! ./traversing */ "./node_modules/jquery/src/traversing.js"),
	__webpack_require__(/*! ./callbacks */ "./node_modules/jquery/src/callbacks.js"),
	__webpack_require__(/*! ./deferred */ "./node_modules/jquery/src/deferred.js"),
	__webpack_require__(/*! ./deferred/exceptionHook */ "./node_modules/jquery/src/deferred/exceptionHook.js"),
	__webpack_require__(/*! ./core/ready */ "./node_modules/jquery/src/core/ready.js"),
	__webpack_require__(/*! ./data */ "./node_modules/jquery/src/data.js"),
	__webpack_require__(/*! ./queue */ "./node_modules/jquery/src/queue.js"),
	__webpack_require__(/*! ./queue/delay */ "./node_modules/jquery/src/queue/delay.js"),
	__webpack_require__(/*! ./attributes */ "./node_modules/jquery/src/attributes.js"),
	__webpack_require__(/*! ./event */ "./node_modules/jquery/src/event.js"),
	__webpack_require__(/*! ./event/focusin */ "./node_modules/jquery/src/event/focusin.js"),
	__webpack_require__(/*! ./manipulation */ "./node_modules/jquery/src/manipulation.js"),
	__webpack_require__(/*! ./manipulation/_evalUrl */ "./node_modules/jquery/src/manipulation/_evalUrl.js"),
	__webpack_require__(/*! ./wrap */ "./node_modules/jquery/src/wrap.js"),
	__webpack_require__(/*! ./css */ "./node_modules/jquery/src/css.js"),
	__webpack_require__(/*! ./css/hiddenVisibleSelectors */ "./node_modules/jquery/src/css/hiddenVisibleSelectors.js"),
	__webpack_require__(/*! ./serialize */ "./node_modules/jquery/src/serialize.js"),
	__webpack_require__(/*! ./ajax */ "./node_modules/jquery/src/ajax.js"),
	__webpack_require__(/*! ./ajax/xhr */ "./node_modules/jquery/src/ajax/xhr.js"),
	__webpack_require__(/*! ./ajax/script */ "./node_modules/jquery/src/ajax/script.js"),
	__webpack_require__(/*! ./ajax/jsonp */ "./node_modules/jquery/src/ajax/jsonp.js"),
	__webpack_require__(/*! ./ajax/load */ "./node_modules/jquery/src/ajax/load.js"),
	__webpack_require__(/*! ./core/parseXML */ "./node_modules/jquery/src/core/parseXML.js"),
	__webpack_require__(/*! ./core/parseHTML */ "./node_modules/jquery/src/core/parseHTML.js"),
	__webpack_require__(/*! ./effects */ "./node_modules/jquery/src/effects.js"),
	__webpack_require__(/*! ./effects/animatedSelector */ "./node_modules/jquery/src/effects/animatedSelector.js"),
	__webpack_require__(/*! ./offset */ "./node_modules/jquery/src/offset.js"),
	__webpack_require__(/*! ./dimensions */ "./node_modules/jquery/src/dimensions.js"),
	__webpack_require__(/*! ./deprecated */ "./node_modules/jquery/src/deprecated.js"),
	__webpack_require__(/*! ./exports/amd */ "./node_modules/jquery/src/exports/amd.js"),
	__webpack_require__(/*! ./exports/global */ "./node_modules/jquery/src/exports/global.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {

"use strict";

return jQuery;

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/manipulation.js":
/*!*************************************************!*\
  !*** ./node_modules/jquery/src/manipulation.js ***!
  \*************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./core */ "./node_modules/jquery/src/core.js"),
	__webpack_require__(/*! ./core/isAttached */ "./node_modules/jquery/src/core/isAttached.js"),
	__webpack_require__(/*! ./var/flat */ "./node_modules/jquery/src/var/flat.js"),
	__webpack_require__(/*! ./var/isFunction */ "./node_modules/jquery/src/var/isFunction.js"),
	__webpack_require__(/*! ./var/push */ "./node_modules/jquery/src/var/push.js"),
	__webpack_require__(/*! ./var/rcheckableType */ "./node_modules/jquery/src/var/rcheckableType.js"),
	__webpack_require__(/*! ./core/access */ "./node_modules/jquery/src/core/access.js"),
	__webpack_require__(/*! ./manipulation/var/rtagName */ "./node_modules/jquery/src/manipulation/var/rtagName.js"),
	__webpack_require__(/*! ./manipulation/var/rscriptType */ "./node_modules/jquery/src/manipulation/var/rscriptType.js"),
	__webpack_require__(/*! ./manipulation/wrapMap */ "./node_modules/jquery/src/manipulation/wrapMap.js"),
	__webpack_require__(/*! ./manipulation/getAll */ "./node_modules/jquery/src/manipulation/getAll.js"),
	__webpack_require__(/*! ./manipulation/setGlobalEval */ "./node_modules/jquery/src/manipulation/setGlobalEval.js"),
	__webpack_require__(/*! ./manipulation/buildFragment */ "./node_modules/jquery/src/manipulation/buildFragment.js"),
	__webpack_require__(/*! ./manipulation/support */ "./node_modules/jquery/src/manipulation/support.js"),

	__webpack_require__(/*! ./data/var/dataPriv */ "./node_modules/jquery/src/data/var/dataPriv.js"),
	__webpack_require__(/*! ./data/var/dataUser */ "./node_modules/jquery/src/data/var/dataUser.js"),
	__webpack_require__(/*! ./data/var/acceptData */ "./node_modules/jquery/src/data/var/acceptData.js"),
	__webpack_require__(/*! ./core/DOMEval */ "./node_modules/jquery/src/core/DOMEval.js"),
	__webpack_require__(/*! ./core/nodeName */ "./node_modules/jquery/src/core/nodeName.js"),

	__webpack_require__(/*! ./core/init */ "./node_modules/jquery/src/core/init.js"),
	__webpack_require__(/*! ./traversing */ "./node_modules/jquery/src/traversing.js"),
	__webpack_require__(/*! ./selector */ "./node_modules/jquery/src/selector.js"),
	__webpack_require__(/*! ./event */ "./node_modules/jquery/src/event.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, isAttached, flat, isFunction, push, rcheckableType,
	access, rtagName, rscriptType,
	wrapMap, getAll, setGlobalEval, buildFragment, support,
	dataPriv, dataUser, acceptData, DOMEval, nodeName ) {

"use strict";

var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/manipulation/_evalUrl.js":
/*!**********************************************************!*\
  !*** ./node_modules/jquery/src/manipulation/_evalUrl.js ***!
  \**********************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../ajax */ "./node_modules/jquery/src/ajax.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {

"use strict";

jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};

return jQuery._evalUrl;

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/manipulation/buildFragment.js":
/*!***************************************************************!*\
  !*** ./node_modules/jquery/src/manipulation/buildFragment.js ***!
  \***************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"),
	__webpack_require__(/*! ../core/toType */ "./node_modules/jquery/src/core/toType.js"),
	__webpack_require__(/*! ../core/isAttached */ "./node_modules/jquery/src/core/isAttached.js"),
	__webpack_require__(/*! ./var/rtagName */ "./node_modules/jquery/src/manipulation/var/rtagName.js"),
	__webpack_require__(/*! ./var/rscriptType */ "./node_modules/jquery/src/manipulation/var/rscriptType.js"),
	__webpack_require__(/*! ./wrapMap */ "./node_modules/jquery/src/manipulation/wrapMap.js"),
	__webpack_require__(/*! ./getAll */ "./node_modules/jquery/src/manipulation/getAll.js"),
	__webpack_require__(/*! ./setGlobalEval */ "./node_modules/jquery/src/manipulation/setGlobalEval.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, toType, isAttached, rtagName, rscriptType, wrapMap, getAll, setGlobalEval ) {

"use strict";

var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}

return buildFragment;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/manipulation/getAll.js":
/*!********************************************************!*\
  !*** ./node_modules/jquery/src/manipulation/getAll.js ***!
  \********************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"),
	__webpack_require__(/*! ../core/nodeName */ "./node_modules/jquery/src/core/nodeName.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, nodeName ) {

"use strict";

function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}

return getAll;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/manipulation/setGlobalEval.js":
/*!***************************************************************!*\
  !*** ./node_modules/jquery/src/manipulation/setGlobalEval.js ***!
  \***************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../data/var/dataPriv */ "./node_modules/jquery/src/data/var/dataPriv.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( dataPriv ) {

"use strict";

// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}

return setGlobalEval;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/manipulation/support.js":
/*!*********************************************************!*\
  !*** ./node_modules/jquery/src/manipulation/support.js ***!
  \*********************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../var/document */ "./node_modules/jquery/src/var/document.js"),
	__webpack_require__(/*! ../var/support */ "./node_modules/jquery/src/var/support.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( document, support ) {

"use strict";

( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();

return support;

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/manipulation/var/rscriptType.js":
/*!*****************************************************************!*\
  !*** ./node_modules/jquery/src/manipulation/var/rscriptType.js ***!
  \*****************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	return ( /^$|^module$|\/(?:java|ecma)script/i );
}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/manipulation/var/rtagName.js":
/*!**************************************************************!*\
  !*** ./node_modules/jquery/src/manipulation/var/rtagName.js ***!
  \**************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	// rtagName captures the name from the first start tag in a string of HTML
	// https://html.spec.whatwg.org/multipage/syntax.html#tag-open-state
	// https://html.spec.whatwg.org/multipage/syntax.html#tag-name-state
	return ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );
}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/manipulation/wrapMap.js":
/*!*********************************************************!*\
  !*** ./node_modules/jquery/src/manipulation/wrapMap.js ***!
  \*********************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./support */ "./node_modules/jquery/src/manipulation/support.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( support ) {

"use strict";

// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}

return wrapMap;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/offset.js":
/*!*******************************************!*\
  !*** ./node_modules/jquery/src/offset.js ***!
  \*******************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./core */ "./node_modules/jquery/src/core.js"),
	__webpack_require__(/*! ./core/access */ "./node_modules/jquery/src/core/access.js"),
	__webpack_require__(/*! ./var/documentElement */ "./node_modules/jquery/src/var/documentElement.js"),
	__webpack_require__(/*! ./var/isFunction */ "./node_modules/jquery/src/var/isFunction.js"),
	__webpack_require__(/*! ./css/var/rnumnonpx */ "./node_modules/jquery/src/css/var/rnumnonpx.js"),
	__webpack_require__(/*! ./css/curCSS */ "./node_modules/jquery/src/css/curCSS.js"),
	__webpack_require__(/*! ./css/addGetHookIf */ "./node_modules/jquery/src/css/addGetHookIf.js"),
	__webpack_require__(/*! ./css/support */ "./node_modules/jquery/src/css/support.js"),
	__webpack_require__(/*! ./var/isWindow */ "./node_modules/jquery/src/var/isWindow.js"),
	__webpack_require__(/*! ./core/init */ "./node_modules/jquery/src/core/init.js"),
	__webpack_require__(/*! ./css */ "./node_modules/jquery/src/css.js"),
	__webpack_require__(/*! ./selector */ "./node_modules/jquery/src/selector.js") // contains
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, access, documentElement, isFunction, rnumnonpx,
	curCSS, addGetHookIf, support, isWindow ) {

"use strict";

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/queue.js":
/*!******************************************!*\
  !*** ./node_modules/jquery/src/queue.js ***!
  \******************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./core */ "./node_modules/jquery/src/core.js"),
	__webpack_require__(/*! ./data/var/dataPriv */ "./node_modules/jquery/src/data/var/dataPriv.js"),
	__webpack_require__(/*! ./deferred */ "./node_modules/jquery/src/deferred.js"),
	__webpack_require__(/*! ./callbacks */ "./node_modules/jquery/src/callbacks.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, dataPriv ) {

"use strict";

jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/queue/delay.js":
/*!************************************************!*\
  !*** ./node_modules/jquery/src/queue/delay.js ***!
  \************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"),
	__webpack_require__(/*! ../queue */ "./node_modules/jquery/src/queue.js"),
	__webpack_require__(/*! ../effects */ "./node_modules/jquery/src/effects.js") // Delay is optional because of this dependency
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {

"use strict";

// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};

return jQuery.fn.delay;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/selector-sizzle.js":
/*!****************************************************!*\
  !*** ./node_modules/jquery/src/selector-sizzle.js ***!
  \****************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./core */ "./node_modules/jquery/src/core.js"),
	__webpack_require__(/*! ../external/sizzle/dist/sizzle */ "./node_modules/jquery/external/sizzle/dist/sizzle.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, Sizzle ) {

"use strict";

jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/selector.js":
/*!*********************************************!*\
  !*** ./node_modules/jquery/src/selector.js ***!
  \*********************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(/*! ./selector-sizzle */ "./node_modules/jquery/src/selector-sizzle.js") ], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/serialize.js":
/*!**********************************************!*\
  !*** ./node_modules/jquery/src/serialize.js ***!
  \**********************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./core */ "./node_modules/jquery/src/core.js"),
	__webpack_require__(/*! ./core/toType */ "./node_modules/jquery/src/core/toType.js"),
	__webpack_require__(/*! ./var/rcheckableType */ "./node_modules/jquery/src/var/rcheckableType.js"),
	__webpack_require__(/*! ./var/isFunction */ "./node_modules/jquery/src/var/isFunction.js"),
	__webpack_require__(/*! ./core/init */ "./node_modules/jquery/src/core/init.js"),
	__webpack_require__(/*! ./traversing */ "./node_modules/jquery/src/traversing.js"), // filter
	__webpack_require__(/*! ./attributes/prop */ "./node_modules/jquery/src/attributes/prop.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, toType, rcheckableType, isFunction ) {

"use strict";

var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} ).filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} ).map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/traversing.js":
/*!***********************************************!*\
  !*** ./node_modules/jquery/src/traversing.js ***!
  \***********************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./core */ "./node_modules/jquery/src/core.js"),
	__webpack_require__(/*! ./var/getProto */ "./node_modules/jquery/src/var/getProto.js"),
	__webpack_require__(/*! ./var/indexOf */ "./node_modules/jquery/src/var/indexOf.js"),
	__webpack_require__(/*! ./traversing/var/dir */ "./node_modules/jquery/src/traversing/var/dir.js"),
	__webpack_require__(/*! ./traversing/var/siblings */ "./node_modules/jquery/src/traversing/var/siblings.js"),
	__webpack_require__(/*! ./traversing/var/rneedsContext */ "./node_modules/jquery/src/traversing/var/rneedsContext.js"),
	__webpack_require__(/*! ./core/nodeName */ "./node_modules/jquery/src/core/nodeName.js"),

	__webpack_require__(/*! ./core/init */ "./node_modules/jquery/src/core/init.js"),
	__webpack_require__(/*! ./traversing/findFilter */ "./node_modules/jquery/src/traversing/findFilter.js"),
	__webpack_require__(/*! ./selector */ "./node_modules/jquery/src/selector.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, getProto, indexOf, dir, siblings, rneedsContext, nodeName ) {

"use strict";

var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/traversing/findFilter.js":
/*!**********************************************************!*\
  !*** ./node_modules/jquery/src/traversing/findFilter.js ***!
  \**********************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../core */ "./node_modules/jquery/src/core.js"),
	__webpack_require__(/*! ../var/indexOf */ "./node_modules/jquery/src/var/indexOf.js"),
	__webpack_require__(/*! ../var/isFunction */ "./node_modules/jquery/src/var/isFunction.js"),
	__webpack_require__(/*! ./var/rneedsContext */ "./node_modules/jquery/src/traversing/var/rneedsContext.js"),
	__webpack_require__(/*! ../selector */ "./node_modules/jquery/src/selector.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, indexOf, isFunction, rneedsContext ) {

"use strict";

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/traversing/var/dir.js":
/*!*******************************************************!*\
  !*** ./node_modules/jquery/src/traversing/var/dir.js ***!
  \*******************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../../core */ "./node_modules/jquery/src/core.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {

"use strict";

return function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/traversing/var/rneedsContext.js":
/*!*****************************************************************!*\
  !*** ./node_modules/jquery/src/traversing/var/rneedsContext.js ***!
  \*****************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../../core */ "./node_modules/jquery/src/core.js"),
	__webpack_require__(/*! ../../selector */ "./node_modules/jquery/src/selector.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery ) {
	"use strict";

	return jQuery.expr.match.needsContext;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/traversing/var/siblings.js":
/*!************************************************************!*\
  !*** ./node_modules/jquery/src/traversing/var/siblings.js ***!
  \************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {

"use strict";

return function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};

}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/var/ObjectFunctionString.js":
/*!*************************************************************!*\
  !*** ./node_modules/jquery/src/var/ObjectFunctionString.js ***!
  \*************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./fnToString */ "./node_modules/jquery/src/var/fnToString.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( fnToString ) {
	"use strict";

	return fnToString.call( Object );
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/var/arr.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/src/var/arr.js ***!
  \********************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	return [];
}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/var/class2type.js":
/*!***************************************************!*\
  !*** ./node_modules/jquery/src/var/class2type.js ***!
  \***************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	// [[Class]] -> type pairs
	return {};
}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/var/document.js":
/*!*************************************************!*\
  !*** ./node_modules/jquery/src/var/document.js ***!
  \*************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	return window.document;
}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/var/documentElement.js":
/*!********************************************************!*\
  !*** ./node_modules/jquery/src/var/documentElement.js ***!
  \********************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./document */ "./node_modules/jquery/src/var/document.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( document ) {
	"use strict";

	return document.documentElement;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/var/flat.js":
/*!*********************************************!*\
  !*** ./node_modules/jquery/src/var/flat.js ***!
  \*********************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./arr */ "./node_modules/jquery/src/var/arr.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( arr ) {

"use strict";

// Support: IE 9 - 11+, Edge 18+, Android Browser 4.0 - 4.3 only, iOS 7 - 11 only, Safari 11 only,
// Firefox <= 61 only
// Provide fallback for browsers without Array#flat.
return arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/var/fnToString.js":
/*!***************************************************!*\
  !*** ./node_modules/jquery/src/var/fnToString.js ***!
  \***************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./hasOwn */ "./node_modules/jquery/src/var/hasOwn.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( hasOwn ) {
	"use strict";

	return hasOwn.toString;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/var/getProto.js":
/*!*************************************************!*\
  !*** ./node_modules/jquery/src/var/getProto.js ***!
  \*************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	return Object.getPrototypeOf;
}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/var/hasOwn.js":
/*!***********************************************!*\
  !*** ./node_modules/jquery/src/var/hasOwn.js ***!
  \***********************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./class2type */ "./node_modules/jquery/src/var/class2type.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( class2type ) {
	"use strict";

	return class2type.hasOwnProperty;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/var/indexOf.js":
/*!************************************************!*\
  !*** ./node_modules/jquery/src/var/indexOf.js ***!
  \************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./arr */ "./node_modules/jquery/src/var/arr.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( arr ) {
	"use strict";

	return arr.indexOf;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/var/isFunction.js":
/*!***************************************************!*\
  !*** ./node_modules/jquery/src/var/isFunction.js ***!
  \***************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	return function isFunction( obj ) {

		// Support: Chrome <=57, Firefox <=52
		// In some browsers, typeof returns "function" for HTML <object> elements
		// (i.e., `typeof document.createElement( "object" ) === "function"`).
		// We don't want to classify *any* DOM node as a function.
		// Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
		// Plus for old WebKit, typeof returns "function" for HTML collections
		// (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
		return typeof obj === "function" && typeof obj.nodeType !== "number" &&
			typeof obj.item !== "function";
	};

}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/var/isWindow.js":
/*!*************************************************!*\
  !*** ./node_modules/jquery/src/var/isWindow.js ***!
  \*************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	return function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};

}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/var/pnum.js":
/*!*********************************************!*\
  !*** ./node_modules/jquery/src/var/pnum.js ***!
  \*********************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	return ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;
}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/var/push.js":
/*!*********************************************!*\
  !*** ./node_modules/jquery/src/var/push.js ***!
  \*********************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./arr */ "./node_modules/jquery/src/var/arr.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( arr ) {
	"use strict";

	return arr.push;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/var/rcheckableType.js":
/*!*******************************************************!*\
  !*** ./node_modules/jquery/src/var/rcheckableType.js ***!
  \*******************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	return ( /^(?:checkbox|radio)$/i );
}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/var/rcssNum.js":
/*!************************************************!*\
  !*** ./node_modules/jquery/src/var/rcssNum.js ***!
  \************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ../var/pnum */ "./node_modules/jquery/src/var/pnum.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( pnum ) {

"use strict";

return new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/var/rnothtmlwhite.js":
/*!******************************************************!*\
  !*** ./node_modules/jquery/src/var/rnothtmlwhite.js ***!
  \******************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	// Only count HTML whitespace
	// Other whitespace should count in values
	// https://infra.spec.whatwg.org/#ascii-whitespace
	return ( /[^\x20\t\r\n\f]+/g );
}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/var/slice.js":
/*!**********************************************!*\
  !*** ./node_modules/jquery/src/var/slice.js ***!
  \**********************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./arr */ "./node_modules/jquery/src/var/arr.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( arr ) {
	"use strict";

	return arr.slice;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/var/support.js":
/*!************************************************!*\
  !*** ./node_modules/jquery/src/var/support.js ***!
  \************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
	"use strict";

	// All support tests are defined in their respective modules.
	return {};
}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/var/toString.js":
/*!*************************************************!*\
  !*** ./node_modules/jquery/src/var/toString.js ***!
  \*************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./class2type */ "./node_modules/jquery/src/var/class2type.js")
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( class2type ) {
	"use strict";

	return class2type.toString;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./node_modules/jquery/src/wrap.js":
/*!*****************************************!*\
  !*** ./node_modules/jquery/src/wrap.js ***!
  \*****************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	__webpack_require__(/*! ./core */ "./node_modules/jquery/src/core.js"),
	__webpack_require__(/*! ./var/isFunction */ "./node_modules/jquery/src/var/isFunction.js"),
	__webpack_require__(/*! ./core/init */ "./node_modules/jquery/src/core/init.js"),
	__webpack_require__(/*! ./manipulation */ "./node_modules/jquery/src/manipulation.js"), // clone
	__webpack_require__(/*! ./traversing */ "./node_modules/jquery/src/traversing.js") // parent, contents
], __WEBPACK_AMD_DEFINE_RESULT__ = (function( jQuery, isFunction ) {

"use strict";

jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );

return jQuery;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./resources/sass/pages/home.scss":
/*!****************************************!*\
  !*** ./resources/sass/pages/home.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/***/ ((module) => {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArray": () => (/* binding */ __spreadArray),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__values": () => (/* binding */ __values)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/home": 0,
/******/ 			"css/home": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/home"], () => (__webpack_require__("./resources/js/pages/home.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/home"], () => (__webpack_require__("./resources/sass/pages/home.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;