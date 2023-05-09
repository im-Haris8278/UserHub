import User from "../model/userModel.js";

// Get All Users

export const getUsers = async (request, response) => {
  try {
    const users = await User.find();
    response.status(200).json(users);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

// Add Users

export const addUser = async (request, response) => {
  const user = request.body;

  const newUser = new User(user);
  try {
    await newUser.save();
    response.status(201).json(newUser);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

// Get a Single User

export const getUserById = async (request, response) => {
  try {
    const user = await User.findById(request.params.id);
    response.status(200).json(user);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

// Edit User

export const editUser = async (request, response) => {
  const newUser = {
    name: request.body.name,
    username: request.body.username,
    email: request.body.email,
    phone: request.body.phone,
  };

  const user = await User.findByIdAndUpdate(request.params.id, newUser);

  response.status(200).json(user);
};

// Delete User

export const deleteUser = async (request, response) => {
  const user = await User.findById(request.params.id);

  if (!user) {
    response.send("User not Found.");
  }

  await user.remove();

  response.status(200).json("User Deleted Successfully");
};
