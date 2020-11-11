import mongoose from 'mongoose';

const UsersSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export default mongoose.model('Users', UsersSchema);
