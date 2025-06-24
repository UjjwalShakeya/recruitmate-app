export const setLastVisit = (req, res, next) => {
  if (req.cookies.lastVisit && req.session.user) {
    res.locals.lastVisit = new Date(req.cookies.lastVisit).toLocaleString();
  }
  // Always update the cookie
  res.cookie("lastVisit", new Date().toISOString(), {
    maxAge: 2 * 24 * 60 * 60 * 1000,
  });
  next();
};
