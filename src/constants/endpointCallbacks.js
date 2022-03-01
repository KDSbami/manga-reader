const defaultExport = {};
defaultExport.putMangadexToken = (tokenObject, mangadexToken)=>{
    try {
        tokenObject["api.mangadex.org"] = {
            token:mangadexToken["session"], 
            refresh:mangadexToken["refresh"],
            tokenExpiry:Date.now()+(60*1000*15), // 15 minutes
            refreshExpiry:Date.now()+(60*1000*60*24*15) // 15 days
        };
        return tokenObject;
    }
    catch(e) {
        console.error("eC101:failed to store token.");
        return tokenObject;
    }
}

defaultExport.getMangadexToken = async (tokenObject)=>{
    if(tokenObject) {
        const tokenExpiryTime = new Date(tokenObject["api.mangadex.org"]["tokenExpiry"]);
        console.log(tokenExpiryTime);
        const currentTime = new Date(Date.now()+(10*1000));
        let refreshToken = tokenObject["api.mangadex.org"]["refresh"]
        if(currentTime>tokenExpiryTime){
            const refreshExpiryTime = new Date(tokenObject["api.mangadex.org"]["refreshExpiry"]);
            if(currentTime>refreshExpiryTime) {

            }
            
            return token;
        }
        const token = tokenObject["api.mangadex.org"]["token"];
        return token;
        
        
    }
    return "";
}

defaultExport.refreshMangadexToken = (tokenObject)=>{
    
}

export default defaultExport;