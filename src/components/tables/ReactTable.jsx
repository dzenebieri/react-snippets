const htmlReactTable = `
<table>
  <thead>
    <tr>
      <th align="right">Prefix</th>
      <th>Method</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="right"><code>imr→</code></td>
      <td><code>import React from 'react'</code></td>
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
      <td align="right"><code>imrpc→</code></td>
      <td><code>import React, { PureComponent } from 'react'</code></td>
    </tr>
    <tr>
      <td align="right"><code>imrm→</code></td>
      <td><code>import React, { memo } from 'react'</code></td>
    </tr>
    <tr>
      <td align="right"><code>imrr→</code></td>
      <td><code>import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom'</code></td>
    </tr>
    <tr>
      <td align="right"><code>imbr→</code></td>
      <td><code>import { BrowserRouter as Router} from 'react-router-dom'</code></td>
    </tr>
    <tr>
      <td align="right"><code>imbrc→</code></td>
      <td><code>import { Route, Switch, NavLink, Link } from react-router-dom'</code></td>
    </tr>
    <tr>
      <td align="right"><code>imbrr→</code></td>
      <td><code>import { Route } from 'react-router-dom'</code></td>
    </tr>
    <tr>
      <td align="right"><code>imbrs→</code></td>
      <td><code>import { Switch } from 'react-router-dom'</code></td>
    </tr>
    <tr>
      <td align="right"><code>imbrl→</code></td>
      <td><code>import { Link } from 'react-router-dom'</code></td>
    </tr>
    <tr>
      <td align="right"><code>imbrnl→</code></td>
      <td><code>import { NavLink } from 'react-router-dom'</code></td>
    </tr>
    <tr>
      <td align="right"><code>imrs→</code></td>
      <td><code>import React, { useState } from 'react'</code></td>
    </tr>
    <tr>
      <td align="right"><code>imrse→</code></td>
      <td><code>import React, { useState, useEffect } from 'react'</code></td>
    </tr>
    <tr>
      <td align="right"><code>redux→</code></td>
      <td><code>import { connect } from 'react-redux'</code></td>
    </tr>
    <tr>
      <td align="right"><code>est→</code></td>
      <td><code>this.state = { }</code></td>
    </tr>
    <tr>
      <td align="right"><code>cdm→</code></td>
      <td><code>componentDidMount = () =&gt; { }</code></td>
    </tr>
    <tr>
      <td align="right"><code>scu→</code></td>
      <td><code>shouldComponentUpdate = (nextProps, nextState) =&gt; { }</code></td>
    </tr>
    <tr>
      <td align="right"><code>cdup→</code></td>
      <td><code>componentDidUpdate = (prevProps, prevState) =&gt; { }</code></td>
    </tr>
    <tr>
      <td align="right"><code>cwun→</code></td>
      <td><code>componentWillUnmount = () =&gt; { }</code></td>
    </tr>
    <tr>
      <td align="right"><code>gdsfp→</code></td>
      <td><code>static getDerivedStateFromProps(nextProps, prevState) { }</code></td>
    </tr>
    <tr>
      <td align="right"><code>gsbu→</code></td>
      <td><code>getSnapshotBeforeUpdate = (prevProps, prevState) =&gt; { }</code></td>
    </tr>
    <tr>
      <td align="right"><code>sst→</code></td>
      <td><code>this.setState({ })</code></td>
    </tr>
    <tr>
      <td align="right"><code>ssf→</code></td>
      <td><code>this.setState((state, props) =&gt; return { })</code></td>
    </tr>
    <tr>
      <td align="right"><code>props→</code></td>
      <td><code>this.props.propName</code></td>
    </tr>
    <tr>
      <td align="right"><code>state→</code></td>
      <td><code>this.state.stateName</code></td>
    </tr>
    <tr>
      <td align="right"><code>rcontext→</code></td>
      <td><code>const $1 = React.createContext()</code></td>
    </tr>
    <tr>
      <td align="right"><code>cref→</code></td>
      <td><code>this.$1Ref = React.createRef()</code></td>
    </tr>
    <tr>
      <td align="right"><code>fref→</code></td>
      <td><code>const ref = React.createRef()</code></td>
    </tr>
    <tr>
      <td align="right"><code>bnd→</code></td>
      <td><code>this.methodName = this.methodName.bind(this)</code></td>
    </tr>
  </tbody>
</table>
`;

const htmlReactTableFun = () => {
  return { __html: htmlReactTable };
};

export default function ReactTable() {
  return (
    <div>
      <h3>React</h3>
      <div dangerouslySetInnerHTML={htmlReactTableFun()} className="overflow-x-auto" />
    </div>
  )
}
