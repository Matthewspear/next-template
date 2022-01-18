import Metatags from "@/components/Metatags";

export default function Home() {
  return (
    <div className="w-full h-screen max-w-md sm:max-w-2xl mx-auto">
      <Metatags
        title="Template Site"
        description="This site is a template"
        image=""
      />
      <div className="pt-8 flex flex-col prose prose-lg prose-slate">
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
