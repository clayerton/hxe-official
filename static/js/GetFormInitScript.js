

/* This view acts as a rendering template to render InitScript(and server-side Form's descriptor) in FormContainerBlock's client-side for Form[78ca71be-6fe3-43df-8a43-e92d4f5fe128].
TECHNOTE: all serverside (paths, dynamic values) of EPiServerForms will be transfered to client side here in this section. */
(function initializeOnRenderingFormDescriptor() {
    // each workingFormInfo is store inside epi.EPiServer.Forms, lookup by its FormGuid
    var workingFormInfo = epi.EPiServer.Forms["78ca71be-6fe3-43df-8a43-e92d4f5fe128"] = {
        Id: "78ca71be-6fe3-43df-8a43-e92d4f5fe128",
        Name: "SF-china-contact-form-NEW",
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
        ValidationInfo : [{"targetElementName":"__field_232444","targetElementId":"8cc83965-a231-4ad5-80a4-f56d55dad2d3","validators":[{"type":"EPiServer.Forms.Implementation.Validation.RequiredValidator","description":null,"model":{"message":"此字段为必填项。","validationCssClass":"ValidationRequired","additionalAttributes":{"required":"","aria-required":"true"}}}]},{"targetElementName":"__field_232445","targetElementId":"40d04ab4-6dee-47a0-80b0-088e438472ad","validators":[{"type":"EPiServer.Forms.Implementation.Validation.RequiredValidator","description":null,"model":{"message":"此字段为必填项。","validationCssClass":"ValidationRequired","additionalAttributes":{"required":"","aria-required":"true"}}}]},{"targetElementName":"__field_232446","targetElementId":"827162b7-5ee6-45d8-9333-f433d8641dee","validators":[{"type":"EPiServer.Forms.Implementation.Validation.RequiredValidator","description":null,"model":{"message":"此字段为必填项。","validationCssClass":"ValidationRequired","additionalAttributes":{"required":"","aria-required":"true"}}},{"type":"EPiServer.Forms.Implementation.Validation.EmailValidator","description":null,"model":{"jsPattern":"(^$)|(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$)","dotNetPattern":"(^$)|(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$)","message":"输入有效的电子邮件地址。","validationCssClass":null,"additionalAttributes":null}}]},{"targetElementName":"__field_232447","targetElementId":"8cbb7420-1dbc-4143-80e5-a9dee12d56b4","validators":[{"type":"EPiServer.Forms.Implementation.Validation.RequiredValidator","description":null,"model":{"message":"此字段为必填项。","validationCssClass":"ValidationRequired","additionalAttributes":{"required":"","aria-required":"true"}}}]},{"targetElementName":"__field_232449","targetElementId":"5f93d8c8-edff-4e95-87e1-16d2f9d46e9b","validators":[{"type":"EPiServer.Forms.Implementation.Validation.RequiredValidator","description":null,"model":{"message":"此字段为必填项。","validationCssClass":"ValidationRequired","additionalAttributes":{"required":"","aria-required":"true"}}}]},{"targetElementName":"__field_232450","targetElementId":"87313129-300f-4f1f-9f38-9f18679c0610","validators":[{"type":"EPiServer.Forms.Implementation.Validation.RequiredValidator","description":null,"model":{"message":"此字段为必填项。","validationCssClass":"ValidationRequired","additionalAttributes":{"required":"","aria-required":"true"}}}]},{"targetElementName":"__field_232453","targetElementId":"1bf41981-134f-4f12-a228-d624405e910e","validators":[{"type":"EPiServer.Forms.Implementation.Validation.RequiredValidator","description":null,"model":{"message":"此字段为必填项。","validationCssClass":"ValidationRequired","additionalAttributes":{"required":"","aria-required":"true"}}}]},{"targetElementName":"__field_232458","targetElementId":"b569a477-34b0-4326-bc31-0aed52bb5037","validators":[{"type":"EPiServer.Forms.Implementation.Validation.RequiredValidator","description":null,"model":{"message":"此字段为必填项。","validationCssClass":"ValidationRequired","additionalAttributes":{"required":"","aria-required":"true"}}}]}],
        // Steps information for driving multiple-step Forms.
        StepsInfo : {
            Steps: [{"index":0,"attachedUrl":"","dependField":null,"dependCondition":null,"isActive":true,"attachedContentLink":"","dependValue":"","elementName":"__field_","guid":"00000000-0000-0000-0000-000000000000"}]
        },
        FieldsExcludedInSubmissionSummary: [],
        ElementsInfo: {"__field_232444":{"type":"EPiServer.Forms.Implementation.Elements.TextboxElementBlock","friendlyName":"Last name","customBinding":false},"__field_232445":{"type":"EPiServer.Forms.Implementation.Elements.TextboxElementBlock","friendlyName":"First name","customBinding":false},"__field_232446":{"type":"EPiServer.Forms.Implementation.Elements.TextboxElementBlock","friendlyName":"e-mail","customBinding":false},"__field_232447":{"type":"EPiServer.Forms.Implementation.Elements.TextboxElementBlock","friendlyName":"phone number","customBinding":false},"__field_232448":{"type":"EPiServer.Forms.Implementation.Elements.TextboxElementBlock","friendlyName":"company","customBinding":false},"__field_232449":{"type":"EPiServer.Forms.Implementation.Elements.SelectionElementBlock","friendlyName":"province","customBinding":false},"__field_232451":{"type":"EPiServer.Forms.Implementation.Elements.SelectionElementBlock","friendlyName":"I am","customBinding":false},"__field_232450":{"type":"EPiServer.Forms.Implementation.Elements.SelectionElementBlock","friendlyName":"crop","customBinding":false},"__field_232452":{"type":"EPiServer.Forms.Implementation.Elements.SelectionElementBlock","friendlyName":"plot size","customBinding":false},"__field_232453":{"type":"EPiServer.Forms.Implementation.Elements.SelectionElementBlock","friendlyName":"topic of inquiry","customBinding":false},"__field_232454":{"type":"EPiServer.Forms.Implementation.Elements.TextareaElementBlock","friendlyName":"Questions","customBinding":false},"__field_232458":{"type":"EPiServer.Forms.Implementation.Elements.ChoiceElementBlock","friendlyName":"我接受耐特菲姆隐私条款","customBinding":false},"__field_232459":{"type":"EPiServer.Forms.Implementation.Elements.ChoiceElementBlock","friendlyName":"我愿意接收来自耐特菲姆的相关动态更新","customBinding":false},"__field_232460":{"type":"EPiServer.Forms.Implementation.Elements.SubmitButtonElementBlock","friendlyName":"提交","customBinding":false}},
        DataSubmitController: "/EPiServer.Forms/DataSubmit"
        
    };
    
    /// TECHNOTE: Calculation at FormInfo level, and these values will be static input for later processing.
    workingFormInfo.StepsInfo.FormHasNoStep_VirtualStepCreated = true;  // this FLAG will be true, if Editor does not put any FormStep. Engine will create a virtual step, with empty GUID
    workingFormInfo.StepsInfo.FormHasNothing = false;  // this FLAG will be true if FormContainer has no element at all
    workingFormInfo.StepsInfo.AllStepsAreNotLinked = true;  // this FLAG will be true, if all steps all have contentLink=="" (emptyString)
})();
