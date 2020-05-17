# language:pt
 
@javascript
Funcionalidade: Adicionar experiências ao Portfólio
  Adiciona uma nova experiência ao Portfólio
 
  Cenário de Fundo:
    Dado usuário está logado
    E possui o portfólio com slug 'my_portfolio'
    E o portfólio possui 1 Experiencia
    E acessa a página de edição do portfólio
 
  Cenário: Usuário remove uma Experiência do Portfolio
    Quando remove a Experiência
    Então a Experiência é removida do Portfólio