import Grid from "./Grid";
export default function Article({ name }) {
  return (
    <div className="bg-white rounded-md m-1 font-size ">
      <div className="flex items-center mb-6">
        <div
          className="bg-gradient-to-tr h-9  
       from-slate-200 to-slate-100 text-slate-900 font-medium
       rounded-md
         p-1 m-2 mb-"
        >
          <h1>{`Hello, ${name}!🚀`}</h1>
        </div>
      </div>

      <div className="space-y">
        <Grid />
      </div>
    </div>
  );
}
