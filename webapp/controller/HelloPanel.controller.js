sap.ui.define([

    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "sap/ui/core/Fragment"
], function (Controller, MessageToast, JSONModel, ResourceModel, Fragment) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {
        onShowHello: function () {
            // read msg from i18n model
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);
            //show a native or vanilla JS alert
            MessageToast.show(sMsg)
        },
        onOpenDialog: function () {
            let oView = this.getView();
            if(!this.byId("helloDialog")){
                Fragment.load({
                    id: oView.getId(),
                    name: "sap.ui.demo.walkthrough.view.HelloDialog",
                    controller: this
                }).then(function(oDialog){
                    oView.addDependent(oDialog);
                    oDialog.open();
                })
            }else{
                this.byId("helloDialog").open();
            }
        },
        onCloseDialog : function(){
            this.byId("helloDialog").close();

        }
    })
})