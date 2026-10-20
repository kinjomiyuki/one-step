import LpSection from './LpSection';
import { GREEN_CARD_STYLE, ON_GREEN_TEXT, ON_GREEN_LINE } from './greenCard';
import { PLANS, PLAN_NOTES } from '../../data/lpContent';

export default function LpPricing() {
  return (
    <LpSection title="料金は、シンプルです。" lead="まずは、無料の初級で、自分に合うか、試してください。">
      <div className="grid gap-5 md:grid-cols-2">
        {PLANS.map((plan) => (
          <div key={plan.name} className="neu-card p-6" style={GREEN_CARD_STYLE}>
            <h3 className="font-bold pb-2 mb-3 border-b" style={{ ...ON_GREEN_TEXT, borderColor: ON_GREEN_LINE }}>{plan.name}</h3>
            <p className="text-2xl font-bold mb-4" style={ON_GREEN_TEXT}>{plan.price}</p>
            <ul className="space-y-2 text-sm md:text-base" style={ON_GREEN_TEXT}>
              {plan.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <ul className="mt-6 space-y-1 text-xs md:text-sm text-center" style={{ color: 'var(--neu-text-muted)' }}>
        {PLAN_NOTES.map((note) => <li key={note}>{note}</li>)}
      </ul>
    </LpSection>
  );
}
