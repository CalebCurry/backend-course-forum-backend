import express, {
    NextFunction,
    Request,
    RequestHandler,
    Response,
} from 'express';
import prisma from '../prisma.js';

export const getUsers = async (req: Request, res: Response) => {
    const users = await prisma.user.findMany();
    res.json({ users });
};

export const createUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const user = await prisma.user.create({
        data: {
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
        },
    });
    res.status(201).json({ user });
};

export const getUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const id = Number.parseInt(req.params.id);
    const user = await prisma.user.findFirst({
        where: { id: id },
        include: {
            posts: true,
        },
    });

    if (!user) {
        return next(new Error('404'));
    }

    res.send({ user });
};

export const updateUser: RequestHandler = (req, res) => {
    res.json({ message: 'hit' });
};

export const deleteUser: RequestHandler = (req, res) => {
    res.json({ message: 'hit' });
};

export const getUserPosts: RequestHandler = (req, res) => {
    res.json({ message: 'hit' });
};

export const getUserLikedPosts: RequestHandler = (req, res) => {
    res.json({ message: 'hit' });
};

export const getUserFollowedPosts: RequestHandler = (req, res) => {
    res.json({ message: 'hit' });
};
