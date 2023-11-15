import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const copyOthers = [
  `// cmmb

/**
|--------------------------------------------------
| $1
|--------------------------------------------------
*/`,
  `// desc

describe('$1', () => {
  $2
})`,
  `// test

test('should $1', () => {
  $2
})`,
  `// tit

it('should $1', () => {
  $2
})`,
  `// stest

import React from 'react'
import renderer from 'react-test-renderer'

import { $1 } from '../$1'

describe('<$1 />', () => {
  const defaultProps = {}
  const wrapper = renderer.create(<$1 {...defaultProps} />)

  test('render', () => {
    expect(wrapper).toMatchSnapshot()
  })
})`,
  `// srtest

import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'

import store from 'src/store'
import { $1 } from '../$1'

describe('<$1 />', () => {
  const defaultProps = {}
  const wrapper = renderer.create(
    <Provider store={store}>
      <$1 {...defaultProps} />)
    </Provider>,
  )

  test('render', () => {
    expect(wrapper).toMatchSnapshot()
  })
})`,
  `// sntest

import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import $1 from '../$1'

describe('<$1 />', () => {
  const defaultProps = {}

  const wrapper = renderer.create(<$1 {...defaultProps} />)

  test('render', () => {
    expect(wrapper).toMatchSnapshot()
  })
})`,
  `// snrtest

import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'

import store from 'src/store/configureStore'
import $1 from '../$1'

describe('<$1 />', () => {
  const defaultProps = {}
  const wrapper = renderer.create(
    <Provider store={store}>
      <$1 {...defaultProps} />
    </Provider>,
  )

  test('render', () => {
    expect(wrapper).toMatchSnapshot()
  })
})`,
  `// hocredux

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export const mapStateToProps = (state) => ({})

export const mapDispatchToProps = {}

export const $1 = (WrappedComponent) => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />

  hocComponent.propTypes = {}

  return hocComponent
}

export default (WrapperComponent) =>
  connect(mapStateToProps, mapDispatchToProps)($1(WrapperComponent))`,
  `// hoc
  
import React from 'react'
import PropTypes from 'prop-types'

export default (WrappedComponent) => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />

  hocComponent.propTypes = {}

  return hocComponent
}`,
];

const htmlOthers = `
<code>
<h3><a href="#others">Others</a></h3>
<h3>
  <a href="#cmmb"><code>cmmb</code></a>
  <button class="othersCopyBN copyBN" data-index="27">
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="rgb(125, 133, 144)"
    >
      <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path>
      <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
    </svg>
  </button>
</h3>
<pre>
  <span class="spanGray">/**</span>
  <span class="spanGray">|--------------------------------------------------</span>
  <span class="spanGray">| $1</span>
  <span class="spanGray">|--------------------------------------------------</span>
  <span class="spanGray">*/</span>
</pre>

<h3>
  <a href="#desc"><code>desc</code></a>
  <button class="othersCopyBN copyBN" data-index="28">
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="rgb(125, 133, 144)"
    >
      <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path>
      <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
    </svg>
  </button>
</h3>
<pre>
  <span class="spanPurple">describe</span><span class="spanWhite">(</span><span class="spanBlue">'$1'</span><span class="spanWhite">,</span> <span class="spanWhite">(</span><span class="spanWhite">)</span> <span class="spanBlue2">=&gt;</span> <span class="spanWhite">{</span>
    <span class="spanBlue1">$2</span>
  <span class="spanWhite">}</span><span class="spanWhite">)</span>
</pre>

<h3>
  <a href="#test"><code>test</code></a>
  <button class="othersCopyBN copyBN" data-index="29">
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="rgb(125, 133, 144)"
    >
      <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path>
      <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
    </svg>
  </button>
</h3>
<pre>
  <span class="spanPurple">test</span><span class="spanWhite">(</span><span class="spanBlue">'should $1'</span><span class="spanWhite">,</span> <span class="spanWhite">(</span><span class="spanWhite">)</span> <span class="spanBlue2">=&gt;</span> <span class="spanWhite">{</span>
    <span class="spanBlue1">$2</span>
  <span class="spanWhite">}</span><span class="spanWhite">)</span>
</pre>

<h3>
  <a href="#tit"><code>tit</code></a>
  <button class="othersCopyBN copyBN" data-index="30">
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="rgb(125, 133, 144)"
    >
      <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path>
      <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
    </svg>
  </button>
</h3>
<pre>
  <span class="spanPurple">it</span><span class="spanWhite">(</span><span class="spanBlue">'should $1'</span><span class="spanWhite">,</span> <span class="spanWhite">(</span><span class="spanWhite">)</span> <span class="spanBlue2">=&gt;</span> <span class="spanWhite">{</span>
    <span class="spanBlue1">$2</span>
  <span class="spanWhite">}</span><span class="spanWhite">)</span>
</pre>

<h3>
  <a href="#stest"><code>stest</code></a>
  <button class="othersCopyBN copyBN" data-index="31">
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="rgb(125, 133, 144)"
    >
      <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path>
      <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
    </svg>
  </button>
</h3>
<pre>
  <span class="spanRed">import</span> <span class="spanOrange">React</span> <span class="spanRed">from</span> <span class="spanBlue">'react'</span>
  <span class="spanRed">import</span> <span class="spanBlue1">renderer</span> <span class="spanRed">from</span> <span class="spanBlue">'react-test-renderer'</span>

  <span class="spanRed">import</span> <span class="spanWhite">{</span> <span class="spanBlue1">$1</span> <span class="spanWhite">}</span> <span class="spanRed">from</span> <span class="spanBlue">'../$1'</span>

  <span class="spanPurple">describe</span><span class="spanWhite">(</span><span class="spanBlue">'&lt;$1 /&gt;'</span><span class="spanWhite">,</span> <span class="spanWhite">(</span><span class="spanWhite">)</span> <span class="spanBlue2">=&gt;</span> <span class="spanWhite">{</span>
    <span class="spanRed">const</span> <span class="spanBlue1">defaultProps</span> <span class="spanBlue2">=</span> <span class="spanWhite">{</span><span class="spanWhite">}</span>
    <span class="spanRed">const</span> <span class="spanBlue1">wrapper</span> <span class="spanBlue2">=</span> <span class="spanBlue1">renderer</span><span class="spanWhite">.</span><span class="spanPurple">create</span><span class="spanWhite">(</span><span class="spanBlue2">&lt;</span><span class="spanGreen">$1</span> <span class="spanWhite">{</span>...<span class="spanBlue1">defaultProps</span><span class="spanWhite">}</span> <span class="spanBlue2">/</span><span class="spanBlue2">&gt;</span><span class="spanWhite">)</span>

    <span class="spanPurple">test</span><span class="spanWhite">(</span><span class="spanBlue">'render'</span><span class="spanWhite">,</span> <span class="spanWhite">(</span><span class="spanWhite">)</span> <span class="spanBlue2">=&gt;</span> <span class="spanWhite">{</span>
      <span class="spanPurple">expect</span><span class="spanWhite">(</span><span class="spanBlue1">wrapper</span><span class="spanWhite">)</span><span class="spanWhite">.</span><span class="spanPurple">toMatchSnapshot</span><span class="spanWhite">(</span><span class="spanWhite">)</span>
    <span class="spanWhite">}</span><span class="spanWhite">)</span>
  <span class="spanWhite">}</span><span class="spanWhite">)</span>
</pre>

<h3>
  <a href="#srtest"><code>srtest</code></a>
  <button class="othersCopyBN copyBN" data-index="32">
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="rgb(125, 133, 144)"
    >
      <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path>
      <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
    </svg>
  </button>
</h3>
<pre>
  <span class="spanRed">import</span> <span class="spanOrange">React</span> <span class="spanRed">from</span> <span class="spanBlue">'react'</span>
  <span class="spanRed">import</span> <span class="spanBlue1">renderer</span> <span class="spanRed">from</span> <span class="spanBlue">'react-test-renderer'</span>
  <span class="spanRed">import</span> <span class="spanWhite">{</span> <span class="spanOrange">Provider</span> <span class="spanWhite">}</span> <span class="spanRed">from</span> <span class="spanBlue">'react-redux'</span>

  <span class="spanRed">import</span> <span class="spanBlue1">store</span> <span class="spanRed">from</span> <span class="spanBlue">'src/store'</span>
  <span class="spanRed">import</span> <span class="spanWhite">{</span> <span class="spanBlue1">$1</span> <span class="spanWhite">}</span> <span class="spanRed">from</span> <span class="spanBlue">'../$1'</span>

  <span class="spanPurple">describe</span><span class="spanWhite">(</span><span class="spanBlue">'&lt;$1 /&gt;'</span><span class="spanWhite">,</span> <span class="spanWhite">(</span><span class="spanWhite">)</span> <span class="spanBlue2">=&gt;</span> <span class="spanWhite">{</span>
    <span class="spanRed">const</span> <span class="spanBlue1">defaultProps</span> <span class="spanBlue2">=</span> <span class="spanWhite">{</span><span class="spanWhite">}</span>
    <span class="spanRed">const</span> <span class="spanBlue1">wrapper</span> <span class="spanBlue2">=</span> <span class="spanBlue1">renderer</span><span class="spanWhite">.</span><span class="spanPurple">create</span><span class="spanWhite">(</span>
      <span class="spanBlue2">&lt;</span><span class="spanGreen">Provider</span> <span class="spanBlue2">store</span><span class="spanBlue2">=</span><span class="spanWhite">{</span><span class="spanBlue1">store</span><span class="spanWhite">}</span><span class="spanBlue2">&gt;</span>
        <span class="spanBlue2">&lt;</span><span class="spanGreen">$1</span> <span class="spanWhite">{</span>...<span class="spanBlue1">defaultProps</span><span class="spanWhite">}</span> <span class="spanBlue2">/</span><span class="spanBlue2">&gt;</span>)
      <span class="spanBlue2">&lt;</span><span class="spanBlue2">/</span><span class="spanGreen">Provider</span><span class="spanBlue2">&gt;</span><span class="spanWhite">,</span>
    <span class="spanWhite">)</span>

    <span class="spanPurple">test</span><span class="spanWhite">(</span><span class="spanBlue">'render'</span><span class="spanWhite">,</span> <span class="spanWhite">(</span><span class="spanWhite">)</span> <span class="spanBlue2">=&gt;</span> <span class="spanWhite">{</span>
      <span class="spanPurple">expect</span><span class="spanWhite">(</span><span class="spanBlue1">wrapper</span><span class="spanWhite">)</span><span class="spanWhite">.</span><span class="spanPurple">toMatchSnapshot</span><span class="spanWhite">(</span><span class="spanWhite">)</span>
    <span class="spanWhite">}</span><span class="spanWhite">)</span>
  <span class="spanWhite">}</span><span class="spanWhite">)</span>
</pre>

<h3>
  <a href="#sntest"><code>sntest</code></a>
  <button class="othersCopyBN copyBN" data-index="33">
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="rgb(125, 133, 144)"
    >
      <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path>
      <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
    </svg>
  </button>
</h3>
<pre>
  <span class="spanRed">import</span> <span class="spanBlue">'react-native'</span>
  <span class="spanRed">import</span> <span class="spanOrange">React</span> <span class="spanRed">from</span> <span class="spanBlue">'react'</span>
  <span class="spanRed">import</span> <span class="spanBlue1">renderer</span> <span class="spanRed">from</span> <span class="spanBlue">'react-test-renderer'</span>

  <span class="spanRed">import</span> <span class="spanBlue1">$1</span> <span class="spanRed">from</span> <span class="spanBlue">'../$1'</span>

  <span class="spanPurple">describe</span><span class="spanWhite">(</span><span class="spanBlue">'&lt;$1 /&gt;'</span><span class="spanWhite">,</span> <span class="spanWhite">(</span><span class="spanWhite">)</span> <span class="spanBlue2">=&gt;</span> <span class="spanWhite">{</span>
    <span class="spanRed">const</span> <span class="spanBlue1">defaultProps</span> <span class="spanBlue2">=</span> <span class="spanWhite">{</span><span class="spanWhite">}</span>

    <span class="spanRed">const</span> <span class="spanBlue1">wrapper</span> <span class="spanBlue2">=</span> <span class="spanBlue1">renderer</span><span class="spanWhite">.</span><span class="spanPurple">create</span><span class="spanWhite">(</span><span class="spanBlue2">&lt;</span><span class="spanGreen">$1</span> <span class="spanWhite">{</span>...<span class="spanBlue1">defaultProps</span><span class="spanWhite">}</span> <span class="spanBlue2">/</span><span class="spanBlue2">&gt;</span><span class="spanWhite">)</span>

    <span class="spanPurple">test</span><span class="spanWhite">(</span><span class="spanBlue">'render'</span><span class="spanWhite">,</span> <span class="spanWhite">(</span><span class="spanWhite">)</span> <span class="spanBlue2">=&gt;</span> <span class="spanWhite">{</span>
      <span class="spanPurple">expect</span><span class="spanWhite">(</span><span class="spanBlue1">wrapper</span><span class="spanWhite">)</span><span class="spanWhite">.</span><span class="spanPurple">toMatchSnapshot</span><span class="spanWhite">(</span><span class="spanWhite">)</span>
    <span class="spanWhite">}</span><span class="spanWhite">)</span>
  <span class="spanWhite">}</span><span class="spanWhite">)</span>
</pre>

<h3>
  <a href="#snrtest"><code>snrtest</code></a>
  <button class="othersCopyBN copyBN" data-index="34">
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="rgb(125, 133, 144)"
    >
      <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path>
      <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
    </svg>
  </button>
</h3>
<pre>
  <span class="spanRed">import</span> <span class="spanBlue">'react-native'</span>
  <span class="spanRed">import</span> <span class="spanOrange">React</span> <span class="spanRed">from</span> <span class="spanBlue">'react'</span>
  <span class="spanRed">import</span> <span class="spanBlue1">renderer</span> <span class="spanRed">from</span> <span class="spanBlue">'react-test-renderer'</span>
  <span class="spanRed">import</span> <span class="spanWhite">{</span> <span class="spanOrange">Provider</span> <span class="spanWhite">}</span> <span class="spanRed">from</span> <span class="spanBlue">'react-redux'</span>

  <span class="spanRed">import</span> <span class="spanBlue1">store</span> <span class="spanRed">from</span> <span class="spanBlue">'src/store/configureStore'</span>
  <span class="spanRed">import</span> <span class="spanBlue1">$1</span> <span class="spanRed">from</span> <span class="spanBlue">'../$1'</span>

  <span class="spanPurple">describe</span><span class="spanWhite">(</span><span class="spanBlue">'&lt;$1 /&gt;'</span><span class="spanWhite">,</span> <span class="spanWhite">(</span><span class="spanWhite">)</span> <span class="spanBlue2">=&gt;</span> <span class="spanWhite">{</span>
    <span class="spanRed">const</span> <span class="spanBlue1">defaultProps</span> <span class="spanBlue2">=</span> <span class="spanWhite">{</span><span class="spanWhite">}</span>
    <span class="spanRed">const</span> <span class="spanBlue1">wrapper</span> <span class="spanBlue2">=</span> <span class="spanBlue1">renderer</span><span class="spanWhite">.</span><span class="spanPurple">create</span><span class="spanWhite">(</span>
      <span class="spanBlue2">&lt;</span><span class="spanGreen">Provider</span> <span class="spanBlue2">store</span><span class="spanBlue2">=</span><span class="spanWhite">{</span><span class="spanBlue1">store</span><span class="spanWhite">}</span><span class="spanBlue2">&gt;</span>
        <span class="spanBlue2">&lt;</span><span class="spanGreen">$1</span> <span class="spanWhite">{</span>...<span class="spanBlue1">defaultProps</span><span class="spanWhite">}</span> <span class="spanBlue2">/</span><span class="spanBlue2">&gt;</span>
      <span class="spanBlue2">&lt;</span><span class="spanBlue2">/</span><span class="spanGreen">Provider</span><span class="spanBlue2">&gt;</span><span class="spanWhite">,</span>
    <span class="spanWhite">)</span>

    <span class="spanPurple">test</span><span class="spanWhite">(</span><span class="spanBlue">'render'</span><span class="spanWhite">,</span> <span class="spanWhite">(</span><span class="spanWhite">)</span> <span class="spanBlue2">=&gt;</span> <span class="spanWhite">{</span>
      <span class="spanPurple">expect</span><span class="spanWhite">(</span><span class="spanBlue1">wrapper</span><span class="spanWhite">)</span><span class="spanWhite">.</span><span class="spanPurple">toMatchSnapshot</span><span class="spanWhite">(</span><span class="spanWhite">)</span>
    <span class="spanWhite">}</span><span class="spanWhite">)</span>
  <span class="spanWhite">}</span><span class="spanWhite">)</span>
</pre>

<h3>
  <a href="#hocredux"><code>hocredux</code></a>
  <button class="othersCopyBN copyBN" data-index="35">
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="rgb(125, 133, 144)"
    >
      <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path>
      <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
    </svg>
  </button>
</h3>
<pre>
  <span class="spanRed">import</span> <span class="spanOrange">React</span> <span class="spanRed">from</span> <span class="spanBlue">'react'</span>
  <span class="spanRed">import</span> <span class="spanOrange">PropTypes</span> <span class="spanRed">from</span> <span class="spanBlue">'prop-types'</span>
  <span class="spanRed">import</span> <span class="spanWhite">{</span> <span class="spanBlue1">connect</span> <span class="spanWhite">}</span> <span class="spanRed">from</span> <span class="spanBlue">'react-redux'</span>

  <span class="spanRed">export</span> <span class="spanRed">const</span> <span class="spanPurple">mapStateToProps</span> <span class="spanBlue2">=</span> <span class="spanWhite">(</span><span class="spanBlue1">state</span><span class="spanWhite">)</span> <span class="spanBlue2">=&gt;</span> <span class="spanWhite">(</span><span class="spanWhite">{</span><span class="spanWhite">}</span><span class="spanWhite">)</span>

  <span class="spanRed">export</span> <span class="spanRed">const</span> <span class="spanBlue1">mapDispatchToProps</span> <span class="spanBlue2">=</span> <span class="spanWhite">{</span><span class="spanWhite">}</span>

  <span class="spanRed">export</span> <span class="spanRed">const</span> <span class="spanPurple">$1</span> <span class="spanBlue2">=</span> <span class="spanWhite">(</span><span class="spanOrange">WrappedComponent</span><span class="spanWhite">)</span> <span class="spanBlue2">=&gt;</span> <span class="spanWhite">{</span>
    <span class="spanRed">const</span> <span class="spanPurple">hocComponent</span> <span class="spanBlue2">=</span> <span class="spanWhite">(</span><span class="spanWhite">{</span> ...<span class="spanBlue1">props</span> <span class="spanWhite">}</span><span class="spanWhite">)</span> <span class="spanBlue2">=&gt;</span> <span class="spanBlue2">&lt;</span><span class="spanOrange">WrappedComponent</span> <span class="spanWhite">{</span>...<span class="spanBlue1">props</span><span class="spanWhite">}</span> <span class="spanBlue2">/</span><span class="spanBlue2">&gt;</span>

    <span class="spanPurple">hocComponent</span><span class="spanWhite">.</span><span class="spanBlue2">propTypes</span> <span class="spanBlue2">=</span> <span class="spanWhite">{</span><span class="spanWhite">}</span>

    <span class="spanRed">return</span> <span class="spanPurple">hocComponent</span>
  <span class="spanWhite">}</span>

  <span class="spanRed">export</span> <span class="spanRed">default</span> <span class="spanWhite">(</span><span class="spanOrange">WrapperComponent</span><span class="spanWhite">)</span> <span class="spanBlue2">=&gt;</span>
    <span class="spanPurple">connect</span><span class="spanWhite">(</span><span class="spanPurple">mapStateToProps</span><span class="spanWhite">,</span> <span class="spanBlue1">mapDispatchToProps</span><span class="spanWhite">)</span><span class="spanWhite">(</span><span class="spanPurple">$1</span><span class="spanWhite">(</span><span class="spanOrange">WrapperComponent</span><span class="spanWhite">)</span><span class="spanWhite">)</span>
</pre>

<h3>
  <a href="#hoc"><code>hoc</code></a>
  <button class="othersCopyBN copyBN" data-index="36">
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="rgb(125, 133, 144)"
    >
      <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path>
      <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
    </svg>
  </button>
</h3>
<pre>
  <span class="spanRed">import</span> <span class="spanOrange">React</span> <span class="spanRed">from</span> <span class="spanBlue">'react'</span>
  <span class="spanRed">import</span> <span class="spanOrange">PropTypes</span> <span class="spanRed">from</span> <span class="spanBlue">'prop-types'</span>

  <span class="spanRed">export</span> <span class="spanRed">default</span> <span class="spanWhite">(</span><span class="spanOrange">WrappedComponent</span><span class="spanWhite">)</span> <span class="spanBlue2">=&gt;</span> <span class="spanWhite">{</span>
    <span class="spanRed">const</span> <span class="spanPurple">hocComponent</span> <span class="spanBlue2">=</span> <span class="spanWhite">(</span><span class="spanWhite">{</span> ...<span class="spanBlue1">props</span> <span class="spanWhite">}</span><span class="spanWhite">)</span> <span class="spanBlue2">=&gt;</span> <span class="spanBlue2">&lt;</span><span class="spanOrange">WrappedComponent</span> <span class="spanWhite">{</span>...<span class="spanBlue1">props</span><span class="spanWhite">}</span> <span class="spanBlue2">/</span><span class="spanBlue2">&gt;</span>

    <span class="spanPurple">hocComponent</span><span class="spanWhite">.</span><span class="spanBlue2">propTypes</span> <span class="spanBlue2">=</span> <span class="spanWhite">{</span><span class="spanWhite">}</span>

    <span class="spanRed">return</span> <span class="spanPurple">hocComponent</span>
  <span class="spanWhite">}</span>
</pre>
</code>`;

export default function Others() {
  useEffect(() => {
    const othersCopyBNs = document.querySelectorAll('.othersCopyBN');

    othersCopyBNs.forEach((button, index) => {
      button.addEventListener('click', () => {
        const codeToCopy = copyOthers[index];

        navigator.clipboard
          .writeText(codeToCopy)
          .then(() => {
            toast.success('Copied to clipboard!');
          })
          .catch((error) => {
            toast.error('Copy failed.', error);
          });
      });
    });
  }, []);

  return (
    <div className="relative mb-16  md:h-full">
      <Toaster />
      <div
        dangerouslySetInnerHTML={{ __html: htmlOthers }}
        className="overflow-x-auto"
      />
    </div>
  );
}
