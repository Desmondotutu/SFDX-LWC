public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(String accId){
        try {
            return
            [select AccountId, Id, firstName from contact where AccountId=:accId with security_enforced];
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
