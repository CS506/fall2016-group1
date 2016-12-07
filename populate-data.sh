// Script for inserting test data into the Buckchat Messaging Service.
// Execute with "mongo < populate-data.sh"

use buckchat;

db.users.remove({});
db.drips.remove({});

db.users.insert({
    username: 'ashish',
    password: 'password1',
    name: 'Ashish The Man',
    email: 'ashish@example.com'
})

db.users.insert({
    username: 'russ',
    password: 'password2',
    name: 'Russ The Man',
    email: 'russ@example.com'
})

db.users.insert({
    username: 'abhi',
    password: 'password3',
    name: 'Abhi The Man',
    email: 'abhi@example.com'
})

db.users.insert({
    username: 'raghav',
    password: 'password4',
    name: 'Raghav The Man',
    email: 'raghav@example.com'
})


db.drips.insert({
    text: "Let's celebrate tonight with pizza! #dinner",
    user: "ashish",
    timestamp: ISODate("2016-12-07T12:49:32.314Z"),
    anonymous: 'false',
    bucketNames: ['dinner']
})


db.drips.insert({
    text: "Yes! What else can we do afterwards? #dinner #fun",
    user: "russ",
    timestamp: ISODate("2016-12-07T12:51:36.314Z"),
    anonymous: 'false',
    bucketNames: ['dinner', 'fun']
})


db.drips.insert({
    text: "I'm up for pizza... how about bowling afterwards? #bowling #dinner",
    user: "raghav",
    timestamp: ISODate("2016-12-07T12:52:36.614Z"),
    anonymous: 'false',
    bucketNames: ['bowling', 'dinner']
})

db.drips.insert({
    text: "I can reserve the bowling lanes. Zach, can you bring pizza?? #dinner #bowling",
    user: "abhi",
    timestamp: ISODate("2016-12-07T12:55:43.614Z"),
    anonymous: 'false',
    bucketNames: ['dinner', 'bowling']
})