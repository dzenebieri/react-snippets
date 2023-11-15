import Copy from './copy/Copy';
import extensionIcon from '../imgs/extensionIcon.png';

export default function ExtensionInfo() {
  const installationCommand = 'ext install dsznajder.es7-react-js-snippets';

  return (
    <div className="mx-[48px] mt-4 flex max-w-xs flex-col items-center justify-center gap-4 md:max-w-full">
      <div className="flex flex-col items-center justify-center gap-2">
        <img src={extensionIcon} alt="React Logo" className="w-[128px]" />
        <span className="text-[21px] font-semibold md:text-[26px]">
          ES7+ React/Redux/React-Native snippets
        </span>
        <p className="max-w-[472px] text-sm">
          Extensions for React, React-Native and Redux in JS/TS with ES7+
          syntax. Customizable. Built-in integration with prettier.
        </p>
      </div>

      <div>
        <p className="mt-4 text-sm md:flex md:justify-center">
          Paste the following command to Terminal and press
          <b className="ml-1 rounded-[3px] bg-zinc-900 py-[1px]">Enter</b>:
        </p>
        <code className="my-3.5 flex items-center gap-4 rounded-[3px] bg-zinc-900 p-4 text-xs">
          {' '}
          <span className="text-[rgba(255,255,255,0.87)]">
            {installationCommand}
          </span>{' '}
          <Copy textToCopy={installationCommand} />{' '}
        </code>
        <a
          href="https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets"
          target="_blank"
          rel="noreferrer"
          className="flex justify-center text-xs text-[#0078d4] underline md:text-sm"
        >
          Download from Visual Studio Marketplace
        </a>
      </div>

      <div className="flex flex-col items-center">
        <h2 className="mt-4">Search command</h2>
        <p className="my-3.5 max-w-2xl">
          You can search through snippets with <code>ES7 snippet search</code>{' '}
          command which can be run with <code>CMD + Shift + R</code> (for macOS)
          or <code>CTRL + ALT + R</code> (for Windows &amp; Linux).
        </p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <h3>React Hooks</h3>
        <p>
          Hooks from{' '}
          <a
            href="https://legacy.reactjs.org/docs/hooks-reference.html"
            target="_blank"
            rel="noreferrer"
            className="text-[#2f81f7] underline"
          >
            official docs
          </a>{' '}
          are added with hook name as prefix.
        </p>
      </div>
    </div>
  );
}
