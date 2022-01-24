import { Router } from 'express';
import costumerController from '../controllers/costumerControllers';
import StockController from '../controllers/stockControllers';
import OrderController from '../controllers/orderController';
import SpecialControllers from '../controllers/specialController';

const router = Router();
/// Costumers
router.post('/createCostumer', costumerController.addNewUser);
router.put('/updateCostumer/:id', costumerController.updateUser);
router.delete('/deleteCostumer/:id', costumerController.deleteUser);

/// Products
router.post('/addProduct', StockController.addNewIten);

/// Orders
router.post('/createOrder', OrderController.addNewProduct);
router.delete('/deleteOrder/:id', OrderController.deleteOrder);

// Rotas especiais
router.get('/costumersByOrderId/:id', SpecialControllers.CostumerController);
router.get('/allCostumersByOrderId', SpecialControllers.AllCostumers);
router.get('/productsByOrderId/:id', SpecialControllers.products);
router.get('/allProductsByOrderId', SpecialControllers.AllproductsByOrderId);

export default router;
