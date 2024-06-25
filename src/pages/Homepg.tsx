


 import { Link } from "react-router-dom"

export default function Homepg() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-gradient-to-br from-primary to-primary-foreground">
      <div className="space-y-6 text-center">
        <h1 className="text-4xl font-bold text-primary-foreground sm:text-5xl md:text-6xl">
          Welcome to our Blogging Platform
        </h1>
        <p className="text-lg text-primary-foreground/80 sm:text-xl md:text-2xl">
          Discover inspiring stories, share your voice, and connect with like-minded individuals.
        </p>
        <Link
          to={'/signup'}
          className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 py-2 text-lg font-medium text-primary-foreground transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          
        >
          Get Started
        </Link>
      </div>
    </div>
  )
}