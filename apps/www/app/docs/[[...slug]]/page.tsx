import { allDocs } from "contentlayer/generated";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: Promise<{ slug?: string[]}>}) {
  const slug = (await params).slug
  const docSlug = slug ? slug.join('/') : ''
  const doc = allDocs.find((doc) => doc.slug === docSlug)

  if (!doc) notFound()

  return (
    <div>
      {doc.title}
    </div>
  );
}
