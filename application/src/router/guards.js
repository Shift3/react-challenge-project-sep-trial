export const requireLogin = (to, from, next) => {
    if (to.meta.auth) {
      if (to.meta.token === "12345luggage") {
        next();
      }
      next.redirect('/login');
    } else {
      next();
    }
  };