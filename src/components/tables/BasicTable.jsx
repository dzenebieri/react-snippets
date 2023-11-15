const htmlBasicTable = `
<table>
  <thead>
    <tr>
      <th align="right">Prefix</th>
      <th>Method</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="right"><code>imp→</code></td>
      <td><code>import moduleName from 'module'</code></td>
    </tr>
    <tr>
      <td align="right"><code>imn→</code></td>
      <td><code>import 'module'</code></td>
    </tr>
    <tr>
      <td align="right"><code>imd→</code></td>
      <td><code>import { destructuredModule } from 'module'</code></td>
    </tr>
    <tr>
      <td align="right"><code>ime→</code></td>
      <td><code>import * as alias from 'module'</code></td>
    </tr>
    <tr>
      <td align="right"><code>ima→</code></td>
      <td><code>import { originalName as aliasName} from 'module'</code></td>
    </tr>
    <tr>
      <td align="right"><code>exp→</code></td>
      <td><code>export default moduleName</code></td>
    </tr>
    <tr>
      <td align="right"><code>exd→</code></td>
      <td><code>export { destructuredModule } from 'module'</code></td>
    </tr>
    <tr>
      <td align="right"><code>exa→</code></td>
      <td><code>export { originalName as aliasName} from 'module'</code></td>
    </tr>
    <tr>
      <td align="right"><code>enf→</code></td>
      <td><code>export const functionName = (params) =&gt; { }</code></td>
    </tr>
    <tr>
      <td align="right"><code>edf→</code></td>
      <td><code>export default (params) =&gt; { }</code></td>
    </tr>
    <tr>
      <td align="right"><code>ednf→</code></td>
      <td><code>export default function functionName(params) { }</code></td>
    </tr>
    <tr>
      <td align="right"><code>met→</code></td>
      <td><code>methodName = (params) =&gt; { }</code></td>
    </tr>
    <tr>
      <td align="right"><code>fre→</code></td>
      <td><code>arrayName.forEach(element =&gt; { }</code></td>
    </tr>
    <tr>
      <td align="right"><code>fof→</code></td>
      <td><code>for(let itemName of objectName { }</code></td>
    </tr>
    <tr>
      <td align="right"><code>fin→</code></td>
      <td><code>for(let itemName in objectName { }</code></td>
    </tr>
    <tr>
      <td align="right"><code>anfn→</code></td>
      <td><code>(params) =&gt; { }</code></td>
    </tr>
    <tr>
      <td align="right"><code>nfn→</code></td>
      <td><code>const functionName = (params) =&gt; { }</code></td>
    </tr>
    <tr>
      <td align="right"><code>dob→</code></td>
      <td><code>const {propName} = objectToDescruct</code></td>
    </tr>
    <tr>
      <td align="right"><code>dar→</code></td>
      <td><code>const [propName] = arrayToDescruct</code></td>
    </tr>
    <tr>
      <td align="right"><code>sti→</code></td>
      <td><code>setInterval(() =&gt; { }, intervalTime</code></td>
    </tr>
    <tr>
      <td align="right"><code>sto→</code></td>
      <td><code>setTimeout(() =&gt; { }, delayTime</code></td>
    </tr>
    <tr>
      <td align="right"><code>prom→</code></td>
      <td><code>return new Promise((resolve, reject) =&gt; { }</code></td>
    </tr>
    <tr>
      <td align="right"><code>cmmb→</code></td>
      <td><code>comment block</code></td>
    </tr>
    <tr>
      <td align="right"><code>cp→</code></td>
      <td><code>const { } = this.props</code></td>
    </tr>
    <tr>
      <td align="right"><code>cs→</code></td>
      <td><code>const { } = this.state</code></td>
    </tr>
  </tbody>
</table>
`;

const htmlBasicTableFun = () => {
  return { __html: htmlBasicTable };
};

export default function BasicTable() {
  return (
    <div>
      <h3>Basic Methods</h3>
      <div dangerouslySetInnerHTML={htmlBasicTableFun()} />
    </div>
  )
}
