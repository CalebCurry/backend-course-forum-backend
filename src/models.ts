import { Schema, model } from 'mongoose';

const AddressSchema = new Schema(
    {
        street: String,
        city: String,
        state: String,
        Country: String,
        zipCode: String,
    },
    { _id: false }
);

const UserSchema = new Schema({
    email: { type: String, unique: true },
    username: { type: String, unique: true },
    verified: { type: Boolean, default: false },
    address: AddressSchema,
    notificationSettings: [
        { type: String, enum: ['security', 'comms', 'marketing'] },
    ],
});

const PostSchema = new Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    userId: Schema.Types.ObjectId,
    published: { type: Boolean, default: false },
    tags: [String],
});

export const User = model('users', UserSchema);
export const Post = model('posts', PostSchema);
