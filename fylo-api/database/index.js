import mongoose from 'mongoose';

mongoose.connect('')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));