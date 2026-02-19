export default function WorkExcuseComparison() {
  const rows = [
    {
      left: "Issued By A Licensed Healthcare Provider",
      right: "Written By The Employee",
    },
    { left: "Medically Verified", right: "No Medical Validation" },
    {
      left: "Accepted By Employers & HR Departments",
      right: "Often Not Officially Accepted",
    },
    {
      left: "Includes Recovery Timeframe",
      right: "Lacks Professional Guidance",
    },
    {
      left: "Protects Employee Credibility",
      right: "May Require Further Proof",
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto bg-gray-50 border border-gray-100 rounded-xl shadow-sm p-2">
          <div className="max-w-5xl mx-auto bg-white border border-gray-100 rounded-xl shadow-sm p-6 md:p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight">
                <span className="block">
                  <span className="text-primary">Work Excuse Letter</span>{" "}
                  <span className="text-slate-700 font-semibold">
                    Vs Self-Written Note
                  </span>
                </span>
              </h3>
            </div>

            <div className="overflow-hidden rounded-md border border-gray-200">
              <table className="w-full table-fixed text-sm">
                <thead className="bg-[#F4F9F8] border-gray-200 border-b">
                  <tr className="divide-x">
                    <th className="px-4 py-3 text-left ">Work Excuse Letter</th>
                    <th className="px-4 py-3 text-left">
                      Personal Absence Note
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  {rows.map((r) => (
                    <tr key={r.left} className="bg-white">
                      <td className="px-4 py-4 align-top text-sm text-slate-700 border-r border-gray-200">
                        {r.left}
                      </td>
                      <td className="px-4 py-4 align-top text-sm text-muted-foreground">
                        {r.right}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
