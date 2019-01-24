import Env from '@mmartan/App/Core/Env';

const appRoot = __dirname + '/../../../';

// const globalAny: any = global;
declare let global: any;

//ENV
global.env = (key?: string, defaultValue: any = null) => {
  Env.appRoot = appRoot;
  const env = Env.getInstance;

  if (key) {
    return env.get(key, defaultValue);
  }

  return env;
};
