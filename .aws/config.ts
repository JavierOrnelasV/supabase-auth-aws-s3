import { S3Client } from "@aws-sdk/client-s3"
import { fromIni } from "@aws-sdk/credential-provider-ini"

export const s3Client = new S3Client({
  region: process.env.AWS_S3_REGION as string,
  credentials: fromIni(),
})
