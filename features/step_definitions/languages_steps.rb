Dado "o portfólio possui um bloco de Linguagens" do
  create(:block, kind: :language, side: :right, portfolio_id: @portfolio.id)
end
 
 
Dado "o portfólio possui 1 Linguagem" do
  create(:block, kind: :language, side: :right, portfolio_id: @portfolio.id)
  @language = create(:language, portfolio_id: @portfolio.id)
end
 
 
Quando "adiciona uma Linguagem" do
  @language = attributes_for(:language)
  fill_in "language-title", with: @language[:title]
  fill_in "language-percent", with: @language[:percent]
  find("#add-language").click
  wait_for_ajax
end
 
 
Quando "remove a Linguagem" do
  find(".remove-language").click
  wait_for_ajax
end
 
 
Então "a Linguagem é adicionada ao Portfólio" do
  @portfolio.reload
  expect(@portfolio.languages.count).to eq 1
  expect(page).to have_css(".resource-language", count: 1)
end
 
 
Então "a Linguagem é removida do Portfólio" do
  @portfolio.reload
  expect(@portfolio.languages.count).to eq 0
  expect(page).to_not have_css(".resource-languages")
end