(function connectionbuilder(attr)
{
    var params = {};


    params["HOST"] = attr[connectionHelper.attributeServer];
    params["PORT"] = attr["port"];
    params["USERNAME"] = attr[connectionHelper.attributeUsername];
    params["PWD"] = attr[connectionHelper.attributePassword];
	params["HTTPPath"] = attr["service"];

    params["AutoReconnect"] = ["0"];
    params["SPARKSERVERTYPE"] = ["3"];
    params["AUTHMECH"] = ["3"];
    params["USENATIVEQUERY"] = ["1"];
    params["FastSQLPrepare"] = ["1"];
    params["ThriftTransport"] = ["2"];
    

    if (attr["sslmode"] != undefined && attr["sslmode"] != "")
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
