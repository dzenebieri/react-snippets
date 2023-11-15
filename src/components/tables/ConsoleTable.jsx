const htmlConsoleTable = `
<table>
  <thead>
    <tr>
      <th>Prefix</th>
      <th>Method</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>clg→</code></td>
      <td><code>console.log(object)</code></td>
    </tr>
    <tr>
      <td><code>clo→</code></td>
      <td><code>console.log(\`object\`, object)</code></td>
    </tr>
    <tr>
      <td><code>clj→</code></td>
      <td><code>console.log(\`object\`, JSON.stringify(object, null, 2))</code></td>
    </tr>
    <tr>
      <td><code>ctm→</code></td>
      <td><code>console.time(\`timeId\`)</code></td>
    </tr>
    <tr>
      <td><code>cte→</code></td>
      <td><code>console.timeEnd(\`timeId\`)</code></td>
    </tr>
    <tr>
      <td><code>cas→</code></td>
      <td><code>console.assert(expression,object)</code></td>
    </tr>
    <tr>
      <td><code>ccl→</code></td>
      <td><code>console.clear()</code></td>
    </tr>
    <tr>
      <td><code>cco→</code></td>
      <td><code>console.count(label)</code></td>
    </tr>
    <tr>
      <td><code>cdi→</code></td>
      <td><code>console.dir</code></td>
    </tr>
    <tr>
      <td><code>cer→</code></td>
      <td><code>console.error(object)</code></td>
    </tr>
    <tr>
      <td><code>cgr→</code></td>
      <td><code>console.group(label)</code></td>
    </tr>
    <tr>
      <td><code>cge→</code></td>
      <td><code>console.groupEnd()</code></td>
    </tr>
    <tr>
      <td><code>ctr→</code></td>
      <td><code>console.trace(object)</code></td>
    </tr>
    <tr>
      <td><code>cwa→</code></td>
      <td><code>console.warn</code></td>
    </tr>
    <tr>
      <td><code>cin→</code></td>
      <td><code>console.info</code></td>
    </tr>
  </tbody>
</table>
`;

const htmlConsoleTableFun = () => {
  return { __html: htmlConsoleTable };
};

export default function ConsoleTable() {
  return (
    <div>
      <h3>Console</h3>
      <div dangerouslySetInnerHTML={htmlConsoleTableFun()} className="overflow-x-auto" />
    </div>
  )
}
