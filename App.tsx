import React, { useEffect, useState } from "react";
import { ChevronDown, MessageCircle, Instagram, Sparkles, MapPin, Heart, ArrowUpRight } from "lucide-react";
import coverUrl from "container:///mnt/data/src/assets/d089a75d1ff4ffaa-Gemini_Generated_Image_1sn76r1sn76r1sn7.jpg";
import hoodieUrl from "container:///mnt/data/src/assets/48ff31ed2a47e84a-image_20261122_143940.webp";
import bandanasUrl from "container:///mnt/data/src/assets/ac8c36699add3b61-image_20261122_143939.webp";
import outfitUrl from "container:///mnt/data/src/assets/c8fbeb2cf0130462-image_20261122_143939_2.webp";
import collarUrl from "container:///mnt/data/src/assets/85c146994d37b9fe-image_20261122_143939_1.webp";
import scooperUrl from "container:///mnt/data/src/assets/5b1f55cd4a3af92c-image_20261122_143944.webp";
import removerUrl from "container:///mnt/data/src/assets/3690aa002856196b-image_20261122_143940_2.webp";
import usaFlagUrl from "container:///mnt/data/src/assets/01a067242165c9df-BANDEIRA_USA.jpg";
import spainFlagUrl from "container:///mnt/data/src/assets/9219c95f369cb4f9-BANDEIRA_ESPANHA.jpg";

type Product = {
  id: string;
  name: string;
  image: string;
  usaUrl: string;
  spainUrl: string;
};

const products: Product[] = [
  {
    id: "warm-dog-hoodie",
    name: "Ropa de Invierno para Perro",
    image: hoodieUrl,
    usaUrl: "https://link.amazon/B09kWmJx8",
    spainUrl: "https://link.amazon/B0aQ8yOyR",
  },
  {
    id: "christmas-dog-bandanas",
    name: "Pañuelos de Navidad para Perro",
    image: bandanasUrl,
    usaUrl: "https://link.amazon/B07cNhE0w",
    spainUrl: "https://link.amazon/B04h2zBQU",
  },
  {
    id: "pet-xmas-outfits",
    name: "Disfraz de Navidad para Perro / Gato",
    image: outfitUrl,
    usaUrl: "https://link.amazon/B0j36QXGA",
    spainUrl: "https://link.amazon/B0g1aYsEd",
  },
  {
    id: "light-up-dog-collar",
    name: "Collar LED para Perros, Luminoso",
    image: collarUrl,
    usaUrl: "https://link.amazon/B08nLuEXa",
    spainUrl: "https://link.amazon/B04Xt2EG3",
  },
  {
    id: "pooper-scooper-portable",
    name: "Recogedora Portátil para Perro / Gato",
    image: scooperUrl,
    usaUrl: "https://link.amazon/B04D63Zr0",
    spainUrl: "https://link.amazon/B00swaTuX",
  },
  {
    id: "pet-hair-remover",
    name: "Rodillos Quitapelos Mascotas",
    image: removerUrl,
    usaUrl: "https://link.amazon/B0iooqs6L",
    spainUrl: "https://link.amazon/B0jf4VfTj",
  },
];

const faqs = [
  { q: "¿Cómo comprar?", a: "Toca el botón de tu país y finaliza en Amazon" },
  { q: "¿El enlace es seguro?", a: "Sí, compras directamente en el sitio oficial de Amazon" },
  { q: "¿Hay para mi país?", a: "Sí, tenemos enlaces para USA y España en cada producto" },
];

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <article className="flex gap-3 rounded-[24px] border border-[#EDE8E0] bg-white p-3 card-shadow sm:gap-4 sm:p-4">
      <span className="relative block h-[118px] w-[104px] shrink-0 overflow-hidden rounded-[18px] bg-[#FAF7F2] sm:h-[132px] sm:w-[118px]">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
        <span className="absolute left-2 top-2 rounded-full bg-white px-2 py-1 text-[9px] font-semibold tracking-[0.12em] text-[#2B2320] shadow-sm ring-1 ring-[#EDE8E0]">{String(index + 1).padStart(2, "0")}</span>
      </span>

      <div className="min-w-0 flex-1 py-0.5">
        <h3 className="text-[16px] font-medium leading-tight text-[#2B2320] [overflow-wrap:anywhere] sm:text-[18px]">{product.name}</h3>
        <div className="mt-5 flex gap-4">
          <a
            href={product.usaUrl}
            target="_blank"
            rel="noopener"
            aria-label={`View ${product.name} on Amazon USA`}
            className="relative flex min-h-[40px] flex-1 items-center justify-center gap-1 rounded-full bg-[#2B2320] px-2 py-2 text-center text-[11px] font-semibold leading-tight text-white transition hover:bg-[#4A3E38] active:scale-[0.99] sm:text-[12px]"
          >
            View on Amazon USA <ArrowUpRight size={14} aria-hidden="true" className="shrink-0" />
            <span aria-hidden="true" className="pointer-events-none absolute -right-2 -top-2 h-[24px] w-[24px] overflow-hidden rounded-full border-2 border-white shadow-[0_2px_6px_rgba(43,35,32,0.25)]">
              <img src={usaFlagUrl} alt="" className="h-full w-full object-cover" />
            </span>
          </a>
          <a
            href={product.spainUrl}
            target="_blank"
            rel="noopener"
            aria-label={`Ver ${product.name} en Amazon España`}
            className="relative flex min-h-[40px] flex-1 items-center justify-center gap-1 rounded-full border border-[#D8CFC4] bg-[#FAF7F2] px-2 py-2 text-center text-[11px] font-semibold leading-tight text-[#2B2320] transition hover:bg-white active:scale-[0.99] sm:text-[12px]"
          >
            Ver en Amazon España <ArrowUpRight size={14} aria-hidden="true" className="shrink-0" />
            <span aria-hidden="true" className="pointer-events-none absolute -right-2 -top-2 h-[24px] w-[24px] overflow-hidden rounded-full border-2 border-white shadow-[0_2px_6px_rgba(43,35,32,0.25)]">
              <img src={spainFlagUrl} alt="" className="h-full w-full object-cover" />
            </span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default function App() {
  const [openFaq, setOpenFaq] = useState<number[]>([0, 1, 2]);
  const [faqRecordId, setFaqRecordId] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const response = await fetch("actions", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ action: "records.list", args: { collection: "faq-preferences" } }),
        });
        if (!response.ok || cancelled) return;
        const result = await response.json();
        if (result.error) return;
        const record = result.data?.records?.[0];
        if (record && Array.isArray(record.value?.openFaq) && !cancelled) {
          setFaqRecordId(record.id);
          setOpenFaq(record.value.openFaq.filter((item: unknown) => typeof item === "number"));
        }
      } catch {
        // API indisponível: mantém o estado local padrão sem interromper a página.
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const toggleFaq = async (index: number) => {
    const next = openFaq.includes(index) ? openFaq.filter((item) => item !== index) : [...openFaq, index];
    setOpenFaq(next);
    try {
      if (!faqRecordId) {
        const response = await fetch("actions", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ action: "records.create", args: { collection: "faq-preferences", value: { openFaq: next } } }),
        });
        if (!response.ok) return;
        const result = await response.json();
        if (!result.error && result.data?.id) setFaqRecordId(result.data.id);
      } else {
        await fetch("actions", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ action: "records.replace", args: { collection: "faq-preferences", id: faqRecordId, value: { openFaq: next } } }),
        });
      }
    } catch {
      // API indisponível: a alteração continua valendo nesta visita.
    }
  };

  return (
    <div data-safe-area-inset-root style={{ boxSizing: "border-box", paddingTop: "var(--safe-area-inset-top)" }} className="min-h-screen w-full bg-[#FFFFFF] text-[#2B2320]">
      <main className="mx-auto w-full max-w-[460px] bg-[#FDFBF7] px-4 pb-10 pt-6 sm:px-5 sm:pt-8">
        {/* TOPO */}
        <header className="text-center">
          <div className="flex items-center justify-center gap-3" aria-hidden="true">
            <span className="h-px w-8 bg-[#EDE8E0]" />
            <span className="text-[11px] font-medium tracking-[0.34em] text-[#7A6F65]">BIENVENIDA</span>
            <span className="h-px w-8 bg-[#EDE8E0]" />
          </div>

          <div className="mt-5 overflow-hidden rounded-[32px] border border-[#EDE8E0] bg-white soft-shadow">
            <div className="aspect-[4/5] w-full overflow-hidden bg-[#FAF7F2]">
              <img src={coverUrl} alt="Mimma, de Recos Mimma, con vestido blanco y blazer beige, sosteniendo un perro salchicha marrón" className="h-full w-full object-cover object-top" />
            </div>
            <div className="px-6 pb-7 pt-6 text-center">
              <div className="mb-3 flex justify-center" aria-hidden="true">
                <Sparkles size={18} className="text-[#A99B8E]" />
              </div>
              <h1 className="font-serif-display text-[clamp(2.75rem,12vw,4.25rem)] font-medium leading-[0.9] tracking-[-0.02em] text-[#2B2320] [overflow-wrap:anywhere]">Recos Mimma</h1>
              <p className="mx-auto mt-3 max-w-[330px] text-[15px] font-normal leading-relaxed text-[#2B2320]">Recomendados para ti. Los mejores productos de Amazon.</p>
              <p className="mt-2 text-[13px] text-[#7A6F65]">@recosmimma</p>
            </div>
          </div>

          <p className="mx-auto mt-5 max-w-[330px] text-[14px] leading-relaxed text-[#7A6F65]">
            Elige tu país y toca para ver en Amazon 👇
          </p>
        </header>

        {/* ENLACES AMAZON DESTACADOS */}
        <section aria-labelledby="enlaces-amazon-titulo" className="mt-9">
          <div className="mb-4 text-center">
            <p id="enlaces-amazon-titulo" className="text-[10px] font-medium tracking-[0.32em] text-[#7A6F65]">COMPRAR EN</p>
          </div>

          <div className="flex flex-col gap-3.5">
            <a
              href="https://www.amazon.com"
              target="_blank"
              rel="noopener"
              aria-label="Enlaces Amazon - Estados Unidos"
              className="flex min-h-[76px] w-full items-center justify-center gap-3 rounded-[28px] border border-[#EDE8E0] bg-white px-5 py-5 text-center card-shadow transition hover:bg-[#FAF7F2] active:scale-[0.99]"
            >
              <span className="text-[18px] font-semibold leading-tight text-[#2B2320] [overflow-wrap:anywhere] sm:text-[20px]">Enlaces Amazon</span>
              <span aria-hidden="true" className="h-[32px] w-[32px] shrink-0 overflow-hidden rounded-full shadow-sm ring-1 ring-[#EDE8E0]">
                <img src={usaFlagUrl} alt="" className="h-full w-full object-cover" />
              </span>
            </a>

            <a
              href="https://www.amazon.es"
              target="_blank"
              rel="noopener"
              aria-label="Enlaces Amazon - España"
              className="flex min-h-[76px] w-full items-center justify-center gap-3 rounded-[28px] border border-[#EDE8E0] bg-white px-5 py-5 text-center card-shadow transition hover:bg-[#FAF7F2] active:scale-[0.99]"
            >
              <span className="text-[18px] font-semibold leading-tight text-[#2B2320] [overflow-wrap:anywhere] sm:text-[20px]">Enlaces Amazon</span>
              <span aria-hidden="true" className="h-[32px] w-[32px] shrink-0 overflow-hidden rounded-full shadow-sm ring-1 ring-[#EDE8E0]">
                <img src={spainFlagUrl} alt="" className="h-full w-full object-cover" />
              </span>
            </a>
          </div>
        </section>

        {/* PRODUTOS EM DESTAQUE */}
        <section aria-labelledby="produtos-titulo" className="mt-6 rounded-[28px] bg-white p-4 sm:p-5">
          <div className="mb-5 text-center">
            <p className="text-[10px] font-medium tracking-[0.32em] text-[#7A6F65]">SELECCIÓN ESPECIAL</p>
            <h2 id="produtos-titulo" className="font-serif-display mt-2 text-[clamp(2rem,9vw,2.75rem)] font-medium leading-none text-[#2B2320]">Nuestros favoritos</h2>
            <p className="mt-2 text-[13px] text-[#7A6F65]">6 recomendaciones que a tu mascota le van a encantar</p>
          </div>

          <div className="flex flex-col gap-3.5">
            {products.map((product, index) => <ProductCard key={product.id} product={product} index={index} />)}
          </div>
        </section>

        {/* SOBRE MIM */}
        <section aria-labelledby="sobre-titulo" className="mt-6 overflow-hidden rounded-[28px] border border-[#EDE8E0] bg-white p-6 text-center card-shadow sm:p-7">
          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#FAF7F2] text-[#7A6F65] ring-1 ring-[#EDE8E0]" aria-hidden="true"><Heart size={19} /></div>
          <h2 id="sobre-titulo" className="font-serif-display mt-4 text-[2.1rem] font-medium leading-none text-[#2B2320]">Sobre mí</h2>
          <div className="mx-auto mt-3 h-px w-10 bg-[#EDE8E0]" aria-hidden="true" />
          <p className="mt-4 text-[14px] leading-[1.75] text-[#7A6F65] [overflow-wrap:anywhere]">
            ¡Hola! Soy Mimma. Aquí encuentras recomendaciones probadas y aprobadas para que tu mascota esté más cómoda, con estilo y feliz. Elige tu país y compra directamente en Amazon con seguridad.
          </p>
        </section>

        {/* DÚVIDAS COMUNS */}
        <section aria-labelledby="duvidas-titulo" className="mt-6 overflow-hidden rounded-[28px] border border-[#EDE8E0] bg-[#F7F2EB] p-4 pb-5 sm:p-5">
          <div className="px-2 pb-4 pt-3 text-center">
            <p className="text-[10px] font-medium tracking-[0.32em] text-[#7A6F65]">PARA TI</p>
            <h2 id="duvidas-titulo" className="font-serif-display mt-2 text-[2.15rem] font-medium leading-none text-[#2B2320]">Preguntas frecuentes</h2>
            <p className="mt-2 text-[13px] text-[#7A6F65]">Todo lo que necesitas saber antes de pedir</p>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((item, index) => {
              const open = openFaq.includes(index);
              return (
                <article key={item.q} className="overflow-hidden rounded-[20px] border border-[#EDE8E0] bg-white">
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
                  >
                    <span className="text-[15px] font-medium leading-snug text-[#2B2320] [overflow-wrap:anywhere]">{item.q}</span>
                    <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FAF7F2] text-[#7A6F65] ring-1 ring-[#EDE8E0] transition-transform duration-300 ${open ? "rotate-180" : ""}`} aria-hidden="true"><ChevronDown size={16} /></span>
                  </button>
                  {open && <p className="px-5 pb-5 text-[13px] leading-[1.7] text-[#7A6F65] [overflow-wrap:anywhere]">{item.a}</p>}
                </article>
              );
            })}
          </div>
        </section>

        {/* CONTATO */}
        <section aria-labelledby="contato-titulo" className="mt-10 text-center">
          <p className="text-[10px] font-medium tracking-[0.32em] text-[#7A6F65]">¿HABLAMOS?</p>
          <h2 id="contato-titulo" className="font-serif-display mt-2 text-[2rem] font-medium leading-none text-[#2B2320]">Estamos por aquí</h2>
          <div className="mt-6 flex flex-col gap-3">
            <a href="#" className="flex min-h-[56px] items-center justify-center gap-2.5 rounded-full bg-[#2B2320] px-5 py-4 text-[15px] font-medium text-white transition hover:bg-[#4A3E38] active:scale-[0.99]">
              <MessageCircle size={19} aria-hidden="true" /> Hablar por WhatsApp
            </a>
            <a href="#" className="flex min-h-[56px] items-center justify-center gap-2.5 rounded-full border border-[#EDE8E0] bg-white px-5 py-4 text-[15px] font-medium text-[#2B2320] transition hover:bg-[#FAF7F2] active:scale-[0.99]">
              <Instagram size={19} aria-hidden="true" /> Seguir en Instagram
            </a>
          </div>
          <p className="mt-4 flex items-center justify-center gap-1.5 text-[12px] text-[#7A6F65]"><MapPin size={14} aria-hidden="true" /> Envío a todo Brasil</p>
        </section>

        {/* RODAPÉ */}
        <footer className="mt-10 border-t border-[#EDE8E0] pt-6 text-center">
          <p className="font-serif-display text-[18px] leading-snug text-[#2B2320] [overflow-wrap:anywhere]">Recos Mimma • Enlaces de afiliado de Amazon - no pagas nada extra por esto</p>
          <p className="mt-1.5 text-[11px] tracking-[0.14em] text-[#7A6F65]">TIENDA PET • RECOMENDADOS PARA TU MASCOTA</p>
        </footer>
      </main>
    </div>
  );
}
