import CommonTechniques from "./CommonTechniques";
import BasicTable from "./BasicTable";
import ReactTable from "./ReactTable";
import ReactNativeTable from './ReactNativeTable'
import ReduxTable from './ReduxTable'
import PropTypesTable from './PropTypesTable'
import ConsoleTable from './ConsoleTable'

export default function Tables() {
  return (
    <main className="mx-[48px] max-w-[320px] text-xs md:text-sm md:max-w-none md:flex md:justify-center md:m-0">
      <article>
        <CommonTechniques />
        <BasicTable />
        <ReactTable />
        <ReactNativeTable />
        <ReduxTable />
        <PropTypesTable />
        <ConsoleTable />
      </article >
    </main>
  )
}
