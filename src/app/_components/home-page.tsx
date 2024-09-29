'use client'

import { useEffect, useState } from 'react'

import Link from 'next/link'

import { Button } from '@/components/ui/button'
import LoadingHomePage from '../loading'
import { linkWhatsapp } from '@/database/constants'

export default function HomePage() {
  const [isBackgroundLoaded, setBackgroundLoaded] = useState(false)

  useEffect(() => {
    const bgImage = new Image()
    bgImage.src =
      'https://jpeiowradalgdwmfenul.supabase.co/storage/v1/object/public/portfolio/background.webp'
    bgImage.onload = () => {
      setBackgroundLoaded(true)
    }
  }, [])

  return !isBackgroundLoaded ? (
    <LoadingHomePage />
  ) : (
    <div
      className={`bg-criarte-background flex h-screen w-screen items-center bg-[url('https://jpeiowradalgdwmfenul.supabase.co/storage/v1/object/public/portfolio/background.webp')] bg-cover bg-center bg-no-repeat`}
    >
      <section className="container flex h-screen items-center md:px-[10%]">
        <div className="max-w-[600px]">
          <h1 className="font-pizza-font text-6xl font-bold leading-loose text-pizza-title drop-shadow-md md:text-8xl">
            Pizza Shopping
          </h1>
          <h3 className="font-pizza-font text-4xl font-bold text-pizza-secondary drop-shadow-md md:mt-1 md:text-6xl">
            Pré-assada
          </h3>
          <p className="my-6 text-lg text-pizza-text">
            Proporcionamos a experiência da finalização das nossas pizzas no
            conforto de sua casa. Desfrute de todos os nossos sabores,
            quentinhos, do forno direto para a sua mesa
          </p>
          <div className="flex h-14 max-w-[345px] justify-between">
            <Link href="/cardapio">
              <Button
                type="button"
                className="relative inline-flex h-full w-40 items-center justify-center overflow-hidden rounded-lg border-2 border-pizza-secondary bg-pizza-secondary-400 font-pizza-font text-2xl font-semibold leading-6 tracking-wide text-pizza-primary transition-colors duration-500 hover:bg-pizza-secondary-700 hover:text-pizza-primary-400"
              >
                Ver Cardápio
              </Button>
            </Link>
            <Link href={linkWhatsapp} target="_blank">
              <Button
                type="button"
                className="relative inline-flex h-full w-40 items-center justify-center overflow-hidden border-2 border-pizza-secondary bg-transparent font-pizza-font text-2xl font-semibold leading-6 tracking-wide text-pizza-secondary transition-colors duration-500 hover:bg-pizza-secondary hover:text-pizza-primary group-hover:border-transparent group-hover:text-pizza-text"
              >
                Peça Já
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
