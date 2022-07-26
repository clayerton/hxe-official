

/* This view acts as a rendering template to render InitScript(and server-side Form's descriptor) in FormContainerBlock's client-side for Form[54a9e1ba-af77-439a-b91c-63329913d5b8].
TECHNOTE: all serverside (paths, dynamic values) of EPiServerForms will be transfered to client side here in this section. */
(function initializeOnRenderingFormDescriptor() {
    // each workingFormInfo is store inside epi.EPiServer.Forms, lookup by its FormGuid
    var workingFormInfo = epi.EPiServer.Forms["54a9e1ba-af77-439a-b91c-63329913d5b8"] = {
        Id: "54a9e1ba-af77-439a-b91c-63329913d5b8",
        Name: "SF-content-form-products-catalog-china",
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
        ValidationInfo : [{"targetElementName":"__field_232406","targetElementId":"32f8a501-06db-44bc-a782-b9e503cd1151","validators":[{"type":"EPiServer.Forms.Implementation.Validation.RequiredValidator","description":null,"model":{"message":"此字段为必填项。","validationCssClass":"ValidationRequired","additionalAttributes":{"required":"","aria-required":"true"}}}]},{"targetElementName":"__field_232407","targetElementId":"3291f4a7-5354-4027-96ce-c90d7f583cc0","validators":[{"type":"EPiServer.Forms.Implementation.Validation.RequiredValidator","description":null,"model":{"message":"此字段为必填项。","validationCssClass":"ValidationRequired","additionalAttributes":{"required":"","aria-required":"true"}}}]},{"targetElementName":"__field_232408","targetElementId":"0abcfe49-9383-440d-b6ee-3a8e54e196f4","validators":[{"type":"EPiServer.Forms.Implementation.Validation.RequiredValidator","description":null,"model":{"message":"此字段为必填项。","validationCssClass":"ValidationRequired","additionalAttributes":{"required":"","aria-required":"true"}}},{"type":"EPiServer.Forms.Implementation.Validation.EmailValidator","description":null,"model":{"jsPattern":"(^$)|(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$)","dotNetPattern":"(^$)|(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$)","message":"输入有效的电子邮件地址。","validationCssClass":null,"additionalAttributes":null}}]},{"targetElementName":"__field_232409","targetElementId":"dc3f41bd-3324-47ad-9fd2-9a29f37dc58f","validators":[{"type":"EPiServer.Forms.Implementation.Validation.RequiredValidator","description":null,"model":{"message":"此字段为必填项。","validationCssClass":"ValidationRequired","additionalAttributes":{"required":"","aria-required":"true"}}}]},{"targetElementName":"__field_232410","targetElementId":"11001f26-bc7a-4a0b-b3ee-8d74925ed927","validators":[{"type":"EPiServer.Forms.Implementation.Validation.RequiredValidator","description":null,"model":{"message":"此字段为必填项。","validationCssClass":"ValidationRequired","additionalAttributes":{"required":"","aria-required":"true"}}}]},{"targetElementName":"__field_232414","targetElementId":"31403bda-655c-402d-90c8-37778e6e6c0c","validators":[{"type":"EPiServer.Forms.Implementation.Validation.RequiredValidator","description":null,"model":{"message":"此字段为必填项。","validationCssClass":"ValidationRequired","additionalAttributes":{"required":"","aria-required":"true"}}}]}],
        // Steps information for driving multiple-step Forms.
        StepsInfo : {
            Steps: [{"index":0,"attachedUrl":"","dependField":null,"dependCondition":null,"isActive":true,"attachedContentLink":"","dependValue":"","elementName":"__field_","guid":"00000000-0000-0000-0000-000000000000"}]
        },
        FieldsExcludedInSubmissionSummary: [],
        ElementsInfo: {"__field_232406":{"type":"EPiServer.Forms.Implementation.Elements.TextboxElementBlock","friendlyName":"Last Name","customBinding":false},"__field_232407":{"type":"EPiServer.Forms.Implementation.Elements.TextboxElementBlock","friendlyName":"Name","customBinding":false},"__field_232408":{"type":"EPiServer.Forms.Implementation.Elements.TextboxElementBlock","friendlyName":"Email","customBinding":false},"__field_232409":{"type":"EPiServer.Forms.Implementation.Elements.SelectionElementBlock","friendlyName":"I am","customBinding":false},"__field_232410":{"type":"EPiServer.Forms.Implementation.Elements.SelectionElementBlock","friendlyName":"Province","customBinding":false},"__field_232414":{"type":"EPiServer.Forms.Implementation.Elements.ChoiceElementBlock","friendlyName":"I accept the Netafim Privacy Policy*","customBinding":false},"__field_232415":{"type":"EPiServer.Forms.Implementation.Elements.ChoiceElementBlock","friendlyName":"I would like to receive relevant updates from Netafim","customBinding":false},"__field_232416":{"type":"EPiServer.Forms.Implementation.Elements.SubmitButtonElementBlock","friendlyName":"Click to download","customBinding":false}},
        DataSubmitController: "/EPiServer.Forms/DataSubmit"
        
    };
    
    /// TECHNOTE: Calculation at FormInfo level, and these values will be static input for later processing.
    workingFormInfo.StepsInfo.FormHasNoStep_VirtualStepCreated = true;  // this FLAG will be true, if Editor does not put any FormStep. Engine will create a virtual step, with empty GUID
    workingFormInfo.StepsInfo.FormHasNothing = false;  // this FLAG will be true if FormContainer has no element at all
    workingFormInfo.StepsInfo.AllStepsAreNotLinked = true;  // this FLAG will be true, if all steps all have contentLink=="" (emptyString)
})();
