import LpHeader from './LpHeader';
import LpHero from './LpHero';
import LpScrollStage from './LpScrollStage';
import useReducedMotion from './useReducedMotion';
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
  // 「動きを減らす」設定の人には、動かない、従来のヒーローを出す
  const reducedMotion = useReducedMotion();
  return (
    <div className="lp-dark" style={{ minHeight: '100vh' }}>
      <LpHeader />
      <main>
        {reducedMotion ? <LpHero /> : <LpScrollStage />}
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
