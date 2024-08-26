import Markdown from 'markdown-to-jsx'
import { PropsWithChildren, useEffect, useState } from 'react'

// @ts-ignore
import AppDescription from './assets/AppDescription.md'

import './App.css'
//import './github-markdown-light.css'
import './markdown-dark.css'

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
    //h1: 'pb-3 text-xl color-white font-bold',
    //h3: 'pb-3 text-xl color-white font-bold',
    //p: 'mb-3 mb-3',
    //ul: 'list-disc flex flex-col'
  })

  return (
    <>
      <div className='pb-0 text-xl color-white font-bold'>ADOSE</div>
      <p className='pb-3'>
        Daily dose of Happiness
      </p>
      {content && <div className='markdown-body text-left bg-[#242424]'>
        <Markdown
          children={content}
          options={{
            //disableParsingRawHTML: true
            //wrapper: <article className=''></article>
            overrides: markdownProps,
          }}
        />
      </div>}

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
