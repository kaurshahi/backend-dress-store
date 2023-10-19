// Define the schema for the "categories" collection
const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

// Create the "categories" model
export default mongoose.model("Category", categorySchema);
