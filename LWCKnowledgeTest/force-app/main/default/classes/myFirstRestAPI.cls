public class myFirstRestAPI{
    public static void getLeadInfo(){
        HttpRequest req = new HttpRequest();
        req.setEndPoint(''); //Provide endpoint for the request usually the consumer key containing login url+ consumer key+ consumer secret+ user name and password//
        req.setMethod('POST');
        Http http = new Http();
        HttpResponse res = new HttpResponse();
        res = http.send(req);
        System.debug('response Oauth' +res.getBody());
        Oauth objAuthInfo = (Oauth)JSON.deserialize(res.getBody(), Oauth.class);
         
        if(objAuthInfo.access_token != null){
            HttpRequest req1 = new HttpRequest();
            req1.setEndPoint(''); //Provide endpoint for the request usually the record url//
            req1.setMethod('GET');
            req1.setHeader('Context-Type', 'application/json');
            req1.setHeader('Authorization', 'Bearer'+objAuthInfo.access_token);
            Http http1 = new Http();
            HttpResponse res1 = new HttpResponse();
            res1 = http.send(req);
            System.debug('Lead Info' +res1.getBody());

        }

    }

    public class Oath{
        public String access_token{get;set;}
        public String instance_url{get;set}
        public String Id{get;set}
        public String token_type{get;set;}
        public String issued_date{get;set;}
        public String signature{det;set;}
    }
}