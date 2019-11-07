sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"webdesign/Web_design/Formatters/reusable"
], function (Controller,reuse) {
	"use strict";

	return Controller.extend("webdesign.Web_design.controller.View1", {
		onInit: function () {
        var oTable = this.getView().byId("table1");
        var oModel = new sap.ui.model.json.JSONModel();
        oModel.loadData("ContactData/CData.json");
        oTable.setModel(oModel);
		},
		
		test : reuse
		
	});
	
	
});
