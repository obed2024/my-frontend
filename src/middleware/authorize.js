const authorize = (...roles) => (req, res, next) => {
    if (!req.user || !roles.includes(req.user.type)) {
        return res.status(403).json({ message: "Access denied" });
    }
    next();
};

export default authorize;
