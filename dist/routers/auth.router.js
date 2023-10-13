"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const common_middleware_1 = require("../middlewares/common.middleware");
const user_middleware_1 = require("../middlewares/user.middleware");
const user_validator_1 = require("../validators/user.validator");
const router = (0, express_1.Router)();
router.post("/register", common_middleware_1.commonMiddleware.isBodyValid(user_validator_1.UserValidator.register), user_middleware_1.userMiddleware.isEmailUnique, auth_controller_1.authController.register);
router.post("/login", common_middleware_1.commonMiddleware.isBodyValid(user_validator_1.UserValidator.login), user_middleware_1.userMiddleware.isUserExist("email"), auth_controller_1.authController.login);
router.post("/refresh", auth_middleware_1.authMiddleware.checkRefreshToken, auth_controller_1.authController.refresh);
router.post("/logout", auth_middleware_1.authMiddleware.checkAccessToken, auth_controller_1.authController.logout);
router.post("/logout-all", auth_middleware_1.authMiddleware.checkAccessToken, auth_controller_1.authController.logoutAll);
router.post("/activate", auth_middleware_1.authMiddleware.checkAccessToken, auth_controller_1.authController.sendActivationToken);
router.put("/activate", auth_controller_1.authController.activate);
router.post("/forgot", common_middleware_1.commonMiddleware.isBodyValid(user_validator_1.UserValidator.forgotPassword), user_middleware_1.userMiddleware.isUserExist("email"), auth_controller_1.authController.forgotPassword);
router.put("/forgot/:token", common_middleware_1.commonMiddleware.isBodyValid(user_validator_1.UserValidator.setForgotPassword), auth_controller_1.authController.setForgotPassword);
router.post("/password", auth_middleware_1.authMiddleware.checkAccessToken, common_middleware_1.commonMiddleware.isBodyValid(user_validator_1.UserValidator.setNewPassword), auth_controller_1.authController.setNewPassword);
exports.authRouter = router;
