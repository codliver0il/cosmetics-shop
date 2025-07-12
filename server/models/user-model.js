import mangoose from 'mangoose';

const userSchema = new mangoose.Schema({
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    email: { type: String, unique: true},
    phoneNumber: { type: Number, unique: true}
})

export default mongoose.model("users", userSchema);