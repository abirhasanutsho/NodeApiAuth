const UserServices = require("../services/user.services");


exports.register = async (req, res, next) => {

    try {
        const { email, password } = await req.body;

        const successResponse = await UserServices.registerUser(email, password);

        res.json({
            status: true,
            success: "User Register Successfully"

        });

    } catch (error) {

        console.log("error 2" + error);

    }




}




exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await UserServices.checkUserEmail(email);

        if (!user) {
            throw new Error("User Doesn't Exist");
        }

        const isMatch = await user.comparePassword(password);

        if (!isMatch) {
            throw new Error("Invalid Password");
        }
        let tokendata = { _id: user._id, email: user.email };

        const token = await UserServices.genarateToken(tokendata, "secretKey", "1day");

        res.status(200).json({ status: true, token: token, message: "Login Successfully" });
        // ... rest of the code
    } catch (error) {
        console.log("Error:", error);
    }
};