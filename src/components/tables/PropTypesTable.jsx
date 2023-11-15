const htmlPropTypesTable = `
<table>
  <thead>
    <tr>
      <th align="right">Prefix</th>
      <th>Method</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="right"><code>pta→</code></td>
      <td><code>PropTypes.array</code></td>
    </tr>
    <tr>
      <td align="right"><code>ptar→</code></td>
      <td><code>PropTypes.array.isRequired</code></td>
    </tr>
    <tr>
      <td align="right"><code>ptb→</code></td>
      <td><code>PropTypes.bool</code></td>
    </tr>
    <tr>
      <td align="right"><code>ptbr→</code></td>
      <td><code>PropTypes.bool.isRequired</code></td>
    </tr>
    <tr>
      <td align="right"><code>ptf→</code></td>
      <td><code>PropTypes.func</code></td>
    </tr>
    <tr>
      <td align="right"><code>ptfr→</code></td>
      <td><code>PropTypes.func.isRequired</code></td>
    </tr>
    <tr>
      <td align="right"><code>ptn→</code></td>
      <td><code>PropTypes.number</code></td>
    </tr>
    <tr>
      <td align="right"><code>ptnr→</code></td>
      <td><code>PropTypes.number.isRequired</code></td>
    </tr>
    <tr>
      <td align="right"><code>pto→</code></td>
      <td><code>PropTypes.object</code></td>
    </tr>
    <tr>
      <td align="right"><code>ptor→</code></td>
      <td><code>PropTypes.object.isRequired</code></td>
    </tr>
    <tr>
      <td align="right"><code>pts→</code></td>
      <td><code>PropTypes.string</code></td>
    </tr>
    <tr>
      <td align="right"><code>ptsr→</code></td>
      <td><code>PropTypes.string.isRequired</code></td>
    </tr>
    <tr>
      <td align="right"><code>ptnd→</code></td>
      <td><code>PropTypes.node</code></td>
    </tr>
    <tr>
      <td align="right"><code>ptndr→</code></td>
      <td><code>PropTypes.node.isRequired</code></td>
    </tr>
    <tr>
      <td align="right"><code>ptel→</code></td>
      <td><code>PropTypes.element</code></td>
    </tr>
    <tr>
      <td align="right"><code>ptelr→</code></td>
      <td><code>PropTypes.element.isRequired</code></td>
    </tr>
    <tr>
      <td align="right"><code>pti→</code></td>
      <td><code>PropTypes.instanceOf(name)</code></td>
    </tr>
    <tr>
      <td align="right"><code>ptir→</code></td>
      <td><code>PropTypes.instanceOf(name).isRequired</code></td>
    </tr>
    <tr>
      <td align="right"><code>pte→</code></td>
      <td><code>PropTypes.oneOf([name])</code></td>
    </tr>
    <tr>
      <td align="right"><code>pter→</code></td>
      <td><code>PropTypes.oneOf([name]).isRequired</code></td>
    </tr>
    <tr>
      <td align="right"><code>ptet→</code></td>
      <td><code>PropTypes.oneOfType([name])</code></td>
    </tr>
    <tr>
      <td align="right"><code>ptetr→</code></td>
      <td><code>PropTypes.oneOfType([name]).isRequired</code></td>
    </tr>
    <tr>
      <td align="right"><code>ptao→</code></td>
      <td><code>PropTypes.arrayOf(name)</code></td>
    </tr>
    <tr>
      <td align="right"><code>ptaor→</code></td>
      <td><code>PropTypes.arrayOf(name).isRequired</code></td>
    </tr>
    <tr>
      <td align="right"><code>ptoo→</code></td>
      <td><code>PropTypes.objectOf(name)</code></td>
    </tr>
    <tr>
      <td align="right"><code>ptoor→</code></td>
      <td><code>PropTypes.objectOf(name).isRequired</code></td>
    </tr>
    <tr>
      <td align="right"><code>ptsh→</code></td>
      <td><code>PropTypes.shape({ })</code></td>
    </tr>
    <tr>
      <td align="right"><code>ptshr→</code></td>
      <td><code>PropTypes.shape({ }).isRequired</code></td>
    </tr>
    <tr>
      <td align="right"><code>ptany→</code></td>
      <td><code>PropTypes.any</code></td>
    </tr>
    <tr>
      <td align="right"><code>ptypes→</code></td>
      <td><code>static propTypes = {}</code></td>
    </tr>
  </tbody>
</table>
`;

const htmlPropTypesTableFun = () => {
  return { __html: htmlPropTypesTable };
};

export default function PropTypesTable() {
  return (
    <div>
      <h3>PropTypes</h3>
      <div dangerouslySetInnerHTML={htmlPropTypesTableFun()} className="overflow-x-auto" />
    </div>
  )
}
