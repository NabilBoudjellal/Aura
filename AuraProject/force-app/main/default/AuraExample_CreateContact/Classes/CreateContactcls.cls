public with sharing class CreateContactcls {
    @AuraEnabled
    public static string methodName(Contact contObj){
        System.debug('contact::'+contObj.FirstName);
        insert contObj;
        return contObj.Id;
    }
}
