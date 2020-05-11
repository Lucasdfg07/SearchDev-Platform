class PortfolioPolicy < ApplicationPolicy
  def index?
    true
  end
 
 
  def create?
    record.user == user
  end
 
 
  def edit?
    record.user == user
  end

  def show?
    true
  end

  def update?
    record.user == user
  end
 
 
  private
 
  class Scope < Scope
    def resolve
      @user.portfolios
    end
  end
end