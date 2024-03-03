import { Bucket } from "sst/node/bucket";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3Client, ListBucketsCommand } from "@aws-sdk/client-s3";
import { Table } from "sst/node/table";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  GetCommand,
  DynamoDBDocumentClient,
} from "@aws-sdk/lib-dynamodb";

export async function GET(request: Request) {
//    const listBucketCommand = new ListBucketsCommand({
//        Bucket: Bucket.uploads.bucketName
//    })
//    const url = await getSignedUrl(new S3Client({}), listBucketCommand);
//
//    return Response.json({url})
}
