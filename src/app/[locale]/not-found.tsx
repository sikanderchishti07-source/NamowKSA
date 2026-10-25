import { lang } from "@/lib/root-locale";
import { getDictionary } from "@/i18n/get-dictionary";
import { ButtonLink, Container } from "@/components/ui/primitives";

export default async function NotFound() {
  const locale = await lang();
  const d = getDictionary(locale);
  return (
    <Container className="py-28 lg:py-40">
      <p className="font-[family-name:var(--font-display-latin)] text-7xl font-semibold text-teal" aria-hidden="true">404</p>
      <h1 className="mt-6 max-w-[18ch] text-[length:var(--text-display-lg)]">{d.notFound.title}</h1>
      <p className="mt-5 max-w-xl text-lg text-stone">{d.notFound.body}</p>
      <ButtonLink href={`/${locale}`} className="mt-10">
        {d.notFound.home}
      </ButtonLink>
    </Container>
  );
}
