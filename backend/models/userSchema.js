const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    porfilepicture: {
      type: String,
      require: true,
      default:
        "https://cdn-icons-png.flaticon.com/512/219/219983.png?w=1380&t=st=1684405133~exp=1684405733~hmac=948201639fe373a7c1b90874b5938ce68cf03ad15339067d27933a41e111e8bb",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
