import { Document, Types } from 'mongoose';

/**
 * @export
 * @interface IUserModel
 * @extends {Document}
 */
export interface IUserModel extends Document {
  _id: Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
  name: string;
  email: string;
}
