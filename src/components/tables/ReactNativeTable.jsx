const htmlReactNativeTable = `
<table>
  <thead>
    <tr>
      <th align="right">Prefix</th>
      <th>Method</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="right"><code>imrn→</code></td>
      <td><code>import { $1 } from 'react-native'</code></td>
    </tr>
    <tr>
      <td align="right"><code>rnstyle→</code></td>
      <td><code>const styles = StyleSheet.create({})</code></td>
    </tr>
  </tbody>
</table>
`;

const htmlReactNativeTableFun = () => {
  return { __html: htmlReactNativeTable };
};

export default function ReactNativeTable() {
  return (
    <div>
      <h3>React Native</h3>
      <div dangerouslySetInnerHTML={htmlReactNativeTableFun()} />
    </div>
  )
}
