const processSteps = [
  'Raw Stone',
  'Primary Crushing',
  'Secondary Crushing',
  'Screening',
  'Aggregate Sorting',
  'Final Material',
];

export function PlantProcess() {
  return (
    <section id="plant" className="section">
      <div className="container">
        <div className="section-heading center">
          <p className="section-tag">Our Plant</p>
          <h2>Our Stone Crusher Plant</h2>
        </div>

        <div className="process-flow" aria-label="Stone crushing process flow">
          {processSteps.map((step, index) => (
            <div key={step} className="process-step">
              <div className="process-node">
                <span>{index + 1}</span>
              </div>
              <h3>{step}</h3>
              {index < processSteps.length - 1 && <span className="process-arrow" aria-hidden="true">→</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
