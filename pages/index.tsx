import Image from 'next/image'
import {Layout} from '../components/Layout'

/* eslint-disable react/display-name */
const link = (label: string, link: string) => () => {
  return (
    <a href={link} target="_blank" className="underline font-semibold text-orange-500" rel="noreferrer">{label}</a>
  ) 
}
/* eslint-enable react/display-name */

const Bold = (props) => {
  return <span className="font-semibold text-blue-500">{props.children}</span>
}

const IndexPage = () => {
  const Twitch = link('Twitch', 'https://www.twitch.tv/conradtheprogrammer')
  const Instagram = link('Instagram', 'https://www.instagram.com/conradtheprogrammer/')
  return (
    <Layout title="Conrad The Programmer">
      <div className="text-center mb-4">
        <Image
          width="460"
          height="460"
          alt="Avatar"
          src="/assets/avatar-github.jpg"
          className="rounded-full w-32 mb-4 mx-auto"
        />
        <h1 className="font-bold text-3xl tracking-tight">Koen Verburg</h1>
        <h2 className="text-gray-500">
          Software Engineer at <Bold>Adidas</Bold>
        </h2>
        <h5 className="text-gray-500 mb-2">On Social Media as <Bold>Conrad The Programmer</Bold></h5>
      </div>

      <article className="mb-4">
        I care about Developer Experience, CI/CD, and faster roll-outs. During the day I work on the ReactJS app that powers adidas.com
        At night I stream on <Twitch />, work on posts for <Instagram />, or one of my Saas projects 
      </article>

    </Layout>
  )
}

export default IndexPage
