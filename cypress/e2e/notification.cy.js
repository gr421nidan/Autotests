

describe('notification Tests', ()=>{
    it('positive notification test', ()=>{
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

            cy.log('Открываем уведомления')
            cy.get('.header__nav > [href="/notification"]').should('be.visible').click()

            cy.log('Проверка что перешли в уведомления')
            cy.url().should('include','notification')

            cy.log('Проверка что уведомления есть')
            cy.get(':nth-child(1) > .notification-list-item').should('exist')
            cy.get('.notification-title > .notification-count').invoke('text').then((count) => {
                const numOfNotifications = parseInt(count)
                if (numOfNotifications > 0){
                    cy.log('Читаем все уведомления')
                    cy.get('.notification-title > .link').should('be.visible').click()
                }
            })


        })
    })

    it('negative notification test', ()=>{
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

                cy.log('Открываем уведомления')
                cy.get('.header__nav > [href="/notification"]').should('be.visible').click()

                cy.log('Проверка что перешли в уведомления')
                cy.url().should('include','notification')

                cy.log('Проверка что уведомлений нет')
                cy.get('.notification-title > .notification-count').invoke('text').then((count) => {
                const numOfNotifications = parseInt(count)
                if (numOfNotifications === 0 || cy.get('.notifications-list > .search-title').should('exist')){
                    cy.get('.notification-title > .link').should('be.visible').click()
                    cy.get('.notifications-list > .search-title').should('exist')
                    }
                })
        })
    })
})