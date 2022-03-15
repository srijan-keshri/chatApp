const moongose = require("mongoose");

const messageModel = moongose.Schema(
  {
    sender: { type: moongose.Schema.Types.ObjectId, ref: "User" },
    content: { type: String, trim: true },
    chat: {
      type: moongose.Schema.Types.ObjectId,
      ref: "Chat",
    },
  },
  {
    timestamps: true,
  },
);

const Message = moongose.model("Message", messageModel);

module.exports = Message;
