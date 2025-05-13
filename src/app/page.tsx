import Head from "next/head";
import Image from "next/image";
import { MapPinIcon } from "lucide-react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pricila Limas Confeitaria</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/png" />
      </Head>

      <main className="relative w-full min-h-screen bg-fundo bg-no-repeat bg-cover flex flex-col justify-between items-center">
        <div className="bg-black/50 absolute h-screen w-full z-10 back" />

        <div className="max-w-xl w-full px-4 flex flex-col items-center pt-16 space-y-8">
          <div className="size-40 rounded-[10px] bg-[#EFE0D2] z-50 relative flex items-center justify-center px-1 border-2 border-white">
            <Image src="/logo-large.png" alt="Pricila Limas" width={150} height={70} />
          </div>

          <div className="z-50 flex items-center flex-col">
            <h2 className="text-center font-semibold text-2xl text-white z-50">Pricila Limas <br /> Confeitaria Artesanal</h2>
            <p className="flex z-50 text-white items-center gap-1">
              <MapPinIcon className="stroke-white size-4 z-50" />
              <span>Biguaçu - Santa Catarina</span>
            </p>
          </div>

          <div className="z-50 flex items-center flex-col gap-4 w-full">
            <div className="relative flex items-center bg-white gap-4 py-4 px-2.5 rounded-md border-b-4 border-[#EFE0D2] max-w-96 w-full">
              <div className="size-16 rounded-[10px] bg-[#EFE0D2] z-50 relative flex items-center justify-center px-1 border-2 border-white">
                <Image src="/logo-large.png" alt="Pricila Limas" width={50} height={70} />
              </div>

              <div className="text-center space-y-1">
                <p className="text-lg text-[#B27F76]">Catálogo de produtos</p>
                {/* <p className="text-sm text-[#B27F76]">clique aqui!</p> */}
              </div>
            </div>

            <div className="relative flex items-center bg-white gap-4 py-4 px-2.5 rounded-md border-b-4 border-[#EFE0D2] max-w-96 w-full">
              <div className="size-16 rounded-[10px] z-50 relative flex items-center justify-center px-1 border-2 border-white">
                <Image src="/whatsapp.svg" alt="WhatsApp Logo" fill />
              </div>

              <div className="text-center ">
                <p className="text-lg text-[#B27F76]">Faça seu pedido</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
