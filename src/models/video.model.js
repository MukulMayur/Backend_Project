import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
  {
    videoFile: {
      type: string, //cloudinary
      required: true,
    },
    thumnail: {
      type: string, //cloudinary
      required: true,
    },
    title: {
      type: string,
      required: true,
    },
    description: {
      type: string,
      required: true,
    },
    duration: {
      type: Number, //cloudinary
      required: true,
    },
    views: [
      {
        type: Number,
        default: 0,
      },
    ],
    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  { timeseries: true }
);

videoSchema.plugin(mongooseAggregatePaginate);
export const Video = mongoose.model("Video", videoSchema);
