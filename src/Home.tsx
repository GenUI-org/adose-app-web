import './App.css'

export function Home() {
  return (
    <>
      <div className='pb-0 text-xl color-white font-bold'>ADOSE</div>
      <p className=''>
        Daily dose of Happiness
      </p>
      <div className="card gap-2 flex">
        <a className='w-[200px] rounded-xl p-3 bg-[#dedede]' href="/terms">
          Terms of Service
        </a>
        <a className='w-[200px] rounded-xl p-3 bg-[#dedede]' href="/privacy">
          Privacy
        </a>
      </div>
    </>
  )
}
