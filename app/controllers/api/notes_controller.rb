class Api::NotesController < ApplicationController

  def create
    @note = Note.new(note_params)
    @note.user_id = current_user.id
    @note.notebook_id = params[:notebook_id]
    @note.save!
  end

  def update
    @note = Note.find(params[:id])
    @note.update(note_params)
    render :create
  end

  private
  def note_params
    params.require(:note).permit(:title, :body, :liked)
  end

end
