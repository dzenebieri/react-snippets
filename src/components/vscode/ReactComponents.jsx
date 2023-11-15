import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const copyReactComponents = [
  `// rcc

import React, { Component } from 'react'

export default class FileName extends Component {
  render() {
    return <div>$2</div>
  }
}`,
  `// rce

import React, { Component } from 'react'

export class FileName extends Component {
  render() {
    return <div>$2</div>
  }
}

export default $1`,
  `// rcep

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class FileName extends Component {
  static propTypes = {}

  render() {
    return <div>$2</div>
  }
}

export default $1`,
  `// rpc

import React, { PureComponent } from 'react'

export default class FileName extends PureComponent {
  render() {
    return <div>$2</div>
  }
}`,
  `// rpcp

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class FileName extends PureComponent {
  static propTypes = {}

  render() {
    return <div>$2</div>
  }
}`,
  `// rpce

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export class FileName extends PureComponent {
  static propTypes = {}

  render() {
    return <div>$2</div>
  }
}

export default FileName`,
  `// rccp

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class FileName extends Component {
  static propTypes = {
    $2: $3,
  }

  render() {
    return <div>$4</div>
  }
}`,
  `// rfcp

import React from 'react'
import PropTypes from 'prop-types'

function $1(props) {
  return <div>$0</div>
}

$1.propTypes = {}

export default $1`,
  `// rfc

import React from 'react'

export default function $1() {
  return <div>$0</div>
}`,
  `// rfce

import React from 'react'

function $1() {
  return <div>$0</div>
}

export default $1`,
  `// rafcp

import React from 'react'
import PropTypes from 'prop-types'

const $1 = (props) => {
  return <div>$0</div>
}

$1.propTypes = {}

export default $1`,
  `// rafc

import React from 'react'

export const $1 = () => {
  return <div>$0</div>
}`,
  `// rafce

import React from 'react'

const $1 = () => {
  return <div>$0</div>
}

export default $1`,
  `// rmc

import React, { memo } from 'react'

export default memo(function $1() {
  return <div>$0</div>
})`,
  `// rmcp

import React, { memo } from 'react'
import PropTypes from 'prop-types'

const $1 = memo(function $1(props) {
  return <div>$0</div>
})

$1.propTypes = {}

export default $1`,
  `// rcredux

import React, { Component } from 'react'
import { connect } from 'react-redux'

export class FileName extends Component {
  render() {
    return <div>$4</div>
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(FileName)`,
  `// rcreduxp

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class FileName extends Component {
  static propTypes = {
    $2: $3,
  }

  render() {
    return <div>$4</div>
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(FileName)`,
  `// rfcredux

import React, { Component } from 'react'
import { connect } from 'react-redux'

export const FileName = () => {
  return <div>$4</div>
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(FileName)`,
  `// rfreduxp

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export const FileName = () => {
  return <div>$4</div>
}

FileName.propTypes = {
  $2: $3,
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(FileName)`,
  `// reduxmap
  
const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}`,
];

const htmlReactComponents = `
<code>
<h3><a href="#react-components">React Components</a></h3>
<h3>
  <a href="#rcc"><code>rcc</code></a>
  <button class="reactCopyBN copyBN" data-index="0">
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
  <span class="spanRed">import</span> <span class="spanOrange">React</span><span class="spanWhite">,</span> <span class="spanWhite">{</span> <span class="spanOrange">Component</span> <span class="spanWhite">}</span> <span class="spanRed">from</span> <span class="spanBlue">'react'</span>

  <span class="spanRed">export</span> <span class="spanRed">default</span> <span class="spanRed">class</span> <span class="spanOrange">FileName</span> <span class="spanRed">extends</span> <span class="spanOrange">Component</span> <span class="spanWhite">{</span>
    <span class="spanPurple">render</span><span class="spanWhite">(</span><span class="spanWhite">)</span> <span class="spanWhite">{</span>
      <span class="spanRed">return</span> <span class="spanBlue2">&lt;</span><span class="spanGreen">div</span><span class="spanBlue2">&gt;</span>$2<span class="spanBlue2">&lt;</span><span class="spanBlue2">/</span><span class="spanGreen">div</span><span class="spanBlue2">&gt;</span>
    <span class="spanWhite">}</span>
  <span class="spanWhite">}</span>
</pre>

<h3>
  <a href="#rce"><code>rce</code></a>
  <button class="reactCopyBN copyBN" data-index="1">
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
  <span class="spanRed">import</span> <span class="spanOrange">React</span><span class="spanWhite">,</span> <span class="spanWhite">{</span> <span class="spanOrange">Component</span> <span class="spanWhite">}</span> <span class="spanRed">from</span> <span class="spanBlue">'react'</span>
    
  <span class="spanRed">export</span> <span class="spanRed">class</span> <span class="spanOrange">FileName</span> <span class="spanRed">extends</span> <span class="spanOrange">Component</span> <span class="spanWhite">{</span>
    <span class="spanPurple">render</span><span class="spanWhite">(</span><span class="spanWhite">)</span> <span class="spanWhite">{</span>
      <span class="spanRed">return</span> <span class="spanBlue2">&lt;</span><span class="spanGreen">div</span><span class="spanBlue2">&gt;</span>$2<span class="spanBlue2">&lt;</span><span class="spanBlue2">/</span><span class="spanGreen">div</span><span class="spanBlue2">&gt;</span>
    <span class="spanWhite">}</span>
  <span class="spanWhite">}</span>
    
  <span class="spanRed">export</span> <span class="spanRed">default</span> <span class="spanBlue1">$1</span>
</pre>
  
<h3>
  <a href="#rcep"><code>rcep</code></a>
  <button class="reactCopyBN copyBN" data-index="2">
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
  <span class="spanRed">import</span> <span class="spanOrange">React</span><span class="spanWhite">,</span> <span class="spanWhite">{</span> <span class="spanOrange">Component</span> <span class="spanWhite">}</span> <span class="spanRed">from</span> <span class="spanBlue">'react'</span>
  <span class="spanRed">import</span> <span class="spanOrange">PropTypes</span> <span class="spanRed">from</span> <span class="spanBlue">'prop-types'</span>
  
  <span class="spanRed">export</span> <span class="spanRed">class</span> <span class="spanOrange">FileName</span> <span class="spanRed">extends</span> <span class="spanOrange">Component</span> <span class="spanWhite">{</span>
    <span class="spanRed">static</span> <span class="spanBlue2">propTypes</span> <span class="spanBlue2">=</span> <span class="spanWhite">{</span><span class="spanWhite">}</span>
  
    <span class="spanPurple">render</span><span class="spanWhite">(</span><span class="spanWhite">)</span> <span class="spanWhite">{</span>
      <span class="spanRed">return</span> <span class="spanBlue2">&lt;</span><span class="spanGreen">div</span><span class="spanBlue2">&gt;</span>$2<span class="spanBlue2">&lt;</span><span class="spanBlue2">/</span><span class="spanGreen">div</span><span class="spanBlue2">&gt;</span>
    <span class="spanWhite">}</span>
  <span class="spanWhite">}</span>
  
  <span class="spanRed">export</span> <span class="spanRed">default</span> <span class="spanBlue1">$1</span>
</pre>

<h3>
  <a href="#rpc"><code>rpc</code></a>
  <button class="reactCopyBN copyBN" data-index="3">
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
  <span class="spanRed">import</span> <span class="spanOrange">React</span><span class="spanWhite">,</span> <span class="spanWhite">{</span> <span class="spanOrange">PureComponent</span> <span class="spanWhite">}</span> <span class="spanRed">from</span> <span class="spanBlue">'react'</span>
  
  <span class="spanRed">export</span> <span class="spanRed">default</span> <span class="spanRed">class</span> <span class="spanOrange">FileName</span> <span class="spanRed">extends</span> <span class="spanOrange">PureComponent</span> <span class="spanWhite">{</span>
    <span class="spanPurple">render</span><span class="spanWhite">(</span><span class="spanWhite">)</span> <span class="spanWhite">{</span>
      <span class="spanRed">return</span> <span class="spanBlue2">&lt;</span><span class="spanGreen">div</span><span class="spanBlue2">&gt;</span>$2<span class="spanBlue2">&lt;</span><span class="spanBlue2">/</span><span class="spanGreen">div</span><span class="spanBlue2">&gt;</span>
    <span class="spanWhite">}</span>
  <span class="spanWhite">}</span>
</pre>

<h3>
  <a href="#rpcp"><code>rpcp</code></a>
  <button class="reactCopyBN copyBN" data-index="4">
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
  <span class="spanRed">import</span> <span class="spanOrange">React</span><span class="spanWhite">,</span> <span class="spanWhite">{</span> <span class="spanOrange">PureComponent</span> <span class="spanWhite">}</span> <span class="spanRed">from</span> <span class="spanBlue">'react'</span>
  <span class="spanRed">import</span> <span class="spanOrange">PropTypes</span> <span class="spanRed">from</span> <span class="spanBlue">'prop-types'</span>
  
  <span class="spanRed">export</span> <span class="spanRed">default</span> <span class="spanRed">class</span> <span class="spanOrange">FileName</span> <span class="spanRed">extends</span> <span class="spanOrange">PureComponent</span> <span class="spanWhite">{</span>
    <span class="spanRed">static</span> <span class="spanBlue2">propTypes</span> <span class="spanBlue2">=</span> <span class="spanWhite">{</span><span class="spanWhite">}</span>
  
    <span class="spanPurple">render</span><span class="spanWhite">(</span><span class="spanWhite">)</span> <span class="spanWhite">{</span>
      <span class="spanRed">return</span> <span class="spanBlue2">&lt;</span><span class="spanGreen">div</span><span class="spanBlue2">&gt;</span>$2<span class="spanBlue2">&lt;</span><span class="spanBlue2">/</span><span class="spanGreen">div</span><span class="spanBlue2">&gt;</span>
    <span class="spanWhite">}</span>
  <span class="spanWhite">}</span>
</pre>

<h3>
  <a href="#rpce"><code>rpce</code></a>
  <button class="reactCopyBN copyBN" data-index="5">
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
  <span class="spanRed">import</span> <span class="spanOrange">React</span><span class="spanWhite">,</span> <span class="spanWhite">{</span> <span class="spanOrange">PureComponent</span> <span class="spanWhite">}</span> <span class="spanRed">from</span> <span class="spanBlue">'react'</span>
  <span class="spanRed">import</span> <span class="spanOrange">PropTypes</span> <span class="spanRed">from</span> <span class="spanBlue">'prop-types'</span>
  
  <span class="spanRed">export</span> <span class="spanRed">class</span> <span class="spanOrange">FileName</span> <span class="spanRed">extends</span> <span class="spanOrange">PureComponent</span> <span class="spanWhite">{</span>
    <span class="spanRed">static</span> <span class="spanBlue2">propTypes</span> <span class="spanBlue2">=</span> <span class="spanWhite">{</span><span class="spanWhite">}</span>
  
    <span class="spanPurple">render</span><span class="spanWhite">(</span><span class="spanWhite">)</span> <span class="spanWhite">{</span>
      <span class="spanRed">return</span> <span class="spanBlue2">&lt;</span><span class="spanGreen">div</span><span class="spanBlue2">&gt;</span>$2<span class="spanBlue2">&lt;</span><span class="spanBlue2">/</span><span class="spanGreen">div</span><span class="spanBlue2">&gt;</span>
    <span class="spanWhite">}</span>
  <span class="spanWhite">}</span>
  
  <span class="spanRed">export</span> <span class="spanRed">default</span> <span class="spanOrange">FileName</span>
</pre>

<h3>
  <a href="#rccp"><code>rccp</code></a>
  <button class="reactCopyBN copyBN" data-index="6">
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
  <span class="spanRed">import</span> <span class="spanOrange">React</span><span class="spanWhite">,</span> <span class="spanWhite">{</span> <span class="spanOrange">Component</span> <span class="spanWhite">}</span> <span class="spanRed">from</span> <span class="spanBlue">'react'</span>
  <span class="spanRed">import</span> <span class="spanOrange">PropTypes</span> <span class="spanRed">from</span> <span class="spanBlue">'prop-types'</span>
  
  <span class="spanRed">export</span> <span class="spanRed">default</span> <span class="spanRed">class</span> <span class="spanOrange">FileName</span> <span class="spanRed">extends</span> <span class="spanOrange">Component</span> <span class="spanWhite">{</span>
    <span class="spanRed">static</span> <span class="spanBlue2">propTypes</span> <span class="spanBlue2">=</span> <span class="spanWhite">{</span>
      <span class="spanBlue2">$2</span>: <span class="spanBlue1">$3</span><span class="spanWhite">,</span>
    <span class="spanWhite">}</span>
  
    <span class="spanPurple">render</span><span class="spanWhite">(</span><span class="spanWhite">)</span> <span class="spanWhite">{</span>
      <span class="spanRed">return</span> <span class="spanBlue2">&lt;</span><span class="spanGreen">div</span><span class="spanBlue2">&gt;</span>$4<span class="spanBlue2">&lt;</span><span class="spanBlue2">/</span><span class="spanGreen">div</span><span class="spanBlue2">&gt;</span>
    <span class="spanWhite">}</span>
  <span class="spanWhite">}</span>
</pre>

<h3>
  <a href="#rfcp"><code>rfcp</code></a>
  <button class="reactCopyBN copyBN" data-index="7">
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
  
  <span class="spanRed">function</span> <span class="spanPurple">$1</span><span class="spanWhite">(</span><span class="spanBlue1">props</span><span class="spanWhite">)</span> <span class="spanWhite">{</span>
    <span class="spanRed">return</span> <span class="spanBlue2">&lt;</span><span class="spanGreen">div</span><span class="spanBlue2">&gt;</span>$0<span class="spanBlue2">&lt;</span><span class="spanBlue2">/</span><span class="spanGreen">div</span><span class="spanBlue2">&gt;</span>
  <span class="spanWhite">}</span>
  
  <span class="spanBlue1">$1</span><span class="spanWhite">.</span><span class="spanBlue2">propTypes</span> <span class="spanBlue2">=</span> <span class="spanWhite">{</span><span class="spanWhite">}</span>
  
  <span class="spanRed">export</span> <span class="spanRed">default</span> <span class="spanBlue1">$1</span>
</pre>

<h3>
  <a href="#rfc"><code>rfc</code></a>
  <button class="reactCopyBN copyBN" data-index="8">
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
  
  <span class="spanRed">export</span> <span class="spanRed">default</span> <span class="spanRed">function</span> <span class="spanPurple">$1</span><span class="spanWhite">(</span><span class="spanWhite">)</span> <span class="spanWhite">{</span>
    <span class="spanRed">return</span> <span class="spanBlue2">&lt;</span><span class="spanGreen">div</span><span class="spanBlue2">&gt;</span>$0<span class="spanBlue2">&lt;</span><span class="spanBlue2">/</span><span class="spanGreen">div</span><span class="spanBlue2">&gt;</span>
  <span class="spanWhite">}</span>
</pre>

<h3>
  <a href="#rfce"><code>rfce</code></a>
  <button class="reactCopyBN copyBN" data-index="9">
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
    
  <span class="spanRed">function</span> <span class="spanPurple">$1</span><span class="spanWhite">(</span><span class="spanWhite">)</span> <span class="spanWhite">{</span>
    <span class="spanRed">return</span> <span class="spanBlue2">&lt;</span><span class="spanGreen">div</span><span class="spanBlue2">&gt;</span>$0<span class="spanBlue2">&lt;</span><span class="spanBlue2">/</span><span class="spanGreen">div</span><span class="spanBlue2">&gt;</span>
  <span class="spanWhite">}</span>
  
  <span class="spanRed">export</span> <span class="spanRed">default</span> <span class="spanBlue1">$1</span>
</pre>

<h3>
  <a href="#rafcp"><code>rafcp</code></a>
  <button class="reactCopyBN copyBN" data-index="10">
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
  
  <span class="spanRed">const</span> <span class="spanPurple">$1</span> <span class="spanBlue2">=</span> <span class="spanWhite">(</span><span class="spanBlue1">props</span><span class="spanWhite">)</span> <span class="spanBlue2">=&gt;</span> <span class="spanWhite">{</span>
    <span class="spanRed">return</span> <span class="spanBlue2">&lt;</span><span class="spanGreen">div</span><span class="spanBlue2">&gt;</span>$0<span class="spanBlue2">&lt;</span><span class="spanBlue2">/</span><span class="spanGreen">div</span><span class="spanBlue2">&gt;</span>
  <span class="spanWhite">}</span>
  
  <span class="spanPurple">$1</span><span class="spanWhite">.</span><span class="spanBlue2">propTypes</span> <span class="spanBlue2">=</span> <span class="spanWhite">{</span><span class="spanWhite">}</span>
  
  <span class="spanRed">export</span> <span class="spanRed">default</span> <span class="spanPurple">$1</span>
</pre>

<h3>
  <a href="#rafc"><code>rafc</code></a>
  <button class="reactCopyBN copyBN" data-index="11">
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
  
  <span class="spanRed">export</span> <span class="spanRed">const</span> <span class="spanPurple">$1</span> <span class="spanBlue2">=</span> <span class="spanWhite">(</span><span class="spanWhite">)</span> <span class="spanBlue2">=&gt;</span> <span class="spanWhite">{</span>
    <span class="spanRed">return</span> <span class="spanBlue2">&lt;</span><span class="spanGreen">div</span><span class="spanBlue2">&gt;</span>$0<span class="spanBlue2">&lt;</span><span class="spanBlue2">/</span><span class="spanGreen">div</span><span class="spanBlue2">&gt;</span>
  <span class="spanWhite">}</span>
</pre>

<h3>
  <a href="#rafce"><code>rafce</code></a>
  <button class="reactCopyBN copyBN" data-index="12">
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
  
  <span class="spanRed">const</span> <span class="spanPurple">$1</span> <span class="spanBlue2">=</span> <span class="spanWhite">(</span><span class="spanWhite">)</span> <span class="spanBlue2">=&gt;</span> <span class="spanWhite">{</span>
    <span class="spanRed">return</span> <span class="spanBlue2">&lt;</span><span class="spanGreen">div</span><span class="spanBlue2">&gt;</span>$0<span class="spanBlue2">&lt;</span><span class="spanBlue2">/</span><span class="spanGreen">div</span><span class="spanBlue2">&gt;</span>
  <span class="spanWhite">}</span>
  
  <span class="spanRed">export</span> <span class="spanRed">default</span> <span class="spanPurple">$1</span>
</pre>

<h3>
  <a href="#rmc"><code>rmc</code></a>
  <button class="reactCopyBN copyBN" data-index="13">
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
  <span class="spanRed">import</span> <span class="spanOrange">React</span><span class="spanWhite">,</span> <span class="spanWhite">{</span> <span class="spanBlue1">memo</span> <span class="spanWhite">}</span> <span class="spanRed">from</span> <span class="spanBlue">'react'</span>
  
  <span class="spanRed">export</span> <span class="spanRed">default</span> <span class="spanPurple">memo</span><span class="spanWhite">(</span><span class="spanRed">function</span> <span class="spanPurple">$1</span><span class="spanWhite">(</span><span class="spanWhite">)</span> <span class="spanWhite">{</span>
    <span class="spanRed">return</span> <span class="spanBlue2">&lt;</span><span class="spanGreen">div</span><span class="spanBlue2">&gt;</span>$0<span class="spanBlue2">&lt;</span><span class="spanBlue2">/</span><span class="spanGreen">div</span><span class="spanBlue2">&gt;</span>
  <span class="spanWhite">}</span><span class="spanWhite">)</span>
</pre>

<h3>
  <a href="#rmcp"><code>rmcp</code></a>
  <button class="reactCopyBN copyBN" data-index="14">
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
  <span class="spanRed">import</span> <span class="spanOrange">React</span><span class="spanWhite">,</span> <span class="spanWhite">{</span> <span class="spanBlue1">memo</span> <span class="spanWhite">}</span> <span class="spanRed">from</span> <span class="spanBlue">'react'</span>
  <span class="spanRed">import</span> <span class="spanOrange">PropTypes</span> <span class="spanRed">from</span> <span class="spanBlue">'prop-types'</span>
  
  <span class="spanRed">const</span> <span class="spanBlue1">$1</span> <span class="spanBlue2">=</span> <span class="spanPurple">memo</span><span class="spanWhite">(</span><span class="spanRed">function</span> <span class="spanBlue1">$1</span><span class="spanWhite">(</span><span class="spanBlue1">props</span><span class="spanWhite">)</span> <span class="spanWhite">{</span>
    <span class="spanRed">return</span> <span class="spanBlue2">&lt;</span><span class="spanGreen">div</span><span class="spanBlue2">&gt;</span>$0<span class="spanBlue2">&lt;</span><span class="spanBlue2">/</span><span class="spanGreen">div</span><span class="spanBlue2">&gt;</span>
  <span class="spanWhite">}</span><span class="spanWhite">)</span>
  
  <span class="spanBlue1">$1</span><span class="spanWhite">.</span><span class="spanBlue2">propTypes</span> <span class="spanBlue2">=</span> <span class="spanWhite">{</span><span class="spanWhite">}</span>
  
  <span class="spanRed">export</span> <span class="spanRed">default</span> <span class="spanBlue1">$1</span>
</pre>

<h3>
  <a href="#rcredux"><code>rcredux</code></a>
  <button class="reactCopyBN copyBN" data-index="15">
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
  <span class="spanRed">import</span> <span class="spanOrange">React</span><span class="spanWhite">,</span> <span class="spanWhite">{</span> <span class="spanOrange">Component</span> <span class="spanWhite">}</span> <span class="spanRed">from</span> <span class="spanBlue">'react'</span>
  <span class="spanRed">import</span> <span class="spanWhite">{</span> <span class="spanBlue1">connect</span> <span class="spanWhite">}</span> <span class="spanRed">from</span> <span class="spanBlue">'react-redux'</span>
  
  <span class="spanRed">export</span> <span class="spanRed">class</span> <span class="spanOrange">FileName</span> <span class="spanRed">extends</span> <span class="spanOrange">Component</span> <span class="spanWhite">{</span>
    <span class="spanPurple">render</span><span class="spanWhite">(</span><span class="spanWhite">)</span> <span class="spanWhite">{</span>
      <span class="spanRed">return</span> <span class="spanBlue2">&lt;</span><span class="spanGreen">div</span><span class="spanBlue2">&gt;</span>$4<span class="spanBlue2">&lt;</span><span class="spanBlue2">/</span><span class="spanGreen">div</span><span class="spanBlue2">&gt;</span>
    <span class="spanWhite">}</span>
  <span class="spanWhite">}</span>
  
  <span class="spanRed">const</span> <span class="spanPurple">mapStateToProps</span> <span class="spanBlue2">=</span> <span class="spanWhite">(</span><span class="spanBlue1">state</span><span class="spanWhite">)</span> <span class="spanBlue2">=&gt;</span> <span class="spanWhite">(</span><span class="spanWhite">{</span><span class="spanWhite">}</span><span class="spanWhite">)</span>
  
  <span class="spanRed">const</span> <span class="spanBlue1">mapDispatchToProps</span> <span class="spanBlue2">=</span> <span class="spanWhite">{</span><span class="spanWhite">}</span>
  
  <span class="spanRed">export</span> <span class="spanRed">default</span> <span class="spanPurple">connect</span><span class="spanWhite">(</span><span class="spanPurple">mapStateToProps</span><span class="spanWhite">,</span> <span class="spanBlue1">mapDispatchToProps</span><span class="spanWhite">)</span><span class="spanWhite">(</span><span class="spanOrange">FileName</span><span class="spanWhite">)</span>
</pre>

<h3>
  <a href="#rcreduxp"><code>rcreduxp</code></a>
  <button class="reactCopyBN copyBN" data-index="16">
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
  <span class="spanRed">import</span> <span class="spanOrange">React</span><span class="spanWhite">,</span> <span class="spanWhite">{</span> <span class="spanOrange">Component</span> <span class="spanWhite">}</span> <span class="spanRed">from</span> <span class="spanBlue">'react'</span>
  <span class="spanRed">import</span> <span class="spanOrange">PropTypes</span> <span class="spanRed">from</span> <span class="spanBlue">'prop-types'</span>
  <span class="spanRed">import</span> <span class="spanWhite">{</span> <span class="spanBlue1">connect</span> <span class="spanWhite">}</span> <span class="spanRed">from</span> <span class="spanBlue">'react-redux'</span>
  
  <span class="spanRed">export</span> <span class="spanRed">class</span> <span class="spanOrange">FileName</span> <span class="spanRed">extends</span> <span class="spanOrange">Component</span> <span class="spanWhite">{</span>
    <span class="spanRed">static</span> <span class="spanBlue2">propTypes</span> <span class="spanBlue2">=</span> <span class="spanWhite">{</span>
      <span class="spanBlue2">$2</span>: <span class="spanBlue1">$3</span><span class="spanWhite">,</span>
    <span class="spanWhite">}</span>
  
    <span class="spanPurple">render</span><span class="spanWhite">(</span><span class="spanWhite">)</span> <span class="spanWhite">{</span>
      <span class="spanRed">return</span> <span class="spanBlue2">&lt;</span><span class="spanGreen">div</span><span class="spanBlue2">&gt;</span>$4<span class="spanBlue2">&lt;</span><span class="spanBlue2">/</span><span class="spanGreen">div</span><span class="spanBlue2">&gt;</span>
    <span class="spanWhite">}</span>
  <span class="spanWhite">}</span>
  
  <span class="spanRed">const</span> <span class="spanPurple">mapStateToProps</span> <span class="spanBlue2">=</span> <span class="spanWhite">(</span><span class="spanBlue1">state</span><span class="spanWhite">)</span> <span class="spanBlue2">=&gt;</span> <span class="spanWhite">(</span><span class="spanWhite">{</span><span class="spanWhite">}</span><span class="spanWhite">)</span>
  
  <span class="spanRed">const</span> <span class="spanBlue1">mapDispatchToProps</span> <span class="spanBlue2">=</span> <span class="spanWhite">{</span><span class="spanWhite">}</span>
  
  <span class="spanRed">export</span> <span class="spanRed">default</span> <span class="spanPurple">connect</span><span class="spanWhite">(</span><span class="spanPurple">mapStateToProps</span><span class="spanWhite">,</span> <span class="spanBlue1">mapDispatchToProps</span><span class="spanWhite">)</span><span class="spanWhite">(</span><span class="spanOrange">FileName</span><span class="spanWhite">)</span>
</pre>

<h3>
  <a href="#rfcredux"><code>rfcredux</code></a>
  <button class="reactCopyBN copyBN" data-index="17">
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
  <span class="spanRed">import</span> <span class="spanOrange">React</span><span class="spanWhite">,</span> <span class="spanWhite">{</span> <span class="spanOrange">Component</span> <span class="spanWhite">}</span> <span class="spanRed">from</span> <span class="spanBlue">'react'</span>
  <span class="spanRed">import</span> <span class="spanWhite">{</span> <span class="spanBlue1">connect</span> <span class="spanWhite">}</span> <span class="spanRed">from</span> <span class="spanBlue">'react-redux'</span>
  
  <span class="spanRed">export</span> <span class="spanRed">const</span> <span class="spanOrange">FileName</span> <span class="spanBlue2">=</span> <span class="spanWhite">(</span><span class="spanWhite">)</span> <span class="spanBlue2">=&gt;</span> <span class="spanWhite">{</span>
    <span class="spanRed">return</span> <span class="spanBlue2">&lt;</span><span class="spanGreen">div</span><span class="spanBlue2">&gt;</span>$4<span class="spanBlue2">&lt;</span><span class="spanBlue2">/</span><span class="spanGreen">div</span><span class="spanBlue2">&gt;</span>
  <span class="spanWhite">}</span>
  
  <span class="spanRed">const</span> <span class="spanPurple">mapStateToProps</span> <span class="spanBlue2">=</span> <span class="spanWhite">(</span><span class="spanBlue1">state</span><span class="spanWhite">)</span> <span class="spanBlue2">=&gt;</span> <span class="spanWhite">(</span><span class="spanWhite">{</span><span class="spanWhite">}</span><span class="spanWhite">)</span>
  
  <span class="spanRed">const</span> <span class="spanBlue1">mapDispatchToProps</span> <span class="spanBlue2">=</span> <span class="spanWhite">{</span><span class="spanWhite">}</span>
  
  <span class="spanRed">export</span> <span class="spanRed">default</span> <span class="spanPurple">connect</span><span class="spanWhite">(</span><span class="spanPurple">mapStateToProps</span><span class="spanWhite">,</span> <span class="spanBlue1">mapDispatchToProps</span><span class="spanWhite">)</span><span class="spanWhite">(</span><span class="spanOrange">FileName</span><span class="spanWhite">)</span>
</pre>

<h3>
  <a href="#rfreduxp"><code>rfreduxp</code></a>
  <button class="reactCopyBN copyBN" data-index="18">
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
  <span class="spanRed">import</span> <span class="spanOrange">React</span><span class="spanWhite">,</span> <span class="spanWhite">{</span> <span class="spanOrange">Component</span> <span class="spanWhite">}</span> <span class="spanRed">from</span> <span class="spanBlue">'react'</span>
  <span class="spanRed">import</span> <span class="spanOrange">PropTypes</span> <span class="spanRed">from</span> <span class="spanBlue">'prop-types'</span>
  <span class="spanRed">import</span> <span class="spanWhite">{</span> <span class="spanBlue1">connect</span> <span class="spanWhite">}</span> <span class="spanRed">from</span> <span class="spanBlue">'react-redux'</span>
  
  <span class="spanRed">export</span> <span class="spanRed">const</span> <span class="spanOrange">FileName</span> <span class="spanBlue2">=</span> <span class="spanWhite">(</span><span class="spanWhite">)</span> <span class="spanBlue2">=&gt;</span> <span class="spanWhite">{</span>
    <span class="spanRed">return</span> <span class="spanBlue2">&lt;</span><span class="spanGreen">div</span><span class="spanBlue2">&gt;</span>$4<span class="spanBlue2">&lt;</span><span class="spanBlue2">/</span><span class="spanGreen">div</span><span class="spanBlue2">&gt;</span>
  <span class="spanWhite">}</span>
  
  <span class="spanOrange">FileName</span><span class="spanWhite">.</span><span class="spanBlue2">propTypes</span> <span class="spanBlue2">=</span> <span class="spanWhite">{</span>
    <span class="spanBlue2">$2</span>: <span class="spanBlue1">$3</span><span class="spanWhite">,</span>
  <span class="spanWhite">}</span>
  
  <span class="spanRed">const</span> <span class="spanPurple">mapStateToProps</span> <span class="spanBlue2">=</span> <span class="spanWhite">(</span><span class="spanBlue1">state</span><span class="spanWhite">)</span> <span class="spanBlue2">=&gt;</span> <span class="spanWhite">(</span><span class="spanWhite">{</span><span class="spanWhite">}</span><span class="spanWhite">)</span>
  
  <span class="spanRed">const</span> <span class="spanBlue1">mapDispatchToProps</span> <span class="spanBlue2">=</span> <span class="spanWhite">{</span><span class="spanWhite">}</span>
  
  <span class="spanRed">export</span> <span class="spanRed">default</span> <span class="spanPurple">connect</span><span class="spanWhite">(</span><span class="spanPurple">mapStateToProps</span><span class="spanWhite">,</span> <span class="spanBlue1">mapDispatchToProps</span><span class="spanWhite">)</span><span class="spanWhite">(</span><span class="spanOrange">FileName</span><span class="spanWhite">)</span>
</pre>

<h3>
  <a href="#reduxmap"><code>reduxmap</code></a>
  <button class="reactCopyBN copyBN" data-index="19">
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
  <span class="spanRed">const</span> <span class="spanPurple">mapStateToProps</span> <span class="spanBlue2">=</span> <span class="spanWhite">(</span><span class="spanBlue1">state</span><span class="spanWhite">)</span> <span class="spanBlue2">=&gt;</span> <span class="spanWhite">(</span><span class="spanWhite">{</span><span class="spanWhite">}</span><span class="spanWhite">)</span>
  
  <span class="spanRed">const</span> <span class="spanBlue1">mapDispatchToProps</span> <span class="spanBlue2">=</span> <span class="spanWhite">{</span><span class="spanWhite">}</span>
</pre>
</code>
`

export default function ReactComponents() {
  useEffect(() => {
    const reactCopyBNs = document.querySelectorAll('.reactCopyBN');

    reactCopyBNs.forEach((button, index) => {
      button.addEventListener('click', () => {
        const codeToCopy = copyReactComponents[index];

        navigator.clipboard.writeText(codeToCopy).then(() => {
          toast.success('Copied to clipboard!');
        }).catch((error) => {
          toast.error('Copy failed.', error);
        });
      });
    });
  }, []);

  return (
    <div>
      <Toaster />
      <div dangerouslySetInnerHTML={{ __html: htmlReactComponents }} className='overflow-x-auto' />
    </div>
  );
}
