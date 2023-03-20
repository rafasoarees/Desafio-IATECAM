describe('Comparação de Celulares no TudoCelular', () => {
    it('Compara dois celulares', () => {
      // Acessa a página de comparação de celulares
      cy.visit('https://www.tudocelular.com/compare/');
      
      // Busca o primeiro celular pelo nome e adiciona à lista de comparação
      cy.get('[id="sb1_text"]').type('iPhone 13 Pro Max{enter}');
      cy.contains('iPhone 13 Pro Max').click();
      
  
      // Busca o segundo celular pelo nome e adiciona à lista de comparação
      cy.get('[id="sb1_text"]').type('Samsung Galaxy S22 Ultra{enter}');
      cy.contains('Samsung Galaxy S22 Ultra').click();
      
  
      // Clica no botão de comparação e verifica se a tabela de comparação foi exibida
      cy.get('[id="comparabtn"]').click();
      cy.contains('NOTAS').should('be.visible');
    });
  });
  