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
      'https://bkzzcslgcddqtunfwogg.supabase.co/storage/v1/object/public/images/background.webp'
    bgImage.onload = () => {
      setBackgroundLoaded(true)
    }
  }, [])

  return !isBackgroundLoaded ? (
    <LoadingHomePage />
  ) : (
    <div className={`bg-pizza-background flex h-screen w-screen items-center`}>
      <section className="container flex h-screen items-center md:px-[10%]">
        <div className="max-w-[600px]">
          <h1 className="text-pizza-title font-pizza-font text-6xl font-bold leading-loose drop-shadow-md md:text-8xl">
            Pizza Shopping
          </h1>
          <h3 className="text-pizza-secondary font-pizza-font text-4xl font-bold drop-shadow-md md:mt-1 md:text-6xl">
            Pré Assada
          </h3>
          <p className="text-pizza-text my-6 text-lg">
            Proporcionamos a experiência da finalização das nossas pizzas no
            conforto de sua casa. Desfrute de todos os nossos sabores,
            quentinhos, do forno direto para a sua mesa
          </p>
          <div className="flex h-14 max-w-[345px] justify-between">
            <Link href="/cardapio">
              <Button
                type="button"
                className="border-pizza-secondary bg-pizza-secondary text-pizza-primary hover:bg-pizza-secondary-700 hover:text-pizza-primary-400 relative inline-flex h-full w-40 items-center justify-center overflow-hidden rounded-lg border-2 text-xl font-semibold leading-6 tracking-wide transition-colors duration-500"
              >
                Ver Cardápio
              </Button>
            </Link>
            <Link href={linkWhatsapp}>
              <Button
                type="button"
                className="border-pizza-secondary text-pizza-secondary hover:bg-pizza-secondary hover:text-pizza-primary group-hover:text-pizza-text relative inline-flex h-full w-40 items-center justify-center overflow-hidden border-2 bg-transparent text-xl font-semibold leading-6 tracking-wide transition-colors duration-500 group-hover:border-transparent"
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
