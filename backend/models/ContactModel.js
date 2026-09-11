const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema(
  {
    fullName: { type: String, trim: true, required: true },
    emailAddress: { type: String, trim: true, required: true },
    companyName: { type: String, trim: true, required: true },
    country: { type: String, trim: true, required: true },
    marketplace: { type: String, trim: true, required: true },
    service: { type: String, trim: true, required: true },
    message: { type: String, trim: true, required: true },
    phoneNumber: { type: String, trim: true },
    sellerType: { type: String, trim: true },
    preferredContact: { type: String, trim: true },
    served: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Contact = mongoose.model("Contact", dataSchema);

module.exports = Contact;
