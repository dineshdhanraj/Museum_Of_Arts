function MainUrl()
{
    return "https://collectionapi.metmuseum.org/public/collection/v1/objects?metadataDate=2021-06-22&departmentIds=3&hasImages=true"
}

function SubUrl(objectId)
{
return "https://collectionapi.metmuseum.org/public/collection/v1/objects/"+objectId;
}

export{MainUrl,SubUrl};