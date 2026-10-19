import LpHeader from './LpHeader';
import LpHero from './LpHero';
import LpProblems from './LpProblems';
import LpSolution from './LpSolution';
import LpFeatures from './LpFeatures';
import LpCourses from './LpCourses';
import LpSteps from './LpSteps';
import LpPricing from './LpPricing';
import LpFaq from './LpFaq';
import LpFinalCta from './LpFinalCta';
import LpFooter from './LpFooter';

export default function LpPage() {
  return (
    <div style={{ background: 'var(--neu-bg)', minHeight: '100vh' }}>
      <LpHeader />
      <main>
        <LpHero />
        <LpProblems />
        <LpSolution />
        <LpFeatures />
        <LpCourses />
        <LpSteps />
        <LpPricing />
        <LpFaq />
        <LpFinalCta />
      </main>
      <LpFooter />
    </div>
  );
}
