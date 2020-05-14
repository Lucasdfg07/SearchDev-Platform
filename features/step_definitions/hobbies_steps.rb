Dado "o portfólio possui um bloco de Hobbies" do
  create(:block, kind: :hobby, side: :right, portfolio_id: @portfolio.id)
end
 
 
Dado "o portfólio possui 1 Hobby" do
  create(:block, kind: :hobby, side: :right, portfolio_id: @portfolio.id)
  @hobby = create(:hobby, portfolio_id: @portfolio.id)
end
 
 
Quando "adiciona um Hobby" do
  @hobby = attributes_for(:hobby)
  fill_in "hobby-title", with: @hobby[:title]
  fill_in "hobby-percent", with: @hobby[:percent]
  find("#add-hobby").click
  wait_for_ajax
end
 
 
Quando "remove o Hobby" do
  find(".remove-hobby").click
  wait_for_ajax
end
 
 
Então "o Hobby é adicionado ao Portfólio" do
  @portfolio.reload
  expect(@portfolio.hobbies.count).to eq 1
  expect(page).to have_css(".resource-hobby", count: 1)
end
 
 
Então "o Hobby é removido do Portfólio" do
  @portfolio.reload
  expect(@portfolio.hobbies.count).to eq 0
  expect(page).to_not have_css(".resource-hobbies")
end