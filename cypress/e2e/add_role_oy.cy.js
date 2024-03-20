describe('Add role oy Tests', ()=>{
    it('positive add role oy test', ()=>{
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

            cy.log('Выбрать роль ОУ')
            cy.get('.page-nav__role-block > .button').should('be.visible').click()
            cy.get('.select-role-form > :nth-child(1)').should('be.visible').click()

            cy.log('Выбрать создать самому')
            cy.get('.variants-company > :nth-child(2)').should('be.visible').click()

            cy.log('Заполнить форму:')
            cy.get(':nth-child(1) > .form-control--medium > .form-input--text').type(data.name_oy).should('have.value', data.name_oy)
            cy.get(':nth-child(2) > .form-control--medium > .form-input--text').type(data.address_oy).should('have.value', data.address_oy)
            cy.get('.form-area').type(data.desc).should('have.value', data.desc)
            cy.get('.create-company-form__description-block > .button').should('be.visible').click()

            cy.log('Посмотреть, что заявка создалась:')
            cy.get(':nth-child(3) > .menu-item__item-name').should('be.visible').click()

            cy.log('Проверка что перешли в заявки')
            cy.url().should('include','/account/requests')

            cy.get('.shared-list-item').should('exist')

        })
    })
    it('negative add role oy test', ()=>{
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

            cy.log('Выбрать роль ОУ')
            cy.get('.page-nav__role-block > .button').should('be.visible').click()
            cy.get('.select-role-form > :nth-child(1)').should('be.visible').click()

            cy.log('Выбрать создать самому')
            cy.get('.variants-company > :nth-child(2)').should('be.visible').click()

            cy.log('Заполнить форму:')
            cy.get(':nth-child(1) > .form-control--medium > .form-input--text').type(data.name_oy).should('have.value', data.name_oy)
            cy.log('Ввод недействительного адреса')
            cy.get(':nth-child(2) > .form-control--medium > .form-input--text').type(data.none_existent_address).should('have.value', data.none_existent_address)
            cy.log('Проверка что появился элемент сигнализирующий об ошибке')
            cy.get('.form-error > span').should('exist')
            cy.get('.form-area').type(data.desc).should('have.value', data.desc)
            cy.get('.create-company-form__description-block > .button').should('be.disabled')
            cy.log('Закрыть создание')
            cy.get('.desktop-modal__header > .base-icon').should('be.visible').click()
        })
    })


})