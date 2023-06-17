
const UserModel = require("../model/user.model");

const jwt = require("jsonwebtoken");

class UserServices {

  static async registerUser(email, password) {

    try {

      const createUser = UserModel({ email, password });

      return await createUser.save();

    } catch (error) {
      console.log("error 1 ");

    }

  }

  static async checkUserEmail(email) {

    try {

      return await UserModel.findOne({ email });


    } catch (error) {

    }


  }


  static async genarateToken(tokendata, secretKey, jwtExpireIn) {

    return jwt.sign(tokendata, secretKey, { expiresIn: jwtExpireIn });

  }


}

module.exports = UserServices;

