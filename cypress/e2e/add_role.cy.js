describe('Add role Tests', ()=>{
    it('positive add role test', ()=>{
        cy.fixture('cypressTest').then(data=>{
            cy.log('Переход на личный кабинет')
            cy.visit(data.main_url)

            cy.log('Переход на авторизацию')
            cy.get('[href="/login"] >.button').should('be.visible').click()
            cy.url().should('include','login')

            cy.log('Вход')
            cy.get('.form-input--text').type(data.existent_login).should('have.value', data.existent_login)
            cy.get('.form-input--password').type(data.existent_password).should('have.value', data.existent_password)
            cy.get(':nth-child(3) > .button').should('be.visible').click()

            cy.log('Проверка что перешли в личный кабинет')
            cy.url().should('include','account/main')

            cy.log('Выбрать роль')
            cy.get('.page-nav__role-block > .button').should('be.visible').click()
            cy.get('.select-role-form > :nth-child(3)').should('be.visible').click()
        })
    })


})