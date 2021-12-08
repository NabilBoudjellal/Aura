({
	calculate_attributes : function(component, event, helper) {
        /* la différence par rapport à l'exemple précédent est que 
        au lieu d'utiliser component.find("fnum").get("v.value") on utilise directement 
        var fnumber = component.get("v.fnumber"); fnumber est le nmm de l'attribut */
        
		var first = component.get("v.fnumber");
   		var second = component.get("v.snumber");


		component.set("v.result", first+second);

	}
})