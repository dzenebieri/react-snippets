import ExtensionInfo from "./extensionInfo"
import Tables from "./tables/Tables"
import Components from "./vscode/Components"

export default function Snippets() {
  return (
    <div className="overflow-y-scroll top-12 bottom-12 absolute w-full">
      <ExtensionInfo />
      <Tables />
      <Components />
    </div>
  )
}
