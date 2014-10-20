class QuestionsController < ApplicationController

  def index
    @questions = Quiz.find(params[:quiz_id]).questions
    render json: @questions.to_json(include: :possible_answers)
  end

  def show
    @question = Question.find(params[:id])
    @possible_answers = @question.possible_answers
    respond_to do |format|
      format.html
      format.json { render :json => @possible_answers }
    end
  end

end
