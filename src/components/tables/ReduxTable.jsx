const htmlReduxTable = `
<table>
  <thead>
    <tr>
      <th align="right">Prefix</th>
      <th>Method</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="right"><code>rxaction→</code></td>
      <td><code>redux action template</code></td>
    </tr>
    <tr>
      <td align="right"><code>rxconst→</code></td>
      <td><code>export const $1 = '$1'</code></td>
    </tr>
    <tr>
      <td align="right"><code>rxreducer→</code></td>
      <td><code>redux reducer template</code></td>
    </tr>
    <tr>
      <td align="right"><code>rxselect→</code></td>
      <td><code>redux selector template</code></td>
    </tr>
    <tr>
      <td align="right"><code>rxslice→</code></td>
      <td><code>redux slice template</code></td>
    </tr>
  </tbody>
</table>
`;

const htmlReduxTableFun = () => {
  return { __html: htmlReduxTable };
};

export default function ReduxTable() {
  return (
    <div>
      <h3>Redux</h3>
      <div dangerouslySetInnerHTML={htmlReduxTableFun()} />
    </div>
  )
}
