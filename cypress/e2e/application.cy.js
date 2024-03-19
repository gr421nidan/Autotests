describe('Add Application Tests', ()=>{
    it('positive add application test', ()=>{
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

            cy.log('Пройти верификацию')
            cy.get('.message-student > .button').should('be.visible').click()

            cy.log('Ввод ОУ')
            cy.get('.desktop-modal__content > .student-form > .choose-institution > :nth-child(1) > [data-v-40f88df4=""] > .search-input > div.search-input__field > .form-input--text').type(data.institute).should('have.value', data.institute)
            cy.get('.search-input__item').click()

            cy.log('Ввод специальности')
            cy.get('.desktop-modal__content > .student-form > .choose-specialty > [data-v-0dbb9e5f=""] > .search-input > div.search-input__field > .form-input--text').type(data.speciality).should('have.value', data.speciality)
            cy.get('.search-input__item').should('be.visible').click()

            cy.log('Ввод квалификации')
            cy.get('.desktop-modal__content > .student-form > :nth-child(3) > .form-control--max > .form-input--text').type(data.qualification).should('have.value', data.qualification)

            cy.log('Выбор курса')
            cy.get('.desktop-modal__content > .student-form > .student-form__courses > .courses-list > :nth-child(2)').should('be.visible').click()

            cy.log('Ввод начала обучения')
            cy.get('.desktop-modal__content > .student-form > .student-form__years > :nth-child(1) > .form-control--max > .form-input--number').type(data.start_year).should('have.value', data.start_year)

            cy.log('Ввод завершения обучения')
            cy.get('.desktop-modal__content > .student-form > .student-form__years > :nth-child(2) > .form-control--max > .form-input--number').type(data.end_year).should('have.value', data.end_year)

            cy.log('Создание заявки')
            cy.get('.desktop-modal__content > .student-form > .button').should('be.visible').click()

            cy.log('Проверка что заявка создалась')
            cy.get(':nth-child(3) > .menu-item__item-name').should('be.visible').click()
            cy.get('.').should('exist')
        })
    })

    it('negative add application test', ()=>{
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

                cy.log('Пройти верификацию')
                cy.get('.message-student > .button').should('be.visible').click()

                cy.log('Ввод ОУ')
                cy.get('.desktop-modal__content > .student-form > .choose-institution > :nth-child(1) > [data-v-40f88df4=""] > .search-input > div.search-input__field > .form-input--text').type(data.institute).should('have.value', data.institute)
                cy.get('.search-input__item').click()

                cy.log('Ввод специальности')
                cy.get('.desktop-modal__content > .student-form > .choose-specialty > [data-v-0dbb9e5f=""] > .search-input > div.search-input__field > .form-input--text').type(data.speciality).should('have.value', data.speciality)
                cy.get('.search-input__item').should('be.visible').click()

                cy.log('Ввод квалификации')
                cy.get('.desktop-modal__content > .student-form > :nth-child(3) > .form-control--max > .form-input--text').type(data.qualification).should('have.value', data.qualification)

                cy.log('Выбор курса')
                cy.get('.desktop-modal__content > .student-form > .student-form__courses > .courses-list > :nth-child(2)').should('be.visible').click()

                cy.log('Ввод начала обучения')
                cy.get('.desktop-modal__content > .student-form > .student-form__years > :nth-child(1) > .form-control--max > .form-input--number').type(data.start_year).should('have.value', data.start_year)

                cy.log('Ввод завершения обучения')
                cy.get('.desktop-modal__content > .student-form > .student-form__years > :nth-child(2) > .form-control--max > .form-input--number').type(data.end_year).should('have.value', data.end_year)

                cy.log('Создание 2 заявки')
                cy.get('.desktop-modal__content > .student-form > .button').should('be.visible').click()

                cy.log('Проверка что появился элемент сигнализирующий об ошибке')
                cy.get(':nth-child(2) > .form-error > span').should('exist')
            })
    })
})