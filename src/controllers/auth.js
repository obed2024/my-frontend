import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "../database/models/users.js"

export const Register = async (req, res) => {
    try {
        const { password, fullName, phoneNumber, ...userData } = req.body;
        const findUser = await User.findOne({ where: { email: userData.email } }); 
        if (findUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashpassword = await bcrypt.hash(password, 10);
        const userAccount = await User.create({
            ...userData,
            fullname: fullName,
            phonenumber: phoneNumber,
            password: hashpassword
        });
        res.status(201).json({ message: "User registered successfully", user: userAccount });

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message })
    }
}

export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } }); 
        if (!user) {
            return res.status(404).json({ message: "User tried to login not found in database" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const token = jwt.sign(
            {
                id: user.id,
                type: user.type,
                fullname: user.fullname,
                email: user.email,
                phonenumber: user.phonenumber
            },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );
        res.status(200).json({ message: "login successfully🔥🔥💕", token });

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message })
    }
}