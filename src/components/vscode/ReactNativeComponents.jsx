import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const copyReactNativeComponents = [
  `// rnc
  
import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class FileName extends Component {
  render() {
    return (
      <View>
        <Text> $2 </Text>
      </View>
    )
  }
}`,
  `// rnf
  
import React from 'react'
import { View, Text } from 'react-native'

export default function $1() {
  return (
    <View>
      <Text> $2 </Text>
    </View>
  )
}`,
  `// rnfs
  
import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function $1() {
  return (
    <View>
      <Text> $2 </Text>
    </View>
  )
}

const styles = StyleSheet.create({})`,
  `// rnfe
  
import React from 'react'
import { View, Text } from 'react-native'

const $1 = () => {
  return (
    <View>
      <Text> $2 </Text>
    </View>
  )
}

export default $1`,
  `// rnfes
  
import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const $1 = () => {
  return (
    <View>
      <Text> $2 </Text>
    </View>
  )
}

export default $1

const styles = StyleSheet.create({})`,
  `// rncs
  
import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class FileName extends Component {
  render() {
    return (
      <View>
        <Text> $2 </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({})`,
  `// rnce
  
import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class FileName extends Component {
  render() {
    return (
      <View>
        <Text> $2 </Text>
      </View>
    )
  }
}

export default $1`,
];

const htmlReactNativeComponents = `
<code>

<h3><a href="#react-native-components">React Native Components</a></h3>
<h3>
  <a href="#rnc"><code>rnc</code></a>
  <button class="nativeCopyBN copyBN" data-index="20">
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
  <span class="spanRed">import</span> <span class="spanWhite">{</span> <span class="spanOrange">Text</span><span class="spanWhite">,</span> <span class="spanOrange">View</span> <span class="spanWhite">}</span> <span class="spanRed">from</span> <span class="spanBlue">'react-native'</span>

  <span class="spanRed">export</span> <span class="spanRed">default</span> <span class="spanRed">class</span> <span class="spanOrange">FileName</span> <span class="spanRed">extends</span> <span class="spanOrange">Component</span> <span class="spanWhite">{</span>
    <span class="spanPurple">render</span><span class="spanWhite">(</span><span class="spanWhite">)</span> <span class="spanWhite">{</span>
      <span class="spanRed">return</span> <span class="spanWhite">(</span>
        <span class="spanBlue2">&lt;</span><span class="spanGreen">View</span><span class="spanBlue2">&gt;</span>
          <span class="spanBlue2">&lt;</span><span class="spanGreen">Text</span><span class="spanBlue2">&gt;</span> $2 <span class="spanBlue2">&lt;</span><span class="spanBlue2">/</span><span class="spanGreen">Text</span><span class="spanBlue2">&gt;</span>
        <span class="spanBlue2">&lt;</span><span class="spanBlue2">/</span><span class="spanGreen">View</span><span class="spanBlue2">&gt;</span>
      <span class="spanWhite">)</span>
    <span class="spanWhite">}</span>
  <span class="spanWhite">}</span>
</pre>

<h3>
  <a href="#rnf"><code>rnf</code></a>
  <button class="nativeCopyBN copyBN" data-index="21">
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
  <span class="spanRed">import</span> <span class="spanWhite">{</span> <span class="spanOrange">View</span><span class="spanWhite">,</span> <span class="spanOrange">Text</span> <span class="spanWhite">}</span> <span class="spanRed">from</span> <span class="spanBlue">'react-native'</span>

  <span class="spanRed">export</span> <span class="spanRed">default</span> <span class="spanRed">function</span> <span class="spanPurple">$1</span><span class="spanWhite">(</span><span class="spanWhite">)</span> <span class="spanWhite">{</span>
    <span class="spanRed">return</span> <span class="spanWhite">(</span>
      <span class="spanBlue2">&lt;</span><span class="spanGreen">View</span><span class="spanBlue2">&gt;</span>
        <span class="spanBlue2">&lt;</span><span class="spanGreen">Text</span><span class="spanBlue2">&gt;</span> $2 <span class="spanBlue2">&lt;</span><span class="spanBlue2">/</span><span class="spanGreen">Text</span><span class="spanBlue2">&gt;</span>
      <span class="spanBlue2">&lt;</span><span class="spanBlue2">/</span><span class="spanGreen">View</span><span class="spanBlue2">&gt;</span>
    <span class="spanWhite">)</span>
  <span class="spanWhite">}</span>
</pre>

<h3>
  <a href="#rnfs"><code>rnfs</code></a>
  <button class="nativeCopyBN copyBN" data-index="22">
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
  <span class="spanRed">import</span> <span class="spanWhite">{</span> <span class="spanOrange">StyleSheet</span><span class="spanWhite">,</span> <span class="spanOrange">View</span><span class="spanWhite">,</span> <span class="spanOrange">Text</span> <span class="spanWhite">}</span> <span class="spanRed">from</span> <span class="spanBlue">'react-native'</span>

  <span class="spanRed">export</span> <span class="spanRed">default</span> <span class="spanRed">function</span> <span class="spanPurple">$1</span><span class="spanWhite">(</span><span class="spanWhite">)</span> <span class="spanWhite">{</span>
    <span class="spanRed">return</span> <span class="spanWhite">(</span>
      <span class="spanBlue2">&lt;</span><span class="spanGreen">View</span><span class="spanBlue2">&gt;</span>
        <span class="spanBlue2">&lt;</span><span class="spanGreen">Text</span><span class="spanBlue2">&gt;</span> $2 <span class="spanBlue2">&lt;</span><span class="spanBlue2">/</span><span class="spanGreen">Text</span><span class="spanBlue2">&gt;</span>
      <span class="spanBlue2">&lt;</span><span class="spanBlue2">/</span><span class="spanGreen">View</span><span class="spanBlue2">&gt;</span>
    <span class="spanWhite">)</span>
  <span class="spanWhite">}</span>

  <span class="spanRed">const</span> <span class="spanBlue1">styles</span> <span class="spanBlue2">=</span> <span class="spanOrange">StyleSheet</span><span class="spanWhite">.</span><span class="spanPurple">create</span><span class="spanWhite">(</span><span class="spanWhite">{</span><span class="spanWhite">}</span><span class="spanWhite">)</span>
</pre>

<h3>
  <a href="#rnfe"><code>rnfe</code></a>
  <button class="nativeCopyBN copyBN" data-index="23">
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
  <span class="spanRed">import</span> <span class="spanWhite">{</span> <span class="spanOrange">View</span><span class="spanWhite">,</span> <span class="spanOrange">Text</span> <span class="spanWhite">}</span> <span class="spanRed">from</span> <span class="spanBlue">'react-native'</span>

  <span class="spanRed">const</span> <span class="spanPurple">$1</span> <span class="spanBlue2">=</span> <span class="spanWhite">(</span><span class="spanWhite">)</span> <span class="spanBlue2">=&gt;</span> <span class="spanWhite">{</span>
    <span class="spanRed">return</span> <span class="spanWhite">(</span>
      <span class="spanBlue2">&lt;</span><span class="spanGreen">View</span><span class="spanBlue2">&gt;</span>
        <span class="spanBlue2">&lt;</span><span class="spanGreen">Text</span><span class="spanBlue2">&gt;</span> $2 <span class="spanBlue2">&lt;</span><span class="spanBlue2">/</span><span class="spanGreen">Text</span><span class="spanBlue2">&gt;</span>
      <span class="spanBlue2">&lt;</span><span class="spanBlue2">/</span><span class="spanGreen">View</span><span class="spanBlue2">&gt;</span>
    <span class="spanWhite">)</span>
  <span class="spanWhite">}</span>

  <span class="spanRed">export</span> <span class="spanRed">default</span> <span class="spanPurple">$1</span>
</pre>

<h3>
  <a href="#rnfes"><code>rnfes</code></a>
  <button class="nativeCopyBN copyBN" data-index="24">
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
  <span class="spanRed">import</span> <span class="spanWhite">{</span> <span class="spanOrange">StyleSheet</span><span class="spanWhite">,</span> <span class="spanOrange">View</span><span class="spanWhite">,</span> <span class="spanOrange">Text</span> <span class="spanWhite">}</span> <span class="spanRed">from</span> <span class="spanBlue">'react-native'</span>

  <span class="spanRed">const</span> <span class="spanPurple">$1</span> <span class="spanBlue2">=</span> <span class="spanWhite">(</span><span class="spanWhite">)</span> <span class="spanBlue2">=&gt;</span> <span class="spanWhite">{</span>
    <span class="spanRed">return</span> <span class="spanWhite">(</span>
      <span class="spanBlue2">&lt;</span><span class="spanGreen">View</span><span class="spanBlue2">&gt;</span>
        <span class="spanBlue2">&lt;</span><span class="spanGreen">Text</span><span class="spanBlue2">&gt;</span> $2 <span class="spanBlue2">&lt;</span><span class="spanBlue2">/</span><span class="spanGreen">Text</span><span class="spanBlue2">&gt;</span>
      <span class="spanBlue2">&lt;</span><span class="spanBlue2">/</span><span class="spanGreen">View</span><span class="spanBlue2">&gt;</span>
    <span class="spanWhite">)</span>
  <span class="spanWhite">}</span>

  <span class="spanRed">export</span> <span class="spanRed">default</span> <span class="spanPurple">$1</span>

  <span class="spanRed">const</span> <span class="spanBlue1">styles</span> <span class="spanBlue2">=</span> <span class="spanOrange">StyleSheet</span><span class="spanWhite">.</span><span class="spanPurple">create</span><span class="spanWhite">(</span><span class="spanWhite">{</span><span class="spanWhite">}</span><span class="spanWhite">)</span>
</pre>

<h3>
  <a href="#rncs"><code>rncs</code></a>
  <button class="nativeCopyBN copyBN" data-index="25">
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
  <span class="spanRed">import</span> <span class="spanWhite">{</span> <span class="spanOrange">Text</span><span class="spanWhite">,</span> <span class="spanOrange">StyleSheet</span><span class="spanWhite">,</span> <span class="spanOrange">View</span> <span class="spanWhite">}</span> <span class="spanRed">from</span> <span class="spanBlue">'react-native'</span>

  <span class="spanRed">export</span> <span class="spanRed">default</span> <span class="spanRed">class</span> <span class="spanOrange">FileName</span> <span class="spanRed">extends</span> <span class="spanOrange">Component</span> <span class="spanWhite">{</span>
    <span class="spanPurple">render</span><span class="spanWhite">(</span><span class="spanWhite">)</span> <span class="spanWhite">{</span>
      <span class="spanRed">return</span> <span class="spanWhite">(</span>
        <span class="spanBlue2">&lt;</span><span class="spanGreen">View</span><span class="spanBlue2">&gt;</span>
          <span class="spanBlue2">&lt;</span><span class="spanGreen">Text</span><span class="spanBlue2">&gt;</span> $2 <span class="spanBlue2">&lt;</span><span class="spanBlue2">/</span><span class="spanGreen">Text</span><span class="spanBlue2">&gt;</span>
        <span class="spanBlue2">&lt;</span><span class="spanBlue2">/</span><span class="spanGreen">View</span><span class="spanBlue2">&gt;</span>
      <span class="spanWhite">)</span>
    <span class="spanWhite">}</span>
  <span class="spanWhite">}</span>

  <span class="spanRed">const</span> <span class="spanBlue1">styles</span> <span class="spanBlue2">=</span> <span class="spanOrange">StyleSheet</span><span class="spanWhite">.</span><span class="spanPurple">create</span><span class="spanWhite">(</span><span class="spanWhite">{</span><span class="spanWhite">}</span><span class="spanWhite">)</span>
</pre>

<h3>
  <a href="#rnce"><code>rnce</code></a>
  <button class="nativeCopyBN copyBN" data-index="26">
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
  <span class="spanRed">import</span> <span class="spanWhite">{</span> <span class="spanOrange">Text</span><span class="spanWhite">,</span> <span class="spanOrange">View</span> <span class="spanWhite">}</span> <span class="spanRed">from</span> <span class="spanBlue">'react-native'</span>

  <span class="spanRed">export</span> <span class="spanRed">class</span> <span class="spanOrange">FileName</span> <span class="spanRed">extends</span> <span class="spanOrange">Component</span> <span class="spanWhite">{</span>
    <span class="spanPurple">render</span><span class="spanWhite">(</span><span class="spanWhite">)</span> <span class="spanWhite">{</span>
      <span class="spanRed">return</span> <span class="spanWhite">(</span>
        <span class="spanBlue2">&lt;</span><span class="spanGreen">View</span><span class="spanBlue2">&gt;</span>
          <span class="spanBlue2">&lt;</span><span class="spanGreen">Text</span><span class="spanBlue2">&gt;</span> $2 <span class="spanBlue2">&lt;</span><span class="spanBlue2">/</span><span class="spanGreen">Text</span><span class="spanBlue2">&gt;</span>
        <span class="spanBlue2">&lt;</span><span class="spanBlue2">/</span><span class="spanGreen">View</span><span class="spanBlue2">&gt;</span>
      <span class="spanWhite">)</span>
    <span class="spanWhite">}</span>
  <span class="spanWhite">}</span>

  <span class="spanRed">export</span> <span class="spanRed">default</span> <span class="spanBlue1">$1</span>
</pre>
</code>
`

export default function ReactNativeComponents() {
  useEffect(() => {
    const nativeCopyBNs = document.querySelectorAll('.nativeCopyBN');

    nativeCopyBNs.forEach((button, index) => {
      button.addEventListener('click', () => {
        const codeToCopy = copyReactNativeComponents[index];

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
      <div dangerouslySetInnerHTML={{ __html: htmlReactNativeComponents }} className='overflow-x-auto' />
    </div>
  );
}
