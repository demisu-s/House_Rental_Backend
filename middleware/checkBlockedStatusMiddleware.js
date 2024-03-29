
const checkBlockedStatus = async (req, res, next) => {
    try {
      const { blocked } = req.user;
  
      // If the user is blocked, prevent access
      if (blocked) {
        return res.status(403).json({ error: "Access forbidden. User is blocked." });
      }
  
      // If the user is not blocked, proceed to the next middleware
      next();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
  module.exports = { checkBlockedStatus };
  