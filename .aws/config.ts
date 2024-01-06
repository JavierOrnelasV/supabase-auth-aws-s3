import { S3Client } from "@aws-sdk/client-s3"
import { fromIni } from "@aws-sdk/credential-provider-ini"
import path from "path"

// // Set the path to your custom AWS credentials file
// process.env.AWS_SHARED_CREDENTIALS_FILE = path.join(
//   __dirname,
//   ".aws",
//   "custom-credentials"
// )

export const s3Client = new S3Client({
  region: process.env.AWS_S3_REGION as string,
  credentials: fromIni(),
})
