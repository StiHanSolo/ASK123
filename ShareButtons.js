import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

const ShareButtons = ({ url, title }) => {
  return (
    <div>
      <FacebookShareButton url={url} quote={title}>
        Share on Facebook
      </FacebookShareButton>
      <TwitterShareButton url={url} title={title}>
        Share on Twitter
      </TwitterShareButton>
      <WhatsappShareButton url={url} title={title}>
        Share on WhatsApp
      </WhatsappShareButton>
    </div>
  );
};

export default ShareButtons;