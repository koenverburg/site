import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Koen Verburg - Conrad the Programmer',
}

const Item = ({ label, value }) => {
  return (
    <div>
      <code className="relative rounded bg-muted mr-2 px-[0.3rem] py-[0.2rem] font-mono text-sm xfont-semibold">
        {label}
      </code>
      <strong>{value}</strong>
    </div>
  )
}

export default function Page() {
  return (
    <section className="xw-1/2 xm-auto flex flex-col">
      <div className="flex flex-col items-center">
        <div className=''>
          <Item label="name" value="Koen Verburg" />
          <Item label="title" value="Senior Software Engineer" />
          <Item label="focus" value="Payments" />
          <Item label="company" value="Adidas" />
          <Item label="location" value="Amsterdam" />
          --
          <Item label="handle" value="@conradtheprogrammer" />
          --
          <Item label="hobbies" value="photography, interior design, entrepreneurship, saas, fitness, archery" />
          --
          <Item label="Coding Interests" value="K8s, automation, bun, functional programming" />
        </div>
        <div>
          Timeline
          <Item label="2024" value="Moved to Amsterdam" />
          <Item label="2024" value="Promoted to Senior Software Engineer" />
          <Item label="2024" value="CKAD certified" />
          <Item label="2023" value="" />
          <Item label="2023" value="Promoted to level 2" />
        </div>
      </div>
    </section>
  )
}