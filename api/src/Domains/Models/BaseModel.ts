import '@mmartan/Infra/Database/Connection';
import { Schema, model } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const myCustomLabels = {
  totalDocs: 'total',
  docs: 'result',
  limit: 'limit',
  page: 'page',
  nextPage: 'next',
  prevPage: 'prev',
  totalPages: 'pages'
};

//@ts-ignore
mongoosePaginate.paginate.options = {
  customLabels: myCustomLabels
};

class BaseModel {
  private static Schema: Schema;

  static get primaryKey() {
    return '_id';
  }

  static schema(schema: any, options?: any) {
    this.Schema = new Schema(schema, options);
    this.Schema.plugin(mongoosePaginate);
    return this;
  }

  static pre(name: any, callback: any) {
    this.Schema.pre(name, callback);
    return this;
  }

  static conn(name: string) {
    return model(name, this.Schema);
  }
}

export default BaseModel;
