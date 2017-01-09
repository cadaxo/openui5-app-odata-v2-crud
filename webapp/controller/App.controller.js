sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Controller,MessageToast) {
	"use strict";
	
	return Controller.extend("cadaxo.ui5.app.controller.App", {
		// Load Resource bundle - i18n properties
		getResourceBundle: function() {
			return this.getOwnerComponent().getModel("i18n").getResourceBundle();
		},
		// Handling when user click on item from the list
		onListItemPressed: function (oEvent) {
			var oItem = oEvent.getSource();
			var sPath = oItem.getBindingContext("northwind").getPath();
			
			this._setSaveButtons(true);
			this.getView().byId("cdx-panel1").bindElement({path: sPath, model:"northwind"});
		},
		// Handling Delete mode toggle button - enable/disable item deletion
		onDeleteModePressed: function (oEvent) {
			var oBtn = oEvent.getSource();
			var oList = this.getView().byId("cdx-list");
			
			if (oBtn.getPressed()) {
				oList.setMode("Delete");
				oBtn.setText(this.getResourceBundle().getText("deletionModeOn"));
			} else {
				oList.setMode("None");
				oBtn.setText(this.getResourceBundle().getText("deletionModeOff"));
			}
		},
		// Handlig Item delete
		onListItemDeleted: function (oEvent) {
			var sPath = oEvent.getParameters().listItem.getBindingContext("northwind").getPath();
			var sDeleteSuccess = this.getResourceBundle().getText("deleteSuccess");
			this.getView().getModel("northwind").remove(
				sPath,{
					success: function (oData, response) {
						MessageToast.show(sDeleteSuccess);
					},
					error: function (oError) { MessageToast.show(oError); }
				}
			);
		},
		// Handling Save as new item
		onSaveAsNewPressed: function (oEvent) {
			var oView = this.getView();
			var sId = this._getNewId();
			var oInput = oView.byId("cdx-inputName");
			var sInputValue = oInput.getValue();
			var sCreateSuccess = this.getResourceBundle().getText("createSuccess");
			var that = this;
			
			oView.getModel("northwind").create(
			 	"/Suppliers",{"ID":sId, "Name":sInputValue},{
			 	error: function (oError) { MessageToast.show(oError);  },
			 	success: function (oData, response) {
			 		MessageToast.show(sCreateSuccess);
			 		oInput.setValue("");
			 		that._setSaveButtons(false);
			 	}
			 });
		},
		onInputChange: function (oEvent) {
			var oView = this.getView();
			var oInput = oView.byId("cdx-inputName");
			if (oInput.getValue().length > 0) {
				oView.byId("cdx-btnSaveAsNew").setEnabled(true);
			} else {
				this._setSaveButtons(false);
			}
		},
		//Handling Update item
		onSavePressed: function (oEvent) {
			var oView = this.getView();
			var oInput = oView.byId("cdx-inputName");
			var sInputValue = oInput.getValue();
			var sPath = oView.byId("cdx-panel1").getElementBinding("northwind").getPath();
			var sUpdateSuccess = this.getResourceBundle().getText("updateSuccess");
			var oPanel = oView.byId("cdx-panel1");
			var that = this;
			
			oView.getModel("northwind").update(sPath, {"Name": sInputValue},{
				error: function (oError) { MessageToast.show(oError); },
				success: function (oData, response) {
					MessageToast.show(sUpdateSuccess);
					oPanel.unbindElement("northwind");
					oInput.setValue("");
					that._setSaveButtons(false);
				}
			});
			
		},
		// Set both save buttons at once
		_setSaveButtons: function (bValue) {
			this.getView().byId("cdx-btnSaveAsNew").setEnabled(bValue);	
			this.getView().byId("cdx-btnSave").setEnabled(bValue);
		},
		//Generate new ID, this should be handled directly by OData backend, but unfortunately
		// it is not part of services.odata.org
		_getNewId: function () {
			var oData = this.getView().getModel("northwind").getProperty("/");	
			var aIds = [];
			var bNewId = false;
			var iId = 0;
			
			for (var oItem in oData) {
				aIds.push(oData[oItem].ID);
			}
			
			iId = aIds.length;
			
			do {
				if (aIds.indexOf(iId) > -1) {
					iId++;
				} else {
					bNewId = true;
				}
			} while (!bNewId)
			
			return iId;
			
		}
	});
});