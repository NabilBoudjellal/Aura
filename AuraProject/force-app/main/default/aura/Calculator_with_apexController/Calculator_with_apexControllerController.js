({
	calculate_with_apex : function(component, event, helper) {
		var first = component.get("v.fnumber");
   		var second = component.get("v.snumber");
        /* invocaton de la méthode APEX */
		var action = component.get("c.calculateValues");

        /* set des parametres de notre apex methode*/
        action.setParams({"firstnumber":first,"secondnumber":second});

        /* set call back
        et analyse de la réponse puis mise à jour du composant result*/
        action.setCallback(this,function(response){
                          var state = response.getState();
            			  var valueFromResp = response.getReturnValue();
                          if(state == "SUCCESS"){
                          component.set("v.result", valueFromResp);    
                          }
                           });
        $A.enqueueAction(action);
	}
})