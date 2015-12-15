class Note < ActiveRecord::Base
  validates :body, :user_id, :notebook_id, presence: true

  belongs_to :notebook
  belongs_to :user

end
