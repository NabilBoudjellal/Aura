({
    doSave : function(component, event, helper) {
        
        var action = component.get("c.createContact");

        action.setParams({'contObj':component.get('v.contactObj')});

        action.setCallback(this,function(response){
            var state = response.getState();
            if(state == "SUCCESS"){
            component.set('v.contactId',response.getReturnValue());
            }else {
                alert('un probleme est survenu');
            }
        });
        $A.enqueueAction(action);
        
    }
})
