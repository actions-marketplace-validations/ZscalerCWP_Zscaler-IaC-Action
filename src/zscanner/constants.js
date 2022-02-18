let constants = {
    HTTP_METHODS : {
        POST : "POST",
        GET  : "GET"
    },
    AUTH_CONSTANTS : {
       TYPE : "client_credentials",
       AUDIENCE : "https://api.zscwp.io/iac",
        CONTENT_TYPE : "application/x-www-form-urlencoded"
    },
    DOWNLOAD_CONSTANTS : {
        DOWNLOAD_DIR : "zscanner_installed",
        DOWNLOAD_SUBDIR : "/download",
        DOWNLOAD_FILE : "/iac-scanner.tar.gz",
        EXTRACTION_SUBDIR : "/extract"
    },
    COMMANDS : {
        LOGIN : "/zscanner login cc -m cicd --client-id %s --client-secret %s -r %s",
        SCAN : "/zscanner scan -m cicd --sub-type GITHUB_ACTION --repo-type GITHUB -o %s --triggered-by %s --event-id %s --repo %s --event-type %s --branch %s --ref %s",
        LOGOUT : "/zscanner logout -m cicd",
        CONFIG_ADD : "/zscanner config add -m cicd -k %s -v %s",
    },
    SCANNER_RESP_TYPE : "stream"
}

module.exports = Object.freeze(constants);