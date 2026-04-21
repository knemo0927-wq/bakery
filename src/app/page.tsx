import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Camera,
  CarFront,
  Clock3,
  Coffee,
  Gift,
  Leaf,
  MapPin,
  MessageCircle,
  Phone,
  Wheat,
} from "lucide-react";

const navItems = [
  { label: "브랜드", href: "#brand" },
  { label: "메뉴", href: "#menu" },
  { label: "케이크 주문", href: "#cakes" },
  { label: "매장 안내", href: "#store" },
];

const signatureMenu = [
  {
    title: "건강빵 라인업",
    description: "100% 통밀빵, 천연발효빵 등\n건강을 생각한 다양한 빵",
    price: "매일 오전 7시부터 순차 진열",
    image:
      "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "수제 샌드위치",
    description: "신선한 채소와 햄, 크림치즈를 더한\n든든한 한 끼",
    price: "3,500 ~ 4,000원",
    image:
      "https://images.unsplash.com/photo-1587015566802-5dc157c901cf?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "케이크 & 홀케이크",
    description: "매일 만들어내는 다양한 케이크와\n홀케이크 주문 제작 가능",
    price: "17,000 ~ 30,000원",
    image:
      "https://images.unsplash.com/photo-1611293388250-580b08c4a145?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "쿠키 & 선물세트",
    description: "답례품, 단체 선물로 좋은\n쿠키와 구움과자 셀렉션",
    price: "구성별 별도 문의",
    image:
      "https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?auto=format&fit=crop&w=1200&q=80",
  },
];

const whyChooseUs: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
}> = [
  {
    icon: Wheat,
    title: "매일 갓 구운 신선한 빵",
    description: "당일 생산, 당일 판매 원칙으로 언제나 신선함을 전합니다.",
  },
  {
    icon: Leaf,
    title: "건강을 생각한 선택",
    description: "100% 통밀빵, 천연발효빵 등 믿고 먹을 재료를 사용합니다.",
  },
  {
    icon: Coffee,
    title: "먹고 갈 수 있는 카페 공간",
    description: "커피와 차, 수제 음료를 함께 즐길 수 있는 따뜻한 공간입니다.",
  },
  {
    icon: Gift,
    title: "선물 & 주문이 가능한 베이커리",
    description: "답례품 세트부터 케이크 주문까지, 상황에 맞는 구성을 제안합니다.",
  },
];

const storeDetails: Array<{
  icon: LucideIcon;
  label: string;
  value: string;
}> = [
  {
    icon: MapPin,
    label: "주소",
    value: "경기 남양주시 진접읍 장현로 64",
  },
  {
    icon: Phone,
    label: "전화번호",
    value: "031-572-3266",
  },
  {
    icon: Clock3,
    label: "영업시간",
    value: "06:30 - 23:00",
  },
  {
    icon: CarFront,
    label: "주차 안내",
    value: "건물 뒤 주차 가능합니다.",
  },
];

const heroImage =
  "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=1800&q=80";
const aboutImage =
  "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1400&q=80";
const cakeImage =
  "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1400&q=80";

export default function Home() {
  return (
    <main id="top" className="bg-[var(--background)] text-[var(--foreground)]">
      <section className="relative isolate overflow-hidden bg-[#2a160b] text-white">
        <Image
          src={heroImage}
          alt="빵이 가득 진열된 베이커리 매장 전경"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(22,11,6,0.82)_0%,rgba(31,18,10,0.76)_32%,rgba(31,18,10,0.38)_66%,rgba(31,18,10,0.16)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,199,124,0.18),transparent_32%)]" />

        <div className="relative mx-auto flex min-h-[520px] w-full max-w-[1240px] flex-col px-5 pb-12 pt-5 sm:px-6 lg:min-h-[580px] lg:px-8 lg:pb-16 lg:pt-7">
          <header className="flex items-center justify-between gap-4">
            <a href="#top" className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center">
                <Wheat className="h-5 w-5 text-[#f9ede0]" strokeWidth={1.7} />
              </span>
              <span className="flex flex-col">
                <span className="text-base font-bold tracking-[-0.03em]">
                  주재근베이커리
                </span>
                <span className="text-xs text-white/70">진접점</span>
              </span>
            </a>

            <div className="flex items-center gap-3">
              <nav className="hidden items-center gap-8 text-sm font-medium text-white/90 md:flex">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="transition hover:text-[#f4dfc9]"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <a
                href="#store"
                className="inline-flex items-center justify-center rounded-full border border-[#c78956] bg-[#7a431d] px-5 py-3 text-sm font-bold text-white shadow-[0_16px_40px_rgba(0,0,0,0.18)] transition hover:bg-[#8e5125]"
              >
                문의하기
              </a>
            </div>
          </header>

          <div className="mt-14 max-w-[620px] sm:mt-16 lg:mt-20">
            <p className="text-sm font-semibold tracking-[0.18em] text-[#f2d5b5]">
              주재근베이커리 진접점
            </p>
            <h1 className="mt-5 text-[42px] font-extrabold leading-[1.15] tracking-[-0.06em] text-white sm:text-[56px] lg:text-[72px]">
              매일 갓 구운 빵으로
              <span className="block">채우는 따뜻한 하루</span>
            </h1>
            <p className="mt-6 max-w-[32rem] text-base leading-8 text-white/82 sm:text-lg">
              통밀빵, 천연발효빵부터 샌드위치와 케이크까지. 가족이 먹는다는
              마음으로 정성껏 만드는 우리 동네 베이커리의 하루를 소개합니다.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d9a46d] bg-[#7d461f] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#925427]"
              >
                메뉴 보기
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#cakes"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#cf945f] bg-[#8b4d22] px-7 py-4 text-sm font-bold text-white shadow-[0_14px_36px_rgba(0,0,0,0.18)] transition hover:bg-[#a55c2a]"
              >
                케이크 주문 문의
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="brand"
        className="scroll-mt-24 bg-[#f5eee6] py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid w-full max-w-[1240px] gap-10 px-5 sm:px-6 lg:grid-cols-[0.95fr_1.1fr] lg:items-center lg:gap-12 lg:px-8">
          <div>
            <p className="text-sm font-semibold tracking-[0.18em] text-[#b87848]">
              ABOUT JUJAEGEUN BAKERY
            </p>
            <h2 className="mt-5 text-4xl font-extrabold leading-[1.24] tracking-[-0.05em] text-[#412313] sm:text-5xl">
              빵 한 개에도
              <span className="block">기준이 있는 곳</span>
            </h2>
            <div className="mt-7 space-y-4 text-[15px] leading-8 text-[var(--muted-foreground)] sm:text-base">
              <p>
                주재근베이커리 진접점은 매일 신선한 빵을 굽고, 100% 통밀빵과
                담백한 식사빵처럼 부담을 덜어주는 선택지도 함께 준비합니다.
              </p>
              <p>
                커피와 차를 곁들여 쉬어갈 수 있는 편안한 공간까지 갖춘,
                동네에서 오래 사랑받는 따뜻한 베이커리입니다.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[30px] bg-white p-3 shadow-[0_24px_70px_rgba(79,45,22,0.14)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(255,255,255,0.8),transparent_30%)]" />
            <div className="relative aspect-[1.35/1] overflow-hidden rounded-[24px]">
              <Image
                src={aboutImage}
                alt="나무 보드 위에 놓인 갓 구운 통밀빵"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="menu"
        className="scroll-mt-24 border-y border-[color:var(--line)] bg-[#fcfaf7] py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-[0.18em] text-[#b87848]">
              SIGNATURE MENU
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.05em] text-[#412313] sm:text-5xl">
              주재근베이커리의 대표 메뉴
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {signatureMenu.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-[28px] bg-white p-3 shadow-[0_18px_50px_rgba(91,59,33,0.1)]"
              >
                <div className="relative aspect-[1.08/1] overflow-hidden rounded-[22px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-500 hover:scale-[1.04]"
                  />
                </div>
                <div className="px-3 pb-4 pt-5 text-center">
                  <h3 className="text-[24px] font-extrabold tracking-[-0.04em] text-[#4b2d1c]">
                    {item.title}
                  </h3>
                  <p className="mt-3 whitespace-pre-line text-sm leading-7 text-[var(--muted-foreground)]">
                    {item.description}
                  </p>
                  <p className="mt-5 text-xl font-extrabold tracking-[-0.03em] text-[#6b3b18]">
                    {item.price}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href="#store"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d9bea1] bg-[#eed9c3] px-7 py-4 text-sm font-bold text-[#4d2e17] transition hover:bg-[#f3e4d4]"
            >
              전체 메뉴 보기
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f1ea] py-16 sm:py-20">
        <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-[0.18em] text-[#b87848]">
              WHY CHOOSE US
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.05em] text-[#412313] sm:text-[44px]">
              좋은 재료, 정직한 빵, 따뜻한 공간
            </h2>
          </div>

          <div className="mt-11 grid overflow-hidden rounded-[30px] border border-[color:var(--line)] bg-white shadow-[0_18px_50px_rgba(86,54,29,0.08)] md:grid-cols-2 xl:grid-cols-4">
            {whyChooseUs.map((item, index) => (
              <div
                key={item.title}
                className={`px-7 py-8 text-center ${
                  index < whyChooseUs.length - 1
                    ? "border-b border-[color:var(--line)] xl:border-b-0 xl:border-r"
                    : ""
                }`}
              >
                <div className="mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full border border-[#d7b396] bg-[#fffaf5] text-[#8b552d]">
                  <item.icon className="h-8 w-8" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-lg font-extrabold tracking-[-0.03em] text-[#4b2d1c]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted-foreground)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="cakes"
        className="scroll-mt-24 relative overflow-hidden bg-[#4e2d18] py-14 text-white sm:py-16"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,184,122,0.2),transparent_30%)]" />
        <div className="absolute inset-y-0 right-0 hidden w-[42%] lg:block">
          <Image
            src={cakeImage}
            alt="초콜릿 홀케이크"
            fill
            sizes="50vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(270deg,rgba(78,45,24,0.05)_0%,rgba(78,45,24,0.8)_100%)]" />
        </div>

        <div className="relative mx-auto flex w-full max-w-[1240px] flex-col gap-8 px-5 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div className="max-w-[680px] py-4">
            <p className="text-sm font-semibold tracking-[0.18em] text-[#f3c89b]">
              SEASONAL CUSTOM CAKE
            </p>
            <h2 className="mt-4 text-2xl font-extrabold leading-[1.34] tracking-[-0.05em] text-white sm:text-[1.95rem] lg:text-[2.15rem]">
              <span className="block whitespace-nowrap">
                기념일 케이크도, 아이들 행사 케이크도
              </span>
              <span className="block whitespace-nowrap">
                주문 상담으로 더 정확하게 준비해드립니다
              </span>
            </h2>
            <p className="mt-5 max-w-[34rem] text-base leading-8 text-white/78">
              생크림 케이크부터 초콜릿 케이크, 과일 장식 케이크까지. 필요한
              크기와 디자인을 상담해 주시면 일정에 맞춰 정성껏 준비합니다.
            </p>
            <a
              href="#store"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-[#cf945f] bg-[#8b4d22] px-7 py-4 text-sm font-bold text-white shadow-[0_14px_36px_rgba(0,0,0,0.2)] transition hover:bg-[#a55c2a]"
            >
              케이크 주문 문의하기
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="relative aspect-[1.3/1] overflow-hidden rounded-[28px] lg:hidden">
            <Image
              src={cakeImage}
              alt="초콜릿 홀케이크"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section
        id="store"
        className="scroll-mt-24 bg-[#fdfaf6] py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto grid w-full max-w-[1240px] gap-10 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:px-8">
          <div>
            <p className="text-sm font-semibold tracking-[0.18em] text-[#b87848]">
              STORE INFORMATION
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.05em] text-[#412313] sm:text-5xl">
              매장 안내
            </h2>

            <div className="mt-8 space-y-4 rounded-[28px] border border-[color:var(--line)] bg-white p-6 shadow-[0_18px_50px_rgba(86,54,29,0.08)]">
              {storeDetails.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#6c3f1d] text-white">
                    <item.icon className="h-5 w-5" strokeWidth={1.9} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#8c644b]">
                      {item.label}
                    </p>
                    <p className="mt-1 text-base font-bold tracking-[-0.02em] text-[#3d2313]">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-5 text-sm leading-7 text-[var(--muted-foreground)]">
              운영시간 및 주차는 매장 상황에 따라 변동될 수 있습니다.
            </p>
          </div>

          <div className="overflow-hidden rounded-[30px] border border-[color:var(--line)] bg-white p-3 shadow-[0_24px_70px_rgba(79,45,22,0.12)]">
            <div className="overflow-hidden rounded-[24px]">
              <iframe
                title="주재근베이커리 진접점 지도"
                src="https://maps.google.com/maps?q=%EA%B2%BD%EA%B8%B0%20%EB%82%A8%EC%96%91%EC%A3%BC%EC%8B%9C%20%EC%A7%84%EC%A0%91%EC%9D%8D%20%EC%9E%A5%ED%98%84%EB%A1%9C%2064&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="h-[340px] w-full border-0 sm:h-[400px] lg:h-[430px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#4d2d18] py-8 text-[#f7ece1]">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-6 px-5 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/8">
              <Wheat className="h-5 w-5" strokeWidth={1.7} />
            </span>
            <div>
              <p className="text-2xl font-extrabold tracking-[-0.05em]">
                주재근베이커리
              </p>
              <p className="text-sm text-white/65">진접점</p>
            </div>
          </div>

          <div className="text-sm leading-7 text-white/72">
            <p>
              주소: 경기 남양주시 진접읍 장현로 64 | 문의: 031-572-3266
            </p>
            <p>© JUJAEGEUN BAKERY JINJEOP. All Rights Reserved.</p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="인스타그램"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/18 bg-white/6 transition hover:bg-white/12"
            >
              <Camera className="h-5 w-5" />
            </a>
            <a
              href="#store"
              aria-label="문의하기"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/18 bg-white/6 transition hover:bg-white/12"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
