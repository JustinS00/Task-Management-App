# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

3.times do |i|
  Task.create(
    name: "Task #{i + 1}",
    details: "Working on this",
    importance: "High",
    status: "Ongoing",
    deadline: Date.new(2022,1,1)
  )
end


Task.create(
    name: "Learning Web Development",
    details: "Working ",
    importance: "Critical",
    status: "Reviewing",
    deadline: Date.new(2022,2,1)
)