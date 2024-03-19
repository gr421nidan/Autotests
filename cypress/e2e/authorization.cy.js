describe('Authorization Tests', ()=>{
  it('positive authorization test', ()=>{
    cy.fixture('cypressTest').then(data=>{
      cy.log('Переход на сайт')
      cy.visit(data.main_url)

      cy.log('Переход на авторизацию')
      cy.get('[href="/login"] >.button').should('be.visible').click()
      cy.url().should('include','login')

      cy.log('Ввод существующего логина')
      cy.get('.form-input--text').type(data.existent_login).should('have.value', data.existent_login)

      cy.log('Ввод существующего пароля')
      cy.get('.form-input--password').type(data.existent_password).should('have.value', data.existent_password)

      cy.log('Вход')
      cy.get(':nth-child(3) > .button').should('be.visible').click()

      cy.log('Проверка что перешли в личный кабинет')
      cy.url().should('include','account/main')

    })
  })

  it('negative authorization test', ()=>{
    cy.fixture('cypressTest').then(data=>{
      cy.log('Переход на сайт')
      cy.visit(data.main_url)

      cy.log('Переход на авторизацию')
      cy.get('[href="/login"] >.button').should('be.visible').click()
      cy.url().should('include','login')

      cy.log('Ввод несуществующего логина')
      cy.get('.form-input--text').type(data.none_existent_login).should('have.value', data.none_existent_login)

      cy.log('Ввод несуществующего пароля')
      cy.get('.form-input--password').type(data.none_existent_password).should('have.value', data.none_existent_password)

      cy.log('Вход')
      cy.get(':nth-child(3) > .button').should('be.visible').click()

      cy.log('Проверка что появился элемент сигнализирующий об ошибке')
      cy.get('.form-error > span').should('exist')

      cy.log('Проверка что остались на этой же странице')
      cy.url().should('include','login')

    })
  })

})
