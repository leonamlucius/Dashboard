import Grid from "./Grid";
import Statistics from "./Statistics";
import Users from "./Users";

function render(isSelect){

  switch (isSelect) {
    case 1:
      return <Grid />
    case 2:
      return <Statistics/>
    case 3:
      return <Users/>
      
  }
};

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
      </div >

      {render(isSelect)}

      
      {/* {isSelect?(
        <div className="space-y-6">
          <Statistics/>
      </div>
      ):(
        <div className="space-y-6">
          <Grid />
      </div>

      )} */}

      


    </div>
  );
}

