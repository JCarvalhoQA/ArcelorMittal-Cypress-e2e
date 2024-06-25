export const ELEMENTS = {
    HEADER: {
        logo: "svg[class*='logo-icon']",
        accBtnCookies: '.arcelormittal-cookies-consent-0-x-cookies-consent__modal-allow',
        searchInput: "input[id='smarthint-search-input']",
        lgnBtnOrRegister: "div[class='relative'] div[class*='vtex-button']",
        lgnBtnKeyInEmail: "li[class*='vtex-login-']:nth-of-type(1) div[class*='vtex-button']",
        lgnBtnEmailPassword: "li[class*='vtex-login-']:nth-of-type(2) div[class*='vtex-button']",
        lgnBtnGoogle: "ul[class*='vtex-login-'] span[class*='t-action--small']>span[class*='vtex-login-']",
        shopkeeperBtn: "a[id='menu-item-seller-dropdown'] > div[class*='vtex-menu-']",
        myCartBtn: "span[class*='vtex-minicart-']",
        myCartOpened: '.vtex-minicart-2-x-minicartSideBarContentWrapper',
        bannerHome: 'section[aria-label="Banner principal da home"]',
    },
    MORE_SELLERS: {
        recForYouShelf: "div[id='smarthint-for-you'] section[class*='vtex-store-component']>div[class*='flex']>div[class*='pr']>div[class*='vtex-flex-layout-']>div[class*='vtex-flex-layout-']>div[class*='vtex-rich-text-']",
        sliderContainer:'.vtex-slider-layout-0-x-sliderLayoutContainer--shelf',
        sliderTrack: '.vtex-slider-layout-0-x-sliderTrack--shelf',
        cardProduct: '.vtex-product-summary-2-x-container--product-card',
        imgProduct: '.vtex-product-summary-2-x-image',
        nameProduct: '.vtex-product-summary-2-x-productNameContainer--product-card',
        priceProduct: '.arcelormittal-product-price-custom-0-x-productPrice--spotPriceValue',
        addToCartBtn: '.vtex-add-to-cart-button-0-x-buttonText--add-to-cart-card',
        rightArrow: '.vtex-slider-layout-0-x-sliderRightArrow',
        leftArrow: '.vtex-slider-layout-0-x-sliderLeftArrow',
    },

    RELEASES_SHELF: {
        releaseShelfTitle: "div[id='smarthint-news'] section[class*='vtex-store-component']>div[class*='flex']>div[class*='pr']>div[class*='vtex-flex-layout-']>div[class*='vtex-flex-layout-']:nth-of-type(1) p[class*='lh-copy']",
        cardPorduct: '#slick-slide00',
        imgProduct: 'div.vtex-product-summary-2-x-imageWrapper img',
        nameProduct: 'h3.vtex-product-summary-2-x-productNameContainer span',
        priceProduct: 'span.arcelormittal-product-price-custom-0-x-productPrice',
    },

    ADVANTAGE_RULER: {
        rulerContainer: 'vtex-flex-layout-0-x-flexRow vtex-flex-layout-0-x-flexRow--advantages-block',
        parcelIn10x: ':nth-child(1) > .vtex-flex-layout-0-x-flexCol--advantages-item',
        whatsapp: ':nth-child(2) > .vtex-flex-layout-0-x-flexCol--advantages-item',
        pickup: ':nth-child(3) > .vtex-flex-layout-0-x-flexCol--advantages-item',
        discount: ':nth-child(4) > .vtex-flex-layout-0-x-flexCol--advantages-item',
  },
}