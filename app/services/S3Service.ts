import { PutObjectCommand, DeleteObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import s3Client from "../lib/s3";

const bucketName = process.env.AWS_BUCKET_NAME || "myporto-assets-bucket";

export class S3Service {
  /**
   * Uploads a file buffer directly to S3 from the server.
   * Returns the public URL of the uploaded object.
   */
  public static async uploadFile(
    fileBuffer: Buffer,
    fileName: string,
    contentType: string
  ): Promise<string> {
    const fileKey = `uploads/${Date.now()}-${fileName}`;
    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: fileKey,
      Body: fileBuffer,
      ContentType: contentType,
    });

    await s3Client.send(command);

    const region = process.env.AWS_REGION || "ap-southeast-1";
    return `https://${bucketName}.s3.${region}.amazonaws.com/${fileKey}`;
  }

  /**
   * Deletes a file from S3 using its key name.
   */
  public static async deleteFile(fileKey: string): Promise<boolean> {
    try {
      const command = new DeleteObjectCommand({
        Bucket: bucketName,
        Key: fileKey,
      });

      await s3Client.send(command);
      return true;
    } catch (err) {
      console.error("[S3Service] Delete error:", err);
      return false;
    }
  }

  /**
   * Generates a temporary presigned URL for the client browser to upload a file directly to S3.
   * This is highly recommended to avoid routing large file uploads through your server.
   */
  public static async getPresignedUploadUrl(
    fileName: string,
    contentType: string,
    expiresIn = 3600
  ): Promise<{ uploadUrl: string; fileKey: string }> {
    const fileKey = `uploads/${Date.now()}-${fileName}`;
    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: fileKey,
      ContentType: contentType,
    });

    const uploadUrl = await getSignedUrl(s3Client, command, { expiresIn });
    return { uploadUrl, fileKey };
  }

  /**
   * Generates a temporary signed download URL for secure private objects.
   */
  public static async getSignedDownloadUrl(
    fileKey: string,
    expiresIn = 3600
  ): Promise<string> {
    const command = new GetObjectCommand({
      Bucket: bucketName,
      Key: fileKey,
    });

    return getSignedUrl(s3Client, command, { expiresIn });
  }
}
