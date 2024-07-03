export const ELEMENTS = {
    HEADER: {
        container: '.vtex-sticky-layout-0-x-container vtex-sticky-layout-0-x-container--sticky-header',
        btnLogo: '.vtex-flex-layout-0-x-flexRowContent--main-header > :nth-child(1) > .vtex-flex-layout-0-x-flexCol',
        containerCookes: '.arcelormittal-cookies-consent-0-x-cookies-consent__modal flex flex-column justify-center items-center fw5',
        btnAcceptCookies: '.arcelormittal-cookies-consent-0-x-cookies-consent__modal-allow',
        btnDenyCookies:'.arcelormittal-cookies-consent-0-x-cookies-consent__modal-deny',
        inputSearch: '#downshift-0-input',
        listResult: '.vtex-store-components-3-x-resultsList',
        btnLogin:'.vtex-flex-layout-0-x-flexRow--login .vtex-button.t-action.c-action-primary',
        btnLoginEmail: ':nth-child(1) > .vtex-login-2-x-button > .vtex-button',
        btnEmailPassword: ':nth-child(2) > .vtex-login-2-x-button > .vtex-button',
        btnSocial:':nth-child(3) > .vtex-login-2-x-button > .vtex-button',
        btnShopkeeper: '#menu-item-seller-dropdown',
        btnMiniCart: '.pa4 > .vtex-button',
        containerMinicartEmpty: '.vtex-minicart-2-x-minicartEmptyStateContainer',
        containerHeader: 'nav.vtex-menu-2-x-menuContainerNav',
        containerUlHeader:'ul.vtex-menu-2-x-menuContainer',
        containerLiheader: 'li.vtex-menu-2-x-menuItem',
        containerMenuHeader:'.vtex-menu-2-x-styledLinkContent'


    },
    MORE_SELLERS: {
        recForYouShelf: "div[id='smarthint-for-you'] section[class*='vtex-store-component']>div[class*='flex']>div[class*='pr']>div[class*='vtex-flex-layout-']>div[class*='vtex-flex-layout-']>div[class*='vtex-rich-text-']",
        sliderContainer: '.vtex-slider-layout-0-x-sliderLayoutContainer--shelf',
        sliderTrack: '.vtex-slider-layout-0-x-sliderTrack--shelf',
        cardProduct: '.vtex-product-summary-2-x-container--product-card',
        imgProduct: '.vtex-product-summary-2-x-image',
        nameProduct: '.vtex-product-summary-2-x-productNameContainer--product-card',
        priceProduct: '.arcelormittal-product-price-custom-0-x-productPrice--spotPriceValue',
        addToCartBtn: '.vtex-add-to-cart-button-0-x-buttonText--add-to-cart-card',
        rightArrow: '.vtex-slider-layout-0-x-sliderRightArrow',
        leftArrow: '.vtex-slider-layout-0-x-sliderLeftArrow',
    },

    HIGHLIGHTS_SHELF: {
        productHighlightsShelf: "div[class]:nth-of-type(5) h1[class*='vtex-rich-text-']",
        sliderContainer: '.vtex-slider-layout-0-x-sliderLayoutContainer--shelf',
        sliderTrack: '.vtex-slider-layout-0-x-sliderTrack--shelf',
        cardProduct: '.vtex-product-summary-2-x-container',
        imgProduct: '.vtex-product-summary-2-x-image',
        nameProduct: '.vtex-product-summary-2-x-productNameContainer--product-card',
        priceProduct: '.arcelormittal-product-price-custom-0-x-productPrice--spotPriceValue',
        addToCartBtn: '.vtex-add-to-cart-button-0-x-buttonText--add-to-cart-card',
        rightArrow: '.vtex-slider-layout-0-x-sliderRightArrow',
        leftArrow: '.vtex-slider-layout-0-x-sliderLeftArrow',
    },

    ADVANTAGE_RULER: {
        rulerContainer: 'vtex-flex-layout-0-x-flexRow vtex-flex-layout-0-x-flexRow--advantages-block',
        parcelIn10x: ':nth-child(1) > .vtex-flex-layout-0-x-flexCol--advantages-item',
        whatsapp: ':nth-child(2) > .vtex-flex-layout-0-x-flexCol--advantages-item',
        pickup: ':nth-child(3) > .vtex-flex-layout-0-x-flexCol--advantages-item',
        discount: ':nth-child(4) > .vtex-flex-layout-0-x-flexCol--advantages-item',
    },

    CATEGORY_CAROUSEL: {
        carouselTitle: '.vtex-rich-text-0-x-heading--carouselCategoryTitle',
        carouselSubTitle: '.vtex-rich-text-0-x-paragraph--carouselCategorySubtitle',
        categorySlides: '.vtex-slider-layout-0-x-slide--carouselCategorySlider',
        categoryContainer: '.vtex-slider-layout-0-x-sliderTrackContainer',
    },

    BANNER_FRAUD: {
        bannerContainer: '.vtex-flex-layout-0-x-flexRow.vtex-flex-layout-0-x-flexRow--imageUnicBanner',
        imgLink: ".vtex-store-components-3-x-imageElementLink",
        imgContainer: 'a[href="/fique-em-alerta"]',
    },

    NEWSLETTER_FORM: {
        newsletterContainer: "div[class*='vtex-store-footer-'] > div[class*='vtex-flex-layout-']:nth-of-type(1) > div[class*='flex'] > div[class*='pr'] > div[class*='vtex-flex-layout-']",
        newsLetterTitle: '.vtex-rich-text-0-x-paragraph.vtex-rich-text-0-x-paragraph--newsletter-title-text',
        newsLetterBtn: '.vtex-store-link-0-x-label.vtex-store-link-0-x-label--newsletter-submit-button'
    },

    MOST_SEARCHED_SHELF: {
        mostShearchedTitle: '.vtex-rich-text-0-x-container vtex-rich-text-0-x-container--shelfTitle',
        sliderContainer: "div[class]:nth-of-type(14) section[class*='vtex-store-component']>div[class*='flex']>div[class*='pr']>div[class*='vtex-flex-layout-']>div[class*='vtex-flex-layout-']>div[class*='vtex-rich-text-']",
        sliderTrack: '.vtex-slider-layout-0-x-sliderTrack--shelf',
        cardProduct: '.vtex-product-summary-2-x-container',
        imgProduct: '.vtex-product-summary-2-x-imageNormal',
        nameProduct: '.vtex-product-summary-2-x-productNameContainer',
        priceProduct: '.arcelormittal-product-price-custom-0-x-productPrice',
        addToCartBtn: '.vtex-add-to-cart-button-0-x-buttonText--add-to-cart-card',
        rightArrow: '.vtex-slider-layout-0-x-sliderRightArrow',
        leftArrow: '.vtex-slider-layout-0-x-sliderLeftArrow',
    },
}