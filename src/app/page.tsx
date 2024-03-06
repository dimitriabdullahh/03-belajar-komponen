import Image from "next/image";
import Profile from './components/profile';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex justify-center items-start pt-8">
        <h1 className="text-4xl font-bold">Dimitri Abdullah - 2141720249</h1>
      </div>

      <div className="flex justify-center items-start pt-8">
        <h1 className="text-2xl font-medium text-center mt-4">Lucifer Morningstar</h1>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
        src="https://static.dc.com/sites/default/files/imce/2015/12-DEC/LUCF_1_03_Col_blog_5670cb9f469638.23229929.jpg"
        alt="Katherine Johnson"
        width={1000}
        height={1000}
        style={{
          maxWidth: "100%",
          height: "auto",
          margin: "13px"
        }}
      />
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
<Image
        src="https://static.dc.com/sites/default/files/imce/2015/12-DEC/LUCF_1_03_Col_blog_5670cb9f469638.23229929.jpg"
        alt="Katherine Johnson"
        width={500}
        height={500}
        style={{
          maxWidth: "100%",
          height: "auto",
          margin: "13px"
        }}
      />
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
<Image
        src="https://static.dc.com/sites/default/files/imce/2015/12-DEC/LUCF_1_03_Col_blog_5670cb9f469638.23229929.jpg"
        alt="Katherine Johnson"
        width={500}
        height={500}
        style={{
          maxWidth: "100%",
          height: "auto",
          margin: "13px"
        }}
      />
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </div>
    </main>
  );
}
