describe('View Needs Tests', ()=>{
    it('positive view needs test', ()=>{
        cy.fixture('cypressTest').then(data=>{
            cy.log('Переход на страницу потребностей')
            cy.visit(data.main_url + 'needs')

            cy.log('Использование поиска')
            cy.get('.form-input--text').type(data.existent_search).should('have.value', data.existent_search)
            cy.get('div.search-input__field > .button').should('be.visible').click()
            cy.wait(2000)
            cy.log('Сбросить фильтр')
            cy.get('.custom-modal-mobile__buttons > .button').should('be.visible').click()

            cy.log('Использование фильтра по зп')
            cy.get(':nth-child(1) > .radio-component__input').should('be.visible').click()
            cy.get(':nth-child(2) > .form-control--responsive > .form-input--number').type(data.existent_range).should('have.value', data.existent_range)

            cy.log('Использование фильтра по занятости')
            cy.get('.form-select__selected').should('be.visible').click()
            cy.get('.form-select__items > :nth-child(3)').should('be.visible').click()
            cy.wait(2000)
            cy.log('Сбросить фильтр')
            cy.get('.custom-modal-mobile__buttons > .button').should('be.visible').click()
        })
    })
})