/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/ua1jyAuwDga
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { IBM_Plex_Sans } from 'next/font/google'
import { Taviraj } from 'next/font/google'

ibm_plex_sans({
  subsets: ['latin'],
  display: 'swap',
})

taviraj({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardHeader, CardContent, Card } from "@/components/ui/card"

export function Home() {
  return (
    <div key="1" className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="py-8 md:py-12 lg:py-16">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
              <div className="space-y-3 md:space-y-4 lg:space-y-6">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">Hi, I'm John Doe</h1>
                <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg lg:text-xl">
                  I'm a full-stack developer with a passion for building beautiful and functional web applications.
                </p>
                <div className="flex space-x-3 md:space-x-4">
                  <Button variant="primary">View My Work</Button>
                  <Button variant="secondary">Contact Me</Button>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  alt="John Doe"
                  className="rounded-full"
                  height={300}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/300",
                    objectFit: "cover",
                  }}
                  width={300}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-20" id="blog">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="mb-8 md:mb-12 lg:mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">Latest Blog Posts</h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl lg:text-2xl">
                Check out my latest blog posts on web development and design.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
              <Card>
                <CardHeader>
                  <img
                    alt="Blog Post 1"
                    className="rounded-t-lg"
                    height={200}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "400/200",
                      objectFit: "cover",
                    }}
                    width={400}
                  />
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">Building a Responsive Web App with React</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    In this blog post, I'll show you how to build a responsive web app using React and modern CSS
                    techniques.
                  </p>
                  <Link className="text-blue-500 hover:text-blue-600" href="#">
                    Read More
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <img
                    alt="Blog Post 2"
                    className="rounded-t-lg"
                    height={200}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "400/200",
                      objectFit: "cover",
                    }}
                    width={400}
                  />
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">Mastering CSS Grid Layout</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    In this blog post, I'll dive deep into CSS Grid Layout and show you how to create complex layouts
                    with ease.
                  </p>
                  <Link className="text-blue-500 hover:text-blue-600" href="#">
                    Read More
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <img
                    alt="Blog Post 3"
                    className="rounded-t-lg"
                    height={200}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "400/200",
                      objectFit: "cover",
                    }}
                    width={400}
                  />
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">Optimizing Web Performance with Lighthouse</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    In this blog post, I'll show you how to use Lighthouse to identify and fix performance issues in
                    your web applications.
                  </p>
                  <Link className="text-blue-500 hover:text-blue-600" href="#">
                    Read More
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className=" py-12 md:py-16 lg:py-20" id="packages">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="mb-8 md:mb-12 lg:mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">My Open-Source Packages</h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl lg:text-2xl">
                Check out the open-source packages I've contributed to.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
              <Card>
                <CardHeader>
                  <div className="bg-gray-200 dark:bg-gray-700 rounded-t-lg py-8 px-6">
                    <PackageIcon className="h-8 w-8 text-gray-600 dark:text-gray-400" />
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">shadcn/ui</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    A collection of beautifully designed and accessible React components.
                  </p>
                  <div className="flex items-center space-x-4">
                    <Link className="text-blue-500 hover:text-blue-600" href="#">
                      View on GitHub
                    </Link>
                    <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400">
                      <StarIcon className="h-4 w-4" />
                      <span>20k</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="bg-gray-200 dark:bg-gray-700 rounded-t-lg py-8 px-6">
                    <PackageIcon className="h-8 w-8 text-gray-600 dark:text-gray-400" />
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">radix-ui/primitives</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    A set of unstyled, accessible components for building high-quality design systems and web apps.
                  </p>
                  <div className="flex items-center space-x-4">
                    <Link className="text-blue-500 hover:text-blue-600" href="#">
                      View on GitHub
                    </Link>
                    <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400">
                      <StarIcon className="h-4 w-4" />
                      <span>10k</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="bg-gray-200 dark:bg-gray-700 rounded-t-lg py-8 px-6">
                    <PackageIcon className="h-8 w-8 text-gray-600 dark:text-gray-400" />
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">stitchesjs/react</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    A CSS-in-JS library that lets you write type-safe, maintainable, and scalable styles.
                  </p>
                  <div className="flex items-center space-x-4">
                    <Link className="text-blue-500 hover:text-blue-600" href="#">
                      View on GitHub
                    </Link>
                    <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400">
                      <StarIcon className="h-4 w-4" />
                      <span>5k</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-20" id="websites">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="mb-8 md:mb-12 lg:mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">My Deployed Websites</h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl lg:text-2xl">
                Check out some of the websites I've deployed.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
              <Card>
                <CardHeader>
                  <img
                    alt="Website 1"
                    className="rounded-t-lg"
                    height={200}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "400/200",
                      objectFit: "cover",
                    }}
                    width={400}
                  />
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">Acme Inc</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    A modern and responsive website for a fictional company.
                  </p>
                  <Link className="text-blue-500 hover:text-blue-600" href="#">
                    View Website
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <img
                    alt="Website 2"
                    className="rounded-t-lg"
                    height={200}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "400/200",
                      objectFit: "cover",
                    }}
                    width={400}
                  />
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">Widgets Inc</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    A e-commerce website for a fictional widget company.
                  </p>
                  <Link className="text-blue-500 hover:text-blue-600" href="#">
                    View Website
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <img
                    alt="Website 3"
                    className="rounded-t-lg"
                    height={200}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "400/200",
                      objectFit: "cover",
                    }}
                    width={400}
                  />
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">Gadgets Galore</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    A modern and responsive website for a fictional gadget company.
                  </p>
                  <Link className="text-blue-500 hover:text-blue-600" href="#">
                    View Website
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function GithubIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}


function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function PackageIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}


function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
