import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LineShareButton,
  LineIcon,
} from "react-share";

type Props = {
  message?: string;
};

const ResultShare = (props: Props) => {
  const { message } = props;
  return (
    <div className="py-4 px-4 my-4 text-center">
      <h3 className="text-gray-300 text-md text-center py-2">
        クリックして結果をシェア
      </h3>
      <TwitterShareButton
        url={"https://qa-next.vercel.app"}
        title={message}
        hashtags={["ナミビア検定"]}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <FacebookShareButton
        url={"https://qa-next.vercel.app"}
        quote={message}
        hashtag="#ナミビア検定"
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <LineShareButton url={"https://qa-next.vercel.app"} title={message}>
        <LineIcon size={32} round />
      </LineShareButton>
    </div>
  );
};

export default ResultShare;
