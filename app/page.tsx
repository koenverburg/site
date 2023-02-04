import Image from 'next/image'
import {Layout} from '../components/Layout'

const link = (label: string, link: string) => (): JSX.Element => {
  return (
    <a href={link} target="_blank" className="underline font-semibold text-orange-500" rel="noreferrer">{label}</a>
  ) 
}

const Bold = (props: { children: React.ReactNode }) => {
  return <span className="font-semibold text-blue-500">{props.children}</span>
}

const Page = () => {
  const Twitch = link('Twitch', 'https://www.twitch.tv/conradtheprogrammer')
  const Instagram = link('Instagram', 'https://www.instagram.com/conradtheprogrammer/')
  const Blog = link('Blog', 'https://conradtheprogrammer.medium.com')
  const Adidas = link('Adidas', 'https://adidas.com')
  const AdidasCom = link('adidas.com', 'https://adidas.com')

  // const Twitter = link('Twitter', 'https://twitter.com/koenverburg')
  // const Call = link('call', 'https://appointments.lokiapp.live/consultant/WUJFxrwyO0MMZj6F9lEKOsVFtpx2')

  return (
    <Layout title="Conrad The Programmer">
      <div className="text-center mb-4">
        <Image
          width="460"
          height="460"
          alt="Avatar"
          src="/assets/new-avatar.jpg"
          className="rounded-full w-32 mb-4 mx-auto"
        />

        <h1 className="font-bold text-3xl tracking-tight">Koen Verburg</h1>

        <h2 className="text-gray-500">
          Software Engineer at <Adidas />
        </h2>
        <h5 className="text-gray-500 mb-2">On Social Media as <Bold>Conrad The Programmer</Bold></h5>
      </div>

      <article className="mb-4 text-center">
        I care about Developer Experience which includes a fast CI/CD, fast feedback loop during active development, repeatable and solid infrastructure using IaC, Docker and kubernetes.
        <br /><br />During the day I work on the ReactJS app that powers <AdidasCom />{' '}
        <br />At night I stream on <Twitch />, work on content for <Instagram /> or my <Blog />, or one of my SaaS projects. 
      </article>

      {/*
      <article className="mb-4 text-center">
        Do you want your Development Team to move to production multiple times a day instead once ever two weeks?
        <br />Book a <Call /> or DM me on <Twitter /> or <Instagram />
      </article>
      */}

    </Layout>
  )
}

export default Page
