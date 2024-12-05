import userController from "../controllers/user.controller"
import {Router} from "express"
const router=Router()




router.route("/api/companies/new")
    .get(userController.ReadAll)

router.route("/api/user/company")
    .get(userController.ReadCompany)


router.route("/api/users/new")
    .get(userController.ReadUser)

export default router
