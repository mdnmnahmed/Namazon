import initDB from '../../helpers/initDB'
import product from '../../models/product';
import ProductModel from '../../models/product'

initDB();

export default (req, res) => {
  ProductModel.find().then(products => {
    res.status(200).json(products)
  })
}
