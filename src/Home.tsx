import Markdown from 'markdown-to-jsx'
import { PropsWithChildren, useEffect, useState } from 'react'

import AppDescription from './assets/AppDescription.md'

import './App.css'

const MyParagraph = ({ children, ...props }: PropsWithChildren) => <div {...props}>{children}</div>
function tagTailwind(input: Record<string, string>) {
  return Object.entries(input).map(([key, value]) => ({
    [key]: {
      component: MyParagraph,
      props: {
        className: value
      }
    }
  })
  ).reduce((acc, cur) => ({ ...acc, ...cur }), {})
}

export function Home() {
  const [content, setContent] = useState<string>()

  useEffect(() => {
    fetch(AppDescription)
      .then((res) => res.text())
      .then((text) => setContent(text))
  }, [])

  const markdownProps = tagTailwind({
    h1: 'pb-3 text-xl color-white font-bold',
    h3: 'pb-3 text-xl color-white font-bold',
    p: 'mb-3 mb-3'
  })
  return (
    <>
      {/*<div className='pb-0 text-xl color-white font-bold'>ADOSE</div>
      <p className=''>
        Daily dose of Happiness
      </p>*/}
      <div className='text-left'>
        <Markdown
          options={{
            overrides: markdownProps,
          }}
        >
          {content}
        </Markdown>
      </div>

      <div className='flex justify-center'>
        <div className="card gap-2 flex">
          <a className='w-[200px] rounded-xl p-3 bg-[#dedede]' href="/terms">
            Terms of Service
          </a>
          <a className='w-[200px] rounded-xl p-3 bg-[#dedede]' href="/privacy">
            Privacy
          </a>
        </div>
      </div>
    </>
  )
}
