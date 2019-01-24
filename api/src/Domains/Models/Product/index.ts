import BaseModel from '../BaseModel';

const ProductModel = BaseModel;

const schema = {
  name: {
    type: String,
    required: true
  },
  subName: {
    type: String
  },
  price: {
    type: Number,
    required: true
  },
  discount: {
    type: Number
  },
  images: {
    type: Array
  }
};

const options = {
  collection: 'products',
  versionKey: false
};

ProductModel.schema(schema, options);


export default ProductModel.conn('ProductModel');
