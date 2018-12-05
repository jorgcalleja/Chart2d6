sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("jorgcalleja.dice.statistics.Dice_Statistics_sample.controller.Main", {
		onInit : function() {

// if SAPUI5 < 1.32.11 ...
//SVGElement.prototype.getTransformToElement = SVGElement.prototype.getTransformToElement || function(elem) { return elem.getScreenCTM().inverse().multiply(this.getScreenCTM()); }; 		

			var oData = { "Dice" : [
				{ "value" : "2", "prob"  : "2.7", "probAc" : "100" },
				{ "value" : "3", "prob"  : "5.5", "probAc" : "97.2" },
				{ "value" : "4", "prob"  : "8.3", "probAc" : "91.7" },
				{ "value" : "5", "prob"  : "11.1", "probAc" : "83.3" },
				{ "value" : "6", "prob"  : "13.9", "probAc" : "72.2" },
				{ "value" : "7", "prob"  : "16.7", "probAc" : "58.3" },
				{ "value" : "8", "prob"  : "13.9", "probAc" : "41.7" },
				{ "value" : "9", "prob"  : "11.1", "probAc" : "27.8" },
				{ "value" : "10", "prob"  : "8.3", "probAc" : "16.7" },
				{ "value" : "11", "prob"  : "5.5", "probAc" : "8.3" },
				{ "value" : "12", "prob"  : "2.7", "probAc" : "2.7" }
			] };
			this.getView().setModel(new JSONModel(oData));
			
			var oVizFrame = this.byId("idVizFrame");
			oVizFrame.setVizProperties( { "title" : { "text" : "2d6"} });
		}
	});
});



/*

		onInit : function() {
			var oData = { 
				"1d6" : { "Dice" : [
				{ "value" : "1", "prob"  : "16.7", "probAc" : "100" },
				{ "value" : "2", "prob"  : "16.7", "probAc" : "83.3" },
				{ "value" : "3", "prob"  : "16.7", "probAc" : "66.7" },
				{ "value" : "4", "prob"  : "16.7", "probAc" : "50" },
				{ "value" : "5", "prob"  : "16.7", "probAc" : "33.3" },
				{ "value" : "6", "prob"  : "16.7", "probAc" : "16.7" } ] }
				,
				"2d6" : { "Dice" : [
				{ "value" : "2", "prob"  : "2.7", "probAc" : "100" },
				{ "value" : "3", "prob"  : "5.5", "probAc" : "97.2" },
				{ "value" : "4", "prob"  : "8.3", "probAc" : "91.7" },
				{ "value" : "5", "prob"  : "11.1", "probAc" : "83.3" },
				{ "value" : "6", "prob"  : "13.9", "probAc" : "72.2" },
				{ "value" : "7", "prob"  : "16.7", "probAc" : "58.3" },
				{ "value" : "8", "prob"  : "13.9", "probAc" : "41.7" },
				{ "value" : "9", "prob"  : "11.1", "probAc" : "27.8" },
				{ "value" : "10", "prob"  : "8.3", "probAc" : "16.7" },
				{ "value" : "11", "prob"  : "5.5", "probAc" : "8.3" },
				{ "value" : "12", "prob"  : "2.7", "probAc" : "2.7" }
			] } };
			this.getView().setModel(new JSONModel(oData["2d6"]));
		}
		
*/