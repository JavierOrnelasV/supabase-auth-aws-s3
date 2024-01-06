import { s3Client } from "~/.aws/config"
import { GetObjectCommand } from "@aws-sdk/client-s3"

export default defineEventHandler(async (event) => {
  const { file } = getQuery(event)

  const downloadParams = {
    Bucket: "aws-woko",
    Key: file as string,
  }

  return s3Client
    .send(new GetObjectCommand(downloadParams))
    .then((data) => {
      console.log("File content in string:", data.Body?.toString())
      console.log("File content:", data.Body)
      return data.Body
    })
    .catch((err) => console.error(err))
})
