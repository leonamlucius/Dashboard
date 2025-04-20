import { FaDollarSign } from "react-icons/fa";
export default function RecentTransctions() {
  return (
    <div className="col-span-12 p-4 rounded border border-stone-300">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="flex items-center gap-1.5 font-medium">
          <FaDollarSign /> Recent Transactions
        </h3>
      </div>
      <table className="w-full table-auto">
        <TableHead />

        <tbody>
          <TableRow
            cusId="#2389"
            sku="234235"
            date="Aug 2nd"
            price="$9.75"
            order={1}
          />
          <TableRow
            cusId="#2390"
            sku="234236"
            date="Aug 3rd"
            price="$12.50"
            order={2}
          />
          <TableRow
            cusId="#2391"
            sku="234237"
            date="Aug 4th"
            price="$15.25"
            order={3}
          />

          <TableRow
            cusId="#2392"
            sku="234238"
            date="Aug 5th"
            price="$7.99"
            order={4}
          />

          <TableRow
            cusId="#2393"
            sku="234239"
            date="Aug 6th"
            price="$22.40"
            order={5}
          />

          <TableRow
            cusId="#2394"
            sku="234240"
            date="Aug 7th"
            price="$18.75"
            order={6}
          />

          <TableRow
            cusId="#2395"
            sku="234241"
            date="Aug 8th"
            price="$5.25"
            order={7}
          />

          <TableRow
            cusId="#2396"
            sku="234242"
            date="Aug 9th"
            price="$30.00"
            order={8}
          />

          <TableRow
            cusId="#2397"
            sku="234243"
            date="Aug 10th"
            price="$14.99"
            order={9}
          />

          <TableRow
            cusId="#2398"
            sku="234244"
            date="Aug 11th"
            price="$27.50"
            order={10}
          />
          <TableRow
            cusId="#2399"
            sku="234245"
            date="Aug 12th"
            price="$8.90"
            order={11}
          />

          <TableRow
            cusId="#2400"
            sku="234246"
            date="Aug 13th"
            price="$16.20"
            order={12}
          />

          <TableRow
            cusId="#2401"
            sku="234247"
            date="Aug 14th"
            price="$11.30"
            order={13}
          />

          <TableRow
            cusId="#2402"
            sku="234248"
            date="Aug 15th"
            price="$24.99"
            order={14}
          />

          <TableRow
            cusId="#2403"
            sku="234249"
            date="Aug 16th"
            price="$5.75"
            order={15}
          />

          <TableRow
            cusId="#2404"
            sku="234250"
            date="Aug 17th"
            price="$19.45"
            order={16}
          />

          <TableRow
            cusId="#2405"
            sku="234251"
            date="Aug 18th"
            price="$13.60"
            order={17}
          />

          

          
        </tbody>
      </table>
    </div>
  );
}
const TableHead = () => {
  return (
    <thead>
      <tr className="text-sm font-normal text-stone-500">
        <th className="text-start p-1.5">Customer ID</th>
        <th className="text-start p-1.5">SKU</th>
        <th className="text-start p-1.5">Date</th>
        <th className="text-start p-1.5">Price</th>
      </tr>
    </thead>
  );
};
const TableRow = ({ cusId, sku, date, price, order }) => {
  return (
    <tr className={order % 2 ? "bg-stone-100 text-sm" : "text-sm"}>
      <td className="p-1.5">
        <a
          href="#"
          className="text-violet-600 underline flex items-center gap-1"
        >
          {cusId}
        </a>
      </td>
      <td className="p-1.5">{sku}</td>
      <td className="p-1.5">{date}</td>
      <td className="p-1.5">{price}</td>
    </tr>
  );
};
