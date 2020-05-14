class AddBlockReferenceToAdditionalInformations < ActiveRecord::Migration[5.2]
  def change
    add_reference :additional_informations, :block, foreign_key: true
  end
end
