class Api::NotebooksController < ApplicationController

  def index
    @notebooks = current_user.notebooks

  end

  def create
    @notebook = Notebook.new(notebook_params)
    @notebook.user_id = current_user.id
    @notebook.save
  end

  def show
    @notes = Notebook.find(params[:id]).notes
  end

  def liked
    @notes = current_user.notes.where(liked: true)
    render './api/notebooks/show.json.jbuilder'
  end

  def update
  end

  def destroy
  end

  private
  def notebook_params
    params.require(:notebook).permit(:title, :description)
  end
end
