import mongoose, { Schema, model } from 'mongoose';

export interface IPhoto extends mongoose.Document {
    title: string;
    description: string;
    imagePath: string;
};

const modelSchema = new Schema({
    title: String,
    description: String,
    imagePath: String
});

export default model<IPhoto>('Photo', modelSchema);
