class Idea < ActiveRecord::Base
  enum quality: [:swill, :plausible, :genius]

  def self.change_quality(id, value)
    idea = Idea.find(id)
    new_value = Idea.qualities[idea.quality] + value
    unless new_value < 0 || new_value > 2
      idea.update(quality: new_value)
    end
    idea
  end
end
