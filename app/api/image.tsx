import {NextRequest} from 'next/server'
import {ImageResponse} from '@vercel/og'

export const config = {
  runtime: 'edge',
}

export default async function handler(req: NextRequest) {
  const {searchParams} = req.nextUrl
  const postTitle = searchParams.get('title')
  const background = searchParams.get('background')

  return new ImageResponse((
    <div
      style={{
        alignItems:      'center',
        backgroundColor: 'teal',
        backgroundImage: `url(${process.env.APP_PROTOCOL}://${process.env.APP_URL}/${background})`,
        display:         'flex',
        flexDirection:   'column',
        height:          '100%',
        justifyContent:  'center',
        width:           '100%'
      }}
    >
      <div
        style={{
          color:         'black',
          // border: '1px solid red',
          display:       'flex',
          fontSize:      130,
          fontStyle:     'normal',
          letterSpacing: '-0.05em',
          lineHeight:    '120px',
          marginTop:     '11rem',
          maxHeight:     '1500px',
          textAlign:     'center',
          width:         '800px',
          // whiteSpace: 'pre-wrap',
        }}
      >
        {postTitle}
      </div>
    </div>
  ),
  {
    height: 1920,
    width:  1080,
  })
}
