import '@mmartan/Infra/Config/globals';
import Logger from '@mmartan/App/Core/Logger';
import Product from '@mmartan/Domains/Models/Product';
import { data } from './dataProducts';

const logger = new Logger();

const seeder = async () => {
  try {
    await Product.deleteMany({});
    await Product.create(data);
    logger.info('Produtos criados com sucesso!');
  } catch (error) {
    logger.error('Erro ao tentar criar os Produtos!');
  }

  process.exit(0);
};

export default seeder();
