"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carRouter = void 0;
const express_1 = require("express");
const car_controller_1 = require("../controllers/car.controller");
const car_middleware_1 = require("../middlewares/car.middleware");
const common_middleware_1 = require("../middlewares/common.middleware");
const car_validator_1 = require("../validators/car.validator");
const router = (0, express_1.Router)();
router.get("/", car_controller_1.carController.getAll);
router.get("/:id", common_middleware_1.commonMiddleware.isIdValid, car_middleware_1.carMiddleware.getByIdOrThrow, car_controller_1.carController.getById);
router.post("/", common_middleware_1.commonMiddleware.isBodyValid(car_validator_1.CarValidator.create), car_controller_1.carController.create);
router.put("/:id", common_middleware_1.commonMiddleware.isIdValid, common_middleware_1.commonMiddleware.isBodyValid(car_validator_1.CarValidator.update), car_middleware_1.carMiddleware.getByIdOrThrow, car_controller_1.carController.updateById);
router.delete("/:id", common_middleware_1.commonMiddleware.isIdValid, car_middleware_1.carMiddleware.getByIdOrThrow, car_controller_1.carController.deleteById);
exports.carRouter = router;
