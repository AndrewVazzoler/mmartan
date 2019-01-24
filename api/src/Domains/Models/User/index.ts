import BaseModel from '../BaseModel';

const UserModel = BaseModel;

const schema = {
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
};

const options = {
  collection: 'usermodel',
  versionKey: false
};

UserModel.schema(schema, options);

export default UserModel.conn('UserModel');
