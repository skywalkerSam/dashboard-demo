export default function MainTitle() {
  return (
    <div>
      <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 mb-8">
        Starboy Inc.
      </h1>

      <p
        // className={`${ubuntu.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
        className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto"
      >
        This is the{" "}
        <a
          href="https://github.com/skywalkerSam/dashboard-demo/"
          target="_blank"
          className="text-violet-500"
        >
          Dashboard Demo
        </a>
        {" "}test project, brought to you by{" "}
        <a
          href="https://github.com/skywalkerSam"
          target="_blank"
          className="text-cyan-600"
        >
          @skywalkerSam
        </a>
        , built w/{" "}
        <a
          href="https://nextjs.org/learn/"
          target="_blank"
          className="text-black"
        >
          <strong className="text-xl dark:invert">NEXT.js</strong>
        </a>
        , and deployed w/{" "}
        <a
          href="https://vercel.com"
          target="_blank"
          className="text-black"
        >
          <strong className="text-xl dark:invert">Vercel</strong>
        </a>
      </p>
    </div>
  );
}
