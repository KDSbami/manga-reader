import { React} from "react";;

function devComponent({children, title}) {
  return (
    <div className="m-2 p-1 border rounded-xl border-foreground-accent">
      <div className=" mb-2 w-full h-30px border-b border-foreground-accent p-1 font-thin text-base font-sm">
        {title}
      </div>
        {children}
    </div>
  );
}

export default devComponent;
