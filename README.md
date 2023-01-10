# BigDataCloud Free Client Info API Client


A Javascript client for fetching information about a fronted user [BigDataCloud](https://www.bigdatacloud.com)
This client works without any Javascript dependencies and has no API key or account requirement... Simply load it up and you're ready to fetch information about your frontend users.

For more information about this API and how it works, [please click here.](https://www.bigdatacloud.com/docs/api/client-info-api) 

## Documentation

Documentation specific to this Free API Client is detailed below.
For more information on other available APIs, please visit our [API area](https://www.bigdatacloud.com/docs).



## Authentication / Identification

There is no authentication or identification required to use this API or client.
You may use this API and client for Free without an account.



## Usage Limits

This client-side API is completely FREE for both commercial and non-commercial use, including unlimited usage with no throttling or limitations.



## Manual Installation

1. Download the included javascript file and place it in a publically accessible location
2. Include the script tag `<script src="bigdatacloud_client_info.js" type="text/javascript"></script>` before your code execution
3. Initiate the Client Info API Client as per the below example



## CDN Installation

1. Include the CDN script tag `<script src="https://cdn.jsdelivr.net/gh/bigdatacloudapi/js-client-info-client@latest/bigdatacloud_client_info.min.js" type="text/javascript"></script>` before your code execution
2. Initiate the API Client and make the required calls as necessary



## Example usage

```javascript
<script src="https://cdn.jsdelivr.net/gh/bigdatacloudapi/js-client-info-client@latest/bigdatacloud_client_info.min.js" type="text/javascript"></script>
<script type="text/javascript">

    getBDCClientInfo(
        /* provide a callback function for client info result */
        function(result) {
            console.log(result);
        }
    );

</script>
```


## Example output

```javascript
{
    "ipString": "8.8.8.8",
    "ipNumeric": 134744072,
    "ipType": "IPv4",
    "isBehindProxy": false,
    "device": "Desktop",
    "os": "Windows 10",
    "userAgent": "Chrome 76.0.3809",
    "family": "Chrome",
    "versionMajor": "76",
    "versionMinor": "0",
    "versionPatch": "3809",
    "isSpider": false,
    "userAgentDisplay": "Windows 10 Desktop Chrome 76.0.3809",
    "userAgentRaw": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36",
    "userLanguages": ["en-US", "en"]
}
```
