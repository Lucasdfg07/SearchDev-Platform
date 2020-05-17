class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.integer :status
      t.references :portfolio, foreign_key: true
      t.string :moip_id
      t.date :due_date

      t.timestamps
    end
  end
end
