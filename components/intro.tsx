import Image from "next/image";

const Intro = () => (
  <div className="py-2 px-4">
    <h1 className="text-2xl md:text-4xl font-bold">
      『ナミビア検定』
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
      クイズは全部で6問。
      <strong>4問以上正解</strong>
      できるでしょうか？
    </p>
  </div>
);

export default Intro;
