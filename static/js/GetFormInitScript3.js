

/* This view acts as a rendering template to render InitScript(and server-side Form's descriptor) in FormContainerBlock's client-side for Form[afd20590-443d-48ee-92f3-5366241bbd25].
TECHNOTE: all serverside (paths, dynamic values) of EPiServerForms will be transfered to client side here in this section. */
(function initializeOnRenderingFormDescriptor() {
    // each workingFormInfo is store inside epi.EPiServer.Forms, lookup by its FormGuid
    var workingFormInfo = epi.EPiServer.Forms["afd20590-443d-48ee-92f3-5366241bbd25"] = {
        Id: "afd20590-443d-48ee-92f3-5366241bbd25",
        Name: "Mining contact form",
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
        ValidationInfo : [{"targetElementName":"__field_4860","targetElementId":"bbab5ec2-6ce5-481f-ac5e-2d3b3fbac880","validators":[{"type":"EPiServer.Forms.Implementation.Validation.RequiredValidator","description":null,"model":{"message":"此字段为必填项。","validationCssClass":"ValidationRequired","additionalAttributes":{"required":"","aria-required":"true"}}}]},{"targetElementName":"__field_4861","targetElementId":"4981a675-aa08-411b-a3a7-a79069261674","validators":[{"type":"EPiServer.Forms.Implementation.Validation.RequiredValidator","description":null,"model":{"message":"此字段为必填项。","validationCssClass":"ValidationRequired","additionalAttributes":{"required":"","aria-required":"true"}}},{"type":"EPiServer.Forms.Implementation.Validation.EmailValidator","description":null,"model":{"jsPattern":"(^$)|(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$)","dotNetPattern":"(^$)|(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$)","message":"输入有效的电子邮件地址。","validationCssClass":null,"additionalAttributes":null}}]},{"targetElementName":"__field_4862","targetElementId":"5dac4813-a095-489f-b0ad-b64b291bce8e","validators":[{"type":"EPiServer.Forms.Implementation.Validation.RequiredValidator","description":null,"model":{"message":"此字段为必填项。","validationCssClass":"ValidationRequired","additionalAttributes":{"required":"","aria-required":"true"}}}]}],
        // Steps information for driving multiple-step Forms.
        StepsInfo : {
            Steps: [{"index":0,"attachedUrl":"","dependField":null,"dependCondition":null,"isActive":true,"attachedContentLink":"","dependValue":"","elementName":"__field_","guid":"00000000-0000-0000-0000-000000000000"}]
        },
        FieldsExcludedInSubmissionSummary: [],
        ElementsInfo: {"__field_4860":{"type":"EPiServer.Forms.Implementation.Elements.TextboxElementBlock","friendlyName":"姓名","customBinding":false},"__field_4861":{"type":"EPiServer.Forms.Implementation.Elements.TextboxElementBlock","friendlyName":"邮箱","customBinding":false},"__field_4862":{"type":"EPiServer.Forms.Implementation.Elements.SelectionElementBlock","friendlyName":"国家","customBinding":false},"__field_4863":{"type":"EPiServer.Forms.Implementation.Elements.TextboxElementBlock","friendlyName":"公司","customBinding":false},"__field_5325":{"type":"EPiServer.Forms.Implementation.Elements.SubmitButtonElementBlock","friendlyName":"提交","customBinding":false}},
        DataSubmitController: "/EPiServer.Forms/DataSubmit"
        
    };
    
    /// TECHNOTE: Calculation at FormInfo level, and these values will be static input for later processing.
    workingFormInfo.StepsInfo.FormHasNoStep_VirtualStepCreated = true;  // this FLAG will be true, if Editor does not put any FormStep. Engine will create a virtual step, with empty GUID
    workingFormInfo.StepsInfo.FormHasNothing = false;  // this FLAG will be true if FormContainer has no element at all
    workingFormInfo.StepsInfo.AllStepsAreNotLinked = true;  // this FLAG will be true, if all steps all have contentLink=="" (emptyString)
})();
