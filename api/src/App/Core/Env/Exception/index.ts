import * as NE from 'node-exceptions';

class EnvException extends NE.RuntimeException {
  /**
   * Esta exceção é levantada quando a variável de ambiente
   * não está definido, mas é necessário para a operação do aplicativo.
   *
   * @method missingEnvKey
   *
   * @param {String} environment
   *
   * @return {RuntimeException}
   */
  static missingEnvKey(key: string) {
    const message = `Certifique-se de definir a variável de ambiente ${key}.`;
    return new this(message, 500, 'E_MISSING_ENV_KEY');
  }
}

export default EnvException;
