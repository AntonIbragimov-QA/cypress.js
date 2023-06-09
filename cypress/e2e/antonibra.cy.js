describe('Тестирование HuntingPony', function () {
    
    it('Оформление заказа', function () {
        
        cy.visit('https://huntingpony.com/');
        cy.get('[data-index="2"] > .header__collections-controls > .header__collections-link').click();
        cy.get('[data-product-id="338935607"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click();
        cy.get('.add-cart-counter__btn').wait(1000).click();
        cy.get('[data-add-cart-counter-plus=""]').wait(500).click();
        cy.get('.header__cart > .icon').wait(500).click();
        cy.get('.cart-controls > .button').wait(500).click();

        })
})
