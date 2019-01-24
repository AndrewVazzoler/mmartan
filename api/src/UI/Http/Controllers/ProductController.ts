import express from 'express';
import Product from '@mmartan/Domains/Models/Product';
import createProduct from '@mmartan/Domains/Validators/Product';



/**
 * @class ProductController
 */
class ProductController {
  /**
   * @param {express.Request} req
   * @param {express.Response} res
   * @memberof ProductController
   */
  public async getProducts(req: express.Request, res: express.Response) {
    const body = req.query;

    const data = [
      {
        name: 'Jogo de lençol Mirage Dobra Feita Ultra',
        subName: 'MIRAGE',
        price: 'R$ 489,00',
        discount: 'R$ 239,00',
        images: [
          {
            name: 'Lençol Mirage',
            src:
              'assets/images/products/Jogo de lençol Mirage Dobra Feita Ultra Soft_1_489_239.jpeg'
          },
          {
            name: 'Lençol Mirage',
            src:
              'assets/images/products/Jogo de lençol Mirage Dobra Feita Ultra Soft_2_489_239.jpeg'
          },
          {
            name: 'Lençol Mirage',
            src:
              'assets/images/products/Jogo de lençol Mirage Dobra Feita Ultra Soft_3_489_239.jpeg'
          },
          {
            name: 'Lençol Mirage',
            src:
              'assets/images/products/Jogo de lençol Mirage Dobra Feita Ultra Soft_3_489_239.jpeg'
          }
        ]
      },
      {
        name: 'Jogo de lençol Mirage Dobra Feita Ultra',
        subName: '',
        price: 'R$ 489,00',
        discount: '',
        images: [
          {
            name: 'Lençol Mirage',
            src:
              'assets/images/products/Jogo de lençol Mirage Dobra Feita Ultra Soft_1_489_239.jpeg'
          },
          {
            name: 'Lençol Mirage',
            src:
              'assets/images/products/Jogo de lençol Mirage Dobra Feita Ultra Soft_2_489_239.jpeg'
          },
          {
            name: 'Lençol Mirage',
            src:
              'assets/images/products/Jogo de lençol Mirage Dobra Feita Ultra Soft_3_489_239.jpeg'
          },
          {
            name: 'Lençol Mirage',
            src:
              'assets/images/products/Jogo de lençol Mirage Dobra Feita Ultra Soft_3_489_239.jpeg'
          }
        ]
      },
      {
        name: 'Jogo de lençol Mirage Dobra Feita Ultra',
        subName: 'MIRAGE',
        price: 'R$ 489,00',
        discount: 'R$ 239,00',
        images: []
      },
      {
        name: 'Jogo de lençol Mirage Dobra Feita Ultra',
        subName: '',
        price: 'R$ 489,00',
        discount: '',
        images: [
          {
            name: 'Lençol Mirage',
            src:
              'assets/images/products/Jogo de lençol Mirage Dobra Feita Ultra Soft_1_489_239.jpeg'
          },
          {
            name: 'Lençol Mirage',
            src:
              'assets/images/products/Jogo de lençol Mirage Dobra Feita Ultra Soft_2_489_239.jpeg'
          },
          {
            name: 'Lençol Mirage',
            src:
              'assets/images/products/Jogo de lençol Mirage Dobra Feita Ultra Soft_3_489_239.jpeg'
          },
          {
            name: 'Lençol Mirage',
            src:
              'assets/images/products/Jogo de lençol Mirage Dobra Feita Ultra Soft_3_489_239.jpeg'
          }
        ]
      }
    ];

    const options = {
      page: Number(body.page) || 1,
      limit: Number(body.limit) || 2
    };

    const find = body.search
      ? { name: { $regex: body.search, $options: 'i' } }
      : {};
    try {
      const data = await Product.paginate(find, options);
      // console.log(data);
      res.ok(data);
    } catch (error) {
      res.error(error.message, error.name, 500);
    }
  }

  public async createProduct(req: express.Request, res: express.Response) {
    const body = req.body;

    const validate = createProduct.createProduct(body);

    if (validate.error)
      return res.error(validate.error.message, validate.error.name);
    try {
      const data = await Product.create(body);
      res.ok(data, 201);
    } catch (error) {
      res.error(error.message, error.name, 500);
    }
  }
}

export default new ProductController();
