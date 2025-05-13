sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "./controller/HelloDialog"
], function (UIComponent, JSONModel, ResourceModel, HelloDialog) {
    "use strict";
    return UIComponent.extend("sap.ui.walkthrogh.Component", {
        metadata: {
            rootView: {
                "viewName": "sap.ui.demo.walkthrough.view.App",
                "type": "XML",
                "async": true,
                "id": "app"
            }
        },
        init: function () {
            // kill the init function of parent
            UIComponent.prototype.init.apply(this, arguments);
            // Set data models
            var oData = {
                recipient: {
                    name: "UI5",

                }
            }
            var oModel = new JSONModel(oData);
            this.setModel(oModel);

            // set i18n model
            var i18nModel = new ResourceModel({
                bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
                supportedLocales: [""],
                fallbackLocale: ""
            });
            this.setModel(i18nModel, "i18n");
            //in this way we call our cusm fucns
            this._helloDialog = new HelloDialog(this.getRootControl());


        },
        exis: function () {
            this._helloDialog.destroy();
            delete this._helloDialog;

        },
        openHelloDialog: function(){
            this._helloDialog.open();
            
        }
    })
})