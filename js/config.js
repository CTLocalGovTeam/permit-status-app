﻿/*global dojo */
/*
 | Version 10.2
 | Copyright 2013 Esri
 |
 | Licensed under the Apache License, Version 2.0 (the "License");
 | you may not use this file except in compliance with the License.
 | You may obtain a copy of the License at
 |
 |    http://www.apache.org/licenses/LICENSE-2.0
 |
 | Unless required by applicable law or agreed to in writing, software
 | distributed under the License is distributed on an "AS IS" BASIS,
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 | See the License for the specific language governing permissions and
 | limitations under the License.
 */
dojo.provide("js.config");
dojo.declare("js.config", null, {

    // This file contains various configuration settings for "Permit Status" template
    //
    // Use this file to perform the following:
    //
    // 1.  Specify application Name                      - [ Tag(s) to look for: ApplicationName ]
    // 2.  Set path for application icon                 - [ Tag(s) to look for: ApplicationIcon ]
    // 3.  Set path for application favicon              - [ Tag(s) to look for: ApplicationFavicon ]
    // 4.  Set splash screen message                     - [ Tag(s) to look for: SplashScreenMessage ]
    // 5.  Set URL for help page                         - [ Tag(s) to look for: HelpURL ]
    // 6.  Specify URLs for base maps                    - [ Tag(s) to look for: BaseMapLayers ]
    // 7.  Set initial map extent                        - [ Tag(s) to look for: DefaultExtent ]
    // 8.  Specify WebMapId, if using WebMap             - [ Tag(s) to look for: WebMapId ]
    // 9.  Or for using map services:
    // 9a. Specify URLs for operational layers           - [ Tag(s) to look for: PermitResultData, SearchSettings, CountyLayerData ]
    // 9b. Customize zoom level for address search       - [ Tag(s) to look for: ZoomLevel ]
    // 9c. Enable or disable auto-complete feature for Permit search
    //                                                   - [ Tag(s) to look for: AutoCompleteForPermit]
    // 9d. Customize info-Popup size                     - [ Tag(s) to look for: InfoPopupHeight, InfoPopupWidth ]
    // 9e. Customize data formatting                     - [ Tag(s) to look for: ShowNullValueAs, FormatDateAs ]
    // 10. Customize address search settings             - [ Tag(s) to look for: LocatorSettings]
    // 11. Set URL for geometry service                  - [ Tag(s) to look for: GeometryService ]  
    // 12. Specify URLs for map sharing                  - [ Tag(s) to look for: MapSharingOptions,TinyURLServiceURL, TinyURLResponseAttribute, FacebookShareURL, TwitterShareURL, ShareByMailLink ]

    // ------------------------------------------------------------------------------------------------------------------------
    // GENERAL SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------
    // Set application title
    ApplicationName: "Permit Status",

    // Set application icon path
    ApplicationIcon: "images/logo.png",

    // Set application Favicon path
    ApplicationFavicon: "images/favicon.ico",

    // Set splash window content - Message that appears when the application starts
    SplashScreen: {
        Message: "Lorem ipsum dolor sit er elit lamet, consectetaur cillium adipisicing pecu, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Nam liber te conscient to factor tum poen legum odioque civiuda.",
        isVisible: true
    },

    // Set URL of help page/portal
    HelpURL: "help.htm",

    // ------------------------------------------------------------------------------------------------------------------------
    // BASEMAP SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------
    // Set baseMap layers
    // Please note: All base maps need to use the same spatial reference. By default, on application start the first basemap will be loaded

    BaseMapLayers: [{
        Key: "imageryMap",
        ThumbnailSource: "images/imagery.png",
        Name: "Imagery Map",
        MapURL: "http://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer"

    }, {
        Key: "streetMap",
        ThumbnailSource: "images/streets.png",
        Name: "Street Map",
        MapURL: "http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer"
    }],

    // Initial map extent. Use comma (,) to separate values and dont delete the last comma
    DefaultExtent: "-10181248, 2823548, -8510640, 3646622",

    // ------------------------------------------------------------------------------------------------------------------------
    // OPERATIONAL DATA SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------

    // Configure operational layers:

    // Choose if you want to use WebMap or Map Services for operational layers. If using WebMap, specify WebMapId within quotes, otherwise leave this empty and configure operational layers
    WebMapId: "",

    // If you are using webmap then skip below section for configuring operational layers and move to 'SearchSettings'

    // Configure operational layers and info-popup below.
    // ServiceURL: URL of the layer.
    // LoadAsServiceType: Field to specify if the operational layers should be added as dynamic map service layer or feature layer or tiled map service layer. 
    //                    Supported service types are 'dynamic', 'feature' and 'tiled' only.
    // MobileCalloutContentField: Specify field to be displayed in callout bubble for mobile devices
    // InfoWindowTitleField: Specify field for the info window header
    // InfoWindowContent: Set the content to be displayed in the info-Popup. Define labels and field values. 
    //                    These fields should be present in the layer referenced by 'QueryLayerId' specified under section 'SearchSettings' 
    // DisplayText: Caption to be displayed instead of field alias names. Set this to empty string ("") if you wish to display field alias names as captions.
    // FieldName: Field used for displaying the value

    PermitResultData: [{
        ServiceURL: "http://50.18.115.76:6080/arcgis/rest/services/PermitStatus/MapServer/0",
        LoadAsServiceType: "dynamic",
        InfoWindowTitleField: "${PROJ_NAME}",
        MobileCalloutContentField: "${PermitNumber}",
        InfoWindowContent: [{
            DisplayText: "Prog Area:",
            FieldName: "${PROG_AREA}"
        }, {
            DisplayText: "Permit Number:",
            FieldName: "${PermitNumber}"
        }, {
            DisplayText: "Project No:",
            FieldName: "${PROJ_NO}"
        }, {
            DisplayText: "Project Name:",
            FieldName: "${PROJ_NAME}"
        }, {
            DisplayText: "Site Name:",
            FieldName: "${SITE_NAME}"
        }, {
            DisplayText: "Address:",
            FieldName: "${ADDRESS}"
        }, {
            DisplayText: "City:",
            FieldName: "${CITY}"
        }, {
            DisplayText: "State:",
            FieldName: "${STATE}"
        }, {
            DisplayText: "Type:",
            FieldName: "${Type}"
        }, {
            DisplayText: "Program:",
            FieldName: "${Program}"
        }, {
            DisplayText: "Issue Date:",
            FieldName: "${Issue_Date}"
        }, {
            DisplayText: "Receive Date:",
            FieldName: "${Receive_Date}"
        }, {
            DisplayText: "County:",
            FieldName: "${County}"
        }]

    }, {
        ServiceURL: "http://50.18.115.76:6080/arcgis/rest/services/ERP/MapServer/0",
        LoadAsServiceType: "dynamic",
        InfoWindowTitleField: "${PROJECT_NAME}",
        MobileCalloutContentField: "${ERP_PERMIT_NBR}",
        InfoWindowContent: [{
            DisplayText: "Application ID:",
            FieldName: "${ERP_APPLICATION_ID}"
        }, {
            DisplayText: "Permit Number:",
            FieldName: "${ERP_PERMIT_NBR}"
        }, {
            DisplayText: "Permittee Name:",
            FieldName: "${PERMITTEE_NAME}"
        }, {
            DisplayText: "Project Name:",
            FieldName: "${PROJECT_NAME}"
        }, {
            DisplayText: "Address:",
            FieldName: "${ADDRESS}"
        }, {
            DisplayText: "City:",
            FieldName: "${CITY}"
        }, {
            DisplayText: "Type:",
            FieldName: "${ERP_PERMIT_TYPE_DESC}"
        }, {
            DisplayText: "Status:",
            FieldName: "${ERP_STATUS_DESC}"
        }, {
            DisplayText: "County:",
            FieldName: "${COUNTY_NAME}"
        }, {
            DisplayText: "URL:",
            FieldName: "${ERP_EXT_URL}"
        }]
    }, {
        ServiceURL: "http://50.18.115.76:6080/arcgis/rest/services/CUP/MapServer/0",
        LoadAsServiceType: "dynamic",
        InfoWindowTitleField: "${SITE_PROJECT_NAME}",
        MobileCalloutContentField: "${WUP_PERMIT_NBR}",
        InfoWindowContent: [{
            DisplayText: "Application ID:",
            FieldName: "${WUP_APPLICATION_ID}"
        }, {
            DisplayText: "Permit Number:",
            FieldName: "${WUP_PERMIT_NBR}"
        }, {
            DisplayText: "Permittee Name:",
            FieldName: "${PERMITTEE_NAME}"
        }, {
            DisplayText: "Project Name:",
            FieldName: "${SITE_PROJECT_NAME}"
        }, {
            DisplayText: "Address:",
            FieldName: "${ADDRESS}"
        }, {
            DisplayText: "City:",
            FieldName: "${CITY}"
        }, {
            DisplayText: "Type:",
            FieldName: "${WUP_PERMIT_TYPE_DESC}"
        }, {
            DisplayText: "Status:",
            FieldName: "${WUP_APP_STATUS_DESC}"
        }, {
            DisplayText: "County:",
            FieldName: "${COUNTYNAME}"
        }, {
            DisplayText: "URL:",
            FieldName: "${WUP_EXT_URL}"
        }]
    }],

    // Configure settings for loading and performing query on the county layer. County layer will be queried only when the 'UseGeocoderService' is set to false
    // Title: Name of the layer as defined in the map service.
    // ServiceURL: URL of the layer. The URL should include the layer id.
    // LoadAsServiceType: Supported service types are 'dynamic', 'feature', 'tiled' only. 
    //                    Use this flag to specify if the operational layers should be added as dynamic map service layer or feature layer or tiled map service layer. 
    // SearchExpression: Used while searching counties without using Geocoder service.
    // CountyDisplayField: Attribute that will be displayed in the search box when user searches for a particular county.
    // UseGeocoderService: When this flag is set to true, then the Location search will be performed using configured geocode service. 
    //                     When it is set to false then ServiceURL mentioned below will be used to perform location search.

    CountyLayerData: {
        Title: "CountyLayer",
        ServiceURL: "http://50.18.115.76:6080/arcgis/rest/services/Counties/MapServer/0",
        LoadAsServiceType: "dynamic",
        SearchExpression: "NAME LIKE '${0}%'",
        CountyDisplayField: "${NAME}",
        UseGeocoderService: true
    },

    // Use this section to configure search settings for both Webmap and Operational layer implementations. All the fields in this section are mandatory.
    // Title: Name of the layer as defined in the webmap/operational layers. In case of webmap implementations, it must match layer name specified in webmap.
    // QueryLayerId: Layer index used for performing queries.
    // ListDisplayText: Text to be displayed in the InfoWindow when there are multiple permits at a particular point. 
    // ListFieldName: Attribute to be displayed in the InfoWindow when there are multiple permits at a particular point
    // SearchDisplayFields: Attribute that will be displayed in the search box when user searches for a particular permit.
    // SearchExpression: Query to perform permit search.

    SearchSettings: [{
        Title: "State Permit",
        QueryLayerId: "0",
        ListDisplayText: "Permit Number",
        ListFieldName: "${PermitNumber}",
        SearchDisplayFields: "${PermitNumber} / ${PROJ_NAME} / ${Type}",
        SearchExpression: "UPPER(PermitNumber) LIKE '${0}%' OR UPPER(PROJ_NAME) LIKE '${0}%' OR UPPER(SITE_NAME) LIKE '${0}%' OR UPPER(Type) LIKE '${0}%'"
    }, {
        Title: "ERP",
        QueryLayerId: "0",
        ListDisplayText: "Permit Number",
        ListFieldName: "${ERP_PERMIT_NBR}",
        SearchDisplayFields: "${ERP_PERMIT_NBR} / ${PROJECT_NAME} / ${ERP_PERMIT_TYPE_DESC}",
        SearchExpression: "UPPER(ERP_PERMIT_NBR) LIKE '${0}%' OR UPPER(PROJECT_NAME) LIKE '${0}%' OR UPPER(ERP_PERMIT_TYPE_DESC) LIKE '${0}%' OR UPPER(PERMITTEE_NAME) LIKE '${0}%'"
    }, {
        Title: "CUP",
        QueryLayerId: "0",
        ListDisplayText: "Permit Number",
        ListFieldName: "${WUP_PERMIT_NBR}",
        SearchDisplayFields: "${WUP_PERMIT_NBR} / ${SITE_PROJECT_NAME} / ${WUP_PERMIT_TYPE_DESC}",
        SearchExpression: "UPPER(WUP_PERMIT_NBR) LIKE '${0}%' OR UPPER(SITE_PROJECT_NAME) LIKE '${0}%' OR UPPER(WUP_PERMIT_TYPE_DESC) LIKE '${0}%' OR UPPER(PERMITTEE_NAME) LIKE '${0}%'"
    }],

    // Following zoom level will be set for the map upon searching an address or permit
    ZoomLevel: 10,

    // Flag to enable or disable auto-complete search feature for Permit search
    AutoCompleteForPermit: true,

    // ------------------------------------------------------------------------------------------------------------------------
    // INFO-POPUP UI SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------

    // Info-popup is a popup dialog that gets displayed on selecting a feature
    // Set size of the info-Popup - select maximum height and width in pixels (not applicable for tabbed info-Popup)
    // minimum height should be 270 for the info-popup in pixels
    InfoPopupHeight: 310,

    // minimum width should be 330 for the info-popup in pixels 
    InfoPopupWidth: 330,

    // Set string value to be shown for null or blank values
    ShowNullValueAs: "N/A",

    // Set date format
    FormatDateAs: "MMM dd, yyyy",

    // ------------------------------------------------------------------------------------------------------------------------
    // ADDRESS SEARCH SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------
    // Set locator settings such as locator symbol, size, display fields, match score
    // LocatorParameters: Parameters(text, outFields, maxLocations, bbox, outSR) used for address and location search.
    // AddressSearch: Candidates based on which the address search will be performed.
    // LocationSearch: Attributes based on which the layers will be queried when a location search is performed.
    // AddressMatchScore: Setting the minimum score for filtering the candidate results.
    // MaxResults: Maximum number of locations to display in the results menu.
    LocatorSettings: {
        DefaultLocatorSymbol: "images/redpushpin.png",
        MarkupSymbolSize: {
            width: 35,
            height: 35
        },
        Locators: [{
            DisplayText: "Address",
            LocatorDefaultAddress: "26650 Foamflower Blvd, Wesley Chapel, FL, 33544",
            LocatorParameters: {
                SearchField: "text",
                SearchResultField: "outFields",
                SearchCountField: "maxLocations",
                SearchBoundaryField: "bbox",
                SpatialReferenceField: "outSR"
            },
            LocatorURL: "http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/find",
            CandidateFields: "Addr_type, Type, Score, Match_addr",
            DisplayField: "${Match_addr}",
            AddressMatchScore: {
                Field: "Score",
                Value: 80
            },
            AddressSearch: {
                FieldName: 'Addr_type',
                FieldValues: ["StreetAddress", "StreetName", "PointAddress"]
            },
            LocationSearch: {
                FieldName: 'Type',
                FieldValues: ['county', 'city', 'park', 'lake', 'mountain', 'state or province']
            },
            MaxResults: 200
        }, {
            DisplayText: "Location",
            LocatorDefaultLocation: "Hernando County"

        }, {
            DisplayText: "Permit",
            LocatorDefaultPermit: "10"
        }]
    },

    // ------------------------------------------------------------------------------------------------------------------------
    // GEOMETRY SERVICE SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------

    // Set geometry service URL
    GeometryService: "http://localgovtemplates2.esri.com/ArcGIS/rest/services/Geometry/GeometryServer",

    // ------------------------------------------------------------------------------------------------------------------------
    // SETTINGS FOR MAP SHARING
    // ------------------------------------------------------------------------------------------------------------------------

    // Set URL for TinyURL service, and URLs for social media
    MapSharingOptions: {
        TinyURLServiceURL: "http://api.bit.ly/v3/shorten?login=esri&apiKey=R_65fd9891cd882e2a96b99d4bda1be00e&uri=${0}&format=json",
        TinyURLResponseAttribute: "data.url",
        FacebookShareURL: "http://www.facebook.com/sharer.php?u=${0}&t=Permit%20Status",
        TwitterShareURL: "http://mobile.twitter.com/compose/tweet?status=Permit%20Status ${0}",
        ShareByMailLink: "mailto:%20?subject=Check%20out%20this%20map!&body=${0}"
    }
});