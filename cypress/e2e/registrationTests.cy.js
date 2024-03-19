describe('Registration Tests', ()=>{
  it('positive registration test', ()=>{
    cy.fixture('cypressTest').then(data=>{
      cy.log('Переход на сайт')
      cy.visit(data.main_url)

      cy.log('Переход на регистрацию')
      cy.get('[href="/registration"] >.button').should('be.visible').click()
      cy.url().should('include','registration')

      cy.log('Ввод логина')
      cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type(data.existent_login).should('have.value', data.existent_login)

      cy.log('Ввод email')
      cy.get('.form-input--email').type(data.existent_email).should('have.value', data.existent_email)

      cy.log('Ввод пароля')
      cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type(data.existent_password).should('have.value', data.existent_password)

      cy.log('Подтверждение пароля')
      cy.get(':nth-child(4) > .form-control--medium > .form-input--password').type(data.existent_password).should('have.value', data.existent_password)

      cy.log('Переход далее')
      cy.get(':nth-child(4) > .button').should('be.visible').click()

      cy.wait(2000)

      cy.log('Ввод фамилии')
      cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text').type(data.existent_surname).should('have.value', data.existent_surname)

      cy.log('Ввод имя')
      cy.get(':nth-child(2) > .form-control--medium > .form-input--text').type(data.existent_name).should('have.value', data.existent_name)

      cy.log('Ввод отчества')
      cy.get(':nth-child(3) > .form-control--medium > .form-input--text').type(data.existent_patronymic).should('have.value', data.existent_patronymic)

      cy.log('Создание аккаунта')
      cy.get('.form__buttons > :nth-child(3)').should('be.visible').click()

      cy.log('Проверка что перешли в личный кабинет')
      cy.url().should('include','account/main')
    })
  })

  it('negative registration test', ()=>{
    cy.fixture('cypressTest').then(data=>{
      cy.log('Переход на сайт')
      cy.visit(data.main_url)

      cy.log('Переход на регистрацию')
      cy.get('[href="/registration"] >.button').should('be.visible').click()
      cy.url().should('include','registration')

      cy.log('Ввод несуществующего логина')
      cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type(data.none_existent_login).should('have.value', data.none_existent_login)

      cy.log('Проверка что появился элемент сигнализирующий об ошибке')
      cy.get('.form-error > span').should('exist')

      cy.log('Ввод несуществующего email')
      cy.get('.form-input--email').type(data.none_existent_email).should('have.value', data.none_existent_email)

      cy.log('Проверка что появился элемент сигнализирующий об ошибке')
      cy.get(':nth-child(2) > .form-error > span').should('exist')

      cy.log('Ввод несуществующего пароля')
      cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type(data.none_existent_password).should('have.value', data.none_existent_password)

      cy.log('Проверка что появился элемент сигнализирующий об ошибке')
      cy.get(':nth-child(3) > .form-error').should('exist')

      cy.log('Подтверждение несуществующего пароля')
      cy.get(':nth-child(4) > .form-control--medium > .form-input--password').type(data.none_existent_password).should('have.value', data.none_existent_password)

      cy.log('Проверка что переход далее не действителен')
      cy.get(':nth-child(4) > .button').should('be.disabled')

    })
  })

})
