import { body, validationResult } from "express-validator";

// Custom middleware function to handle validation errors
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((error) => error.msg);
    return res.status(400).json({ errors: errorMessages });
  }
  next(); // Call next middleware function
};

// Middleware function to validate email sign-up
export const validateEmailSignUp = [
  body("email").isEmail().withMessage("Enter a valid email address"),
  body("password")
    .isLength({ min: 8, max: 12 })
    .withMessage("Password must be between 8 and 12 characters"),
  handleValidationErrors,
];

// body('password').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/)
// .withMessage('Password must include at least one lowercase letter, one uppercase letter, one number, and one special character (@$!%*?&)')
