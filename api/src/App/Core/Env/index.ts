import _ from 'lodash';
import path from 'path';
import dotenv from 'dotenv';
import fs from 'fs';
import Debug from 'debug';

import EnvException from './Exception';

const debug = Debug('mmartan:Env');

/**
 * Gerencia as variáveis ​​do ambiente de aplicativos
 * lendo o arquivo `.env` da raiz do projeto.
 *
 * Se o arquivo `.env` estiver faltando, uma exceção será lançada
 * para suprimir a exceção, passe `ENV_SILENT = true` quando
 * Iniciando o aplicativo.
 *
 * Pode definir uma localização diferente, configurando `ENV_PATH`
 * variável de ambiente.
 *
 * @alias Env
 * @class Env
 * @constructor
 */
class Env {
  private static _appRoot: string;

  private static _instance: any;

  private constructor(appRoot: string) {
    Env.appRoot = appRoot;

    const bootedAsTesting = process.env.NODE_ENV === 'testing';

    const env = this.load(this.getEnvPath(), false); // não sobrescreva no primeiro lugar

    /**
     * Lançando a exceção quando ENV_SILENT não está definido como true e,
     * claro, há um erro
     */
    if (env.error && process.env.ENV_SILENT !== 'true') {
      throw env.error;
    }

    /**
     * Carregue o arquivo `.env.testing` se o aplicativo foi inicializado
     * no modo de teste
     */
    if (bootedAsTesting) {
      this.load('.env.testing');
    }
  }

  /**
   * Instancia da classe
   */
  public static get getInstance() {
    // Do you need arguments? Make it a regular method instead.
    return this._instance || (this._instance = new Env(this.appRoot));
  }

  public static get appRoot(): string {
    return this._appRoot;
  }

  public static set appRoot(appRoot) {
    this._appRoot = appRoot;
  }
  /**
   * Substituindo valores dinâmicos dentro do arquivo .env
   *
   * @method _interpolate
   *
   * @param  {String} env
   * @param  {Object} envConfig
   *
   * @return {String}
   *
   * @private
   */
  _interpolate(env: string, envConfig: any): string {
    const matches = env.match(/\$([a-zA-Z0-9_]+)|\${([a-zA-Z0-9_]+)}/g) || [];
    _.each(matches, match => {
      const key = match.replace(/\$|{|}/g, '');
      const variable = envConfig[key] || process.env[key] || '';
      env = env.replace(match, this._interpolate(variable, envConfig));
    });
    return env;
  }

  /**
   * Carregue o arquivo env de um determinado local.
   *
   * @method load
   *
   * @param  {String}  filePath
   * @param  {Boolean} [overwrite = 'true']
   * @param  {String}  [encoding = 'utf8']
   *
   * @return {void}
   */
  load(filePath: string, overwrite: boolean = true, encoding: string = 'utf8') {
    const options = {
      path: path.isAbsolute(filePath)
        ? filePath
        : path.join(Env.appRoot, filePath),
      encoding
    };

    try {
      const envConfig = dotenv.parse(
        fs.readFileSync(options.path, options.encoding)
      );

      /**
       * O Dotenv não sobrescreve as variáveis ​​de env existentes, portanto,
       * precisamos executá-lo manualmente analisando o arquivo.
       */
      debug(
        '%s arquivo de ambiente de %s',
        overwrite ? 'merging' : 'loading',
        options.path
      );

      /**
       * Fazer um loop sobre valores e defini-los no ambiente somente quando o
       * valor real não estiver definido ou sobrescrever estiver definido como verdadeiro
       */
      _.each(envConfig, (value, key) => {
        if (process.env[key] === undefined || overwrite) {
          process.env[key] = this._interpolate(value, envConfig);
        }
      });
      return { parsed: envConfig };
    } catch (error) {
      return { error };
    }
  }

  /**
   * Retorna o caminho de onde o arquivo `.env` deve ser carregado.
   *
   * @method getEnvPath
   *
   * @return {String}
   */
  getEnvPath() {
    if (!process.env.ENV_PATH || process.env.ENV_PATH.length === 0) {
      return '.env';
    }
    return process.env.ENV_PATH;
  }

  /**
   * Obter valor para uma determinada chave do objeto `process.env`.
   *
   * @method get
   *
   * @param  {String} key
   * @param  {Mixed} [defaultValue = null]
   *
   * @return {Mixed}
   *
   * @example
   * ```js
   * Env.get('CACHE_VIEWS', false)
   * ```
   */
  get(key: string, defaultValue: any = null) {
    return _.get(process.env, key, defaultValue) || defaultValue;
  }

  /**
   * Obtenha o valor de uma determinada chave do objeto `process.env` ou envie
   * um erro se a chave não existir.
   *
   * @method getOrFail
   *
   * @param  {String} key
   *
   * @return {Mixed}
   *
   * @example
   * ```js
   * Env.getOrFail('MAIL_PASSWORD')
   * ```
   */
  getOrFail(key: string) {
    const val = _.get(process.env, key);

    if (_.isUndefined(val)) {
      throw EnvException.missingEnvKey(key);
    }

    return val;
  }

  /**
   * Set value for a given key inside the `process.env`
   * object. If value exists, will be updated
   *
   * @method set
   *
   * @param  {String} key
   * @param  {Mixed} value
   *
   * @return {void}
   *
   * @example
   * ```js
   * Env.set('PORT', 3333)
   * ```
   */
  set(key: string, value: any) {
    _.set(process.env, key, value);
  }
}

export default Env;
