import express from "express";
import {Login, Register } from "../controllers/auth.js";
const authRoutes=express.Router();

authRoutes.post("/register",Register)
authRoutes.post("/sign",Login);

export default authRoutes;