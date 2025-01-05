```javascript
//Corrected usage of $inc operator
db.collection('counters').updateOne( { _id: 'myCounter' }, { $inc: { sequence: 1 } } ); //Increment counter

//Safe Decrement using $set
db.collection('counters').findOne({_id: 'myCounter'}).then(doc => {
  let newSequence = doc.sequence - 1;
  if (newSequence < 0) newSequence = 0; // Prevent going negative
  db.collection('counters').updateOne({_id: 'myCounter'}, {$set: {sequence: newSequence}});
})
```