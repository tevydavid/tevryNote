class CreateNotes < ActiveRecord::Migration
  def change
    create_table :notes do |t|
      t.string :title
      t.text :body, null: false
      t.integer :user_id, null: false
      t.integer :notebook_id, null: false

      t.timestamps null: false
    end
    add_index :notes, :user_id
    add_index :notes, :notebook_id
  end
end
