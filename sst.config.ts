import { SSTConfig } from "sst";
import { Auth, Bucket, NextjsSite, Table } from "sst/constructs";

export default {
    config(_input) {
        return {
            name: "video-upload",
            region: "us-east-1",
        };
    },
    stacks(app) {
        app.stack(function Site({ stack }) {
            // need to figure out how this backend is going to work (one BIG table?)
            // - store bucket keys in dynamo with uploadedBy, favoriteCount, comments, commentsMeta, user connections
            // - fetching videos queries authed user's connections, then video bucket keys from connected users
            // - bucket key links to thumbnail and video in S3
            //
            // Bonus: analyze videos on upload to determine content and tags for use in a reccommendation engine
            const table = new Table(stack, 'db', {
                fields: {
                    //
                }
            })
            const bucket = new Bucket(stack, 'uploads',);
            const site = new NextjsSite(stack, "site", {
                bind: [bucket]
            });

            stack.addOutputs({
                SiteUrl: site.url,
            });
        });
    },
} satisfies SSTConfig;
