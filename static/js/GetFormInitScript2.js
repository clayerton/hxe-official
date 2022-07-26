

/* This view acts as a rendering template to render InitScript(and server-side Form's descriptor) in FormContainerBlock's client-side for Form[3b52ff65-3391-4f07-9aff-2465feea29e0].
TECHNOTE: all serverside (paths, dynamic values) of EPiServerForms will be transfered to client side here in this section. */
(function initializeOnRenderingFormDescriptor() {
    // each workingFormInfo is store inside epi.EPiServer.Forms, lookup by its FormGuid
    var workingFormInfo = epi.EPiServer.Forms["3b52ff65-3391-4f07-9aff-2465feea29e0"] = {
        Id: "3b52ff65-3391-4f07-9aff-2465feea29e0",
        Name: "SF-Gated-content-form-drip-catalog-china",
        // whether this Form can be submitted which relates to the visitor's data (cookie, identity) and Form's settings (AllowAnonymous, AllowXXX)

        SubmittableStatus : {"submittable":true,"message":""},        
        ConfirmMessage : "",
        ShowNavigationBar : true,
        ShowSummarizedData : false,
        
        // serialize the dependency configuration of this form to clientside
        DependenciesInfo : [],
        // keep all fieldName which are not satisfied the field dependency conditions
        DependencyInactiveElements: [],

        // Validation info, for executing validating on client side
        ValidationInfo : [{"targetElementName":"__field_232329","targetElementId":"a99959dc-26ac-48ae-9ca7-d66587d526a1","validators":[{"type":"EPiServer.Forms.Implementation.Validation.RequiredValidator","description":null,"model":{"message":"此字段为必填项。","validationCssClass":"ValidationRequired","additionalAttributes":{"required":"","aria-required":"true"}}}]},{"targetElementName":"__field_232328","targetElementId":"a8f28613-eb05-4354-b514-bab169c793ef","validators":[{"type":"EPiServer.Forms.Implementation.Validation.RequiredValidator","description":null,"model":{"message":"此字段为必填项。","validationCssClass":"ValidationRequired","additionalAttributes":{"required":"","aria-required":"true"}}}]},{"targetElementName":"__field_232327","targetElementId":"61c27681-37e7-4521-9132-a7ce74946a8a","validators":[{"type":"EPiServer.Forms.Implementation.Validation.RequiredValidator","description":null,"model":{"message":"此字段为必填项。","validationCssClass":"ValidationRequired","additionalAttributes":{"required":"","aria-required":"true"}}},{"type":"EPiServer.Forms.Implementation.Validation.EmailValidator","description":null,"model":{"jsPattern":"(^$)|(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$)","dotNetPattern":"(^$)|(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$)","message":"输入有效的电子邮件地址。","validationCssClass":null,"additionalAttributes":null}}]},{"targetElementName":"__field_232330","targetElementId":"3106e402-51f2-4c19-b4c2-ed2556e6e6b6","validators":[{"type":"EPiServer.Forms.Implementation.Validation.RequiredValidator","description":null,"model":{"message":"此字段为必填项。","validationCssClass":"ValidationRequired","additionalAttributes":{"required":"","aria-required":"true"}}}]},{"targetElementName":"__field_232331","targetElementId":"cbd2dfab-b5ea-46b2-bc60-d20b101c1c57","validators":[{"type":"EPiServer.Forms.Implementation.Validation.RequiredValidator","description":null,"model":{"message":"此字段为必填项。","validationCssClass":"ValidationRequired","additionalAttributes":{"required":"","aria-required":"true"}}}]},{"targetElementName":"__field_232335","targetElementId":"f05d593b-47d1-4538-b4c1-c042d8c4e2b8","validators":[{"type":"EPiServer.Forms.Implementation.Validation.RequiredValidator","description":null,"model":{"message":"此字段为必填项。","validationCssClass":"ValidationRequired","additionalAttributes":{"required":"","aria-required":"true"}}}]}],
        // Steps information for driving multiple-step Forms.
        StepsInfo : {
            Steps: [{"index":0,"attachedUrl":"","dependField":null,"dependCondition":null,"isActive":true,"attachedContentLink":"","dependValue":"","elementName":"__field_","guid":"00000000-0000-0000-0000-000000000000"}]
        },
        FieldsExcludedInSubmissionSummary: [],
        ElementsInfo: {"__field_232329":{"type":"EPiServer.Forms.Implementation.Elements.TextboxElementBlock","friendlyName":"Last Name","customBinding":false},"__field_232328":{"type":"EPiServer.Forms.Implementation.Elements.TextboxElementBlock","friendlyName":"Name","customBinding":false},"__field_232327":{"type":"EPiServer.Forms.Implementation.Elements.TextboxElementBlock","friendlyName":"Email","customBinding":false},"__field_232330":{"type":"EPiServer.Forms.Implementation.Elements.SelectionElementBlock","friendlyName":"I am","customBinding":false},"__field_232331":{"type":"EPiServer.Forms.Implementation.Elements.SelectionElementBlock","friendlyName":"Province","customBinding":false},"__field_232335":{"type":"EPiServer.Forms.Implementation.Elements.ChoiceElementBlock","friendlyName":"I accept the Netafim Privacy Policy*","customBinding":false},"__field_232336":{"type":"EPiServer.Forms.Implementation.Elements.ChoiceElementBlock","friendlyName":"I would like to receive relevant updates from Netafim","customBinding":false},"__field_232338":{"type":"EPiServer.Forms.Implementation.Elements.SubmitButtonElementBlock","friendlyName":"Click to download","customBinding":false}},
        DataSubmitController: "/EPiServer.Forms/DataSubmit"
        
    };
    
    /// TECHNOTE: Calculation at FormInfo level, and these values will be static input for later processing.
    workingFormInfo.StepsInfo.FormHasNoStep_VirtualStepCreated = true;  // this FLAG will be true, if Editor does not put any FormStep. Engine will create a virtual step, with empty GUID
    workingFormInfo.StepsInfo.FormHasNothing = false;  // this FLAG will be true if FormContainer has no element at all
    workingFormInfo.StepsInfo.AllStepsAreNotLinked = true;  // this FLAG will be true, if all steps all have contentLink=="" (emptyString)
})();
