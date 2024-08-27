import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Code, Package, Github, Twitter, Linkedin, ChevronRight, Globe } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Component() {
  return (
    <div className='flex flex-col min-h-screen bg-white dark:bg-gray-900'>
      <header className='px-4 lg:px-6 h-14 flex items-center backdrop-blur-sm bg-white/30 dark:bg-gray-900/30 sticky top-0 z-50'>
        <Link className='flex items-center justify-center' href='#'>
          <Code className='h-6 w-6 text-primary' />
          <span className='sr-only'>Jane Doe</span>
        </Link>
        <nav className='ml-auto flex gap-4 sm:gap-6'>
          {['about', 'blog', 'projects'].map(item => (
            <Link key={item} className='text-sm font-medium hover:text-primary transition-colors' href={`#${item}`}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </nav>
      </header>
      <main className='flex-1'>
        <section className='w-full py-8 md:py-12 lg:py-16 bg-gray-100 dark:bg-gray-800' id='about'>
          <div className='container px-4 md:px-6 mx-auto'>
            <div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 text-center sm:text-left'>
              <Image
                src='/placeholder.svg?height=80&width=80'
                alt='Jane Doe'
                width={80}
                height={80}
                className='rounded-full border-2 border-white dark:border-gray-800 shadow-lg'
              />
              <div>
                <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-2'>Jane Doe</h1>
                <p className='max-w-[700px] text-gray-500 md:text-lg dark:text-gray-400'>
                  Crafting elegant solutions and sharing knowledge in software engineering.
                </p>
              </div>
            </div>
            <div className='flex justify-center mt-6'>
              <div className='flex flex-col sm:flex-row gap-4'>
                <Button asChild size='sm'>
                  <Link href='#contact'>Get in Touch</Link>
                </Button>
                <Button asChild variant='outline' size='sm'>
                  <Link href='/resume.pdf'>Download Resume</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className='w-full py-12 md:py-24 lg:py-32' id='blog'>
          <div className='container px-4 md:px-6 mx-auto'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center'>Latest Insights</h2>
            <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
              {[1, 2, 3].map(i => (
                <Card key={i} className='flex flex-col group hover:shadow-lg transition-shadow duration-300'>
                  <CardHeader>
                    <CardTitle className='text-2xl'>Exploring the Future of AI</CardTitle>
                    <CardDescription>May {i}, 2023 • 5 min read</CardDescription>
                  </CardHeader>
                  <CardContent className='flex-grow'>
                    <p className='text-gray-500 dark:text-gray-400'>
                      Dive into the latest advancements in artificial intelligence and their potential impact on software development.
                    </p>
                  </CardContent>
                  <div className='p-6 pt-0'>
                    <Button className='w-full group-hover:translate-x-1 transition-transform' variant='ghost' asChild>
                      <Link href={`/blog/post-${i}`}>
                        Read More <ChevronRight className='ml-2 h-4 w-4' />
                      </Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
            <div className='mt-12 text-center'>
              <Button asChild size='lg'>
                <Link href='/blog'>View All Posts</Link>
              </Button>
            </div>
          </div>
        </section>
        <section className='w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800' id='projects'>
          <div className='container px-4 md:px-6 mx-auto'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center'>Projects & Packages</h2>
            <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
              <Card className='flex flex-col group hover:shadow-lg transition-shadow duration-300'>
                <CardHeader>
                  <CardTitle className='flex items-center text-2xl'>
                    <Package className='mr-2 h-5 w-5 text-primary' />
                    react-elegance
                  </CardTitle>
                  <CardDescription>v1.2.0</CardDescription>
                </CardHeader>
                <CardContent className='flex-grow'>
                  <p className='text-gray-500 dark:text-gray-400'>A collection of elegant React components</p>
                </CardContent>
                <div className='p-6 pt-0'>
                  <div className='flex space-x-2'>
                    <Button variant='outline' asChild className='flex-1'>
                      <Link href='https://www.npmjs.com/package/react-elegance'>NPM</Link>
                    </Button>
                    <Button variant='outline' asChild className='flex-1'>
                      <Link href='https://github.com/janedoe/react-elegance'>
                        <Github className='mr-2 h-4 w-4' />
                        GitHub
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
              <Card className='flex flex-col group hover:shadow-lg transition-shadow duration-300 col-span-1 w-full border border-red-500'>
                <div className='p-6 mt-auto'>
                  <div className='flex justify-between items-center'>
                    <Button asChild>
                      <Link href='/projects/ai-code-assistant'>View Project</Link>
                    </Button>
                    <Button variant='outline' asChild>
                      <Link href='https://github.com/janedoe/ai-code-assistant'>
                        <Github className='mr-2 h-4 w-4' />
                        GitHub
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
              <Card className='flex flex-col group hover:shadow-lg transition-shadow duration-300'>
                <CardHeader>
                  <CardTitle className='flex items-center text-2xl'>
                    <Package className='mr-2 h-5 w-5 text-primary' />
                    node-performer
                  </CardTitle>
                  <CardDescription>v2.1.0</CardDescription>
                </CardHeader>
                <CardContent className='flex-grow'>
                  <p className='text-gray-500 dark:text-gray-400'>Performance optimization tools for Node.js</p>
                </CardContent>
                <div className='p-6 pt-0'>
                  <div className='flex space-x-2'>
                    <Button variant='outline' asChild className='flex-1'>
                      <Link href='https://www.npmjs.com/package/node-performer'>NPM</Link>
                    </Button>
                    <Button variant='outline' asChild className='flex-1'>
                      <Link href='https://github.com/janedoe/node-performer'>
                        <Github className='mr-2 h-4 w-4' />
                        GitHub
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
              <Card className='flex flex-col group hover:shadow-lg transition-shadow duration-300'>
                <div className='relative aspect-[2/1]'>
                  <Image src='/placeholder.svg?height=200&width=400' alt='DevOps Dashboard screenshot' fill className='object-cover' />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
                  <div className='absolute bottom-4 left-4 right-4'>
                    <h3 className='text-2xl font-bold text-white mb-2'>DevOps Dashboard</h3>
                    <p className='text-gray-200'>Unified view for development operations</p>
                  </div>
                </div>
                <div className='p-6 mt-auto'>
                  <div className='flex justify-between items-center'>
                    <Button asChild>
                      <Link href='/projects/devops-dashboard'>View Project</Link>
                    </Button>
                    <Button variant='outline' asChild>
                      <Link href='https://github.com/janedoe/devops-dashboard'>
                        <Github className='mr-2 h-4 w-4' />
                        GitHub
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
              <Card className='flex flex-col group hover:shadow-lg transition-shadow duration-300'>
                <CardHeader>
                  <CardTitle className='flex items-center text-2xl'>
                    <Package className='mr-2 h-5 w-5 text-primary' />
                    type-guardian
                  </CardTitle>
                  <CardDescription>v1.0.3</CardDescription>
                </CardHeader>
                <CardContent className='flex-grow'>
                  <p className='text-gray-500 dark:text-gray-400'>Advanced TypeScript type checking utilities</p>
                </CardContent>
                <div className='p-6 pt-0'>
                  <div className='flex space-x-2'>
                    <Button variant='outline' asChild className='flex-1'>
                      <Link href='https://www.npmjs.com/package/type-guardian'>NPM</Link>
                    </Button>
                    <Button variant='outline' asChild className='flex-1'>
                      <Link href='https://github.com/janedoe/type-guardian'>
                        <Github className='mr-2 h-4 w-4' />
                        GitHub
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className='w-full py-6 bg-gray-100 dark:bg-gray-800'>
        <div className='container px-4 md:px-6 mx-auto'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <p className='text-sm text-gray-500 dark:text-gray-400'>© 2023 Jane Doe. All rights reserved.</p>
            <nav className='flex gap-4'>
              <Link className='text-gray-500 hover:text-primary transition-colors' href='#'>
                <Twitter className='h-5 w-5' />
                <span className='sr-only'>Twitter</span>
              </Link>
              <Link className='text-gray-500 hover:text-primary transition-colors' href='#'>
                <Github className='h-5 w-5' />
                <span className='sr-only'>GitHub</span>
              </Link>
              <Link className='text-gray-500 hover:text-primary transition-colors' href='#'>
                <Linkedin className='h-5 w-5' />
                <span className='sr-only'>LinkedIn</span>
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
