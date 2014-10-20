class QuizzesController < ApplicationController

  def index
    @quizzes = Quiz.all
    @quiz = Quiz.first
    @questions = @quiz.questions

    respond_to do |format|
      format.html
      format.json { render :json => @questions }
    end
  end

  def show
    @quiz = Quiz.find(params[:id])
  end


end
