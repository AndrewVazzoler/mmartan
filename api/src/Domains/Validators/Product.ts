import * as Joi from 'joi';

class ProductValidate {
  constructor() {}

  createProduct(data: any) {
    const schema: Joi.Schema = Joi.object({
      name: Joi.string().required(),
      subName: Joi.string(),
      price: Joi.number().required(),
      discount: Joi.number(),
      images: Joi.array()
    });

    const validate: Joi.ValidationResult<{
      name: string;
      subName: string;
      price: number;
      discount: number;
      images: [];
    }> = Joi.validate(data, schema);

    return validate;
  }
}

export default new ProductValidate();
