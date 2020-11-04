import mongoose from 'mongoose';

const PostsSchema = mongoose.Schema({
  title: String,
  message: String,
  image: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export default mongoose.model('Posts', PostsSchema);
