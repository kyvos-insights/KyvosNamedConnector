(function matcher(attr1, attr2)
{

    if (attr1["class"] != attr2["class"])
        return false;

    //You can set defaults here.
    //if (attr2["authentication"] == undefined || attr2["authentication"] == "")
    //   attr2["authentication"] = "auth-default";

    return connectionHelper.MatchesConnectionAttributes(attr1, attr2);
})

