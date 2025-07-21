import { v2 as cloudinary } from "cloudinary";

import fs from "fs";

cloudinary.config({
  cloud_name: "dkdohtmyk",
  api_key: "965584566657817",
  api_secret: "LZr-qFv0qPXOHCkVvWk_m5OoVus",
});

const uploadOnCloudinary = async (localFilePath) => {
  console.log(localFilePath, "tes");
  try {
    if (!localFilePath) return null;
    // upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    console.log(response, "respfjkslakf");
    // file has been uploaded successfull
    console.log("file is uploaded on cloudinary", response.secure_url);
    return response.secure_url;
  } catch (error) {
    fs.unlinkSync(localFilePath); // remove the locally saved temporary file as the upload operation got failed
    return null;
  }
};

export { uploadOnCloudinary };
