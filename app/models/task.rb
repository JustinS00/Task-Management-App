class Task < ApplicationRecord
  validates :name, :presence => true
  #validates :deadline, :presence => true

  STATUSES = [:Ongoing, :Reviewing, :Completed]
  validates :status, inclusion: { in: %w(Ongoing Reviewing Completed) }

  IMPORTANCE = [:Critical, :High, :Fair, :Low]
  validates :importance, inclusion: { in: %w(Critical High Fair Low) }

  
  #scope :Ongoing, -> {where(status: 'Ongoing')}
  #scope :Reviewing, -> {where(status: 'Reviewing')}
  #scope :Completed, -> {where(status: 'Completed')}
end







