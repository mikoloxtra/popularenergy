---
type: PageLayout
addTitleSuffix: true
title: Landing
sections:
  - type: HeroSection
    elementId: ''
    colors: colors-a
    title: 'Love where you work, because work loves you'
    subtitle: 'One platform, one community.'
    text: |-
      Aenean eros ipsum, interdum quis dignissim non, sollicitudin vitae nisl.
      Aenean vel aliquet elit, at blandit ipsum. Sed eleifend felis sit amet
      erat molestie, hendrerit malesuada justo ultrices. Nunc volutpat at erat
      vitae interdum. Ut nec massa eget lorem blandit condimentum et at risus.
    actions:
      - type: Button
        label: Get Started
        altText: ''
        url: /
        showIcon: false
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: ''
      - type: Link
        label: Learn More
        altText: ''
        url: /
        showIcon: true
        icon: arrowRight
        iconPosition: right
        elementId: ''
    media:
      type: ImageBlock
      url: /images/hero.png
      altText: Hero section image
      caption: Caption of the image
      elementId: ''
      styles:
        self:
          opacity: 100
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-12
          - ml-0
          - mr-0
        padding:
          - pt-12
          - pb-36
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
  - type: FeatureHighlightSection
    elementId: ''
    colors: colors-f
    backgroundSize: inset
    title: Where did everyone go?
    subtitle: The section subtitle
    badge:
      type: Badge
      label: Case study
      elementId: ''
      styles:
        self:
          textAlign: left
    text: >-
      Learn how top tech companies have learned working remote using our
      product.
    actions:
      - type: Button
        label: Get Started
        altText: ''
        url: /
        showIcon: false
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: ''
      - type: Link
        label: Watch Video
        altText: ''
        url: /
        showIcon: true
        icon: playCircle
        iconPosition: left
        elementId: ''
    media:
      type: ImageBlock
      url: /images/hero-3.jpg
      altText: Team meeting
      caption: Caption of the image
      elementId: ''
      styles:
        self:
          opacity: 100
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-20
          - ml-4
          - mr-4
        padding:
          - pt-24
          - pb-16
          - pl-16
          - pr-16
        justifyContent: center
        flexDirection: row
        alignItems: center
        borderRadius: xx-large
        boxShadow: xx-large
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
  - type: MediaGallerySection
    colors: colors-h
    elementId: ''
    title: ''
    subtitle: Trusted by
    images:
      - type: ImageBlock
        url: /images/apple.svg
        altText: Apple
        caption: Apple
        elementId: ''
        styles:
          self:
            opacity: 100
      - type: ImageBlock
        url: /images/google-play.svg
        altText: Google Play
        caption: Google Play
        elementId: ''
        styles:
          self:
            opacity: 100
      - type: ImageBlock
        url: /images/playstation.svg
        altText: PlayStation
        caption: PlayStation
        elementId: ''
        styles:
          self:
            opacity: 100
      - type: ImageBlock
        url: /images/gatsby.svg
        altText: Gatsby
        caption: Gatsby
        elementId: ''
        styles:
          self:
            opacity: 100
      - type: ImageBlock
        url: /images/xbox.svg
        altText: Xbox
        caption: Xbox
        elementId: ''
        styles:
          self:
            opacity: 100
      - type: ImageBlock
        url: /images/skype.svg
        altText: Apple
        caption: Apple
        elementId: ''
        styles:
          self:
            opacity: 100
      - type: ImageBlock
        url: /images/zcool.svg
        altText: ZCOOL
        caption: ZCOOL
        elementId: ''
        styles:
          self:
            opacity: 100
    spacing: 3
    columns: 7
    aspectRatio: auto
    imageSizePx: 240
    showCaption: false
    enableHover: false
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
  - type: FeaturedItemsSection
    colors: colors-a
    elementId: ''
    title: Remote doesn’t mean alone. Here are so great features
    subtitle: >-
      These are all excellent features that will provide exactly the things
      you’re looking for.
    items:
      - type: FeaturedItem
        elementId: ''
        title: Faster
        subtitle: ''
        text: >-
          Learn how top tech companies have learned working remote using our
          product.
        featuredImage:
          type: ImageBlock
          url: /images/faster.svg
          altText: Item image
          caption: Caption of the image
          elementId: ''
          styles:
            self:
              opacity: 100
        styles:
          self:
            textAlign: left
            padding:
              - pt-4
              - pb-6
              - pl-4
              - pr-4
            borderColor: border-dark
            borderStyle: solid
            borderWidth: 1
      - type: FeaturedItem
        elementId: ''
        title: Smarter
        subtitle: ''
        text: >-
          Learn how top tech companies have learned working remote using our
          product.
        featuredImage:
          type: ImageBlock
          url: /images/smarter.svg
          altText: Item image
          caption: Caption of the image
          elementId: ''
          styles:
            self:
              opacity: 100
        styles:
          self:
            textAlign: left
            padding:
              - pt-4
              - pb-6
              - pl-4
              - pr-4
            borderColor: border-dark
            borderStyle: solid
            borderWidth: 1
      - type: FeaturedItem
        elementId: ''
        title: Focused
        subtitle: ''
        text: >-
          Learn how top tech companies have learned working remote using our
          product.
        featuredImage:
          type: ImageBlock
          url: /images/focused.svg
          altText: Item image
          caption: Caption of the image
          elementId: ''
          styles:
            self:
              opacity: 100
        styles:
          self:
            textAlign: left
            padding:
              - pt-4
              - pb-6
              - pl-4
              - pr-4
            borderColor: border-dark
            borderStyle: solid
            borderWidth: 1
    actions:
      - type: Button
        label: Apply Now
        altText: ''
        url: '#'
        showIcon: false
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: ''
      - type: Button
        label: Learn More
        altText: ''
        url: '#'
        showIcon: false
        icon: arrowRight
        iconPosition: right
        style: secondary
        elementId: ''
    columns: 3
    enableHover: false
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
          - pt-28
          - pb-28
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: center
      subtitle:
        textAlign: center
  - type: FeatureHighlightSection
    elementId: ''
    colors: colors-a
    backgroundSize: full
    title: 'A great feature, we’re proud of'
    subtitle: The section subtitle
    text: >-
      Share WIP, comment on each other’s work, approve what’s ready to go, ship
      together
    actions:
      - type: Button
        label: Get Started
        altText: ''
        url: /
        showIcon: false
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: ''
      - type: Link
        label: Learn More
        altText: ''
        url: /
        showIcon: true
        icon: arrowRight
        iconPosition: right
        elementId: ''
    media:
      type: ImageBlock
      url: /images/hero-1.png
      altText: Hero section image
      caption: Caption of the image
      elementId: ''
      styles:
        self:
          opacity: 100
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
          - pt-36
          - pb-6
          - pl-4
          - pr-4
        justifyContent: center
        flexDirection: row
        alignItems: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
  - type: FeatureHighlightSection
    elementId: ''
    colors: colors-a
    backgroundSize: full
    title: And a strong value proposition
    subtitle: The section subtitle
    text: >-
      Share WIP, comment on each other’s work, approve what’s ready to go, ship
      together
    actions:
      - type: Button
        label: Get Started
        altText: ''
        url: /
        showIcon: false
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: ''
      - type: Link
        label: Learn More
        altText: ''
        url: /
        showIcon: true
        icon: arrowRight
        iconPosition: right
        elementId: ''
    media:
      type: ImageBlock
      url: /images/hero-2.png
      altText: Hero section image
      caption: Caption of the image
      elementId: ''
      styles:
        self:
          opacity: 100
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
          - pt-6
          - pb-36
          - pl-4
          - pr-4
        justifyContent: center
        flexDirection: row-reverse
        alignItems: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
  - type: FeaturedPostsSection
    elementId: ''
    showDate: true
    showAuthor: false
    showExcerpt: false
    variant: variant-b
    actions:
      - type: Link
        label: See all posts
        altText: ''
        url: /blog
        showIcon: true
        icon: arrowRight
        iconPosition: right
        elementId: ''
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
          - pt-0
          - pb-36
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
      actions:
        justifyContent: flex-start
    title: >-
      We sometimes write things. You should read it, it might shed some  light
      on why we’re doing what we’re doing
    subtitle: Featured blog posts section example
    colors: colors-a
    posts:
      - content/pages/blog/post-four.md
      - content/pages/blog/post-three.md
  - type: FaqSection
    colors: colors-f
    elementId: ''
    title: Need Answers?
    subtitle: ''
    actions:
      - type: Link
        label: See all
        altText: ''
        url: /
        showIcon: true
        icon: arrowRight
        iconPosition: right
        elementId: ''
    items:
      - type: FaqItem
        question: How is this different from what we have today?
        answer: >-
          At the office, working together is often a distraction, on remote, it
          could be motivation, At the office, working together is often a
          distraction, on remote, it could be motivation, At the office, working
          together is often a distraction, on remote, it could be motivation
      - type: FaqItem
        question: How is this different from what we have today?
        answer: >-
          At the office, working together is often a distraction, on remote, it
          could be motivation, At the office, working together is often a
          distraction, on remote, it could be motivation, At the office, working
          together is often a distraction, on remote, it could be motivation
      - type: FaqItem
        question: How is this different from what we have today?
        answer: >-
          At the office, working together is often a distraction, on remote, it
          could be motivation, At the office, working together is often a
          distraction, on remote, it could be motivation, At the office, working
          together is often a distraction, on remote, it could be motivation
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
          - pt-20
          - pb-36
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
  - type: TestimonialsSection
    elementId: ''
    colors: colors-a
    variant: variant-a
    title: ''
    subtitle: ''
    testimonials:
      - type: Testimonial
        quote: >-
          ## Such a great experience to be using this product. It really helped
          with what I needed help with.
        name: Carla Rogers
        title: Happy customer
        image:
          type: ImageBlock
          url: /images/carla.jpg
          altText: Photo of Carla Rogers
          caption: Caption of the image
          elementId: ''
          styles:
            self:
              opacity: 100
        elementId: ''
        styles:
          name:
            fontWeight: 400
            fontStyle: normal
          title:
            fontWeight: 400
            fontStyle: normal
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
          - pt-28
          - pb-36
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
  - type: ContactSection
    elementId: ''
    colors: colors-f
    backgroundSize: inset
    title: Get early access
    text: >-
      Sign up your team today to be the first to try out our new product to
      increase your team's productivity.
    form:
      type: FormBlock
      variant: variant-a
      fields:
        - type: EmailFormControl
          name: email
          label: Email
          hideLabel: true
          placeholder: Your email
          isRequired: 'true'
          width: full
      submitLabel: Sign Up
      elementId: sign-up-form
      action: /.netlify/functions/submission_created
      destination: ''
      styles:
        submitLabel:
          textAlign: center
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-24
          - mb-0
          - ml-4
          - mr-4
        padding:
          - pt-24
          - pb-24
          - pl-12
          - pr-12
        alignItems: center
        justifyContent: center
        flexDirection: row
        borderRadius: xx-large
        boxShadow: xx-large
      title:
        textAlign: center
      text:
        textAlign: center
---
