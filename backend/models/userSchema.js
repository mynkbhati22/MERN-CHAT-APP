const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      unique: true,
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

// FOR BCRYPTING PASSWORD

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

module.exports = User;
