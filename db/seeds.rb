# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
Note.destroy_all
Notebook.destroy_all

user = User.create!({email:'Demo', password: 'password'})

notebook1 = Notebook.create!({user_id: user.id, title: 'Good Eats',
            description: 'These are good restaurants around app-academy'})
notebook2 = Notebook.create!({user_id: user.id, title: 'Songs',
            description: 'Songs that come up on pandora while programming'})
note1 = Note.create!({user_id: user.id, notebook_id: notebook1.id,
            title: 'Mexican', body: "The hall of the burrito spot down the street"})
note2 = Note.create!({user_id: user.id, notebook_id: notebook1.id, liked: true,
            title: 'Indian', body: "Pakwan on Oferral and Punjab Kebab House on Mason"})
note3 = Note.create!({user_id: user.id, notebook_id: notebook1.id,
            title: 'Hotdogs', body: "The expensive place on the corner"})
note4 = Note.create!({user_id: user.id, notebook_id: notebook2.id,
            title: 'Indi', body: "Chetfaker: thinking in textures. Glass Animals: Intruxx"})
note5 = Note.create!({user_id: user.id, notebook_id: notebook2.id,
            title: 'More Songs', body: "Anything by pac", liked: true})
