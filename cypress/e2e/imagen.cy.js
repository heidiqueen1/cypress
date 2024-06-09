describe('verificar imagen de playa', ()=> {

it ('debería encontrar la imagen de playa', () => {
    
    cy.visit('https://blog-heidi-sanchez.netlify.app/');

    cy.get('img[src="/static/media/pexels-uno.112ed641293617670cf0.jpg"]',{ timeout: 10000 }).should('exist')

})



} )