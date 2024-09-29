/* eslint-disable prettier/prettier */
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import { logo } from '@/images'

import Utils from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Cardápio', href: '/cardapio' },
  { name: 'Sobre', href: '/quem-somos' },
  { name: 'Contato', href: '/contato' },
]

export default function Header(): JSX.Element {
  const location = usePathname()

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <header
          className={Utils.classNames(
            location === '/'
              ? 'fixed w-full pt-2'
              : location.startsWith('/dashboard')
                ? 'hidden'
                : location.startsWith('/login')
                  ? 'hidden'
                  : location.startsWith('/contato') ||
                    location.startsWith('/formulario')
                    ? 'absolute top-0 w-full pt-2'
                    : 'bg-pizza-background fixed z-50 w-full pt-2', 'bg-pizza-background-500 z-50 shadow-lg'
          )}
        >
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-20 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="text-pizza-text hover:bg-pizza-secondary hover:text-pizza-primary relative inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Abrir Menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                <div className="self-center">
                  <Link href="/">
                    <Image
                      className="h-20 w-auto"
                      src={logo}
                      alt="Logo Pizza Shopping"
                    />
                  </Link>
                </div>
                <div className="hidden self-center sm:ml-6 sm:block">
                  <div className="flex space-x-4 text-center">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={Utils.classNames(
                          item.href === location
                            ? ' bg-pizza-secondary text-background'
                            : 'bg-pizza-secondary-300 text-background hover:bg-pizza-secondary-700 hover:text-background',
                          'm-auto flex w-24 justify-center gap-2 rounded-md p-2 text-lg font-pizza-font font-medium',
                        )}
                        aria-current={
                          item.href === location ? 'page' : undefined
                        }
                      >
                        {item.name.toUpperCase()}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  href={item.href}
                  key={item.name}
                >
                  <Disclosure.Button
                    className={Utils.classNames(
                      item.href === location
                        ? 'bg-pizza-secondary text-pizza-primary font-bold'
                        : 'bg-pizza-secondary-300 text-background hover:bg-pizza-secondary-700 hover:text-pizza-primary font-medium',
                      'mb:w-24 m-auto my-1 flex w-full justify-center rounded-md px-3 py-2 text-xl font-pizza-font',
                    )}
                    aria-current={item.href === location ? 'page' : undefined}
                  >
                    {item.name.toUpperCase()}
                  </Disclosure.Button>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </header>
      )}
    </Disclosure>
  )
}
