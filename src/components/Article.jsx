import Grid from "./Grid";
export default function Article({name}) {
  return (
    <div className="bg-white w-screen rounded-md m-2.5 font-size">
      <div className="border-b-1 flex m-2">
        <div
          className="bg-gradient-to-tr h-9  
       from-slate-200 to-slate-100 text-slate-900 font-medium
       rounded-md
         p-1 m-2 mb-"
        >
          <h1>{`Hello, ${name}!🚀`}</h1>
        </div>
      </div>
      <Grid/>
    </div>
    
  );
}
