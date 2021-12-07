({
	calculate : function(component, event, helper) {
        /* On crée une variable dans la quel, nous allons stocker la valeur du composant avec l'ID='fnum' */
		var fnumber = component.find("fnum").get("v.value");
   		var snumber = component.find("snum").get("v.value");
        
        /* Nous allons récupérer le composant avec l'ID Result */
		var result = component.find("Result");
        
        /* Nous allons mettre a jour la valeur de result avec notre logique d'addition */
		result.set("v.value", fnumber+snumber);
        
        /* Nous allons alerter resultat just for fun*/
        alert(result.get("v.value"));
	}
})