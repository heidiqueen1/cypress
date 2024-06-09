describe("Verificar la existencia del h1", () => {
  it('debería encontrar un h1 con el texto "Mi blog personal"', () => {
    // Visita la página que deseas probar
    cy.visit("https://blog-heidi-sanchez.netlify.app/");

    // Espera explícitamente hasta que la página esté completamente cargada
    cy.intercept("GET", "https://blog-heidi-sanchez.netlify.app/").as(
      "loadPage"
    );

    // Verifica que exista un h1 con el texto "Mi blog personal"
    cy.contains("h1", "Mi blog personal", { timeout: 10000 }).should("exist");
  });
});
