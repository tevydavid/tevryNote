class Notebook < ActiveRecord::Base
  validates :body, :user_id, presence: true

  belongs_to :user

  has_many :notes
  
end
