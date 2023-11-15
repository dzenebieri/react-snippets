import ExtensionInfo from './ExtensionInfo';
import Tables from './tables/Tables';
import Components from './vscode/Components';

export default function Snippets() {
  return (
    <div className="absolute bottom-12 top-12 w-full overflow-y-scroll">
      <ExtensionInfo />
      <Tables />
      <Components />
    </div>
  );
}
