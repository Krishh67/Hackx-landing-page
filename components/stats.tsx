const stats = [
  { value: "20 days", label: "saved on daily builds", company: "TechFlow" },
  { value: "98%", label: "faster time to market", company: "DataSync" },
  { value: "300%", label: "increase in productivity", company: "CloudBase" },
  { value: "6×", label: "faster to build + deploy", company: "DevOps Co" },
]

export function Stats() {
  return (
    <section className="border-y border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center lg:text-left">
              <p className="text-2xl font-bold text-foreground lg:text-3xl">
                <span className="text-foreground">{stat.value}</span>{" "}
                <span className="text-muted-foreground font-normal text-lg lg:text-xl">{stat.label}</span>
              </p>
              <p className="mt-2 text-sm font-medium text-muted-foreground tracking-wider uppercase">{stat.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
