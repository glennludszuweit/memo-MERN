import mongoose from 'mongoose';

const PostsSchema = mongoose.Schema({
  title: String,
  message: String,
  tags: [String],
  image: String,
  likes: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export default mongoose.model('Posts', PostsSchema);
