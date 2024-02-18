---
layout: PageLayout
metaTitle: null
metaDescription: null
addTitleSuffix: true
socialImage: null
metaTags: []
title: payment
sections:
  - type: FeaturedItemsSection
    colors: colors-f
    elementId: ''
    title: Order Options
    subtitle: ''
    items:
      - type: FeaturedItem
        title: The Eden Powerstation 300W only + free fan
        text: >
          To order this Package,

          Pay a total sum of N250,000 into


          7900600747

          Providus Bank

          Popular Energy Resources Limited


          If you have any questions or require clarification, click the button
          below to chat with us in real time before placing your order
        featuredImage:
          type: ImageBlock
          url: /images/Screenshot 2023-09-18 180407-bf892139.png
          altText: altText of the image
          caption: Caption of the image
          elementId: ''
          styles:
            self:
              opacity: 100
        styles:
          self:
            textAlign: center
            borderWidth: 1
            borderStyle: solid
            borderRadius: x-small
        actions:
          - type: Button
            label: Order now!
            altText: ''
            url: /payment/option2
            showIcon: true
            icon: cart
            iconPosition: right
            style: secondary
            elementId: ''
      - type: FeaturedItem
        title: The Eden Powerstation 300W + Panel
        text: >
          To order this Package,

          Pay a total sum of N285,000 into


          7900600747

          Providus Bank

          Popular Energy Resources Limited


          If you have any questions or require clarification, click the button
          below to chat with us in real time before placing your order
        featuredImage:
          type: ImageBlock
          url: /images/Eden Box bundle.png
          altText: altText of the image
          caption: Caption of the image
          elementId: ''
          styles:
            self:
              opacity: 100
        styles:
          self:
            textAlign: center
            borderRadius: x-small
            borderWidth: 1
            borderStyle: solid
        actions:
          - type: Button
            label: Order now!
            altText: ''
            url: /payment/option3
            showIcon: true
            icon: cart
            iconPosition: right
            style: secondary
            elementId: ''
    actions:
      - type: Button
        label: Chat with us
        altText: ''
        url: 'https://wa.link/qurd1b'
        showIcon: true
        icon: send
        iconPosition: left
        style: primary
        elementId: ''
    columns: 3
    enableHover: true
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
        justifyContent: center
      title:
        textAlign: center
      subtitle:
        textAlign: center
      actions:
        justifyContent: center
  - type: ContactSection
    elementId: ''
    colors: colors-a
    backgroundSize: full
    title: Contact us
    text: >
      Send us an email with the form below or WhatsApp/ give us a call on
      08182400598.

      Also you can join our Telegram Channel to stay up to date with our latest
      product and get help on how to use the product.

      Join here https://t.me/+UC0F00zKAHZhZjI0
    form:
      variant: variant-a
      fields:
        - name: name
          label: Name
          placeholder: Your name
          isRequired: 'true'
          width: 1/2
          type: TextFormControl
        - name: email
          label: Email
          placeholder: Your email
          isRequired: 'true'
          width: 1/2
          type: EmailFormControl
        - name: Message
          label: Message
          hideLabel: false
          placeholder: leave a message
          isRequired: true
          width: full
          type: TextareaFormControl
      submitLabel: Send Message
      elementId: contact-form
      action: /.netlify/functions/submission_created
      destination: sales@popular.energy
      type: FormBlock
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
