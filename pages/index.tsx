import Metatags from '@/components/Metatags';

export default function Home() {
  return (
    <div className="mx-auto h-screen w-full max-w-md sm:max-w-2xl">
      <Metatags
        title="Template Site"
        description="This site is a template"
        image=""
      />
      <div className="prose prose-lg prose-slate flex flex-col pt-8">
        <h1 className="text-4xl font-semibold">Template Site</h1>
        <p>
          A blank page ready for you to build your ideas 🚀
          <br />
          <br />
          Setup with:
          <ul>
            <li>
              <a href="https://www.typescriptlang.org/">Typescript</a>
            </li>
            <li>
              <a href="https://nextjs.org/">Next.js</a>
            </li>
            <li>
              <a href="https://tailwindcss.com/">Tailwind CSS</a>
            </li>
            <li>
              <a href="https://vercel.com/">Vercel</a>
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
}
