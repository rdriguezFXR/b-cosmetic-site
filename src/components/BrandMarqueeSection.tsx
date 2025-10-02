"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

type Brand = {
    id: string;
    name: string;
    handle: string;
    tagline: string;
    href?: string;
    logo: string; // caminho/URL da logo (PNG/SVG)
    accent?: string; // cor de destaque do card
};

const BRANDS: Brand[] = [
    {
        id: "like-brasil",
        name: "LIKE BRASIL",
        handle: "@likebrasil",
        tagline: "O produto principal são as pessoas.",
        href: "https://likebrasil.com.br",
        logo: "/assets/brands/likebrasil.svg",
        accent: "from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/10",
    },
    {
        id: "agorasou",
        name: "AGORASOU",
        handle: "@agorasou",
        tagline: "Assets, ícones e materiais num só lugar.",
        href: "https://agorasou.com.br",
        logo: "/assets/brands/agorasou.svg",
        accent: "from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/10",
    },
    {
        id: "bellys",
        name: "BELLYS",
        handle: "@bellys",
        tagline: "Beleza e bem-estar que transformam.",
        href: "https://bellys.com.br",
        logo: "/assets/brands/bellys.svg",
        accent: "from-pink-50 to-rose-100 dark:from-rose-900/20 dark:to-rose-800/10",
    },
    {
        id: "brazilian-dubai",
        name: "BRAZILIAN DUBAI",
        handle: "@braziliandubai",
        tagline: "Cosméticos & private label sem limites.",
        href: "https://braziliandubai.com",
        logo: "/assets/brands/braziliandubai.svg",
        accent: "from-sky-50 to-cyan-100 dark:from-sky-900/20 dark:to-cyan-800/10",
    },
];

// duplica a lista para o efeito de “marquee” ficar sempre cheio
const rowA = [...BRANDS, ...BRANDS];
const rowB = [...BRANDS, ...BRANDS];

function BrandCard({ brand }: { brand: Brand }) {
    return (
        <Link
            href={brand.href || "#"}
            className={cn(
                "relative h-full w-[260px] cursor-pointer overflow-hidden rounded-2xl border",
                "p-4 sm:p-5 transition-colors",
                "border-gray-950/10 bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                "dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
            )}
            aria-label={brand.name}
        >
            <div
                className={cn(
                    "absolute inset-0 -z-10 bg-gradient-to-br opacity-70",
                    brand.accent
                )}
            />
            <div className="flex items-center gap-3">
                <div className="size-10 rounded-full ring-1 ring-black/5 dark:ring-white/10 grid place-items-center bg-white/80 dark:bg-white/10 overflow-hidden">
                    {/* use <Image> para otimização; troque o src pelos seus caminhos */}
                    <Image
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        width={28}
                        height={28}
                        className="object-contain"
                    />
                </div>
                <div className="min-w-0">
                    <div className="text-sm font-semibold tracking-tight">
                        {brand.name}
                    </div>
                    <div className="text-xs text-muted-foreground">{brand.handle}</div>
                </div>
            </div>

            <p className="mt-3 text-sm leading-snug text-muted-foreground">
                {brand.tagline}
            </p>

            <div className="mt-4 inline-flex items-center text-xs font-medium text-emerald-700 dark:text-emerald-300">
                Visitar <span className="ml-1">→</span>
            </div>
        </Link>
    );
}

export default function BrandMarqueeSection() {
    return (
        <section
            id="our-brands"
            className="relative w-full py-10 sm:py-14 bg-gradient-to-b from-background to-background"
        >
            <div className="mx-auto max-w-6xl px-4">
                <header className="mb-6 sm:mb-8 text-center">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                        Nosso ecossistema
                    </p>
                    <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight">
                        Marcas que impulsionam resultados
                    </h2>
                </header>

                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                    {/* Linha 1 */}
                    <Marquee pauseOnHover className="[--duration:18s]">
                        {rowA.map((b, idx) => (
                            <BrandCard brand={b} key={`${b.id}-a-${idx}`} />
                        ))}
                    </Marquee>

                    {/* Linha 2 (reversa) */}
                    <Marquee reverse pauseOnHover className="[--duration:22s] mt-4">
                        {rowB.map((b, idx) => (
                            <BrandCard brand={b} key={`${b.id}-b-${idx}`} />
                        ))}
                    </Marquee>

                    {/* Gradientes laterais */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background" />
                </div>
            </div>
        </section>
    );
}
