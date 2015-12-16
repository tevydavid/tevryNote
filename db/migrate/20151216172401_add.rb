class Add < ActiveRecord::Migration
  def change
    add_column :notes, :liked, :boolean, default: false, null: false
  end
end
