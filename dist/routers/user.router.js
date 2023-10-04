"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const common_middleware_1 = require("../middlewares/common.middleware");
const user_middleware_1 = require("../middlewares/user.middleware");
const user_validator_1 = require("../validators/user.validator");
const router = (0, express_1.Router)();
router.get("/", user_controller_1.userController.getAll);
router.get("/:id", common_middleware_1.commonMiddleware.isIdValid, user_middleware_1.userMiddleware.getByIdOrThrow, user_controller_1.userController.getById);
router.post("/", common_middleware_1.commonMiddleware.isBodyValid(user_validator_1.UserValidator.create), user_controller_1.userController.create);
router.put("/:id", common_middleware_1.commonMiddleware.isIdValid, common_middleware_1.commonMiddleware.isBodyValid(user_validator_1.UserValidator.update), user_middleware_1.userMiddleware.getByIdOrThrow, user_controller_1.userController.updateById);
router.delete("/:id", common_middleware_1.commonMiddleware.isIdValid, user_middleware_1.userMiddleware.getByIdOrThrow, user_controller_1.userController.deleteById);
exports.userRouter = router;
