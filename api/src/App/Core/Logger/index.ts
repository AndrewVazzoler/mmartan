import Console from './Drivers/Console';
import { AbstractConfigSetLevels, AbstractConfig } from './Interface';

class Logger {
  nameDriver: string;
  config: AbstractConfig;
  driver: Console;

  constructor(drive: string = 'console', config?: AbstractConfig) {
    this.nameDriver = drive.toLowerCase();
    this.config = config;
    this.driver;
    this.registreDriver();
  }

  /**
   * Hash de níveis de log usados ​​pelo Logger internamente.
   *
   * @attribute levels
   *
   * @return {AbstractConfigSetLevels}
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
   * O nível de log ativo para o driver do criador de logs.
   *
   * @attribute level
   *
   * @return {string}
   */
  public get level(): string {
    return this.driver.level;
  }

  /**
   * Atualizar nível de log para o driver do logger
   *
   * @param  {string} level
   *
   */
  public set level(level: string) {
    this.driver.level = level;
  }

  /**
   * Registre uma nova mensagem com determinado nível. O driver configurado
   * será usado para registrar as mensagens.
   *
   * @method log
   *
   * @param  {string}    level
   * @param  {string}    message
   * @param  {...Spread} options
   *
   * @return {void}
   */
  log(level: number, message: string, ...options: any[]): void {
    this.driver.log(level, message, ...options);
  }

  /**
   * Registre uma mensagem com nível de depuração.
   *
   * @method debug
   *
   * @param  {string}    message
   * @param  {...Spread} options
   *
   * @return {void}
   */
  debug(message: string, ...options: any[]): void {
    this.log(this.levels.debug, message, ...options);
  }

  /**
   * Registre uma mensagem com o nível de informações.
   *
   * @method info
   *
   * @param  {string}    message
   * @param  {...Spread} options
   *
   * @return {void}
   */
  info(message: string, ...options: any[]): void {
    this.log(this.levels['info'], message, ...options);
  }

  /**
   * Registre uma mensagem com o nível de aviso.
   *
   * @method notice
   *
   * @param  {string}    message
   * @param  {...Spread} options
   *
   * @return {void}
   */
  notice(message: string, ...options: any[]): void {
    this.log(this.levels['notice'], message, ...options);
  }

  /**
   * Registre uma mensagem com nível de aviso.
   *
   * @method warning
   *
   * @param  {string}    message
   * @param  {...Spread} options
   *
   * @return {void}
   */
  warning(message: string, ...options: any[]): void {
    this.log(this.levels['warning'], message, ...options);
  }

  /**
   * Registre uma mensagem com nível de erro.
   *
   * @method error
   *
   * @param  {string}    message
   * @param  {...Spread} options
   *
   * @return {void}
   */
  error(message: string, ...options: any[]): void {
    this.log(this.levels['error'], message, ...options);
  }

  /**
   * Registre uma mensagem com nível crítico.
   *
   * @method crit
   *
   * @param  {string}    message
   * @param  {...Spread} options
   *
   * @return {void}
   */
  crit(message: string, ...options: any[]): void {
    this.log(this.levels['crit'], message, ...options);
  }

  /**
   * Registre uma mensagem com nível de alerta.
   *
   * @method alert
   *
   * @param  {string}    message
   * @param  {...Spread} options
   *
   * @return {void}
   */
  alert(message: string, ...options: any[]): void {
    this.log(this.levels['alert'], message, ...options);
  }

  /**
   * Registre uma mensagem com nível de emergência.
   *
   * @method emerg
   *
   * @param  {string}    message
   * @param  {...Spread} options
   *
   * @return {void}
   */
  emerg(message: string, ...options: any[]): void {
    this.log(this.levels['emerg'], message, ...options);
  }

  /**
   * Retorna a instância do driver para um determinado driver.
   * Também chama o método `setConfig` no driver para passar a configuração
   *
   * @method driver
   *
   * @param  {string} name
   * @param  {Object} config
   *
   * @return {Object}
   */
  registreDriver() {
    const Driver = Console;

    if (
      this.config &&
      this.config.format &&
      typeof this.config.format === 'string'
    ) {
      this.config.format = null;
    }

    const driverInstance = new Driver();
    driverInstance.setConfig(this.config);
    this.driver = driverInstance;
  }
}

export default Logger;
