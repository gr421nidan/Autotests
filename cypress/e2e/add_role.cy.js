describe('Add role student Tests', ()=>{
    it('positive add role test', ()=>{
        cy.fixture('cypressTest').then(data=>{
            cy.log('Переход на сайт')
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

            //cy.log('Подтвердить почту')
            //cy.get('.page-nav__role-block > .button').should('be.visible').click()
            //cy.wait(2000)

            cy.log('Выбрать роль студента')
            cy.get('.page-nav__role-block > .button').should('be.visible').click()
            cy.get('.select-role-form > :nth-child(3)').should('be.visible').click()
        })
    })

    it('negative аdd role test', ()=>{
        cy.fixture('cypressTest').then(data=>{
            cy.log('Переход на сайт')
            cy.visit(data.main_url)

            cy.log('Переход на авторизацию')
            cy.get('[href="/login"] >.button').should('be.visible').click()
            cy.url().should('include','login')

            cy.log('Вход')
            cy.get('.form-input--text').type(data.existent_other_login).should('have.value', data.existent_other_login)
            cy.get('.form-input--password').type(data.existent_other_password).should('have.value', data.existent_other_password)
            cy.get(':nth-child(3) > .button').should('be.visible').click()

            cy.log('Проверка что перешли в личный кабинет')
            cy.url().should('include','account/main')

            cy.log('Выбрать роль студента нельзя')
            cy.get('.page-nav__role-block > .button').should('not.exist')

            cy.log('Проверка что появился элемент сигнализирующий об ошибке')
            cy.get('.page-nav__text-message').should('exist')

        })
    })


})