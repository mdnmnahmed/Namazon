import initDB from '../../helpers/initDB';
import ProductModel from '../../models/ProductModel';


initDB();

export default (req, res) => {
    ProductModel.find()
    .then((data) => {
        res.status(200).json(data)
    })
}