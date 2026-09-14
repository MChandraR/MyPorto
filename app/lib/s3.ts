import { S3Client } from "@aws-sdk/client-s3";

const region = process.env.AWS_REGION || "ap-southeast-1";
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

if (!accessKeyId || !secretAccessKey) {
  console.warn("[AWS S3] Warning: Missing AWS credentials in environment variables.");
}

export const s3Client = new S3Client({
  region,
  credentials: {
    accessKeyId: accessKeyId || "placeholder_key",
    secretAccessKey: secretAccessKey || "placeholder_secret",
  },
});
export default s3Client;
