class Note < ActiveRecord::Base
  validates :body, :user_id, :notebook_id, presence: true
  after_initialize :ensure_liked

  belongs_to :notebook
  belongs_to :user


  private

  def ensure_liked
    self.liked ||= false
  end

end
