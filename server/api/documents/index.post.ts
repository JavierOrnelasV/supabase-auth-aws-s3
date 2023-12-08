import { s3Client } from "~/.aws/config"
import { PutObjectCommand } from "@aws-sdk/client-s3"

export default defineEventHandler(async (event) => {
  const files = await readMultipartFormData(event)
  if (!files) return

  files.forEach((file) => {
    const fileExtension = file.filename?.split(".").pop()

    const params = {
      Bucket: "aws-woko",
      Key: `${file.name}.${fileExtension}`,
      Body: file.data,
    }

    s3Client
      .send(new PutObjectCommand(params))
      .then((data) => console.log("File uploaded successfully:", data))
      .catch((err) => console.error(err))
  })
})
