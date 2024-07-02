import { Router } from 'express'
import userRoutes from '../modules/user/routes.js'
// import productRoutes from '../modules/product/routes.js'


const router = Router()

router.use('/users', userRoutes)
// router.use('/product', productRoutes)
export default router