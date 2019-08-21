(function connectionbuilder(attr)
{
    var params = {};

    params["HOST"] = attr[connectionHelper.attributeServer];
    params["PORT"] = attr[connectionHelper.attributePort];
    params["USERNAME"] = attr[connectionHelper.attributeUsername];
    params["PWD"] = attr[connectionHelper.attributePassword];
    params["HTTPPath"] = attr[connectionHelper.attributeService];

    params["AutoReconnect"] = ["0"];
    params["SPARKSERVERTYPE"] = ["3"];
    params["AUTHMECH"] = ["3"];
    params["USENATIVEQUERY"] = ["1"];
    params["FastSQLPrepare"] = ["1"];
    params["ThriftTransport"] = ["2"];    

    if (attr[connectionHelper.attributeSSLMode] != undefined && attr[connectionHelper.attributeSSLMode] != "")
    {
        params["SSL"] = "1";
    }

    var formattedParams = [];
    for (var key in params)
    {
            formattedParams.push(connectionHelper.formatKeyValuePair(key, params[key]));
    }

    formattedParams.push(connectionHelper.formatKeyValuePair(driverLocator.keywordDriver, driverLocator.locateDriver(attr)));

    return formattedParams;
})
