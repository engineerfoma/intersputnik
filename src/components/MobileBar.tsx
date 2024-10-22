import React from 'react'
import Link from 'next/link'

const MobileBar = () => (
  <>
    <div className='mobile-bar__wrapper'>
      <button className='mobile-bar__elem'>
        <Link
          className='mobile-bar__link mobile-bar__link-first'
          href='/'
        >
          <svg
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M10.0007 0.701172L19.1673 5.79376V19.1664H11.834V12.7498H8.16732V19.1664H0.833984V5.79376L10.0007 0.701172ZM2.66732 6.8725V17.3331H6.33398V10.9164H13.6673V17.3331H17.334V6.8725L10.0007 2.79843L2.66732 6.8725Z'></path>
          </svg>
          <span>Home</span>
        </Link>
      </button>
      <button className='mobile-bar__elem'>
        <Link
          className='mobile-bar__link mobile-bar__link-second'
          href='/watchlist-detail'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
          >
            <path d='M 4.2246094 4.2246094 C 2.2336094 6.2166094 1 8.967 1 12 C 1 15.033 2.2336094 17.783391 4.2246094 19.775391 L 5.6386719 18.361328 C 4.0086719 16.731328 3 14.481 3 12 C 3 9.519 4.0086719 7.2686719 5.6386719 5.6386719 L 4.2246094 4.2246094 z M 19.775391 4.2246094 L 18.361328 5.6386719 C 19.991328 7.2686719 21 9.519 21 12 C 21 14.481 19.991328 16.731328 18.361328 18.361328 L 19.775391 19.775391 C 21.766391 17.783391 23 15.033 23 12 C 23 8.967 21.766391 6.2166094 19.775391 4.2246094 z M 7.0527344 7.0527344 C 5.7847344 8.3197344 5 10.07 5 12 C 5 13.93 5.7847344 15.680266 7.0527344 16.947266 L 8.4667969 15.533203 C 7.5607969 14.628203 7 13.378 7 12 C 7 10.622 7.5617969 9.3727969 8.4667969 8.4667969 L 7.0527344 7.0527344 z M 16.947266 7.0527344 L 15.533203 8.4667969 C 16.439203 9.3717969 17 10.622 17 12 C 17 13.378 16.438203 14.627203 15.533203 15.533203 L 16.947266 16.947266 C 18.214266 15.679266 19 13.93 19 12 C 19 10.07 18.215266 8.3197344 16.947266 7.0527344 z M 12 9 A 3 3 0 0 0 12 15 A 3 3 0 0 0 12 9 z'></path>
          </svg>
          <span>LiveTV</span>
        </Link>
      </button>
      <button className='mobile-bar__elem'>
        <Link
          className='mobile-bar__link mobile-bar__link-third'
          href='/videos'
        >
          <svg
            viewBox='0 0 16 16'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='m14.665 4.0518a1.404 1.404 0 0 0 -1.4585.0761l-2.7065 1.8163v-1.4442a1.5017 1.5017 0 0 0 -1.5-1.5h-7a1.5017 1.5017 0 0 0 -1.5 1.5v7a1.5017 1.5017 0 0 0 1.5 1.5h7a1.5017 1.5017 0 0 0 1.5-1.5v-1.4443l2.707 1.8164a1.3939 1.3939 0 0 0 1.458.0761 1.6235 1.6235 0 0 0 .835-1.45v-4.9962a1.6235 1.6235 0 0 0 -.835-1.4502zm-5.165 7.4482a.5006.5006 0 0 1 -.5.5h-7a.5006.5006 0 0 1 -.5-.5v-7a.5006.5006 0 0 1 .5-.5h7a.5006.5006 0 0 1 .5.5zm5-1.002a.6266.6266 0 0 1 -.3057.5684.3983.3983 0 0 1 -.43-.0244l-3.2643-2.1904v-1.7032l3.2637-2.19a.4051.4051 0 0 1 .4306-.0244.6266.6266 0 0 1 .3057.568z' />
          </svg>
          <span>Videos</span>
        </Link>
      </button>
      <button className='mobile-bar__elem'>
        <Link
          className='mobile-bar__link mobile-bar__link-second'
          href='/extra/about-us'
        >
          <svg
            viewBox='0 0 36 36'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g id='Layer_3'>
              <path d='m18 3a15 15 0 1 0 15 15 15.017 15.017 0 0 0 -15-15zm0 28a13 13 0 1 1 13-13 13.015 13.015 0 0 1 -13 13z' />
              <path d='m20 24h-1v-9a1 1 0 0 0 -1-1h-2a1 1 0 0 0 0 2h1v8h-1a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2z' />
              <circle
                cx='18'
                cy='11'
                r='1'
              />
            </g>
          </svg>
          <span>About</span>
        </Link>
      </button>
    </div>
  </>
)
export default MobileBar
