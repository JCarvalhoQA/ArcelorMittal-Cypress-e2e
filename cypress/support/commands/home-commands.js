/// <reference types="cypress" />

import { ELEMENTS } from "../elements/home/elements"

Cypress.Commands.add('btnLogoClick', () => {
    cy.get(ELEMENTS.HEADER.btnLogo)
        .should('be.visible')
        .click()
        .url().should('be.equal', 'https://loja.arcelormittal.com.br/');
});

Cypress.Commands.add('inputSearchProduct', (text) => {
    cy.get(ELEMENTS.HEADER.inputSearch)
        .should('be.visible')
        .type(text);
    cy.get(ELEMENTS.HEADER.listResult)
        .contains(text)
        .type('{enter}');
    cy.url().should('eq', `https://loja.arcelormittal.com.br/${text}?_q=&map=ft`);
});

Cypress.Commands.add('btnLogin', () => {
    cy.get(ELEMENTS.HEADER.btnLogin)
        .click()
        .should('be.visible');

    cy.get(ELEMENTS.HEADER.btnLoginEmail)
        .should('be.visible');

    cy.get(ELEMENTS.HEADER.btnEmailPassword)
        .should('be.visible');

    cy.get(ELEMENTS.HEADER.btnSocial)
        .should('be.visible');
});

Cypress.Commands.add('btnShopkeeper', () => {
    cy.get(ELEMENTS.HEADER.btnShopkeeper)
        .should('be.visible')
        .trigger('mouseover');

    cy.contains('span', 'Ir para a loja dos lojistas')
        .should('exist');
});

Cypress.Commands.add('btnMyCart', () => {
    cy.get(ELEMENTS.HEADER.btnMiniCart)
        .should('be.visible')
        .click();
    cy.get(ELEMENTS.HEADER.containerMinicartEmpty)
        .should('be.visible');
});

Cypress.Commands.add('menuLinkValidate', () => {
    cy.get(ELEMENTS.HEADER.containerHeader).eq(1)
    .find(ELEMENTS.HEADER.containerUlHeader)
    .find(ELEMENTS.HEADER.containerLiheader)
    .each(($el) => {
      cy.wrap($el)
        .should('be.visible')
        .find(ELEMENTS.HEADER.containerMenuHeader)
        .invoke('text')
        .then((text) => {
          expect(text.trim()).to.be.not.empty;
        });
    });
});

Cypress.Commands.add('validateBannerHome', () => {
    cy.get(ELEMENTS.HEADER.bannerHome)
        .should('be.visible');
});

Cypress.Commands.add('recommendedForYou', () => {
    cy.get(ELEMENTS.FIRSTSHELF.cardProduct, { timeout: 10000 }).within(() => {
        cy.get(ELEMENTS.FIRSTSHELF.imgProduct).should('be.visible');
        cy.get(ELEMENTS.FIRSTSHELF.nameProduct).should('be.visible');
        cy.get(ELEMENTS.FIRSTSHELF.priceProduct).should('be.visible');
    });
});

Cypress.Commands.add('releasesShelf', () => {
    cy.get(ELEMENTS.RELEASES_SHELF.releaseShelfTitle).should('be.visible').contains('Lançamentos')
    cy.get(ELEMENTS.RELEASES_SHELF.cardPorduct, { timeout: 1000 }).within(() => {
        cy.get(ELEMENTS.RELEASES_SHELF.imgProduct).should('be.visible');
        cy.get(ELEMENTS.RELEASES_SHELF.nameProduct).should('be.visible');
        cy.get(ELEMENTS.RELEASES_SHELF.priceProduct).should('be.visible');
    });
});

Cypress.Commands.add('validateRulerContainer', () => {
    const rulerContainerLocator = '.vtex-flex-layout-0-x-flexRow.vtex-flex-layout-0-x-flexRow--advantages-block';

    cy.window().scrollTo(0, 10);

    cy.get(rulerContainerLocator).should('be.visible');
    cy.get(rulerContainerLocator).within(() => {
        cy.get(ELEMENTS.ADVANTAGE_RULER.parcelIn10x).should('be.visible');
        cy.get(ELEMENTS.ADVANTAGE_RULER.whatsapp).should('be.visible');
        cy.get(ELEMENTS.ADVANTAGE_RULER.pickup).should('be.visible');
        cy.get(ELEMENTS.ADVANTAGE_RULER.discount).should('be.visible');
    });
});

Cypress.Commands.add('validateMoreSellers', () => {
    cy.get('#slider-items-ini1x7n > .vtex-slider-layout-0-x-sliderTrackContainer > [data-testid="slider-track"] > .vtex-slider-layout-0-x-slide--firstVisible.vtex-slider-layout-0-x-slide--visible > .vtex-slider-layout-0-x-slideChildrenContainer > .vtex-product-summary-2-x-container');
    cy.get(ELEMENTS.MORE_SELLERS.cardProduct).first().should('be.visible').within(() => {
        cy.get(ELEMENTS.MORE_SELLERS.imgProduct).should('be.visible');
        cy.get(ELEMENTS.MORE_SELLERS.nameProduct).should('be.visible');
        cy.get(ELEMENTS.MORE_SELLERS.priceProduct).should('be.visible');
        cy.get(ELEMENTS.MORE_SELLERS.addToCartBtn).should('be.visible');
    });
});

Cypress.Commands.add('rightArrowMoreSellers', () => {
    cy.get(ELEMENTS.MORE_SELLERS.sliderContainer).should('be.visible');
    cy.get(ELEMENTS.MORE_SELLERS.rightArrow).eq(1).should('exist');
    cy.get(ELEMENTS.MORE_SELLERS.rightArrow).eq(1).should('be.visible');
});

Cypress.Commands.add('LeftArrowMoreSellers', () => {
    cy.get(ELEMENTS.MORE_SELLERS.leftArrow).eq(1).should('exist');
    cy.get(ELEMENTS.MORE_SELLERS.leftArrow).eq(1).should('be.visible');
});

Cypress.Commands.add('validateProducHighlights', () => {
    cy.get(ELEMENTS.HIGHLIGHTS_SHELF.cardProduct).should('have.length.greaterThan', 4);
    cy.get(ELEMENTS.HIGHLIGHTS_SHELF.cardProduct).first().should('be.visible').within(() => {
        cy.get(ELEMENTS.HIGHLIGHTS_SHELF.imgProduct).should('be.visible');
        cy.get(ELEMENTS.HIGHLIGHTS_SHELF.nameProduct).should('be.visible');
        cy.get(ELEMENTS.HIGHLIGHTS_SHELF.priceProduct).should('be.visible');
        cy.get(ELEMENTS.HIGHLIGHTS_SHELF.addToCartBtn).should('be.visible');
    });
});

Cypress.Commands.add('rightArrowProductHighlights', () => {
    cy.get(ELEMENTS.HIGHLIGHTS_SHELF.sliderContainer).should('be.visible');
    cy.get(ELEMENTS.HIGHLIGHTS_SHELF.rightArrow).eq(2).should('exist');
    cy.get(ELEMENTS.HIGHLIGHTS_SHELF.rightArrow).eq(2).should('be.visible');
});

Cypress.Commands.add('LeftArrowProductHighlights', () => {
    cy.get(ELEMENTS.HIGHLIGHTS_SHELF.leftArrow).eq(2).should('exist');
    cy.get(ELEMENTS.HIGHLIGHTS_SHELF.leftArrow).eq(2).should('be.visible');
});

Cypress.Commands.add('validateAllSliderTrackContainers', () => {
    cy.get(ELEMENTS.CATEGORY_CAROUSEL.categoryContainer).eq(3).each(($el, index, $list) => {
        cy.wrap($el)
            .should('exist')
            .and('be.visible');
    });
});

Cypress.Commands.add('validateBannerFraud', () => {
    cy.get(ELEMENTS.BANNER_FRAUD.bannerContainer)
        .should('exist')
        .and('be.visible')
        .within(() => {
            cy.get(ELEMENTS.BANNER_FRAUD.imgLink)
                .should('exist')
                .should('have.attr', 'href', '/fique-em-alerta');

            cy.get('img.vtex-store-components-3-x-imageElement')
                .should('exist')
                .and('have.attr', 'src', 'https://arcelormittal.vtexassets.com/assets/vtex.file-manager-graphql/images/696e547a-2ee4-42b6-9fd1-e0d84d7e05ff___94c1f96b86aba07808b2127c0ef14e15.jpg')
                .and('have.attr', 'alt', 'Vantagens exclusivas');
        });
});

Cypress.Commands.add('mostSearchedShelf', () => {
    cy.get(ELEMENTS.MOST_SEARCHED_SHELF.cardProduct).should('have.length.greaterThan', 0);
    cy.get(ELEMENTS.MOST_SEARCHED_SHELF.cardProduct).first().should('be.visible').within(() => {
        cy.get(ELEMENTS.MOST_SEARCHED_SHELF.imgProduct).should('be.visible');
        cy.get(ELEMENTS.MOST_SEARCHED_SHELF.nameProduct).should('be.visible');
        cy.get(ELEMENTS.MOST_SEARCHED_SHELF.priceProduct).should('be.visible');
        cy.get(ELEMENTS.MOST_SEARCHED_SHELF.addToCartBtn).should('be.visible');
    });
});

Cypress.Commands.add('validateNewsletterForm', () => {
    cy.scrollTo('bottom');
    cy.get(ELEMENTS.NEWSLETTER_FORM.newsletterContainer)
        .should('exist')
        .and('be.visible');

    cy.get(ELEMENTS.NEWSLETTER_FORM.newsLetterTitle)
        .should('exist')
        .and('be.visible');

    cy.get(ELEMENTS.NEWSLETTER_FORM.newsLetterBtn)
        .should('exist')
        .and('be.visible');
    cy.get(ELEMENTS.NEWSLETTER_FORM.newsLetterBtn).contains('Cadastrar')
});
