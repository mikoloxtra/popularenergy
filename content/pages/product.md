---
layout: PageLayout
metaTitle: null
metaDescription: null
addTitleSuffix: true
socialImage: null
metaTags: []
title: products
sections:
  - colors: colors-b
    title: The Eden Powerstation 300W only
    subtitle: Power for your workstation
    badge:
      label: Portable Bundle 2
      elementId: ''
      styles:
        self:
          textAlign: left
      type: Badge
    text: >
      The Powerstation is the perfect device for designers & developers to keep
      their gadgets powered up in an event of a power failure.
    actions:
      - label: 'Order Now for N175,000'
        altText: ''
        url: /payment
        showIcon: false
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: ''
        type: Button
    media:
      url: /images/WhatsApp Image 2023-02-02 at 13.44.27-76333a3e.jpeg
      altText: altText of the image
      caption: Caption of the image
      elementId: ''
      styles:
        self:
          opacity: 100
      type: ImageBlock
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
          - pt-24
          - pb-24
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: row-reverse
        borderWidth: 1
        borderStyle: solid
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
    type: HeroSection
  - colors: colors-b
    title: Product Description
    subtitle: ''
    images:
      - url: /images/WhatsApp Image 2023-02-02 at 13.44.28.jpeg
        altText: altText of the image
        caption: Caption of the image
        elementId: ''
        styles:
          self:
            opacity: 100
        type: ImageBlock
      - url: /images/Screenshot from 2023-02-02 13-01-05.png
        altText: Team meeting
        caption: Team meeting
        type: ImageBlock
      - url: /images/Screenshot from 2023-02-02 14-08-05.png
        altText: altText of the image
        caption: Caption of the image
        elementId: ''
        styles:
          self:
            opacity: 100
        type: ImageBlock
      - url: /images/Eden-Ads-6-scaled.webp
        altText: People in the meeting room
        caption: Meeting room
        type: ImageBlock
    spacing: 3
    columns: 2
    aspectRatio: '1:1'
    imageSizePx: 400
    showCaption: false
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
          - pb-24
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: center
      subtitle:
        textAlign: center
    type: MediaGallerySection
  - colors: colors-h
    title: Portable Solar Generator all-in-one with Inverter and inbuilt Batteries
    subtitle: ''
    jobLists:
      - items:
          - location: Specifications
            text: |+
              1.  DC Input 18V/3A 80,000mAh/296Wh Power Box

              2.  Torch

              3.  1 phone charging cable

              4.  AC input charging

              5.  Car Charging Port

              6.  300W AC Output

              7.  5 Year Battery Life (Lithium Polymer Battery)

              8.  1,000 Life cycles

            actions:
              - label: 'Order now for N175,000 only'
                altText: ''
                url: /payment
                showIcon: false
                icon: cart
                iconPosition: right
                style: primary
                elementId: ''
                type: Button
            type: JobListItem
        type: JobList
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-10
          - mr-10
        padding:
          - pt-12
          - pb-0
          - pl-10
          - pr-10
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
    type: JobsSection
  - elementId: ''
    colors: colors-b
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
          - pl-10
          - pr-10
        alignItems: center
        justifyContent: center
        flexDirection: row
        borderWidth: 1
        borderStyle: solid
      title:
        textAlign: left
      text:
        textAlign: left
    type: ContactSection
---
