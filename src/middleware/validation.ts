import { Request, Response, NextFunction } from 'express';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import { betterAjvErrors } from '@apideck/better-ajv-errors';
import xss from 'xss';

const ajv = new Ajv();
addFormats(ajv);

const schema = {
    type: 'object',
    properties: {
        username: {
            type: 'string',
            minLength: 5,
            maxLength: 300,
        },
        email: {
            type: 'string',
            format: 'email',
        },
    },
    required: ['username', 'email'],
};

const validate = ajv.compile(schema);

const validateAccount = (req: Request, res: Response, next: NextFunction) => {
    const valid = validate(req.body);

    if (!valid) {
        const betterErrors = betterAjvErrors({
            schema,
            data: req.body,
            errors: validate.errors,
            basePath: '',
        });
        res.status(400).json({
            error: betterErrors,
        });

        return;
    }
    next();
};

export default { validateAccount };
