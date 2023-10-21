import z from 'zod';
import { NotificationSettings } from '@prisma/client';

const userLazy: z.ZodLazy<any> = z.lazy(() => User);
const postLazy: z.ZodLazy<any> = z.lazy(() => Post);
const replyLazy: z.ZodLazy<any> = z.lazy(() => Reply);

export const User = z.object({
    id: z.number().int().nonnegative().optional(),
    email: z.string().email(),
    username: z
        .string()
        .min(5, 'at least, 5 chars')
        .max(50, 'at most 50 chars'),
    password: z.string(),
    verified: z.boolean().optional(),
    notificationSettings: z.nativeEnum(NotificationSettings).array().optional(),
    posts: z.array(postLazy).optional(),
    postsLiked: z.array(postLazy).optional(),
    postReplies: z.array(replyLazy).optional(),
});

export const UserUpdate = User.partial();

export const Post = z.object({
    id: z.number().int().nonnegative().optional(),
    title: z.string().min(10),
    body: z.string().min(10),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    userId: z.number().int().nonnegative().optional(),
    published: z.boolean().default(true),
    tags: z.string().array().optional(),
    likes: z.array(userLazy).optional(),
    author: userLazy.optional(),
    replies: z.array(replyLazy).optional(),
});

export const PostUpdate = Post.pick({
    body: true,
    title: true,
    tags: true,
    published: true,
}).strict();

export const Reply = z.object({
    id: z.number().int().nonnegative().optional(),
    userId: z.number().int().nonnegative().optional(),
    postId: z.number().int().nonnegative(),
    body: z.string().min(1),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    author: userLazy.optional(),
    post: postLazy.optional(),
});
