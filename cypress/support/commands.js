/// <reference types="cypress" />
import { ELEMENTS } from "../integration/elements/elements"

Cypress.Commands.add('clickLogoBtn', () => {
    // Get the logo element using the selector stored in ELEMENTS.HEADER.logo
    cy.get(ELEMENTS.HEADER.logo)
        // Ensure that the logo is visible before proceeding
        .should('be.visible')
        // Click on the logo element
        .click()
        // After the click, check that the URL is equal to the homepage URL
        .url().should('be.equal', 'https://loja.arcelormittal.com.br/');
});

Cypress.Commands.add('searchProduct', () => {
    // Select the search input element using the selector stored in ELEMENTS.HEADER.searchInput
    return cy.get(ELEMENTS.HEADER.searchInput)
        // Ensure that the search input is visible before proceeding
        .should('be.visible')
        // Type 'arame' into the search input
        .type('arame');

    // After typing into the search input, check if the URL includes the search term 'arame'
    cy.url({ timeout: 10000 }).should('include', '/#&search-term=arame');
});

Cypress.Commands.add('lgnRegBtn', () => {
    // Click on the login or register button and ensure it is visible
    cy.get(ELEMENTS.HEADER.lgnBtnOrRegister)
        .click()
        .should('be.visible');

    // Ensure that the key in email login button is visible
    cy.get(ELEMENTS.HEADER.lgnBtnKeyInEmail)
        .should('be.visible');

    // Ensure that the email and password login button is visible
    cy.get(ELEMENTS.HEADER.lgnBtnEmailPassword)
        .should('be.visible');

    // Ensure that the Google login button is visible
    cy.get(ELEMENTS.HEADER.lgnBtnGoogle)
        .should('be.visible');
});

Cypress.Commands.add('shopkeeperBtn', () => {
    // Get the shopkeeper button and ensure it is visible
    cy.get(ELEMENTS.HEADER.shopkeeperBtn)
        .should('be.visible')
        // Trigger a 'mouseover' event on the shopkeeper button
        .trigger('mouseover');

    // Check if the text 'Ir para a loja dos lojistas' exists
    cy.contains('span', 'Ir para a loja dos lojistas')
        .should('exist');
});

Cypress.Commands.add('myCartBtn', () => {
    // Get the my cart button and ensure it is visible
    cy.get(ELEMENTS.HEADER.myCartBtn)
        .should('be.visible')
        // Click on the my cart button
        .click();

    // Check if the my cart is opened after clicking the button
    cy.get(ELEMENTS.HEADER.myCartOpened)
        .should('be.visible');
});

Cypress.Commands.add('validateMenuLink', () => {
    // Get the menu container element using its class
    cy.get('ul.vtex-menu-2-x-menuContainer--header-desktop')
        // Check if the menu container is visible
        .should('be.visible');
});

Cypress.Commands.add('validateBannerHome', () => {
    // Get the banner element using the selector stored in ELEMENTS.HEADER.bannerHome
    cy.get(ELEMENTS.HEADER.bannerHome)
        // Check if the banner is visible
        .should('be.visible');
});

/* Cypress.Commands.add('recommendedForYou', () => {
    // Select the product details section and perform assertions within it
    cy.get(ELEMENTS.FIRSTSHELF.cardProduct, { timeout: 10000 }).within(() => {
        // Check if there is an image present
        cy.get(ELEMENTS.FIRSTSHELF.imgProduct).should('be.visible');

        // Check if there is a name present
        cy.get(ELEMENTS.FIRSTSHELF.nameProduct).should('be.visible');

        // Check if there is a price present
        cy.get(ELEMENTS.FIRSTSHELF.priceProduct).should('be.visible');
    });
}); */

/* Cypress.Commands.add('releasesShelf', () => {
    cy.get(ELEMENTS.RELEASES_SHELF.releaseShelfTitle).should('be.visible').contains('Lançamentos')
    cy.get(ELEMENTS.RELEASES_SHELF.cardPorduct, { timeout: 1000 }).within(() => {
        // Check if there is an image present
        cy.get(ELEMENTS.RELEASES_SHELF.imgProduct).should('be.visible');

        // Check if there is a name present
        cy.get(ELEMENTS.RELEASES_SHELF.nameProduct).should('be.visible');

        // Check if there is a price present
        cy.get(ELEMENTS.RELEASES_SHELF.priceProduct).should('be.visible');
    });
}); */

Cypress.Commands.add('validateRulerContainer', () => {
    // Locator for the rulerContainer
    const rulerContainerLocator = '.vtex-flex-layout-0-x-flexRow.vtex-flex-layout-0-x-flexRow--advantages-block';

    // Scroll down a bit to ensure the container is in view
    cy.window().scrollTo(0, 10);

    // Validate if the rulerContainer is visible
    cy.get(rulerContainerLocator).should('be.visible');
    // Validate if the other classes inside rulerContainer are visible
    cy.get(rulerContainerLocator).within(() => {
        // Validate if the "Parcele em até 10x" element is visible
        cy.get(ELEMENTS.ADVANTAGE_RULER.parcelIn10x).should('be.visible');
        // Validate if the "Estamos no WhatsApp" element is visible
        cy.get(ELEMENTS.ADVANTAGE_RULER.whatsapp).should('be.visible');
        // Validate if the "Retire Grátis" element is visible
        cy.get(ELEMENTS.ADVANTAGE_RULER.pickup).should('be.visible');
        // Validate if the "Toda loja com 6% de desconto" element is visible
        cy.get(ELEMENTS.ADVANTAGE_RULER.discount).should('be.visible');
    });
});

Cypress.Commands.add('validateMoreSellers', () => {
    // Ensure there is at least one product card visible
    cy.get(ELEMENTS.MORE_SELLERS.cardProduct).should('have.length.greaterThan', 0);
    // Validate if the first product card is visible
    cy.get(ELEMENTS.MORE_SELLERS.cardProduct).first().should('be.visible').within(() => {
        // Validate the product image
        cy.get(ELEMENTS.MORE_SELLERS.imgProduct).should('be.visible');
        // Validate the product name
        cy.get(ELEMENTS.MORE_SELLERS.nameProduct).should('be.visible');
        // Validate the product price
        cy.get(ELEMENTS.MORE_SELLERS.priceProduct).should('be.visible');
        // Validate the add to cart button
        cy.get(ELEMENTS.MORE_SELLERS.addToCartBtn).should('be.visible');
    });
});


 Cypress.Commands.add('validateRightArrowVisibility', () => {
    // Validate if the slider container is visible
    cy.get(ELEMENTS.MORE_SELLERS.sliderContainer).should('be.visible');

    // Validate if the right arrow is present
    cy.get(ELEMENTS.MORE_SELLERS.rightArrow).eq(1).should('exist');

    // Validate if the right arrow is visible
    cy.get(ELEMENTS.MORE_SELLERS.rightArrow).eq(1).should('be.visible');
});

Cypress.Commands.add('validateLeftArrowVisibility', () => {
    // Validate if the left arrow button is present in the DOM
    cy.get(ELEMENTS.MORE_SELLERS.leftArrow).eq(1).should('exist');

    // Validate if the left arrow button is visible
    cy.get(ELEMENTS.MORE_SELLERS.leftArrow).eq(1).should('be.visible');
}); 






