@RestResource(urlMapping = 'getLead/*')
global class myFirstWebService{
    @HttpGet
    global static Lead getLeadInfo(){
        RestRequest req = RestContext.request;
        RestResponse res = RestContext.response;
        String urlId = req.requestURL.subString(req.requestURL.lastIndexof('/')+1);
        Lead Id = [select Id , Name from Lead where Id =: urlId];
        return Id;

    }
}