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
import FeaturedPackage from "./FeaturedPackage"

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
              <FeaturedPackage description="A modern and responsive website for a fictional company." title="Acme Inc" url="#" />
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