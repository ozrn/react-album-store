import mongoose from "mongoose"

const albumSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    singer: {
      type: String,
      required: true,
    },
    releasedYear: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Album = mongoose.model("Album", albumSchema)
