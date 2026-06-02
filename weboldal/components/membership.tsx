import { Button } from "./ui/button"
import { Check } from "lucide-react"
const memberships = [
     {
    name: "Alkalmi",
    price: "0",
    period: "Ft/hó",
    description: "Tökéletes azoknak, akik csak néha teniszeznek",
    features: [
      "Pályafoglalás normál áron",
      "Hozzáférés a klubházhoz",
      "Online foglalási rendszer",
      "Felszerelés bérlés",
    ],
    cta: "Kezdés",
    featured: false,
  },
  {
    name: "Prémium",
    price: "25.000",
    period: "Ft/hó",
    description: "A rendszeres teniszezőknek ajánljuk",
    features: [
      "20% kedvezmény pályafoglalásra",
      "Havi 2 ingyenes edzés",
      "Prioritásos foglalás",
      "Vendégbelépő havonta 1x",
      "Öltöző és szekrény",
      "Klubrendezvényekre meghívás",
    ],
    cta: "Választom",
    featured: true,
  },
  {
    name: "Elite",
    price: "50.000",
    period: "Ft/hó",
    description: "A profi teniszezők és lelkes amatőrök számára",
    features: [
      "Korlátlan pályahasználat",
      "Heti személyi edzés",
      "VIP öltöző",
      "Masszázs és wellness",
      "Versenyre felkészítés",
      "Exkluzív események",
      "Személyes account manager",
    ],
    cta: "Kapcsolatfelvétel",
    featured: false,
  },
]

export default function Membership() {
    return (
        <section id="membership" className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-widest text-sm mb-2">Tagság</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            Válaszd ki a számodra ideális csomagot
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Rugalmas tagsági lehetőségek minden igényre. Kezdd el még ma és tapasztald 
            meg a prémium tenisz élményt.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {memberships.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 ${
                plan.featured
                  ? "bg-primary text-primary-foreground scale-105 shadow-xl"
                  : "bg-card text-card-foreground border border-border"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-medium px-4 py-1 rounded-full">
                  Legnépszerűbb
                </div>
              )}
              <div className="mb-6">
                <h3 className={`font-serif text-2xl mb-2 ${plan.featured ? "text-primary-foreground" : "text-foreground"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
              </div>
              <div className="mb-6">
                <span className={`text-4xl font-serif ${plan.featured ? "text-primary-foreground" : "text-foreground"}`}>
                  {plan.price}
                </span>
                <span className={plan.featured ? "text-primary-foreground/80" : "text-muted-foreground"}>
                  {" "}{plan.period}
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${plan.featured ? "text-primary-foreground" : "text-primary"}`} />
                    <span className={`text-sm ${plan.featured ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full rounded-full ${
                  plan.featured
                    ? "bg-background text-foreground hover:bg-background/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
    )
}