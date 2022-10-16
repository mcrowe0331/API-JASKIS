// JASKIS
// paste the MongoDB commands you use underneath each prompt

// GETTING STARTED
// 1. Create a database called jaskis
//Click on + create database and call it jaskis then click create database

// 2. Create a collection called bounties
//command db.createCollection ('bounties') in the shell


// ADD THE ANIMAL BOUNTIES
// 1. Insert the given "Thanoceros" bounty object
// In shell, db.bounties.insertOne()

// 2. Query for all bounties in the bounties collection
//db.bounties.find(bounties) in the shell

// 3. Insert many bounties at once using the given objects
//db.bounties.insertMany()
// MANAGE THE DATABASE
// Queries
// 1. Query for all bounties in the Grasslands
//db.bounties.find({location: "Grasslands"})
// 2. Query for all bounties with a reward worth 10000 or more
//db.bounties.find({reward: {$gt: 10000}})

// 3. Query for all bounties, but exclude the client attribute from being shown
//db.bounties.find({client: 0})  This didn't return anything so need to research this more.
// 4. Query for a Groundhog in the Woodlands
//db.bounties.find({$and: [{species: "Groundhog"}, {location: "Woodlands"}]}) this didn't return anything either.
// Update and Delete
// 1. Update the reward for Polarwind to 10000
//db.bounties.updateOne({ name: "Polarwind"}, {$set: {reward: 10000}}) this didn't change the modified count to 1.
// 2. Remove Lokinkajou
//db.bounties.deleteOne({name: "Lokinkajou"}) acknowledged: true, deletedCount: 0?
// 3. Delete all bounties sent by Songbird
//db.bounties.deleteOne({client: "Songbird"}) acknowledged: true, deletedCount: 0?
// 4. Update all captured statuses to true
//db.bounties.updateMany({captured: false}, {$set: {captured: true}})