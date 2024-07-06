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

Cypress.Commands.add('bannerHomeValidate', () => {
    cy.get(ELEMENTS.BANNER.containerBanner)
        .should('be.visible');
});

Cypress.Commands.add('containerRulerValidate', () => {
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

Cypress.Commands.add('bestSellerShelf', () => {
    cy.get(ELEMENTS.BEST_SELLERS_SHELF.containerShelf).within(() => {
        cy.get(ELEMENTS.BEST_SELLERS_SHELF.highlightProduct)
            .should('contain.text', '6% OFF');
        cy.get(ELEMENTS.BEST_SELLERS_SHELF.imgProduct)
            .should('be.visible')
            .and('have.attr', 'src')
        cy.get(ELEMENTS.BEST_SELLERS_SHELF.nameProduct)
            .should('be.visible')
            .invoke('text')
            .then((productName) => {
                const trimmedProductName = productName.trim();
                cy.log('The product name is: ' + trimmedProductName);
                console.log('Product name captured: ', trimmedProductName);
                expect(trimmedProductName).not.to.be.empty;
            });
        cy.get(ELEMENTS.BEST_SELLERS_SHELF.priceProduct)
            .should('be.visible')
            .each(($price) => {
                const priceText = $price.text().trim();
                cy.log('The price of the product is: ' + priceText);
                console.log('Price captured: ', priceText);
                expect(priceText).not.to.be.empty;
                expect(priceText).to.match(/^R\$[\s\u00A0]?\d{1,3}(\.\d{3})*,\d{2}$/);
            });
        cy.get(ELEMENTS.BEST_SELLERS_SHELF.discountTicket)
            .should('contain.text', 'à vista no pix');
        cy.get(ELEMENTS.BEST_SELLERS_SHELF.discountPercentage)
            .should('contain.text', '6% de desconto');
        cy.get(ELEMENTS.BEST_SELLERS_SHELF.buttonAdd)
            .should('contain.text', 'Adicionar')
            .and('be.visible');
    });
});

Cypress.Commands.add('highlightShelf', () => {
    cy.get(ELEMENTS.HIGHLIGHT_SHELF.containerShelf).within(() => {
        cy.get(ELEMENTS.HIGHLIGHT_SHELF.highlightProduct)
            .should('contain.text', '6% OFF');
        cy.get(ELEMENTS.HIGHLIGHT_SHELF.imgProduct)
            .should('be.visible')
            .and('have.attr', 'src')
        cy.get(ELEMENTS.HIGHLIGHT_SHELF.nameProduct)
            .should('be.visible')
            .invoke('text')
            .then((productName) => {
                const trimmedProductName = productName.trim();
                cy.log('The product name is: ' + trimmedProductName);
                console.log('Product name captured: ', trimmedProductName);
                expect(trimmedProductName).not.to.be.empty;
            });
        cy.get(ELEMENTS.HIGHLIGHT_SHELF.priceProduct)
            .should('be.visible')
            .each(($price) => {
                const priceText = $price.text().trim();
                cy.log('The price of the product is: ' + priceText);
                console.log('Price captured: ', priceText);
                expect(priceText).not.to.be.empty;
                expect(priceText).to.match(/^R\$[\s\u00A0]?\d{1,3}(\.\d{3})*,\d{2}$/);
            });
        cy.get(ELEMENTS.BEST_SELLERS_SHELF.discountTicket)
            .should('contain.text', 'à vista no pix');
        cy.get(ELEMENTS.BEST_SELLERS_SHELF.discountPercentage)
            .should('contain.text', '6% de desconto');
        cy.get(ELEMENTS.BEST_SELLERS_SHELF.buttonAdd)
            .should('contain.text', 'Adicionar')
            .and('be.visible');
    });
});

Cypress.Commands.add('carouselCategory', () => {
    cy.get(ELEMENTS.CATEGORY_CAROUSEL.containerCarousel).within(() => {
        cy.get(ELEMENTS.CATEGORY_CAROUSEL.titleCarousel)
            .should('be.visible')
            .invoke('text')
            .then((titleText) => {
                const trimmedTitleText = titleText.trim();
                cy.log('The title is: ' + trimmedTitleText);
                console.log('Title captured: ', trimmedTitleText);
                expect(trimmedTitleText).not.to.be.empty;
            });
        cy.get(ELEMENTS.CATEGORY_CAROUSEL.subtitleCarousel)
            .should('be.visible')
            .invoke('text')
            .then((titleText) => {
                const trimmedTitleText = titleText.trim();
                cy.log('The title is: ' + trimmedTitleText);
                console.log('Title captured: ', trimmedTitleText);
                expect(trimmedTitleText).not.to.be.empty;
            });
        cy.get(ELEMENTS.CATEGORY_CAROUSEL.containerCategory).each(($el, index) => {
            cy.wrap($el)
                .find(ELEMENTS.CATEGORY_CAROUSEL.categoryText)
                .invoke('text')
                .then((category) => {
                    cy.log(`Category ${index + 1}: ${category}`);
                });
            cy.wrap($el).should('be.visible');
        });
    })
})
Cypress.Commands.add('validateBannerFraud', (imgLinkHref, imgSrc, imgAlt) => {
    cy.get(ELEMENTS.BANNER_FRAUD.bannerContainer)
        .should('exist')
        .and('be.visible')
        .within(() => {
            // Valida o link da imagem
            cy.get(ELEMENTS.BANNER_FRAUD.imgLink)
                .should('exist')
                .and('have.attr', 'href', imgLinkHref);

            // Valida a imagem
            cy.get('img.vtex-store-components-3-x-imageElement')
                .should('exist')
                .and('have.attr', 'src', imgSrc)
                .and('have.attr', 'alt', imgAlt);
        });
});
Cypress.Commands.add('launchProductShelf', () => {
    cy.window().scrollTo("bottom");
    cy.get(ELEMENTS.LAUNCH_PRODUCT_SHELF.containerShelf).within(() => {
        cy.get(ELEMENTS.LAUNCH_PRODUCT_SHELF.highlightProduct)
            .should('contain.text', '6% OFF');
        cy.get(ELEMENTS.LAUNCH_PRODUCT_SHELF.imgProduct)
            .should('be.visible')
            .and('have.attr', 'src')
        cy.get(ELEMENTS.LAUNCH_PRODUCT_SHELF.nameProduct)
            .should('be.visible')
            .invoke('text')
            .then((productName) => {
                const trimmedProductName = productName.trim();
                cy.log('The product name is: ' + trimmedProductName);
                console.log('Product name captured: ', trimmedProductName);
                expect(trimmedProductName).not.to.be.empty;
            });
        cy.get(ELEMENTS.LAUNCH_PRODUCT_SHELF.priceProduct)
            .should('be.visible')
            .each(($price) => {
                const priceText = $price.text().trim();
                cy.log('The price of the product is: ' + priceText);
                console.log('Price captured: ', priceText);
                expect(priceText).not.to.be.empty;
                expect(priceText).to.match(/^R\$[\s\u00A0]?\d{1,3}(\.\d{3})*,\d{2}$/);
            });
        cy.get(ELEMENTS.LAUNCH_PRODUCT_SHELF.discountTicket)
            .should('contain.text', 'à vista no pix');
        cy.get(ELEMENTS.LAUNCH_PRODUCT_SHELF.discountPercentage)
            .should('contain.text', '6% de desconto');
        cy.get(ELEMENTS.LAUNCH_PRODUCT_SHELF.buttonAdd)
            .should('contain.text', 'Adicionar')
            .and('be.visible');
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
