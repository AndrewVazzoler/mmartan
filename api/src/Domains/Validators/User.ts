import * as Joi from 'joi';

class UserValidate {
  constructor() {}

  getUser(data: any) {
    const schema: Joi.Schema = Joi.object({
      name: Joi.string().required(),
      email: Joi.string().email({ minDomainAtoms: 2 })
    });

    const validate: Joi.ValidationResult<{
      name: string;
      email: string;
    }> = Joi.validate(data, schema);

    return validate;
  }
}

export default new UserValidate();
