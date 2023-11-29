import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/logo-title.svg/" type="image/x-icon" />
        <title>Pricila Limas Confeitaria</title>
      </Head>

      <main className="w-full min-h-screen py-11 bg-mobile  bg-no-repeat bg-cover flex flex-col justify-between items-center">
        <div className="w-full flex flex-col items-center justify-start">
          <div>
            <div className="w-[100px] h-[100px] rounded-full flex justify-center border-2 border-[#C75466] items-center bg-white">
              <Image
                alt="logo-priLimas"
                src={"/logo.svg"}
                width={70}
                height={55}
              />
            </div>
            <h1 className="mt-4 font-semibold text-white bg-[#C75466] text-center rounded-lg animate-bounce hover:bg-[#C75466]/80">
              <a href="https://www.instagram.com/pricila.limas/">@prilimas</a>
            </h1>
          </div>

          <div className="w-full h-[2px] bg-gradient-to-r from-[#C75466] mt-3"></div>

          <div className="w-full flex flex-col items-center justify-start gap-5 mt-8">
            <button className="bg-[#C75466] w-[300px] h-[38px] flex items-center justify-between px-2 rounded-[20px] border border-white text-white text-lg hover:bg-[#C75466]/80 ">
              <a
                href="https://drive.google.com/file/d/1ztSw2gnigx9FdLCJu6ylj9IzYBLWiQGt/view"
                className="w-full flex items-center justify-center relative"
              >
                <Image
                  alt="logo"
                  src={"/button.svg"}
                  width={24}
                  height={24}
                  className="absolute left-0 top-1/2 -translate-y-1/2"
                />
                Menu
              </a>
            </button>

            <button className="bg-[#C75466] w-[300px] h-[38px]  px-2 rounded-[20px] border border-white text-white text-lg hover:bg-[#C75466]/80">
              <a
                href="https://api.whatsapp.com/send?phone=554888167572"
                className="w-full flex items-center justify-center relative"
              >
                <Image
                  alt="logo"
                  src={"/button.svg"}
                  width={24}
                  height={24}
                  className="absolute left-0 top-1/2 -translate-y-1/2"
                />
                Whatsapp
              </a>
            </button>

            <button className="bg-[#C75466] w-[300px] h-[38px] flex items-center justify-between px-2 rounded-[20px] border border-white text-white text-lg ">
              <a
                href="https://drive.google.com/file/d/1Qmp9dtkIDo9QsFx_iqpYgWZUI1drtPC4/view"
                className="w-full flex items-center justify-center relative"
              >
                <Image
                  alt="logo"
                  src={"/button.svg"}
                  width={24}
                  height={24}
                  className="absolute left-0 top-1/2 -translate-y-1/2"
                />
                Natal 2023
              </a>
            </button>
          </div>
        </div>

        <div></div>

        <div className="w-full flex flex-col items-center absolute bottom-0 left-0">
          <div className="w-full h-[2px] bg-gradient-to-r from-[#C75466] mt-3"></div>
          <Image alt="" src={"/footer.svg"} width={136} height={63} />
        </div>
      </main>
    </>
  );
}
