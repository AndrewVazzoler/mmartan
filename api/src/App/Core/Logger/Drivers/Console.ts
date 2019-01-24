import _ from 'lodash';
import winston from 'winston';
import { AbstractConfig, AbstractConfigSetLevels } from '../Interface';
/**
 * O driver de transporte do console Winston para
 * Todos os logs será gravado em stdout ou stderr com base no nível de log.
 *
 * @class WinstonConsole
 * @constructor
 */
class WinstonConsole {
  config: any;
  logger: any;

  setConfig(config = {}) {
    /**
     * Mesclando a configuração do usuário com os padrões.
     */
    this.config = Object.assign(
      {},
      {
        name: 'mmartan-api',
        level: 'info',
        timestamp: new Date().toLocaleTimeString()
      },
      config
    );

    const format =
      this.config.format ||
      winston.format.combine(
        winston.format.colorize(),
        winston.format.splat(),
        winston.format.simple()
      );

    delete this.config.format;

    /**
     * Criando uma nova instância do winston com o transporte de arquivos
     */
    this.logger = winston.createLogger({
      format: format,
      levels: this.levels,
      transports: [new winston.transports.Console(this.config)]
    });
  }

  /**
   * Uma lista de níveis de log disponíveis
   *
   * @attribute levels
   *
   * @return {Object}
   */
  get levels(): AbstractConfigSetLevels {
    return {
      emerg: 0,
      alert: 1,
      crit: 2,
      error: 3,
      warning: 4,
      notice: 5,
      info: 6,
      debug: 7
    };
  }

  /**
   * Retorna o nível atual para o motorista
   *
   * @attribute level
   *
   * @return {String}
   */
  get level() {
    return this.logger.transports[0].level;
  }

  /**
   * Atualize o nível de log do driver no tempo de execução
   *
   * @param  {String} level
   *
   * @return {void}
   */
  set level(level) {
    this.logger.transports[0].level = level;
  }

  /**
   * Mensagem de log para um determinado nível.
   *
   * @method log
   *
   * @param  {Number}    level
   * @param  {String}    msg
   * @param  {...Spread} meta
   *
   * @return {void}
   */
  log(level: number, msg: string, ...meta: any[]) {
    const levelName = _.findKey(this.levels, (num: any) => {
      return num === level;
    });
    this.logger.log(levelName, msg, ...meta);
  }
}

export default WinstonConsole;
