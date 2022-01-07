class CreateTasks < ActiveRecord::Migration[7.0]
  def change
    create_table :tasks do |t|
      t.string :name
      t.text :details
      t.string :importance, default: "Critical"
      t.string :status, default: "Ongoing"
      t.date :deadline
      
      t.timestamps
    end
  end
end