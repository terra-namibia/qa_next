import Image from "next/image";

type Props = {
  questionCount: number;
};

const Intro = (props: Props) => {
  const { questionCount } = props;
  return (
    <div className="py-4 px-4">
      <h1 className="text-4xl font-bold text-center mt-4">
        ナミビア検定
        <br />
      </h1>
      {/* <p>作成: xxxx</p> */}
      <Image
        src="/flag-namibia.jpg"
        alt="/img-q0.jpg"
        width={1388}
        height={1038}
        objectFit="cover"
      />
      <p>ナミビアに関するクイズです。</p>
      <p>どの質問も3択です。</p>
      <p>
        クイズは全部で{questionCount}問。
        <strong>全問正解</strong>
        できるでしょうか？
      </p>
    </div>
  );
};

export default Intro;
