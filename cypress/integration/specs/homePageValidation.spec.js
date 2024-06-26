/// <reference types="cypress" />
import { ELEMENTS } from "../../support/elements/home/elements"
const HEADER = ELEMENTS.HEADER;

describe('Home Page Validation', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get(HEADER.btnAcceptCookies)
            .should('be.visible')
            .click()
        
        cy.wait(5000)
        cy.window().scrollTo(0, 10);
    })
    it('Click Logo and Return Home', () => {
        cy.btnLogoClick()
    });

    it('Type and Search Product', () => {
        cy.inputSearchProduct('arame')
    });

    it('Button Login', () => {
        cy.btnLogin()
    });

    it('Shopkeeper Menu', () => {
        cy.btnShopkeeper()
    });

    it('Click Open My Cart', () => {
        cy.btnMyCart()
    });

    it('Menu Header is Visible', () => {
        cy.menuLinkValidate()
    });

    it('Banner Home is Visible', () => {
        cy.validateBannerHome()
    });

    /*  it('You must validate the "Recommended for you" shelf', () => {
         cy.recomendedForYou()
     }); */

    /* it('You must validade the "Lançamentos" shelf', () => {
        cy.releasesShelf()
    }); */

    it('Validates if rulerContainer and its classes are visible', () => {
        cy.validateRulerContainer()
    });
    it('Validate Shelf "Mais Vendidos"', () => {
        cy.validateMoreSellers();
        cy.LeftArrowMoreSellers();
        cy.rightArrowMoreSellers();
    });

    it('Validate Shelf "Produtos Destaques"', () => {
        cy.validateMoreSellers();
        cy.LeftArrowProductHighlights();
        cy.rightArrowProductHighlights();
    });

    it('Validate Carousel Category', () => {
        cy.validateAllSliderTrackContainers();
    });

    it('Banner fraud Exists and it is Visible', () => {
        cy.validateBannerFraud()
    })

    it('NewLatter Exists and it is Visible', () => {
        cy.validateNewsletterForm()
    })

    it('Validate Shelf "Mais Buscados', () => {
        cy.mostSearchedShelf()
    })

});


