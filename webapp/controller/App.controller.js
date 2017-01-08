sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Controller,MessageToast) {
	"use strict";

	return Controller.extend("cadaxo.ui5.app.controller.App", {
		onListItemPressed: function (oEvent) {
			this.getView().byId("cdx-btnSave").setEnabled(true);
			this.getView().byId("cdx-btnSaveAsNew").setEnabled(true);
			var oItem = oEvent.getSource();
			var sPath = oItem.getBindingContext("northwind").getPath();
			this.getView().byId("cdx-panel1").bindElement({path: sPath, model:"northwind"});
		},
		onUpdate: function (oEvent) {
			
		},
		onSaveAsNewPressed: function (oEvent) {
			var sId = this._getNewId();
			var sName = this.getView().byId("cdx-inputName").getValue();
			 this.getView().getModel("northwind").create("/Suppliers",{"ID":sId, "Name":sName},{
			 	error: function (oError) { //console.log(oError); 
			 	},
			 	success: function (oData, response) { MessageToast.show("Succesfully created!"); }
			 });
		},
		_getNewId: function () {
			var oData = this.getView().getModel("northwind").getProperty("/");	
			var aIds = [];
			for (var oItem in oData) {
				aIds.push(oData[oItem].ID);
			}
			
			var bNewId = false;
			var iId = aIds.length;
			do {
				if (aIds.indexOf(iId) > -1) {
					iId++;
				} else {
					bNewId = true;
				}
			} while (!bNewId)
			
			return iId;
			
		},
		onGetId: function (oEvent) {
			//alert(this._getNewId());
		},
		onDeleteModePressed: function (oEvent) {
			var oBtn = oEvent.getSource();
			if (oBtn.getPressed()) {
				this.getView().byId("cdx-list").setMode("Delete");
				oBtn.setText("Deletion Mode: On");
			} else {
				this.getView().byId("cdx-list").setMode("None");
				oBtn.setText("Deletion Mode: Off");
			}
		},
		_removeSuccess: function (oData, response) {
			MessageToast.show("Successfully deleted!");
		},
		_removeError: function (oError) {
			MessageToast.show(oError);
		},
		onListItemDeleted: function (oEvent) {
			var sPath = oEvent.getParameters().listItem.getBindingContext("northwind").getPath();
			this.getView().getModel("northwind").remove(sPath,{success:this._removeSuccess, error:this._removeError});
		},
		onInputChange: function (oEvent) {
			MessageToast.show("changed");
		}
	});
});