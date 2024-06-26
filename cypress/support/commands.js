/// <reference types="cypress" />
import { ELEMENTS } from "../integration/elements/elements"

Cypress.Commands.add('clickLogoBtn', () => {
    cy.get(ELEMENTS.HEADER.logo)
        .should('be.visible')
        .click()
        .url().should('be.equal', 'https://loja.arcelormittal.com.br/');
});

Cypress.Commands.add('searchProduct', () => {
    return cy.get(ELEMENTS.HEADER.searchInput)
        .should('be.visible')
        .type('arame');

    cy.url({ timeout: 10000 }).should('include', '/#&search-term=arame');
});

Cypress.Commands.add('lgnRegBtn', () => {
    cy.get(ELEMENTS.HEADER.lgnBtnOrRegister)
        .click()
        .should('be.visible');

    cy.get(ELEMENTS.HEADER.lgnBtnKeyInEmail)
        .should('be.visible');

    cy.get(ELEMENTS.HEADER.lgnBtnEmailPassword)
        .should('be.visible');

    cy.get(ELEMENTS.HEADER.lgnBtnGoogle)
        .should('be.visible');
});

Cypress.Commands.add('shopkeeperBtn', () => {
    cy.get(ELEMENTS.HEADER.shopkeeperBtn)
        .should('be.visible')
        .trigger('mouseover');

    cy.contains('span', 'Ir para a loja dos lojistas')
        .should('exist');
});

Cypress.Commands.add('myCartBtn', () => {
    cy.get(ELEMENTS.HEADER.myCartBtn)
        .should('be.visible')
        .click();

    cy.get(ELEMENTS.HEADER.myCartOpened)
        .should('be.visible');
});

Cypress.Commands.add('validateMenuLink', () => {
    cy.get('ul.vtex-menu-2-x-menuContainer--header-desktop')
        .should('be.visible');
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
    cy.get(ELEMENTS.MORE_SELLERS.cardProduct).should('have.length.greaterThan', 0);
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
