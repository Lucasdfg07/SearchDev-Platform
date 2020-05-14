# language:pt
 
@javascript
Funcionalidade: Remover Hobbies do Portfólio
  Remove um Hobby do Portfólio
 
  Cenário de Fundo:
    Dado usuário está logado
    E possui o portfólio com slug 'my_portfolio'
    E o portfólio possui 1 Hobby
    E acessa a página de edição do portfólio
 
  Cenário: Usuário remove um Hobby do Portfolio
    Quando remove o Hobby
    Então o Hobby é removido do Portfólio