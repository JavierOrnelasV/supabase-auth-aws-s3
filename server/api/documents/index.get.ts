import { s3Client } from "~/.aws/config"
import { GetObjectCommand } from "@aws-sdk/client-s3"

export default defineEventHandler(async (event) => {
  const { file } = await readBody(event)

  const downloadParams = {
    Bucket: "aws-woko",
    Key: file,
  }

  s3Client
    .send(new GetObjectCommand(downloadParams))
    .then((data) => {
      console.log("File content:", data.Body?.toString())
    })
    .catch((err) => console.error(err))
})
