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
        cy.bannerHomeValidate()
    });

    it('Validates if rulerContainer and its classes are visible', () => {
        cy.containerRulerValidate()
    });
    it('Validate Shelf "Mais Buscados" should validate elements in the product card', () => {
        cy.bestSellerShelf()
    })
        ;
    it('Validate Shelf "Produtos Destaques" should validate elements in the product card', () => {
        cy.highlightShelf()
    });
    it('Validate Carousel Category', () => {
        cy.carouselCategory()
    });
    it('Banner fraud Exists and it is Visible', () => {
        cy.validateBannerFraud(
            '/fique-em-alerta',
            'https://arcelormittal.vtexassets.com/assets/vtex.file-manager-graphql/images/696e547a-2ee4-42b6-9fd1-e0d84d7e05ff___94c1f96b86aba07808b2127c0ef14e15.jpg',
            'Vantagens exclusivas'
        );
    })
    
    it('Validate Shelf "Mais buscados" should validate elements in the product card', () => {
        cy.launchProductShelf()
    })
    it('NewLatter Exists and it is Visible', () => {
        cy.validateNewsletterForm()
    })
});


