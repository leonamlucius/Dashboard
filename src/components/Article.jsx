import Grid from "./Grid";
export default function Article({ name, isSelect}) {
  return (
    <div className="bg-white rounded-md ms-1 me-1  ">
      <div className="flex items-center mb-6">
        <div
          className="bg-gradient-to-tr h-9  
       from-slate-200 to-slate-100 text-slate-900 font-medium
       rounded-md mt-2 mx-4"
        >
          <h1>{`Hello, ${name}!🚀`}</h1>
        </div>
      </div>

      {isSelect?(
        <div className="space-y-6">
        teste
      </div>
      ):(
        <div className="space-y-6">
          <Grid />
      </div>

      )}

      


    </div>
  );
}

