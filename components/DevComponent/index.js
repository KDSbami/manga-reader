import { React} from "react";;

function devComponent({children, title}) {
  return (
    <div className="m-2 p-1 border rounded-xl border-foreground">
      <div className=" mb-1 w-full h-30px border-b border-foreground p-1 font-thin text-base font-sm">
        {title}
      </div>
        {children}
    </div>
  );
}

export default devComponent;
