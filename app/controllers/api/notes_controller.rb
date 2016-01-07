class Api::NotesController < ApplicationController

  def create
    @note = Note.new(note_params)
    @note.user_id = current_user.id
    @note.notebook_id = params[:notebook_id]
    @note.save!
  end

  def index
    @notes = current_user.notebooks.find(params[:notebook_id]).notes
  end

  def search
    sql_string = "LIKE '%" + params[:for] + "%'"
    @notes = current_user.notes.where("body " + sql_string)
    @notes += current_user.notes.where("title " + sql_string)
    render 'api/notes/index.json.jbuilder'
  end

  def update
    @note = current_user.notes.find(params[:id])
    @note.update(note_params)
    render :create
  end

  def destroy
    @note = current_user.notes.find(params[:id])
    @note.destroy
    render :create
  end

  private
  def note_params
    params.require(:note).permit(:title, :body, :liked)
  end

end
