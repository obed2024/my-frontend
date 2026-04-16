
import express from "express";
import sequelize from "./src/config/db.js";
import userRoutes from "./src/routes/users.js";
import authRoutes from "./src/routes/auth.js";
import productRoutes from "./src/routes/products.js";
import orderRoutes from "./src/routes/orders.js";
import shopRoutes from "./src/routes/shops.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use("/api",userRoutes);
app.use("/api",authRoutes);
app.use("/api",productRoutes);
app.use("/api",orderRoutes);
app.use("/api",shopRoutes);

sequelize.authenticate().then(()=>sequelize.sync())
.then(()=>{
    app.listen(PORT,()=>{
        console.log("Database connected successfully 🔥🔥🔥🔥🔥🔥🔥🔥🔥" );
        console.log(`Our server is running on http://localhost:${PORT} `);
    });
})
.catch((err)=>{
    console.log("Server failed to start",err)
    process.exit(1);
}
);

