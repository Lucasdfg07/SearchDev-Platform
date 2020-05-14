Dado "o portfólio possui um bloco de Experiência" do
  create(:block, kind: :experience, side: :right, portfolio_id: @portfolio.id)
end
 
 
Dado "o portfólio possui 1 Experiencia" do
  create(:block, kind: :experience, side: :right, portfolio_id: @portfolio.id)
  @experience = create(:experience, portfolio_id: @portfolio.id)
end
 
 
Quando "adiciona uma Experiência" do
  @experience = attributes_for(:experience)
  fill_in "experience-title", with: @experience[:title]
  fill_in "experience-company", with: @experience[:company]
  fill_in "experience-description", with: @experience[:description]
  fill_in "experience-start-date", with: @experience[:start_date]
  fill_in "experience-end-date", with: @experience[:end_date]
  find("#add-experience").click
  wait_for_ajax
end
 
 
Quando "remove a Experiência" do
  find(".remove-experience").click
  wait_for_ajax
end
 
 
Então "a Experiência é adicionada ao Portfólio" do
  @portfolio.reload
  expect(@portfolio.experiences.count).to eq 1
  expect(page).to have_css(".resource-experience", count: 1)
end
 
 
Então "a Experiência é removida do Portfólio" do
  @portfolio.reload
  expect(@portfolio.experiences.count).to eq 0
  expect(page).to_not have_css(".resource-experience")
end