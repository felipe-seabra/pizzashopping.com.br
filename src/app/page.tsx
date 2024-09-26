import { Suspense } from 'react'
import HomePage from './_components/home-page'
import LoadingHomePage from './loading'

export default function Home() {
  return (
    <main>
      <Suspense fallback={<LoadingHomePage />}>
        <HomePage />
      </Suspense>
    </main>
  )
}
