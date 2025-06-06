sap.ui.define([
    "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast",
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("sap.ui.demo.walkthrough.controller.InvoiceList", {
        onInit: function () {
            // Aquí puedes inicializar modelos, eventos u otras lógicas si es necesario
            // Ejemplo: console.log("Controlador de InvoiceList iniciado");
            
            var oModel = new sap.ui.model.json.JSONModel({
                miDato: "Mi casa"
            });

            // Registrar el modelo con nombre
            this.getView().setModel(oModel, "miModelo");
           
           /** 
            var oComponent = this.getOwnerComponent();
            console.log("Owner Component:", oComponent);

                var oModel = this.getOwnerComponent().getModel("miModelo");
                if (oModel) {
                    var valor = oModel.getProperty("/miDato");
                    console.log("miDato:", valor);
                } else {
                    console.error("Modelo miModelo no encontrado");
                }
            **/
        },
          onClick: function () {
  

            var mModel = this.getView().getModel('miModelo');
            mModel.setProperty("/miDato", "casa2");

        
            // Registrar el modelo con nombre
            this.getView().setModel(mModel, "miModelo");
            //MessageToast.show(mModel)
        },
    });
});