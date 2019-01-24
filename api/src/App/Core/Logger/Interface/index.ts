/**
 * @export
 * @interface AbstractConfigSetLevels
 */
export interface AbstractConfigSetLevels {
  [key: string]: number;
}
/**
 * @export
 * @interface AbstractConfig
 */
export interface AbstractConfig {
  name: string;
  level: string[];
  timestamp: string;
  format?: Object;
}

/**
 * @export
 * @interface ILevels
 */
export interface ILevels {
  emerg: number;
  alert: number;
  crit: number;
  error: number;
  warning: number;
  notice: number;
  info: number;
  debug: number;
}
