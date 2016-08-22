user1 = (
  {
    firstName: "Interesting",
    lastName: "Name",
    email: "name@test.com",
    password: "123456",
    gender: 1,
    age: 1,
    ethnicity: 1,
    householdIncome: 1,
    politicalParty: 1,
    timeOnline: 1,
    survey: [
      ObjectId("57b66fc6333a9a6dcc38bb70"),
      ObjectId("57b66fc1333a9a6dcc38bb6f"),
      ObjectId("57b66fbb333a9a6dcc38bb6e"),
      ObjectId("57b66fb2333a9a6dcc38bb6d"),
      ObjectId("57b66f99333a9a6dcc38bb6c"),
      ObjectId("57b66f93333a9a6dcc38bb6b"),
      ObjectId("57b66f8b333a9a6dcc38bb6a"),
      ObjectId("57b66f2c333a9a6dcc38bb69"),
      ObjectId("57b66f16333a9a6dcc38bb68")]
  },
  {
    firstName: "Hippie",
    lastName: "Name",
    email: "Hippie@test.com",
    password: "123456",
    gender: 2,
    age: 2,
    ethnicity: 2,
    householdIncome: 2,
    politicalParty: 2,
    timeOnline: 2,
    survey:[
      ObjectId("57b66ff3333a9a6dcc38bb79"),
      ObjectId("57b66fee333a9a6dcc38bb78"),
      ObjectId("57b66fea333a9a6dcc38bb77"),
      ObjectId("57b66fe6333a9a6dcc38bb76"),
      ObjectId("57b66fe1333a9a6dcc38bb75"),
      ObjectId("57b66fdb333a9a6dcc38bb74"),
      ObjectId("57b66fd6333a9a6dcc38bb73"),
      ObjectId("57b66fd2333a9a6dcc38bb72"),
      ObjectId("57b66fcc333a9a6dcc38bb71")
    ]
  },
  {
    firstName: "Yolo",
    lastName: "Name",
    email: "Yolo@test.com",
    password: "123456",
    gender: 2,
    age: 3,
    ethnicity: 3,
    householdIncome: 3,
    politicalParty: 1,
    timeOnline: 3,
    survey:[
      ObjectId("57b67028333a9a6dcc38bb82"),
      ObjectId("57b6701d333a9a6dcc38bb81"),
      ObjectId("57b67019333a9a6dcc38bb80"),
      ObjectId("57b67014333a9a6dcc38bb7f"),
      ObjectId("57b67010333a9a6dcc38bb7e"),
      ObjectId("57b6700b333a9a6dcc38bb7d"),
      ObjectId("57b67006333a9a6dcc38bb7c"),
      ObjectId("57b67001333a9a6dcc38bb7b"),
      ObjectId("57b66ffd333a9a6dcc38bb7a")
    ]
  },
)

ObjectId("57b66a67333a9a6dcc38bb65") -> Interesting
ObjectId("57b66bce333a9a6dcc38bb66") -> Hippie
ObjectId("57b66c31333a9a6dcc38bb67") -> Yolo

surveys = (
  db.surveys.insert({ brandName: "Apple", brandUsage: 2, npsScore: 9, npsReason: 1, user: ObjectId("57b66a67333a9a6dcc38bb65")})
  db.surveys.insert({ brandName: "Saumsung", brandUsage: 3, npsScore: 10, npsReason: 2, user: ObjectId("57b66a67333a9a6dcc38bb65")})
  db.surveys.insert({ brandName: "Breadtalk", brandUsage: 2, npsScore: 6, npsReason: 3, user: ObjectId("57b66a67333a9a6dcc38bb65")})
  db.surveys.insert({ brandName: "Singtel", brandUsage: 2, npsScore: 3, npsReason: 1, user: ObjectId("57b66a67333a9a6dcc38bb65")})
  db.surveys.insert({ brandName: "Starhub", brandUsage: 1, npsScore: 5, npsReason: 2, user: ObjectId("57b66a67333a9a6dcc38bb65")})
  db.surveys.insert({ brandName: "Google", brandUsage: 4, npsScore: 9, npsReason: 3, user: ObjectId("57b66a67333a9a6dcc38bb65")})
  db.surveys.insert({ brandName: "NTUC", brandUsage: 4, npsScore: 8, npsReason: 1, user: ObjectId("57b66a67333a9a6dcc38bb65")})
  db.surveys.insert({ brandName: "Giant", brandUsage: 2, npsScore: 5, npsReason: 2, user: ObjectId("57b66a67333a9a6dcc38bb65")})
  db.surveys.insert({ brandName: "Trump", brandUsage: 1, npsScore: 2, npsReason: 3, user: ObjectId("57b66a67333a9a6dcc38bb65")})

  db.surveys.insert({ brandName: "Apple", brandUsage: 1, npsScore: 5, npsReason: 3, user: ObjectId("57b66bce333a9a6dcc38bb66")})
  db.surveys.insert({ brandName: "Saumsung", brandUsage: 2, npsScore: 4, npsReason: 3, user: ObjectId("57b66bce333a9a6dcc38bb66")})
  db.surveys.insert({ brandName: "Breadtalk", brandUsage: 3, npsScore: 5, npsReason: 2, user: ObjectId("57b66bce333a9a6dcc38bb66")})
  db.surveys.insert({ brandName: "Singtel", brandUsage: 4, npsScore: 6, npsReason: 2, user: ObjectId("57b66bce333a9a6dcc38bb66")})
  db.surveys.insert({ brandName: "Starhub", brandUsage: 4, npsScore: 7, npsReason: 1, user: ObjectId("57b66bce333a9a6dcc38bb66")})
  db.surveys.insert({ brandName: "Google", brandUsage: 3, npsScore: 9, npsReason: 1, user: ObjectId("57b66bce333a9a6dcc38bb66")})
  db.surveys.insert({ brandName: "NTUC", brandUsage: 2, npsScore: 5, npsReason: 3, user: ObjectId("57b66bce333a9a6dcc38bb66")})
  db.surveys.insert({ brandName: "Giant", brandUsage: 2, npsScore: 6, npsReason: 3, user: ObjectId("57b66bce333a9a6dcc38bb66")})
  db.surveys.insert({ brandName: "Trump", brandUsage: 1, npsScore: 1, npsReason: 3, user: ObjectId("57b66bce333a9a6dcc38bb66")})

  db.surveys.insert({ brandName: "Apple", brandUsage: 4, npsScore: 7, npsReason: 2, user: ObjectId("57b66c31333a9a6dcc38bb67")})
  db.surveys.insert({ brandName: "Saumsung", brandUsage: 3, npsScore: 6, npsReason: 2, user: ObjectId("57b66c31333a9a6dcc38bb67")})
  db.surveys.insert({ brandName: "Breadtalk", brandUsage: 2, npsScore: 7, npsReason: 1, user: ObjectId("57b66c31333a9a6dcc38bb67")})
  db.surveys.insert({ brandName: "Singtel", brandUsage: 1, npsScore: 5, npsReason: 1, user: ObjectId("57b66c31333a9a6dcc38bb67")})
  db.surveys.insert({ brandName: "Starhub", brandUsage: 1, npsScore: 5, npsReason: 3, user: ObjectId("57b66c31333a9a6dcc38bb67")})
  db.surveys.insert({ brandName: "Google", brandUsage: 2, npsScore: 8, npsReason: 3, user: ObjectId("57b66c31333a9a6dcc38bb67")})
  db.surveys.insert({ brandName: "NTUC", brandUsage: 3, npsScore: 8, npsReason: 2, user: ObjectId("57b66c31333a9a6dcc38bb67")})
  db.surveys.insert({ brandName: "Giant", brandUsage: 4, npsScore: 7, npsReason: 2, user: ObjectId("57b66c31333a9a6dcc38bb67")})
  db.surveys.insert({ brandName: "Trump", brandUsage: 4, npsScore: 2, npsReason: 1, user: ObjectId("57b66c31333a9a6dcc38bb67")})
)



db.users.update({id:ObjectId("57b66a67333a9a6dcc38bb65")} ,{firstName: "Interesting",     lastName: "Name",     email: "name@test.com",     password: "123456",     gender: 1,     age: 1,     ethnicity: 1,     householdIncome: 1,politicalParty: 1, timeOnline: 1, })
