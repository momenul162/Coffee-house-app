const { registerService, loginService } = require("../service/auth");
const error = require("../utils/error");

const registerControler = async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw error("Invalid data", 400);
  }

  try {
    const user = await registerService({ name, email, password });
    console.log(user);
    return res.status(200).json({ message: "User created successfully", user });
  } catch (e) {
    next(e);
  }
};

const loginController = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const token = await loginService({ email, password });
    return res.status(200).json({ message: "Login Successfully", token });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  registerControler,
  loginController,
};
