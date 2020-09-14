// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import * as launchdarkly_node_client_sdk from "launchdarkly-node-client-sdk";
import * as launchdarkly_react_client_sdk from "launchdarkly-react-client-sdk";
import * as lodash from "lodash";
import * as mixpanel_browser from "mixpanel-browser";
import * as mjml from "mjml";
import * as mysql from "mysql";
import * as next from "next";
import * as next_images from "next-images";
import * as pg from "pg";
import * as polished from "polished";
import * as prop_types from "prop-types";
import * as qs from "qs";
import * as react from "react";
import * as react_aria_menubutton from "react-aria-menubutton";
import * as react_color from "react-color";
import * as react_day_picker from "react-day-picker";
import * as react_dom from "react-dom";
import * as react_draft_wysiwyg from "react-draft-wysiwyg";
import * as react_dropzone from "react-dropzone";
import * as react_helmet from "react-helmet";
import * as react_spring from "react-spring";
import * as react_use_gesture from "react-use-gesture";
import * as react_virtualized from "react-virtualized";
import * as react_window from "react-window";
import * as react_window_infinite_loader from "react-window-infinite-loader";
import * as recharts from "recharts";
import * as replace_in_file from "replace-in-file";
import * as resize_observer_polyfill from "resize-observer-polyfill";
import * as sanitize_html from "sanitize-html";
import * as shortid from "shortid";
import * as sns_validator from "sns-validator";
import * as styled_components from "styled-components";
import * as uuid from "uuid";
import * as yup from "yup";

export default (req, res) => {
  res.statusCode = 200;
  res.json({ name: "John Doe" });
};
