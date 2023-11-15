const htmlCommonTable = `
<table>
  <thead>
    <tr>
      <th align="right">Prefix</th>
      <th>Method</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="right"><code>ime→</code></td>
      <td><code>import * as alias from 'module'</code></td>
    </tr>
    <tr>
      <td align="right"><code>ima→</code></td>
      <td><code>import { originalName as aliasName} from 'module'</code></td>
    </tr>
    <tr>
      <td align="right"><code>enf→</code></td>
      <td><code>export const functionName = (params) => { }</code></td>
    </tr>
    <tr>
      <td align="right"><code>ednf→</code></td>
      <td><code>export default function functionName(params) { }</code></td>
    </tr>
    <tr>
      <td align="right"><code>sti→</code></td>
      <td><code>setInterval(() => { }, intervalTime</code></td>
    </tr>
    <tr>
      <td align="right"><code>sto→</code></td>
      <td><code>setTimeout(() => { }, delayTime</code></td>
    </tr>
    <tr>
      <td align="right"><code>prom→</code></td>
      <td><code>return new Promise((resolve, reject) => { }</code></td>
    </tr>
    <tr>
      <td align="right"><code>imrd→</code></td>
      <td><code>import ReactDOM from 'react-dom'</code></td>
    </tr>
    <tr>
      <td align="right"><code>imrc→</code></td>
      <td><code>import React, { Component } from 'react'</code></td>
    </tr>
    <tr>
      <td align="right"><code>imrr→</code></td>
      <td><code>import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom'</code></td>
    </tr>
    <tr>
      <td align="right"><code>imrse→</code></td>
      <td><code>import React, { useState, useEffect } from 'react'</code></td>
    </tr>
    <tr>
      <td align="right"><code>rcontext→</code></td>
      <td><code>const $1 = React.createContext()</code></td>
    </tr>
    <tr>
      <td align="right"><code>imrn→</code></td>
      <td><code>import { $1 } from 'react-native'</code></td>
    </tr>
    <tr>
      <td align="right"><code>rxslice→</code></td>
      <td><code>redux slice template</code></td>
    </tr>
    <tr>
      <td align="right"><code>ptsr→</code></td>
      <td><code>PropTypes.string.isRequired</code></td>
    </tr>
    <tr>
      <td align="right"><code>clg→</code></td>
      <td><code>console.log('weLove')</code></td>
    </tr>
  </tbody>
</table>
`;

const htmlCommonTableFun = () => {
  return { __html: htmlCommonTable };
};

export default function CommonTechniques() {
  return (
    <div>
      <h3>Common Techniques</h3>
      <div dangerouslySetInnerHTML={htmlCommonTableFun()} className="overflow-x-auto md:overflow-x-hidden" />
    </div>
  )
}
