const {
  returnSignupPage,
  returnLoginPage,
  createUser,
  loginUser,
  logoutUser,
} = require("../controllers/auth.controller");

const router = require("express").Router();

router.get("/signup", returnSignupPage);
router.post("/signup", createUser);
router.get("/login", returnLoginPage);
router.post("/login", loginUser);
router.get("/logout", logoutUser);

module.exports = router;
