
//validar que la clase se encuentre 
describe ('prueba validar clase', function (){
    it('tc', function() {
        cy.visit('https://ultimateqa.com/automation/fake-pricing-page/#top')
        //validar que un objeto tenga una clase espeficia Afirmar que el objeto tenga clases especificas ejeplo:
        //"et_pb_button et_pb_pricing_table_button“
        cy.get('.et_pb_column_1 > .et_pb_with_border > .et_pb_pricing_table_wrap > .et_pb_pricing_table > .et_pb_button_wrapper > .et_pb_button').should('have.class', 'et_pb_pricing_table_button')
    })
})
