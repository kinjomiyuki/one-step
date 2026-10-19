import LpSection from './LpSection';
import { PLANS, PLAN_NOTES } from '../../data/lpContent';

export default function LpPricing() {
  return (
    <LpSection title="料金は、シンプルです。" lead="まずは、無料の初級で、自分に合うか、試してください。">
      <div className="grid gap-5 md:grid-cols-2">
        {PLANS.map((plan) => (
          <div key={plan.name} className="neu-card p-6">
            <h3 className="font-bold mb-1" style={{ color: 'var(--neu-text)' }}>{plan.name}</h3>
            <p className="text-2xl font-bold mb-4" style={{ color: 'var(--neu-text)' }}>{plan.price}</p>
            <ul className="space-y-2 text-sm md:text-base" style={{ color: 'var(--neu-text-muted)' }}>
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
