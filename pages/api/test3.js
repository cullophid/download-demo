// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as sendgrid_mail from "@sendgrid/mail";
import * as sentry_core from "@sentry/core";
import * as sentry_node from "@sentry/node";
import * as aws_sdk from "aws-sdk";
import * as axios from "axios";
import * as busboy from "busboy";
import * as csv_parse from "csv-parse";
import * as csv_stringify from "csv-stringify";
import * as dataloader from "dataloader";
import * as date_fns from "date-fns";
import * as graphql from "graphql";
import * as graphql_tag from "graphql-tag";
import * as js_cookie from "js-cookie";
import * as jsonwebtoken from "jsonwebtoken";
import * as knex from "knex";
import * as launchdarkly_node_client_sdk from "launchdarkly-node-client-sdk";
import * as lodash from "lodash";
import * as mjml from "mjml";
import * as mysql from "mysql";
import * as next from "next";
import * as next_images from "next-images";
import * as pg from "pg";
import * as qs from "qs";
import * as replace_in_file from "replace-in-file";
import * as sanitize_html from "sanitize-html";
import * as shortid from "shortid";
import * as sns_validator from "sns-validator";
import * as uuid from "uuid";

export default (req, res) => {
  res.statusCode = 200;
  res.json({ name: "John Doe" });
};
