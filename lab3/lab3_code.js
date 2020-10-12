use Student
db.createCollection("Details")
db.Details.insert([{_id:1,"Name":"Shubha","Rollno":49,"Age":20,"Contact":7406621501,"email":"ssp@gmail.com"},{_id:2,"Name":"Sushma","Rollno":55,"Age":18,"Contact":7406621501,"email":"sush@gmail.com"},{_id:3,"Name":"Shwetha","Rollno":10,"Age":22,"Contact":9586123556,"email":"shwe@gmail.com"},{_id:4,"Name":"ABC","Rollno":11,"Age":21,"Contact":7845123669,"email":"abc@gmail.com"},{_id:5,"Name":"HIJ","Rollno":15,"Age":19,"Contact":8478252369,"email":"hij@gmail.com"},{_id:6,"Name":"KLM","Rollno":20,"Age":22,"Contact":7975895612,"email":"klm@gmail.com"}])
db.Details.update({"Rollno":10},{$set:{"email":"shwe20@gmail.com"}})
db.Details.update({"Rollno" : 11},{$set:{"Name":"FEM"}})
db.Details.drop()
db.Details.find()


use Customer
db.createCollection("Details")
db.Details.insert([{_id:1,"Name":"Shubha","CustomerID":"CUS10","Balance":15000,"AccountType":"Z"},{_id:2,"Name":"Sushma","CustomerID":"CUS11","Balance":1600,"AccountType":"A"},{_id:3,"Name":"Shwetha","CustomerID":"CUS12","Balance":1000,"AccountType":"Z"},{_id:4,"Name":"Suresh","CustomerID":"CUS13","Balance":10000,"AccountType":"A"},{_id:5,"Name":"Aniketh","CustomerID":"CUS14","Balance":800,"AccountType":"Z"}])
db.Details.find({"AccountType":"Z","Balance":{$gte:1200}})
db.Details.aggregate([{$group:{"_id":"$CustomerID","Min_val":{$min:"$Balance"},"Max_val":{$max:"$Balance"}}}])
db.Details.drop()
db.Details.find()
