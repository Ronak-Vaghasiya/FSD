const mongoose = require("./db.js");
const userSchema = require("./User.js");
const User = mongoose.model("User", userSchema);
const main = async () => {
try {
const newUser = await User.create({
name: "Ronak Vaghasiya",
email: "visual@example.com",
age: 22,
});
console.log("New user created:", newUser);
const allUsers = await User.find();
console.log("All users:", allUsers);
const updatedUser = await User.findOneAndUpdate(
{ name: "Ronak Vaghasiya" },
{ age: 20 },
{ new: true }
);
console.log("Updated user:", updatedUser);
const deletedUser = await User.findOneAndDelete({ name: "Ronak Vaghasiya" });
console.log("Deleted user:", deletedUser);
const remainingUsers = await User.find();
console.log("Remaining users:", remainingUsers);
} catch (error) {
console.error("Error:", error);
} finally {
mongoose.disconnect();
}
};
main();