import mongoose, { Schema } from "mongoose";

const subscriptionSchema = new subscriptionSchema(
  {
    subscriber: {
      type: Schema.Types.ObjectId, // one who is subscribing
      ref: "User",
    },
    channel: {
      type: Schema.Types.ObjectId, // one to whom subscriber is subscribing
    },
  },
  {
    timestamps: true,
  }
);

export const Subscription = mongoose.model("Subscription", subscriptionSchema);
