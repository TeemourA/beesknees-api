import { Schema, model, Document } from 'mongoose';

type ExtendedDocument = Document & { [key: string]: any };

export interface ICardSet extends ExtendedDocument {
  title: string;
  url: string;
  price?: string;
  image?: Buffer;
}

const CardSetSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    url: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    price: {
      type: String,
      trim: true,
    },
    image: {
      type: Buffer,
    },
  },
  {
    timestamps: true,
  }
);

export const CardSet = model<ICardSet>('CardSet', CardSetSchema);

export const cardSetAllowedUpdates = ['title', 'url'];
