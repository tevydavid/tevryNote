class StaticPagesController < ApplicationController

  def root
    require_signed_in!
  end
  
end
