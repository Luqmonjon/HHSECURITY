import TimelineSection from "@/components/timeline";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Shield,
  Terminal,
  Phone,
  AlertTriangle,
  Cpu,
  Plus,
  CheckCircle,
  Video,
  FileText,
  Book,
  PhoneCall,
  MessageSquare,
  Award,
  MapPinHouse,
  UsersRound,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen matrix-bg">
      <header className="container mx-auto px-4 py-4 border-b border-primary/20">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="../assets/Asset 1.svg"
              width={50}
              height={5}
              alt="Picture of the author"
            />
          </Link>

          <div className="flex items-center space-x-4">
            <a
              href="tel:(93) 767-31-31"
              className="hidden md:flex items-center space-x-2 text-secondary"
            >
              <Phone />
              <span> +998 77 306-31-31</span>
            </a>
            <Button className="cyber-border bg-accent/10 text-primary hover:bg-accent/20">
              <Link href="https://t.me/hhub_admin_uz" target="_blank">
                Biz bilan aloqa
              </Link>
            </Button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Kiberxavfsizlik sohasida yetuk mutaxassis bo’lish uchun 6 oylik
            onlayn o’quv kursi!
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-12">
            Zamonaviy, yuqori talab va keng imkoniyatli, munosib maosh va
            kerakli kasb egasi bo’lish uchun ajoyib imkoniyat!
          </p>
          <section className="w-full max-w-3xl mx-auto cyber-border p-8 rounded-lg">
            <div className="flex items-center gap-2 mb-6">
              <AlertTriangle className="text-primary w-6 h-6" />
              <h2 className="text-2xl font-bold text-primary">Diqqat!</h2>
            </div>

            <div className="space-y-6 text-left">
              <p className="text-muted-foreground">
                Ushbu kursda siz <b>HACKERS HUB</b> tomonidan kiberxavfsizlik
                sohasida zarur bo‘lgan bilimlarni chuqur o‘rganasiz.
                Kiberxavfsizlik turli yo‘nalishlarni o‘z ichiga olgan keng
                sohaga ega, ushbu kurs esa ushbu yo‘nalishlarning barchasiga
                tegishli bo‘lgan kompleks bilimlar to‘plamini o‘z ichiga oladi.
                Kurs umumiy va mukammal tarzda ishlab chiqilgan bo‘lib, barcha
                muhim tushunchalar va amaliyotlar bir joyga jamlangan. Kursni
                muvaffaqiyatli yakunlaganingizdan so‘ng, siz universal bilim
                darajasiga ega bo‘lasiz va o‘zlashtirish darajangizga qarab
                kiberxavfsizlik xodimi sifatida ish boshlashingiz mumkin
                bo‘ladi. Ha, siz kursdan so‘ng bemalol ish faoliyatingizni
                boshlash imkoniyatiga ega bo‘lasiz, ammo bu, albatta,
                o‘quvchining o‘z harakati, bilimlarni to‘liq o‘zlashtirishi va
                amaliy tajribaga ega bo‘lishiga bog‘liq.{" "}
                <b>Izlaganga tole yor</b> deganidek, agar harakat qilsangiz,
                ushbu kurs sizni kiberxavfsizlik sohasida yuqori natijalarga
                olib boradi. Aks holda, faqat vaqt va mablag‘ sarflab
                qo‘yishingiz mumkin. Shunday ekan, bilim olishga, amaliyot
                qilishga va o‘zingizni rivojlantirishga tayyor bo‘ling!
              </p>

              <p className="text-lg font-medium text-primary text-right">
                Shu sabab <b>be mindful!</b>
              </p>
            </div>
          </section>
          <section className="w-full max-w-3xl mx-auto mt-12 space-y-8">
            <div className="cyber-border p-6 rounded-lg bg-accent/5">
              <p className="text-center text-lg text-primary font-medium mb-6">
                Dunyoda bu sohani rivojlantirish uchun eng zo’rlari bilan ya’ni
                <b> HACKERS HUB </b> bilan birga bo`ling, bizni jamoamizga
                qo`shiling!
              </p>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  Ushbu kurs yaqindagina mukammal tarzda ishlab chiqildi va eng
                  so‘nggi ma’lumotlar asosida shakllantirildi. Kurs mazmuni juda
                  keng bo‘lib, barcha bilimlar muayyan tartib va navbat bilan
                  o‘rgatiladi. Ushbu kurs <b> boshlang‘ich va fundamental </b>
                  bilimlarni qamrab oladi, bu esa kiberxavfsizlik sohasiga
                  endigina qadam qo‘yganlar uchun ideal boshlang‘ich nuqtadir.
                  Kursni muvaffaqiyatli yakunlaganingizdan so‘ng, siz
                  <b> White Hat Hacker (Ethical Hacker) </b> sifatida
                  shakllanasiz va kiberxavfsizlik sohasida ishlash uchun yetarli
                  bilimga ega bo‘lasiz. Biroq, yanada chuqurroq bilim olishni
                  istaganlar uchun <b> 3 oylik Red Team intensiv kursi </b> ham
                  mavjud. Ushbu kurs hujumkor kiberxavfsizlik (Offensive
                  Security) bo‘yicha chuqur bilim berib, kiberhujumlarni
                  aniqlash, tahlil qilish va ularga qarshi kurashish
                  yo‘nalishida kuchli mutaxassis bo‘lishingizga yordam beradi.
                  Kursni muvaffaqiyatli yakunlagan ishtirokchilar
                  <b> bir nechta xalqaro sertifikatlar </b> hamda
                  <b>
                    {" "}
                    HACKERS HUB tomonidan taqdim etiladigan maxsus sertifikat
                  </b>
                  ga ega bo‘ladilar. Ushbu sertifikatlar sizning bilim va
                  malakangizni tasdiqlab, xalqaro darajadagi ish imkoniyatlariga
                  eshik ochadi!
                </p>
              </div>
            </div>

            <div className="cyber-border p-6 rounded-lg bg-accent/5">
              <h2 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                <Cpu className="w-5 h-5" />
                Kursda qatnashish uchun talablar
              </h2>

              <div className="space-y-6">
                <div className="space-y-4 text-muted-foreground">
                  <p>
                   Kursda hamma ham qatnasha olmaydi, biroq bizning kursda boshlang‘ich bilimga ega bo‘lganlar, hatto noldan boshlovchilar ham o‘qishi mumkin. O‘quv jarayoni kompyuter savodxonligi va internet tarmoqlari asoslaridan boshlab, bosqichma-bosqich kiberxavfsizlik yo‘nalishigacha olib boriladi.

Kurs davomida sizdan eng muhimi — o‘rganishga bo‘lgan qiziqish, mas’uliyat va qat’iyat talab etiladi. Amaliy mashg‘ulotlarga tayyor bo‘lish, mustaqil fikrlashga intilish va berilgan vazifalarni oxirigacha bajarish qobiliyati muhim hisoblanadi.

Agar siz kiberxavfsizlik sohasida o‘zingizni ko‘ra olsangiz, bilimlarni noldan bo‘lsa ham jiddiy va tizimli tarzda o‘zlashtirishga tayyor bo‘lsangiz hamda doimiy nazorat ostidagi o‘quv jarayonini qabul qila olsangiz, ushbu kursda o‘qish imkoniyatiga egasiz.

Bizning maqsadimiz — noldan boshlab real muammolarni hal qila oladigan, amaliy bilimga ega kadrlar yetishtirish. Shunchaki sertifikat olib chiqadigan emas, balki haqiqiy mutaxassis bo‘lishni istagan nomzodlargina kursga qabul qilinadi❗️
                    <span className="font-black"> please think again!</span>
                  </p>
                </div>

                <div className="cyber-border p-4 rounded-lg bg-primary/5">
                  <p className="text-primary font-medium">
                    Kursni yarmida tashlab ketish mumkin emas, ya’ni kursni
                    tashlab ketsangiz bizni ham sizni ham harakatlaringiz zoye
                    ketadi, shuning uchun yaxshilab o’ylab bir qarorga keling!
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="cyber-border p-4 rounded-lg bg-accent/5">
                    <h3 className="font-medium text-primary mb-2">
                      O`quvchilar soni
                    </h3>
                    <p className="text-muted-foreground">
                      O’quvchilar qabul soni cheklangan, ya’ni 2 ta guruh qabul
                      qilinadi, har bir guruh maximum 15 kishidan iborat
                      bo’lishi mumkin.
                    </p>
                  </div>

                  <div className="cyber-border p-4 rounded-lg bg-accent/5">
                    <h3 className="font-medium text-primary mb-2">
                      Dars jadvali
                    </h3>
                    <p className="text-muted-foreground">
                      Dars haftasiga 4 kun, 2-3 soatdan bo’ladi.
                    </p>
                  </div>

                  <div className="cyber-border p-4 rounded-lg bg-accent/5">
                    <h3 className="font-medium text-primary mb-2">
                      Texnik talablar
                    </h3>
                    <p className="text-muted-foreground">
                      Sizda doimiy internet va yaxshi (8 GB RAM dan kam
                      bo’lmagan ) kompyuter bo’lishi kerak.
                    </p>
                  </div>

                  <div className="cyber-border p-4 rounded-lg bg-accent/5">
                    <h3 className="font-medium text-primary mb-2">
                      Dars vaqti
                    </h3>
                    <p className="text-muted-foreground">
                      Darslar xammasi, doim kechqurun 20:00 (o’quvchilar bilan
                      kelishib o’zgartirilishi mumkin) dan keyin o’tiladi,
                      xaftada 4 kun dars, qolgan kunlar vazifalar bajariladi,
                      amaliyot va savol-javob qilinadi. Sizlarni barcha
                      savollaringizga doimiy ravishda 24/7 supportlar tomonidan
                      javob olasiz!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full max-w-3xl mx-auto mt-12 max-[1560px]:max-w-5xl max-[1560px]:px-4 max-[768px]:mt-8 max-[480px]:mt-6 max-[300px]:mt-4 space-y-8 max-[768px]:space-y-6 max-[480px]:space-y-4 max-[300px]:space-y-3">
            <div className="cyber-border p-6 max-[1560px]:p-8 max-[768px]:p-5 max-[480px]:p-4 max-[300px]:p-3 rounded-lg bg-accent/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 max-[1560px]:w-40 max-[1560px]:h-40 max-[768px]:w-28 max-[768px]:h-28 max-[480px]:w-24 max-[480px]:h-24 max-[300px]:w-20 max-[300px]:h-20 bg-primary/10 rounded-full blur-3xl"></div>
              <h2 className="text-xl max-[1560px]:text-2xl max-[768px]:text-xl max-[480px]:text-lg max-[300px]:text-base font-bold text-primary mb-6 max-[1560px]:mb-8 max-[768px]:mb-5 max-[480px]:mb-4 max-[300px]:mb-3 flex items-center gap-2">
                <span className="text-2xl max-[1560px]:text-3xl max-[768px]:text-2xl max-[480px]:text-xl max-[300px]:text-lg">
                  😎
                </span>{" "}
                Bonus imkoniyatlar
              </h2>
              <p className="text-primary font-medium mb-6 max-[1560px]:text-lg max-[1560px]:max-w-4xl max-[1560px]:mb-8 max-[768px]:text-base max-[768px]:mb-5 max-[480px]:mb-4 max-[300px]:mb-3 max-[480px]:text-sm max-[300px]:text-xs">
                Bonus sifatida o`quvchilarga doimiy foydalanish uchun kurs
                ichida tekinga beriladi 😎
              </p>

              <div className="grid gap-6 max-[1560px]:grid-cols-1 max-[1560px]:gap-8 max-[768px]:gap-6 max-[480px]:gap-4 max-[300px]:gap-3">
                <div className="cyber-border p-4 max-[1560px]:p-6 max-[768px]:p-5 max-[480px]:p-4 max-[300px]:p-2 rounded-lg bg-accent/5 hover:bg-accent/10 transition-colors">
                  <p className="text-muted-foreground max-[1560px]:text-base max-[768px]:text-base max-[480px]:text-sm max-[300px]:text-xs">
                    Bizda alohida ishlab chiqilgan bir nechta kurslar mavjud
                    bo‘lib, ular o‘quvchilarga o‘rganilayotgan mavzularga qarab
                    taqdim etiladi. Kurs davomida o‘quvchilarga xalqaro
                    kiberxavfsizlik sertifikatlarini olish uchun optimal yo‘l
                    xaritasi o‘rgatiladi. Shuningdek, ishga kirish jarayonida
                    zarur bo‘lgan texnik va amaliy yordam ko‘rsatiladi,
                    jumladan: Rezyume (CV) tayyorlash Report yozish Ish suhbati
                    (intervyu)ga tayyorlanish Bu yordam sizga faqat
                    O‘zbekistonda emas, balki butun dunyo bo‘ylab ishga
                    joylashishda katta imkoniyat yaratadi. Kursimiz ish vaqtida
                    real topshiriqlar orqali to‘ldirilgan bo‘lib, unda zarur
                    bilimlar amaliy tarzda o‘rgatiladi. Bundan tashqari, ba’zi
                    xalqaro sertifikatlar uchun administrator tomonidan alohida
                    support (qo‘llab-quvvatlash) taqdim etiladi, agar o‘quvchi
                    keyinchalik ushbu sertifikatlarni olishga qaror qilsa. ✅
                  </p>
                </div>

                <div className="cyber-border p-4 max-[1560px]:p-6 max-[768px]:p-5 max-[480px]:p-4 max-[300px]:p-2 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                  <h3 className="text-primary font-medium mb-3 max-[1560px]:text-xl max-[1560px]:mb-4 max-[768px]:text-lg max-[768px]:mb-3 max-[480px]:text-base max-[480px]:mb-2 max-[300px]:mb-1 max-[300px]:text-sm">
                    Amaliy ta`lim
                  </h3>
                  <p className="text-muted-foreground max-[1560px]:text-base max-[768px]:text-base max-[480px]:text-sm max-[300px]:text-xs">
                    <b>
                      Kurs davomida 100% amaliyot asosida siz tarmoq resurslari,
                      dasturiy ta’minot va veb-resurslar zaifliklarini batafsil
                      tahlil qilishni hamda ulardan himoyalanish usullarini
                      o‘rganasiz. Siz hujumlarning eng keng tarqalgan
                      ssenariylari bilan tanishib, keyinchalik ularni osonlikcha
                      aniqlash va bartaraf etish ko‘nikmalariga ega bo‘lasiz.
                      Viruslarni tahlil qilish, zararli dasturlarni tekshirish
                      va ulardan himoyalanish bo‘yicha chuqur bilim olasiz.
                    </b>
                  </p>
                </div>

                <div className="cyber-border p-4 max-[1560px]:p-6 max-[768px]:p-5 max-[480px]:p-4 max-[300px]:p-2 rounded-lg bg-accent/5 hover:bg-accent/10 transition-colors">
                  <p className="text-muted-foreground max-[1560px]:text-base max-[768px]:text-base max-[480px]:text-sm max-[300px]:text-xs">
                    Axborot tizimi yoki dastur xavfsizligini tahlil qilish uchun
                    zamonaviy vositalardan samarali foydalanish, zaif tomonlarni
                    aniqlash, tasniflash va ularni bartaraf etish usullarini
                    o‘rganasiz. Muntazam vazifalarni avtomatlashtirish uchun
                    dasturlash qobiliyatlari, topilgan zaifliklar bo‘yicha
                    batafsil va mukammal report tayyorlash, shuningdek,
                    bilimingizni sertifikatlashtirish uchun zarur bo‘lgan bilim
                    va ko‘nikmalarga ega bo‘lasiz.
                  </p>
                </div>

                <div className="relative cyber-border p-6 max-[1560px]:p-8 max-[768px]:p-5 max-[480px]:p-4 max-[300px]:p-3 rounded-lg bg-secondary/5 hover:bg-secondary/10 transition-colors">
                  <div className="flex items-start gap-4 max-[1560px]:gap-6 max-[768px]:gap-4 max-[480px]:gap-3 max-[300px]:gap-2">
                    <div className="min-w-fit p-3 max-[1560px]:p-4 max-[768px]:p-3 max-[480px]:p-2 max-[300px]:p-1.5 rounded-full bg-primary/10">
                      <Terminal className="w-6 h-6 max-[1560px]:w-8 max-[1560px]:h-8 max-[768px]:w-6 max-[768px]:h-6 max-[480px]:w-5 max-[480px]:h-5 max-[300px]:w-4 max-[300px]:h-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg max-[1560px]:text-xl max-[768px]:text-lg max-[480px]:text-base max-[300px]:text-sm font-medium text-primary mb-2 max-[1560px]:mb-4 max-[768px]:mb-3 max-[480px]:mb-2 max-[300px]:mb-1">
                        24/7 Support
                      </h3>
                      <p className="text-muted-foreground max-[1560px]:text-base max-[768px]:text-base max-[480px]:text-sm max-[300px]:text-xs">
                        <span className="text-primary font-medium">
                          Ushbu kursda qatnashgan o‘quvchilar uchun doimiy
                          ravishda alohida support admin
                          <Link
                            href="https://t.me/hhub_admin_uz"
                            target="_blank"
                            className="max-[1560px]:ml-1 max-[768px]:mx-1 max-[480px]:block max-[480px]:my-1 max-[300px]:inline-block max-[300px]:mt-0.5"
                          >
                            (@hackers_hub_support)   
                          </Link>
                           tomonidan qo‘llab-quvvatlash taqdim etiladi.
                        </span>
                         Kursni muvaffaqiyatli yakunlagan o‘quvchilar ishga
                        tayyor mutaxassis bo‘lishadi va kelajakda ish jarayonida
                        duch keladigan muammolar yuzasidan biz bilan bog‘lanib,
                        ularning yechimini topishda yordam olishlari mumkin.
                        Kurs kontenti va rejasi juda keng qamrovli bo‘lib,
                        kiberxavfsizlik sohasida zarur bo‘lgan barcha muhim
                        ma’lumotlarni o‘z ichiga oladi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="cyber-border p-6 2xl:p-8 md:p-5 sm:p-4 rounded-lg bg-accent/5">
              <h2 className="text-xl 2xl:text-2xl md:text-xl sm:text-lg font-bold text-primary mb-6 2xl:mb-8 md:mb-5 sm:mb-4">
                Mavzuga oid kalit so‘zlar bilan pastda tanishing:
              </h2>
              <div className="flex flex-wrap gap-2 2xl:gap-3 md:gap-2.5 sm:gap-2">
                {[
                  "Kiberxavfsizlik",
                  "Tarmoq xavfsizligi",
                  "Tarmoq tuzilishi",
                  "Firewall",
                  "Dasturlash tillari",
                  "Malware analiz",
                  "Penetration testing",
                  "Xavfsizlik auditi",
                  "Zaifliklar analizi",
                  "Antiviruslar",
                  "Tizim xavfsizligi",
                  "Xavfsizlik monitoring",
                  "Incident Response",
                ].map((keyword, index) => (
                  <span
                    key={index}
                    className="px-3 2xl:px-4 md:px-3 sm:px-2.5 py-1 md:py-1.5 sm:py-1 rounded-full cyber-border bg-primary/5 text-sm sm:text-xs text-primary hover:bg-primary/10 transition-colors cursor-pointer"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </section>
          <section className="w-full max-w-3xl mx-auto mt-12">
            <div className="cyber-border p-6 rounded-lg bg-accent/5">
              <h2 className="text-xl font-bold text-primary mb-8">
                Kurs rejasi va mavzular📃
              </h2>

              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/20"></div>
                <TimelineSection />
              </div>
            </div>
          </section>
        </div>

        <section className="w-full max-w-3xl mx-auto cyber-border p-8 rounded-lg mt-3">
          <div className="flex items-center gap-2 mb-6">
            <AlertTriangle className="text-primary w-6 h-6" />
            <h2 className="text-2xl font-bold text-primary">Disclaimer</h2>
          </div>

          <div className="space-y-6 text-left">
            <p className="text-muted-foreground">
              Butun kurs davomida biz hech qanday virtual targetlardan
              foydalanmaymiz, barcha darslar 100% real targetlar ustida amaliyot
              tarzida olib boriladi. Bu yondashuv kurs natijasining yuqori
              bo‘lishini ta’minlaydi, chunki rejalashtirilgan, sun’iy yaratilgan
              targetlar odatda oldindan ma’lum bo‘lgan zaifliklarga ega bo‘ladi,
              bu esa haqiqiy tajriba orttirishga to‘sqinlik qilishi mumkin. Kurs
              ishtirokchilari real tizimlardagi turli zaifliklarni mustaqil
              aniqlash, ekspluatatsiya qilish va ularni bartaraf etishni
              o‘rganadilar. Shuni alohida ta’kidlash lozimki, barcha darslar
              real targetlar ustida olib boriladi, shu sababli dars davomida
              alohida VPN serverlar va maxsus resurslardan foydalanish talab
              etiladi. O‘quv jarayoni O‘zbekiston Respublikasi qonunchiligiga
              zid bo‘lmagan tarzda tashkil etilgan bo‘lib, barcha amaliy
              mashg‘ulotlar xalqaro resurslar va boshqa davlatlarga tegishli
              tizimlar orqali amalga oshiriladi. Bu yondashuv kiberxavfsizlik
              bo‘yicha haqiqiy tajribaga ega bo‘lish, xavfsizlik zaifliklarini
              aniq va samarali bartaraf etishni o‘rganish imkonini beradi🔐
            </p>
          </div>
        </section>
      </main>
      <section className="w-full max-w-5xl mx-auto mt-16 px-4">
        <div className="grid md:grid-cols-2 gap-16 items-start py-10">
          {/* Left Column - Payment Info */}
          <div className="cyber-border p-6 rounded-lg py-14 bg-card shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">
                  6 oylik Umumiy kursning narxi
                </span>
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  ✅ Chegirma mavjud
                </span>
              </div>
              <h3 className="text-4xl font-bold text-primary">
                💰 12 million so‘m
              </h3>
            </div>

            <div className="space-y-4 mb-8">
              {[
                { icon: Video, text: "Full HD sifatdagi videodarslar" },
                { icon: FileText, text: "O‘quv materiallari" },
                { icon: Book, text: "O‘zbek tilidagi PDF kitoblar" },
                { icon: PhoneCall, text: "O‘qituvchi bilan doimiy aloqa" },
                { icon: MessageSquare, text: "Umumiy guruh chat" },
                {
                  icon: Shield,
                  text: "Barcha o'quv qurollari bilan taminlanadi",
                },
                {
                  icon: Award,
                  text: "Sizga xalqaro Sertifikatlar olishda yordam beramiz",
                },
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <feature.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              <a
                href="https://t.me/hhub_admin_uz"
                target="_blank"
                rel="noopener noreferrer"
                className="max-[1560px]:ml-1 max-[768px]:mx-1 max-[480px]:block max-[480px]:my-1 max-[300px]:inline-block max-[300px]:mt-0.5"
              >
                Kursda qatnashaman
              </a>
            </Button>

            <p className="text-center text-xs text-muted-foreground mt-4">
              Copyright [c] 2025
            </p>
          </div>
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-primary">
              To‘lov qanday amalga oshiriladi?
            </h2>
            <p className="text-muted-foreground">
              💳 To‘lovni karta orqali yoki pul o‘tkazish yo‘li bilan amalga
              oshirishingiz mumkin. 📅 6 oylik kursning 1 oylik to‘lovi –
              2,000,000 so‘m. To‘lov qilish uchun administratorga murojaat
              qiling.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Plus className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">
                    2,000,000 so‘mlik kurslarni
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Ushbu kurs ichida bepul qo‘lga kiritasiz!
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">
                    Shoshiling, o‘quvchilar soni cheklangan!
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Kursga yozilish uchun administratorga murojaat qiling.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Kursga yozilish uchun</h3>
                  <p className="text-sm text-muted-foreground">
                    Administrator bilan bog`laning va to`lov qiling.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <MapPinHouse className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Bizning manzil:</h3>
                  <p className="text-sm text-muted-foreground">
                    Namangan shahri, Hackers Hub Kiberxavfsizlik va Axloqiy xakerlikka asoslangan markaz
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <UsersRound className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Bizning o`quvchilar</h3>
                  <p className="text-sm text-muted-foreground">
                    Hozirda 200 dan ortiq offline va 50 dan ortiq online
                    o`quvchilar tahsil olmoqda
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Price Card */}
        </div>
      </section>
    </div>
  );
}
