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
    @notebook = Notebook.find(params[:id])
  end

  def liked
    @notes = current_user.notes.where(liked: true)
    render './api/notes/index.json.jbuilder'
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
