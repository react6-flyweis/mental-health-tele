import { StarIcon } from "lucide-react";

export default function SuccessStoriesSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
          <h2 className="flex gap-1 text-3xl md:text-4xl font-semibold leading-tight">
            <span className="block text-primary">Success</span>
            <span className="block text-slate-900">Stories</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {[
            {
              name: "John Deo",
              country: "United States",
              rating: "5.0",
              text: "I Wanted A Natural Solution Without Harsh Side Effects, And This Capsule Delivered! Within A Week, I Felt More Energized, And My Stamina Improved. Definitely Worth It!",
            },
            {
              name: "Kianna Curtis",
              country: "United States",
              rating: "5.0",
              text: "This Product Has Completely Changed My Intimate Life. I Feel More Passionate And Confident, And The Effects Last For Hours. I Never Expected Such A Huge Difference!",
            },
            {
              name: "Corey Bergson",
              country: "United States",
              rating: "5.0",
              text: "I Was Struggling With Low Energy And Performance Issues, But After Using [Product Name] For A Month, I Feel Like I'm In My 20s Again! My Confidence Is Back",
            },
          ].map((s, i) => (
            <div key={i} className="bg-slate-50 rounded-xl p-4 h-full">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-sm font-semibold text-slate-700">
                  {s.name.split(" ")[0][0]}
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">
                    {s.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {s.country}
                  </div>
                </div>
                <div className="ml-auto flex items-center gap-1 text-sm text-amber-500">
                  <span className="font-semibold text-slate-900">
                    {s.rating}
                  </span>
                  <StarIcon className="w-4 h-4 fill-current" />
                </div>
              </div>

              <p className="text-xs text-muted-foreground mt-4 leading-relaxed overflow-hidden">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
