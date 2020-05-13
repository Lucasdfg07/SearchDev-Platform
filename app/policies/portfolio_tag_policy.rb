class PortfolioTagPolicy < ApplicationPolicy
  def create?
    permitted_access?
  end
 
 
  def destroy?
    permitted_access?
  end
 
 
  private
 
 
  def permitted_access?
    record.portfolio.user == user
  end
end