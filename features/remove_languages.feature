# language:pt
 
@javascript
Funcionalidade: Remover linguagens do Portfólio
  Remove uma linguagem do Portfólio
 
  Cenário de Fundo:
    Dado usuário está logado
    E possui o portfólio com slug 'my_portfolio'
    E o portfólio possui 1 Linguagem
    E acessa a página de edição do portfólio
 
  Cenário: Usuário remove uma Linguagem do Portfolio
    Quando remove a Linguagem
    Então a Linguagem é removida do Portfólio