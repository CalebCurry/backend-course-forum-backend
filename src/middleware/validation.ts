import { Request, Response, NextFunction } from 'express';

const validateUsername = (req: Request, res: Response, next: NextFunction) => {
    const username = req?.body?.username;

    if (!username || username.length < 5 || username.length > 30) {
        return res.status(400).json({
            error: 'Username must be 5-30 characters long',
        });
    }

    next();
};

export default { validateUsername };
