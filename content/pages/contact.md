---
layout: PageLayout
metaTitle: null
metaDescription: null
addTitleSuffix: true
socialImage: null
metaTags: []
title: Contact
sections:
  - type: ContactSection
    elementId: ''
    colors: colors-a
    backgroundSize: full
    title: Contact us
    text: |
      Send us an email to <sales@popular.energy> or with the form below
    form:
      type: FormBlock
      elementId: contact-form
      action: /.netlify/functions/submission_created
      destination: sales@popular.energy
      fields:
        - type: TextFormControl
          name: name
          label: Name
          placeholder: Your name
          isRequired: 'true'
          width: 1/2
        - type: EmailFormControl
          name: email
          label: Email
          placeholder: Your email
          isRequired: 'true'
          width: 1/2
        - type: TextareaFormControl
          name: Message
          hideLabel: false
          placeholder: leave a message
          isRequired: true
          width: full
          label: Message
      submitLabel: Send Message
    media: null
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-12
          - pb-12
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: row
        borderWidth: 1
        borderStyle: solid
      title:
        textAlign: left
      text:
        textAlign: left
---
