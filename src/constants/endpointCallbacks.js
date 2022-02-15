const defaultExport = {};
defaultExport.putMangadexToken = (tokenObject, mangadexToken)=>{
    try {
        tokenObject["api.mangadex.org"] = {token:mangadexToken["session"], refresh:mangadexToken["refresh"]};
        return tokenObject;
    }
    catch(e) {
        console.error("failed to store token.");
        return tokenObject;
    }
}

defaultExport.getMangadexToken = (tokenObject)=>{
    
}

defaultExport.refreshMangadexToken = (tokenObject)=>{
    
}

export default defaultExport;